import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";
import { DatabaseSync } from "node:sqlite";
import express from "express";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import pg from "pg";

const root = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === "production" || process.argv.includes("--production");
const isVercel = process.env.VERCEL === "1";
const databasePath = path.resolve(process.env.DATABASE_PATH || path.join(root, "data", "inquiries.sqlite"));
const postgresPool = process.env.DATABASE_URL
  ? new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: true } : undefined,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    })
  : null;
const mongoClient = !postgresPool && process.env.MONGODB_URI
  ? new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
      maxPoolSize: 10,
    })
  : null;
const mongoDatabaseName = process.env.MONGODB_DATABASE || "endloops";
const mongoDatabase = mongoClient?.db(mongoDatabaseName) || null;
const mongoInquiries = mongoDatabase?.collection("inquiries") || null;
const allowedInterests = new Set([
  "End-to-end solutions",
  "Standalone tools",
  "Budget review",
  "Escrow audit",
  "Financial audit",
  "Interim audit",
  "Property-management budgeting",
  "Purchase-order extraction",
  "Vouching automation",
  "Expense working automation",
  "Financial report review",
  "Tender verification",
  "Reconciliation",
  "Other",
]);
const rateLimits = new Map();
const rateLimitWindowMs = 60 * 60 * 1000;
const rateLimitMax = 10;

const sqlite = postgresPool || mongoClient || isVercel ? null : (() => {
  fs.mkdirSync(path.dirname(databasePath), { recursive: true });
  const database = new DatabaseSync(databasePath);
  database.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA busy_timeout = 5000;
    CREATE TABLE IF NOT EXISTS inquiries (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      work_email TEXT NOT NULL,
      company TEXT NOT NULL,
      role TEXT NOT NULL,
      area_of_interest TEXT NOT NULL,
      message TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      email_status TEXT NOT NULL DEFAULT 'not_configured',
      email_error TEXT
    );
    CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries(created_at DESC);
  `);
  return database;
})();

async function initializeStorage() {
  if (postgresPool) {
    await postgresPool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id TEXT PRIMARY KEY,
        full_name TEXT NOT NULL,
        work_email TEXT NOT NULL,
        company TEXT NOT NULL,
        role TEXT NOT NULL,
        area_of_interest TEXT NOT NULL,
        message TEXT NOT NULL DEFAULT '',
        created_at TIMESTAMPTZ NOT NULL,
        email_status TEXT NOT NULL DEFAULT 'not_configured',
        email_error TEXT
      )
    `);
    await postgresPool.query("CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries(created_at DESC)");
    return;
  }
  if (mongoClient) {
    await mongoClient.connect();
    await mongoInquiries.createIndex({ id: 1 }, { unique: true });
    await mongoInquiries.createIndex({ created_at: -1 });
  }
}

await initializeStorage();

