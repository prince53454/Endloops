export interface StandaloneTool {
  id: string;
  name: string;
  category: 'Document processing' | 'Review and assurance' | 'Reconciliation' | 'Property and procurement';
  status: 'In use' | 'Expanding suite';
  purpose: string;
  problem: string;
  inputs: string[];
  automatedOutput: string[];
  professionalReviews: string[];
  idealUser: string;
  tablePurpose: string;
  tableInput: string;
  tableOutput: string;
  tableRole: string;
}

export const TOOLS: StandaloneTool[] = [
  {
    id: 'po-extraction',
    name: 'Purchase-order extraction',
    category: 'Document processing',
    status: 'In use',
    purpose: 'Extract key details from purchase orders.',
    problem: 'Manually reviewing purchase orders is repetitive and time-consuming.',
    inputs: [
      'Purchase orders',
      'Supporting documents'
    ],
    automatedOutput: [
      'Structured purchase-order data ready for review.',
      'Field-level confidence scoring with direct document cross-reference'
    ],
    professionalReviews: [
      'Review extracted details and approve exceptions.'
    ],
    idealUser: 'Accounts Payable Clerks, Procurement Specialists, and Bookkeepers',
    tablePurpose: 'Extract purchase-order details',
    tableInput: 'Purchase orders',
    tableOutput: 'Structured data',
    tableRole: 'Review and approve'
  },
  {
    id: 'vouching-automation',
    name: 'Vouching automation',
    category: 'Review and assurance',
    status: 'In use',
    purpose: 'Match supporting documents to financial records.',
    problem: 'Vouching requires repeated comparison between transactions and supporting evidence.',
    inputs: [
      'Ledger data',
      'Invoices',
      'Receipts',
      'Supporting documents'
    ],
    automatedOutput: [
      'Matched records, exceptions, and review-ready working papers.',
      'Audit lead schedule with automated transaction hashes'
    ],
    professionalReviews: [
      'Review matches, investigate exceptions, and conclude.'
    ],
    idealUser: 'Audit Associates, Senior Auditors, and Compliance Officers',
    tablePurpose: 'Match transactions to evidence',
    tableInput: 'Ledger and documents',
    tableOutput: 'Matches and exceptions',
    tableRole: 'Investigate and conclude'
  },
  {
    id: 'expense-working',
    name: 'Expense working automation',
    category: 'Review and assurance',
    status: 'In use',
    purpose: 'Structure and prepare expense-related working papers.',
    problem: 'Expense reviews involve repeated categorisation, checking, and documentation.',
    inputs: [
      'Expense data',
      'Invoices',
      'Receipts',
      'Policies or rules'
    ],
    automatedOutput: [
      'Structured expense workings and exception flags.',
      'Amortization schedules and tax classification schedules'
    ],
    professionalReviews: [
      'Review exceptions and approve the final output.'
    ],
    idealUser: 'Financial Accountants, Senior Bookkeepers, and Month-End Controllers',
    tablePurpose: 'Prepare expense workings',
    tableInput: 'Expenses and receipts',
    tableOutput: 'Workings and exceptions',
    tableRole: 'Review and approve'
  },
  {
    id: 'financial-report-review',
    name: 'Financial report review',
    category: 'Review and assurance',
    status: 'Expanding suite',
    purpose: 'Support review of financial reports.',
    problem: 'Financial report review requires checking figures, consistency, and supporting detail.',
    inputs: [
      'Financial reports',
      'Supporting schedules',
      'Underlying data'
    ],
    automatedOutput: [
      'Review-ready reports with highlighted areas for attention.',
      'Cross-casting discrepancy and note consistency registers'
    ],
    professionalReviews: [
      'Review findings, assess exceptions, and make decisions.'
    ],
    idealUser: 'Audit Quality Reviewers, Technical Partners, and CFOs',
    tablePurpose: 'Support report review',
    tableInput: 'Reports and schedules',
    tableOutput: 'Review-ready output',
    tableRole: 'Review and decide'
  },
  {
    id: 'tender-verification',
    name: 'Tender verification',
    category: 'Property and procurement',
    status: 'Expanding suite',
    purpose: 'Check tender documentation against required requirements.',
    problem: 'Tender verification involves checking many documents against consistent requirements.',
    inputs: [
      'Tender documents',
      'Requirements',
      'Supporting evidence'
    ],
    automatedOutput: [
      'Structured verification results and exception flags.',
      'Side-by-side contractor rate dispersion analysis'
    ],
    professionalReviews: [
      'Review exceptions and make the final assessment.'
    ],
    idealUser: 'Quantity Surveyors, Procurement Committees, and Commercial Directors',
    tablePurpose: 'Check tender requirements',
    tableInput: 'Tender documents',
    tableOutput: 'Verification results',
    tableRole: 'Assess and decide'
  },
  {
    id: 'reconciliation-engine',
    name: 'Reconciliation',
    category: 'Reconciliation',
    status: 'In use',
    purpose: 'Compare and reconcile financial records.',
    problem: 'Reconciliations require repeated matching between datasets and investigation of differences.',
    inputs: [
      'Ledgers',
      'Statements',
      'Transaction data',
      'Supporting records'
    ],
    automatedOutput: [
      'Matched records, unmatched items, and exception lists.',
      'Reconciliation summary report with variance aging'
    ],
    professionalReviews: [
      'Review differences, investigate exceptions, and approve the reconciliation.'
    ],
    idealUser: 'Treasury Teams, Revenue Accountants, and Reconciliation Specialists',
    tablePurpose: 'Match financial records',
    tableInput: 'Ledgers and statements',
    tableOutput: 'Matches and exceptions',
    tableRole: 'Investigate and approve'
  }
];
