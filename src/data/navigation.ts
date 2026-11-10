export interface NavItem {
  label: string;
  path: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Tools', path: '/tools' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const FOOTER_SOLUTIONS = [
  { label: 'Budget Review', path: '/solutions#budget-review' },
  { label: 'Escrow Audit', path: '/solutions#escrow-audit' },
  { label: 'Financial Audit', path: '/solutions#financial-audit' },
  { label: 'Interim Audit', path: '/solutions#interim-audit' },
  { label: 'Property Budget Preparation', path: '/solutions#property-budget-prep' }
];

export const FOOTER_TOOLS = [
  { label: 'Purchase-Order Extraction', path: '/tools?tool=po-extraction' },
  { label: 'Vouching Automation', path: '/tools?tool=vouching-automation' },
  { label: 'Expense Working Automation', path: '/tools?tool=expense-working' },
  { label: 'Financial Report Review', path: '/tools?tool=financial-report-review' },
  { label: 'Tender Verification', path: '/tools?tool=tender-verification' },
  { label: 'Reconciliation', path: '/tools?tool=reconciliation-engine' }
];
