import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { after, before, test } from "node:test";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "endloops-contact-test-"));
const adminKey = "test-admin-api-key";
let serverProcess;
let baseUrl;
let smtpServer;
let smtpPort;
const receivedEmails = [];

async function startFakeSmtpServer() {
  smtpServer = net.createServer((socket) => {
    let input = "";
    let message = "";
    let receivingMessage = false;
    socket.write("220 localhost ESMTP\r\n");

    socket.on("data", (chunk) => {
      input += chunk.toString();
      let lineEnd = input.indexOf("\r\n");
      while (lineEnd !== -1) {
        const line = input.slice(0, lineEnd);
        input = input.slice(lineEnd + 2);

        if (receivingMessage) {
          if (line === ".") {
            receivingMessage = false;
            receivedEmails.push(message);
            message = "";
            socket.write("250 Message accepted\r\n");
          } else {
            message += `${line.replace(/^\.\./, ".")}\r\n`;
          }
        } else if (/^(EHLO|HELO)\s/i.test(line)) {
          socket.write("250-localhost\r\n250-AUTH PLAIN LOGIN\r\n250 SIZE 1000000\r\n");
        } else if (/^AUTH\s/i.test(line)) {
          if (/^AUTH LOGIN/i.test(line)) socket.write("334 VXNlcm5hbWU6\r\n");
          else socket.write("235 Authentication successful\r\n");
        } else if (line === "VGVzdHVzZXI=") {
          socket.write("334 UGFzc3dvcmQ6\r\n");
        } else if (line === "dGVzdHBhc3M=") {
          socket.write("235 Authentication successful\r\n");
        } else if (/^(MAIL FROM|RCPT TO):/i.test(line)) {
          socket.write("250 Accepted\r\n");
        } else if (/^DATA$/i.test(line)) {
          receivingMessage = true;
          socket.write("354 End data with <CR><LF>.<CR><LF>\r\n");
        } else if (/^QUIT$/i.test(line)) {
          socket.write("221 Bye\r\n");
          socket.end();
        } else {
          socket.write("250 OK\r\n");
        }

        lineEnd = input.indexOf("\r\n");
      }
    });
  });

  smtpServer.listen(0, "127.0.0.1");
  await once(smtpServer, "listening");
  smtpPort = smtpServer.address().port;
}

async function getFreePort() {
  const listener = net.createServer();
  listener.listen(0, "127.0.0.1");
  await once(listener, "listening");
  const { port } = listener.address();
  await new Promise((resolve, reject) => listener.close((error) => error ? reject(error) : resolve()));
  return port;
}

before(async () => {
  await startFakeSmtpServer();
  const port = await getFreePort();
  baseUrl = `http://127.0.0.1:${port}`;
  serverProcess = spawn(process.execPath, [path.join(root, "server.js"), "--production"], {
    cwd: root,
    env: {
      ...process.env,
      NODE_ENV: "production",
      PORT: String(port),
      DATABASE_PATH: path.join(tempDir, "inquiries.sqlite"),
      DATABASE_URL: "",
      MONGODB_URI: "",
      ADMIN_API_KEY: adminKey,
      SMTP_HOST: "127.0.0.1",
      SMTP_PORT: String(smtpPort),
      SMTP_SECURE: "false",
      SMTP_USER: "testuser",
      SMTP_PASS: "testpass",
      CONTACT_EMAIL: "contact@example.com",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let startupOutput = "";
  serverProcess.stderr.on("data", (chunk) => { startupOutput += chunk.toString(); });
  serverProcess.stdout.on("data", (chunk) => { startupOutput += chunk.toString(); });

  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (serverProcess.exitCode !== null) throw new Error(`Test server exited during startup:\n${startupOutput}`);
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error(`Test server did not become ready:\n${startupOutput}`);
});

after(async () => {
  if (serverProcess && serverProcess.exitCode === null) {
    serverProcess.kill("SIGTERM");
    await once(serverProcess, "exit");
  }
  if (smtpServer) {
    smtpServer.close();
    await once(smtpServer, "close");
  }
  fs.rmSync(tempDir, { recursive: true, force: true });
});

test("health endpoint reports available storage and optional email status", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.deepEqual(await response.json(), {
    status: "ok",
    storage: "sqlite",
    email: "configured",
  });
});

test("API rejects incomplete and invalid inquiries", async () => {
  const response = await fetch(`${baseUrl}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName: "Ada", workEmail: "not-an-email" }),
  });
  const result = await response.json();
  assert.equal(response.status, 400);
  assert.equal(result.error, "Please correct the highlighted fields.");
  assert.ok(result.fields.workEmail);
  assert.ok(result.fields.company);
});

test("API rejects malformed JSON without crashing", async () => {
  const response = await fetch(`${baseUrl}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{invalid-json",
  });
  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: "The request body must contain valid JSON." });
});

test("valid inquiry is durably stored and available only through the protected inbox", async () => {
  const inquiry = {
    fullName: "Ada Lovelace",
    workEmail: "ada@example.com",
    company: "Analytical Engines Ltd",
    role: "Finance Director",
    areaOfInterest: "Financial audit",
    message: "Please arrange a workflow demo.",
  };
  const submitted = await fetch(`${baseUrl}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inquiry),
  });
  const receipt = await submitted.json();
  assert.equal(submitted.status, 201);
  assert.equal(receipt.received, true);
  assert.equal(receipt.emailNotification, "sent");
  assert.ok(receipt.id);

  const unauthorized = await fetch(`${baseUrl}/api/admin/inquiries`);
  assert.equal(unauthorized.status, 401);

  const inbox = await fetch(`${baseUrl}/api/admin/inquiries`, {
    headers: { Authorization: `Bearer ${adminKey}` },
  });
  assert.equal(inbox.status, 200);
  const { inquiries } = await inbox.json();
  assert.equal(inquiries.length, 1);
  assert.equal(inquiries[0].id, receipt.id);
  assert.equal(inquiries[0].fullName, inquiry.fullName);
  assert.equal(inquiries[0].workEmail, inquiry.workEmail);
  assert.equal(inquiries[0].areaOfInterest, inquiry.areaOfInterest);
  assert.equal(inquiries[0].emailStatus, "sent");
  assert.equal(receivedEmails.length, 1);
  assert.match(receivedEmails[0], /New Endloops demo request: Financial audit/);
  assert.match(receivedEmails[0], /ada@example\.com/);
});

test("production server serves the built application and client-side routes", async () => {
  const response = await fetch(`${baseUrl}/solutions`);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /Endloops \| Automation for Financial Professionals/);
});
