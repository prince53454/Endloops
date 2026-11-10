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

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
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
- **Accessible Contact & Demo Request Form:** Complete field validation, accessible inline errors (`aria-describedby`), and local confirmation state (*“Request received. We’ll be in touch.”*).
- **Zero Hallucinated Metrics:** Grounded in Alkazim's real domain roots in Dubai, with transparent maturity labels (*In use*, *Expanding suite*) and zero fake logos, testimonials, or awards.

---

## 📁 Project Structure

```text
src/
  assets/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      Card.tsx
      Badge.tsx
      FormField.tsx
      Logo.tsx
      WorkflowDemo.tsx
  sections/
    Hero.tsx
    ProductCategories.tsx
    Workflow.tsx
    Capabilities.tsx
    Audience.tsx
    CTA.tsx
  pages/
    Home.tsx
    Solutions.tsx
    Tools.tsx
    HowItWorks.tsx
    About.tsx
    Contact.tsx
  data/
    navigation.ts
    solutions.ts
    tools.ts
    faqs.ts
  App.tsx
  main.tsx
  index.css
```

---

## 🚀 Local Development Instructions

### Prerequisites
- Node.js 18+
- npm or bun

### 1. Installation

```bash
# Clone the repository
git clone <repo-url>
cd endloops-website

# Install dependencies
npm install
```

### 2. Run Locally

```bash
# Start development server on port 3000
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build Instructions

```bash
# Check TypeScript types
npm run lint

# Build production bundle
npm run build

# Preview production build locally
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