async function insertInquiry(id, fields, createdAt) {
  const values = [id, fields.fullName, fields.workEmail, fields.company, fields.role, fields.areaOfInterest, fields.message, createdAt];
  if (postgresPool) {
    await postgresPool.query(`
      INSERT INTO inquiries (id, full_name, work_email, company, role, area_of_interest, message, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, values);
    return;
  }
  if (mongoInquiries) {
    await mongoInquiries.insertOne({
      id,
      full_name: fields.fullName,
      work_email: fields.workEmail,
      company: fields.company,
      role: fields.role,
      area_of_interest: fields.areaOfInterest,
      message: fields.message,
      created_at: new Date(createdAt),
      email_status: "not_configured",
      email_error: null,
    });
    return;
  }
  sqlite.prepare(`
    INSERT INTO inquiries (id, full_name, work_email, company, role, area_of_interest, message, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(...values);
}

async function getInquiry(id) {
  if (postgresPool) {
    const result = await postgresPool.query("SELECT * FROM inquiries WHERE id = $1", [id]);
    return result.rows[0];
  }
  if (mongoInquiries) return mongoInquiries.findOne({ id }, { projection: { _id: 0 } });
  return sqlite.prepare("SELECT * FROM inquiries WHERE id = ?").get(id);
}

async function updateEmailStatus(status, error, id) {
  if (postgresPool) {
    await postgresPool.query("UPDATE inquiries SET email_status = $1, email_error = $2 WHERE id = $3", [status, error, id]);
    return;
  }
  if (mongoInquiries) {
    await mongoInquiries.updateOne({ id }, { $set: { email_status: status, email_error: error } });
    return;
  }
  sqlite.prepare("UPDATE inquiries SET email_status = ?, email_error = ? WHERE id = ?").run(status, error, id);
}

async function listInquiries(limit, offset) {
  const query = `
    SELECT id, full_name AS "fullName", work_email AS "workEmail", company, role,
           area_of_interest AS "areaOfInterest", message, created_at AS "createdAt",
           email_status AS "emailStatus", email_error AS "emailError"
    FROM inquiries ORDER BY created_at DESC
  `;
  if (postgresPool) {
    const result = await postgresPool.query(`${query} LIMIT $1 OFFSET $2`, [limit, offset]);
    return result.rows;
  }
  if (mongoInquiries) {
    return mongoInquiries.find({}, {
      projection: {
        _id: 0,
        id: 1,
        full_name: 1,
        work_email: 1,
        company: 1,
        role: 1,
        area_of_interest: 1,
        message: 1,
        created_at: 1,
        email_status: 1,
        email_error: 1,
      },
    })
      .sort({ created_at: -1 })
      .skip(offset)
      .limit(limit)
      .map((inquiry) => ({
        id: inquiry.id,
        fullName: inquiry.full_name,
        workEmail: inquiry.work_email,
        company: inquiry.company,
        role: inquiry.role,
        areaOfInterest: inquiry.area_of_interest,
        message: inquiry.message,
        createdAt: inquiry.created_at,
        emailStatus: inquiry.email_status,
        emailError: inquiry.email_error,
      }))
      .toArray();
  }
  return sqlite.prepare(`${query} LIMIT ? OFFSET ?`).all(limit, offset);
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
  });
}

const mailTransport = createTransporter();
const asyncHandler = (handler) => (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next);

function normalizeInquiry(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;

  const fields = {
    fullName: typeof body.fullName === "string" ? body.fullName.trim() : "",
    workEmail: typeof body.workEmail === "string" ? body.workEmail.trim().toLowerCase() : "",
    company: typeof body.company === "string" ? body.company.trim() : "",
    role: typeof body.role === "string" ? body.role.trim() : "",
    areaOfInterest: typeof body.areaOfInterest === "string" ? body.areaOfInterest.trim() : "",
    message: typeof body.message === "string" ? body.message.trim() : "",
  };
  const errors = {};

  for (const [field, maxLength] of [["fullName", 120], ["company", 160], ["role", 120]]) {
    if (!fields[field]) errors[field] = "This field is required.";
    else if (fields[field].length > maxLength) errors[field] = `Must be ${maxLength} characters or fewer.`;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.workEmail) || fields.workEmail.length > 254) {
    errors.workEmail = "Enter a valid email address.";
  }
  if (!allowedInterests.has(fields.areaOfInterest)) errors.areaOfInterest = "Select a valid area of interest.";
  if (fields.message.length > 5000) errors.message = "Must be 5000 characters or fewer.";

  return Object.keys(errors).length ? { errors } : { fields };
}

