export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What types of documents can Endloops work with?',
    answer: 'Endloops is designed to work with financial documents such as invoices, purchase orders, contracts, statements, and supporting records.'
  },
  {
    question: 'Does Endloops replace financial professionals?',
    answer: 'No. Endloops prepares the work and surfaces exceptions. Professionals review the output, make decisions, and provide final sign-off.'
  },
  {
    question: 'Can Endloops handle large volumes of documents?',
    answer: 'Yes. Endloops is designed to support bulk processing across document-heavy workflows.'
  },
  {
    question: 'What happens when the software finds an exception?',
    answer: 'Endloops flags the exception for review. The professional investigates and decides how to proceed.'
  },
  {
    question: 'Can Endloops be used for one specific task?',
    answer: 'Yes. Standalone tools are designed to solve individual needs and can be used independently.'
  },
  {
    question: 'Which industries does Endloops serve?',
    answer: 'Endloops is built for accounting, audit, finance, and property-management teams.'
  }
];
