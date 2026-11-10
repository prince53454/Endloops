export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  automates: string[];
  professionalReviews: string[];
  outcome: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'budget-review',
    title: 'Budget review',
    category: 'Corporate Finance & Management',
    problem: 'Budget reviews often involve large volumes of documents, assumptions, calculations, and comparisons.',
    automates: [
      'Extracting budget information',
      'Structuring figures and assumptions',
      'Comparing budget data',
      'Flagging inconsistencies and exceptions',
      'Preparing review-ready outputs'
    ],
    professionalReviews: [
      'Professionals review the prepared output, assess exceptions, and make the final decision.'
    ],
    outcome: 'A structured, review-ready budget-review workflow.'
  },
  {
    id: 'escrow-audit',
    title: 'Escrow audit',
    category: 'Real Estate & Statutory Audit',
    problem: 'Escrow audits require careful checking of transactions, balances, supporting documents, and compliance with agreed requirements.',
    automates: [
      'Reading transaction and statement data',
      'Matching records',
      'Checking required information',
      'Flagging gaps and exceptions',
      'Preparing audit-ready working papers'
    ],
    professionalReviews: [
      'Professionals review exceptions, assess findings, and complete the audit judgement.'
    ],
    outcome: 'Structured working papers and a clearer path to review.'
  },
  {
    id: 'financial-audit',
    title: 'Financial audit',
    category: 'External & Statutory Audit',
    problem: 'Financial audits involve extensive documentation, reconciliations, sampling, and detailed review.',
    automates: [
      'Document extraction',
      'Data comparison',
      'Rule-based checks',
      'Exception identification',
      'Preparation of schedules and working papers'
    ],
    professionalReviews: [
      'Professionals review the prepared work, investigate exceptions, and form audit conclusions.'
    ],
    outcome: 'More prepared work, less manual repetition.'
  },
  {
    id: 'interim-audit',
    title: 'Interim audit',
    category: 'Periodic & Assurance Services',
    problem: 'Interim audits require timely review of financial information before period-end reporting.',
    automates: [
      'Document processing',
      'Data extraction',
      'Comparisons and checks',
      'Exception flagging',
      'Preparation of interim working papers'
    ],
    professionalReviews: [
      'Professionals review outputs, assess exceptions, and support timely decision-making.'
    ],
    outcome: 'A structured interim-review workflow.'
  },
  {
    id: 'property-budget-prep',
    title: 'Budget preparation for property-management companies',
    category: 'Property Management',
    problem: 'Property-management budgeting involves multiple properties, cost categories, assumptions, and recurring financial data.',
    automates: [
      'Extracting property and cost information',
      'Structuring budget inputs',
      'Applying consistency checks',
      'Flagging gaps and exceptions',
      'Preparing budget drafts'
    ],
    professionalReviews: [
      'Professionals review assumptions, adjust where needed, and approve the final budget.'
    ],
    outcome: 'A structured, review-ready budget-preparation workflow.'
  }
];
