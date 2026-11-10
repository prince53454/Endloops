export interface WorkflowStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  role: 'Software Automation' | 'Professional Review & Sign-Off';
  details: string[];
  systemAction: string;
  humanAction: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Upload or Connect Documents',
    subtitle: 'High-volume intake across formats',
    description: 'Invoices, bank statements, purchase orders, contracts, and general ledgers enter the system via secure file upload or direct ERP connectors.',
    role: 'Software Automation',
    details: [
      'Accepts standard PDF, Excel, CSV, scanned documents, and images',
      'Batch processes hundreds of documents in a single queue',
      'Preserves original cryptographic document hashes for audit trails'
    ],
    systemAction: 'Document ingestion, categorization, and integrity validation',
    humanAction: 'Define target engagement parameters or upload batch files'
  },
  {
    number: '02',
    title: 'Extract & Structure Information',
    subtitle: 'From unstructured documents to normalized records',
    description: 'Proprietary financial extraction models locate header metadata, multi-line item tables, tax breakdowns, and terms—normalizing them into structured datasets.',
    role: 'Software Automation',
    details: [
      'High-precision optical character recognition tuned for financial tables',
      'Field-level confidence scoring for every extracted number',
      'Normalizes disparate date, currency, and tax conventions into unified standards'
    ],
    systemAction: 'Field extraction, mathematical cross-footing, and confidence scoring',
    humanAction: 'Zero manual transcription needed'
  },
  {
    number: '03',
    title: 'Compare, Match & Apply Rules',
    subtitle: 'Deterministic verification against policy and ledgers',
    description: 'Extracted figures are cross-referenced across documents: matching purchase orders to supplier invoices, or bank records to general ledger entries.',
    role: 'Software Automation',
    details: [
      'Two-way and three-way document matching (PO - GRN - Invoice)',
      'Verification against regulatory rules, statutory limits, and budget thresholds',
      'Calculation of variances, percentage deviations, and tax rate classifications'
    ],
    systemAction: 'Ledger matching, rule execution, and boundary checks',
    humanAction: 'Configure tolerance limits (e.g., ±0.05 currency rounding tolerance)'
  },
  {
    number: '04',
    title: 'Flag Exceptions & Prepare Outputs',
    subtitle: 'Clean schedules ready for scrutiny',
    description: 'Rather than requiring human inspection of every compliant line, the software isolates only items requiring scrutiny: mismatched totals, missing attachments, or unauthorized spikes.',
    role: 'Software Automation',
    details: [
      'Pre-assembles lead schedules, working papers, and audit work sheets',
      'Highlights outliers with exact clickable jump-links to source vouchers',
      'Generates automated reconciliation journals for review'
    ],
    systemAction: 'Work paper compilation and exception queue synthesis',
    humanAction: 'Receive an organized exception queue rather than raw data chaos'
  },
  {
    number: '05',
    title: 'Professional Reviews, Decides & Signs Off',
    subtitle: 'The human remains in complete control',
    description: 'The qualified accountant, auditor, or controller applies professional skepticism, inspects flagged items, documents adjustments, and provides formal sign-off.',
    role: 'Professional Review & Sign-Off',
    details: [
      'Professional exercises judgment where contextual nuance is required',
      'Approve, reject, or annotate exceptions with full audit log retention',
      'Formal sign-off and release of certified reports or ledger postings'
    ],
    systemAction: 'Preserves timestamped sign-off logs and exports finalized deliverables',
    humanAction: 'Professional analysis, client advisory, and final regulatory approval'
  }
];
