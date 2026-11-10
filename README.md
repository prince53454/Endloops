# Endloops — Automation for Financial Professionals

A production-quality marketing website for **Endloops**, an automation company created from the technology department of **Alkazim**, an accounting and audit firm based in Dubai.

> **Live Site:** [https://ais-pre-tgwg6ir37txulkgvxdcbp5-162610510281.asia-southeast1.run.app](https://ais-pre-tgwg6ir37txulkgvxdcbp5-162610510281.asia-southeast1.run.app)

---

## 💡 Core Message & Philosophy

> **“Software prepares the work. Professionals decide.”**
>
> “Endloops automates repetitive financial work so accountants, auditors, finance teams, and property-management companies can focus on judgement, exceptions, and clients.”

---

## 🛠️ Tech Stack

- **Framework:** React 19 + JavaScript (JSX)
- **Bundler:** Vite 8
- **Backend:** Express 4, MongoDB or PostgreSQL (SQLite local fallback), SMTP email notifications
- **Styling:** Tailwind CSS v4 with custom architectural tokens (`@theme`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Animations:** Motion (`motion/react`)
- **Icons:** Lucide React
- **Deployment:** Vercel-ready / Cloud Run

---

## ✨ Features

- **Flagship Interactive Preview:** *“From documents to decisions”* — an operational preview where users can switch between financial documents (Tax Invoice with tolerance exception, Purchase Order with 3-way match, Escrow Bank Deposit) and test extraction, rule checks, and human sign-off.
- **Product Categorization:**
  - **End-to-End Solutions:** Complete software running entire financial workflows from start to finish (*Budget review*, *Escrow audit*, *Financial audit*, *Interim audit*, *Budget preparation for property-management companies*).
  - **Standalone Tools:** Focused, modular utilities (*Purchase-order extraction*, *Vouching automation*, *Expense working automation*, *Financial report review*, *Tender verification*, *Reconciliation*).
- **Interactive 5-Step Operating Stepper:** Stage-by-stage walkthrough of document intake, field extraction, deterministic matching, exception flagging, and professional sign-off.
- **Comparison Table & Categorized Tabs:** Filter standalone tools by *All tools*, *Document processing*, *Review and assurance*, *Reconciliation*, and *Property and procurement*.
- **Comprehensive FAQ Accordion:** Answering questions on document formats, bulk document volume, exceptions, and professional review.
- **Contact & Demo Request Form:** Accessible client- and server-side validation, persistent SQLite storage, protected inquiry inbox, and optional SMTP notifications.
- **Zero Hallucinated Metrics:** Grounded in Alkazim's real domain roots in Dubai, with transparent maturity labels (*In use*, *Expanding suite*) and zero fake logos, testimonials, or awards.

---

## 📁 Project Structure

```text
src/
  assets/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    ui/
      Button.jsx
      SectionHeading.jsx
      Card.jsx
      Badge.jsx
      FormField.jsx
      Logo.jsx
      WorkflowDemo.jsx
  sections/
    Hero.jsx
    ProductCategories.jsx
    Workflow.jsx
    Capabilities.jsx
    Audience.jsx
    CTA.jsx
  pages/
    Home.jsx
    Solutions.jsx
    Tools.jsx
    HowItWorks.jsx
    About.jsx
    Contact.jsx
  data/
    navigation.js
    solutions.js
    tools.js
    faqs.js
  App.jsx
  main.jsx
  index.css
server.js
```

---

## 🚀 Local Development Instructions

### Prerequisites
- Node.js 22.13+
- npm or bun

### 1. Installation

```bash
# Clone the repository
git clone <repo-url>
cd endloops-website

# Install dependencies
npm install --legacy-peer-deps
```

### 2. Run Locally

```bash
# Start the React/Vite site and Express API on port 3000
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

The contact form writes accepted inquiries to `data/inquiries.sqlite`. Set `PORT` or `DATABASE_PATH` to override the defaults.

### Contact form backend

The API validates every field and stores a request before returning success. It uses PostgreSQL when `DATABASE_URL` is set, MongoDB when `MONGODB_URI` is set, and falls back to a local SQLite database for development. Email alerts are sent when valid SMTP settings are configured; if delivery fails, the inquiry remains saved and the UI reports that email notification needs attention.

Copy `.env.example` to `.env` and configure:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` to enable email.
- `CONTACT_EMAIL` to choose the inbox receiving new inquiries.
- `SMTP_FROM` (optional) to set the sender shown on notifications.
- `ADMIN_API_KEY` to protect the inquiry inbox.
- `DATABASE_URL` to use PostgreSQL in production; `DATABASE_SSL=true` enables certificate-verified TLS.
- `MONGODB_URI` and (optionally) `MONGODB_DATABASE` to use MongoDB instead of PostgreSQL.
- `DATABASE_PATH` (optional) to select the local SQLite file location when PostgreSQL is not configured.
- `TRUST_PROXY=true` only when deployed behind a trusted reverse proxy.

The private inbox is available at `GET /api/admin/inquiries` with `Authorization: Bearer <ADMIN_API_KEY>`. Use `?limit=50&offset=0` for pagination. Failed email alerts can be retried with `POST /api/admin/inquiries/:id/resend`.

The production server serves both the built frontend and API:

```bash
npm run build
npm start
```

### Deploy to Vercel

The static site and `/api/*` endpoints deploy together. Add `MONGODB_URI` and
`ADMIN_API_KEY` as Vercel Production environment variables before relying on
inquiry submissions; serverless local SQLite storage is intentionally disabled.
Email notifications are optional and remain disabled unless SMTP settings are
configured. Then deploy with `vercel --prod`.

Use a managed PostgreSQL or MongoDB database for production deployments, especially when running multiple instances. SQLite is intended for local development or a single instance with a durable, private volume. SMTP credentials, database connection strings, and `ADMIN_API_KEY` must be configured through the deployment platform's secret manager; the repository does not contain production secrets.

---

## 📦 Build Instructions

```bash
# Check JavaScript syntax
npm run lint

# Build production bundle
npm run build

# Run backend and production frontend integration tests
npm test

# Build and preview the full production app (frontend + API)
npm run preview
```

---

## ☁️ Deployment Instructions

### Vercel Deployment (Zero-Config)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com), import the project.
3. Vercel automatically detects the Vite React framework:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

---

## 🎨 Design Decisions

- **Color Discipline:** White and clean canvas ground (`#F8FAFC`), deep authoritative dark navy (`#0B132B`) for headings and body text, anchored by emerald (`#006C4A`) and teal (`#0D9488`), with subtle blue and purple accents.
- **Anti-AI Slop:** No generic floating 3D spheres, neon glows, or fake cockpit scoreboards. Mathematical hairline dividers (`1px solid #E2E8F0`) and tabular numeric lining figures (`tabular-nums`) reflect audit-grade discipline.
- **Human Authority:** The message *“Software prepares the work. Professionals decide.”* is reinforced at every step of the journey.
- **Accessibility:** Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), visible focus states (`focus-visible:ring-2`), proper ARIA labels, and `prefers-reduced-motion` compliance.

---

## 🤖 AI Use Disclosure

“AI tools were used to support ideation, copy drafting, component scaffolding, and code review. All final design, content, implementation, and quality decisions were reviewed and made by me.”