function isRateLimited(req, res, next) {
  const now = Date.now();
  for (const [ip, record] of rateLimits) {
    if (record.resetAt <= now) rateLimits.delete(ip);
  }

  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const record = rateLimits.get(ip);
  if (record && record.count >= rateLimitMax) {
    res.set("Retry-After", String(Math.ceil((record.resetAt - now) / 1000)));
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  rateLimits.set(ip, record
    ? { ...record, count: record.count + 1 }
    : { count: 1, resetAt: now + rateLimitWindowMs });
  next();
}

function requireAdmin(req, res, next) {
  const configuredKey = process.env.ADMIN_API_KEY;
  const providedKey = req.get("authorization")?.replace(/^Bearer\s+/i, "") || "";
  if (!configuredKey) return res.status(503).json({ error: "Admin access is not configured." });
  const expected = Buffer.from(configuredKey);
  const provided = Buffer.from(providedKey);
  if (expected.length !== provided.length || !crypto.timingSafeEqual(expected, provided)) {
    return res.status(401).json({ error: "Unauthorized." });
  }
  next();
}

async function sendInquiryNotification(inquiry) {
  if (!mailTransport) return { status: "not_configured", error: null };
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.SMTP_FROM || process.env.SMTP_USER;
  if (!recipient) return { status: "not_configured", error: null };

  try {
    await mailTransport.sendMail({
      from: sender,
      to: recipient,
      replyTo: inquiry.work_email,
      subject: `New Endloops demo request: ${inquiry.area_of_interest}`,
      text: [
        "A new demo request was submitted on Endloops.",
        "",
        `Name: ${inquiry.full_name}`,
        `Email: ${inquiry.work_email}`,
        `Company: ${inquiry.company}`,
        `Role: ${inquiry.role}`,
        `Area of interest: ${inquiry.area_of_interest}`,
        `Message: ${inquiry.message || "(not provided)"}`,
        `Request ID: ${inquiry.id}`,
        `Received: ${inquiry.created_at}`,
      ].join("\n"),
    });
    await updateEmailStatus("sent", null, inquiry.id);
    return { status: "sent", error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message.slice(0, 500) : "Email delivery failed.";
    await updateEmailStatus("failed", message, inquiry.id);
    console.error(`Email notification failed for inquiry ${inquiry.id}:`, message);
    return { status: "failed", error: message };
  }
}

app.disable("x-powered-by");
app.set("trust proxy", process.env.TRUST_PROXY === "true" ? 1 : false);
app.use((_req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  });
  if (process.env.APP_URL?.startsWith("https://")) {
    res.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  next();
});
app.use(express.json({ limit: "16kb", strict: true }));

app.get("/api/health", asyncHandler(async (_req, res) => {
  try {
    if (postgresPool) await postgresPool.query("SELECT 1");
    else if (mongoClient) await mongoDatabase.command({ ping: 1 });
    else sqlite.prepare("SELECT 1").get();
    res.json({
      status: "ok",
      storage: postgresPool ? "postgresql" : mongoClient ? "mongodb" : "sqlite",
      email: mailTransport && process.env.CONTACT_EMAIL ? "configured" : "not_configured",
    });
  } catch {
    res.status(503).json({ status: "unavailable" });
  }
}));

app.post("/api/inquiries", isRateLimited, asyncHandler(async (req, res) => {
  const result = normalizeInquiry(req.body);
  if (!result) return res.status(400).json({ error: "A valid JSON request body is required." });
  if (result.errors) return res.status(400).json({ error: "Please correct the highlighted fields.", fields: result.errors });

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const inquiry = { id, ...result.fields, created_at: createdAt };

  try {
    await insertInquiry(id, result.fields, createdAt);
  } catch (error) {
    console.error("Could not save an inquiry:", error);
    return res.status(503).json({ error: "We could not save your request. Please try again shortly." });
  }

  const email = await sendInquiryNotification(await getInquiry(id));
  res.status(201).json({ id, received: true, emailNotification: email.status });
}));

app.get("/api/admin/inquiries", requireAdmin, asyncHandler(async (req, res) => {
  const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 50, 1), 100);
  const offset = Math.max(Number.parseInt(req.query.offset, 10) || 0, 0);
  res.json({ inquiries: await listInquiries(limit, offset), limit, offset });
}));

app.post("/api/admin/inquiries/:id/resend", requireAdmin, asyncHandler(async (req, res) => {
  const inquiry = await getInquiry(req.params.id);
  if (!inquiry) return res.status(404).json({ error: "Inquiry not found." });
  const email = await sendInquiryNotification(inquiry);
  const status = email.status === "failed" ? 502 : email.status === "not_configured" ? 503 : 200;
  res.status(status).json({ id: inquiry.id, emailNotification: email.status });
}));

app.use((error, _req, res, _next) => {
  if (error?.type === "entity.parse.failed") {
    return res.status(400).json({ error: "The request body must contain valid JSON." });
  }
  if (error?.type === "entity.too.large") {
    return res.status(413).json({ error: "The request body is too large." });
  }
  console.error("Request failed:", error);
  res.status(500).json({ error: "An unexpected server error occurred." });
});

if (!isVercel && isProduction) {
  const distPath = path.join(root, "dist");
  if (!fs.existsSync(path.join(distPath, "index.html"))) {
    throw new Error("Production build not found. Run `npm run build` first.");
  }
  app.use(express.static(distPath, { maxAge: "1y", index: false, immutable: true }));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(distPath, "index.html"));
  });
} else if (!isVercel) {
  const { createServer } = await import("vite");
  const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
  app.use(vite.middlewares);
}

export default app;

if (!isVercel) {
  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Endloops ${isProduction ? "production" : "development"} server listening on http://localhost:${port}`);
    if (!mailTransport || !process.env.CONTACT_EMAIL) {
      console.warn("Email notifications are disabled; configure SMTP_* and CONTACT_EMAIL to enable them.");
    }
  });

  function shutdown() {
    server.close(() => {
      if (sqlite) sqlite.close();
      if (postgresPool) postgresPool.end().finally(() => process.exit(0));
      else if (mongoClient) mongoClient.close().finally(() => process.exit(0));
      else process.exit(0);
    });
  }

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}
