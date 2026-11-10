export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    category: 'Operational Control',
    question: 'Does Endloops make financial decisions autonomously?',
    answer: 'No. Endloops strictly adheres to the principle that software prepares the work, while qualified professionals review and decide. The software ingests, extracts, cross-checks, and compiles working schedules, isolating discrepancies into clear exception queues. The professional maintains absolute authority over approvals, adjustments, and final sign-offs.'
  },
  {
    category: 'System Integration',
    question: 'How does Endloops receive documents and data from our existing tools?',
    answer: 'Endloops supports both direct bulk document uploads (PDFs, multi-sheet workbooks, scans, CSV exports) and structured data ingestion from standard ERP and accounting general ledgers. Because our extraction engines are trained on real financial formats, you do not need to pre-format or rename invoices or contracts before uploading.'
  },
  {
    category: 'Exceptions & Edge Cases',
    question: 'What happens when a document is damaged, handwritten, or ambiguous?',
    answer: 'Every extracted data point carries a deterministic confidence score. When a document features poor scan quality, handwritten annotations, or unclear totals, the system does not guess. It routes that specific line directly to the reviewer with a high-resolution snippet of the source document alongside the field for rapid human verification.'
  },
  {
    category: 'Product Suitability',
    question: 'What is the difference between End-to-end solutions and Standalone tools?',
    answer: 'End-to-end solutions run an entire multi-stage financial service lifecycle from start to finish—such as completing an entire Escrow Audit or formulating a comprehensive Property Service Charge Budget. Standalone tools solve a single, high-frequency task—such as extracting line items from purchase orders or matching multi-thousand line bank reconciliations—and can be plugged into your existing workflow independently.'
  },
  {
    category: 'Implementation & Onboarding',
    question: 'How long does it take for an audit or accounting team to adopt Endloops?',
    answer: 'Standalone tools can typically be used within days because they require minimal setup: teams simply upload their batches and review the generated schedules. End-to-end solutions are tailored during onboarding to match your firm’s specific chart of accounts, lead schedule templates, and regulatory reporting conventions.'
  },
  {
    category: 'Firm Origin',
    question: 'Why was Endloops created within an accounting firm?',
    answer: 'Endloops was founded out of the technology department of Alkazim, an accounting and audit practice in Dubai. Having handled real audits, property escrow accounts, and tax schedules firsthand, our engineers understand the exact operational pain points, regulatory nuances, and audit standards that generic software vendors routinely miss.'
  }
];
