import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand the Pre-Sales team\'s role and tools so we can design features that help you close deals faster.';

const S_ENGAGE = 'Finding and engaging customers';
const C_ENGAGE = 'Understanding how you find and engage customers helps us design the right CRM and handoff workflows.';

const S_KNOWLEDGE = 'Product and stock knowledge';
const C_KNOWLEDGE = 'The ability to answer product and availability questions in real time is critical for pre-sales. We need to understand what you have access to today.';

const S_WEBSITE = 'The website and online presence';
const C_WEBSITE = 'The website is a sales tool. We need to understand how you use it today and what would make it more effective.';

const S_PIPELINE = 'Pipeline and reporting';
const C_PIPELINE = 'A clear pipeline view is essential for sales effectiveness. We need to understand how you track and report your activity today.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const preSalesQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'ps-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'ps-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the pre-sales team?',
    type: 'number',
    required: true,
  },
  {
    id: 'ps-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What tools does your team currently use?',
    type: 'multiselect',
    options: [
      'CRM system (e.g. HubSpot, Salesforce)',
      'Email',
      'WhatsApp',
      'Phone',
      'LinkedIn',
      'Spreadsheets (Excel / Google Sheets)',
      'Internal DB system',
      'Axil Scientific website',
      'Word documents or presentations',
    ],
    required: true,
  },

  // ── Finding and engaging customers ────────────────────────────────────────
  {
    id: 'ps-q4',
    section: S_ENGAGE,
    sectionContext: C_ENGAGE,
    question: 'How do you find new customers?',
    type: 'multiselect',
    options: [
      'Cold calling or outbound prospecting',
      'Referrals from existing customers',
      'Industry events or conferences',
      'Inbound enquiries from the website',
      'Through existing relationships',
      'LinkedIn outreach',
      'Through distributors or agents',
      'WhatsApp or industry groups',
    ],
    required: true,
  },
  {
    id: 'ps-q5',
    section: S_ENGAGE,
    sectionContext: C_ENGAGE,
    question: 'When a potential customer shows interest in a product or service, what is your next step?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'ps-q6',
    section: S_ENGAGE,
    sectionContext: C_ENGAGE,
    question: 'How do you pass a customer\'s request to customer care?',
    type: 'multiselect',
    options: [
      'WhatsApp',
      'Email',
      'Phone call',
      'In person or verbally',
      'Through the DB system',
      'Shared document or spreadsheet',
    ],
    required: true,
  },
  {
    id: 'ps-q7',
    section: S_ENGAGE,
    sectionContext: C_ENGAGE,
    question: 'How do you follow up to know whether the quote went out and what the customer\'s response was?',
    type: 'multiselect',
    options: [
      'Ask customer care directly via WhatsApp',
      'Check the DB system myself',
      'Phone customer care',
      'Email customer care',
      'Ask the customer directly',
      'We do not currently follow up systematically',
    ],
    required: true,
  },
  {
    id: 'ps-q8',
    section: S_ENGAGE,
    sectionContext: C_ENGAGE,
    question: 'How do you find out when a customer has confirmed an order?',
    type: 'multiselect',
    options: [
      'Customer care tells us via WhatsApp',
      'We check the DB system ourselves',
      'The customer tells us directly',
      'Email notification from customer care',
      'Management informs us',
      'We do not always find out',
    ],
    required: true,
  },

  // ── Product and stock knowledge ───────────────────────────────────────────
  {
    id: 'ps-q9',
    section: S_KNOWLEDGE,
    sectionContext: C_KNOWLEDGE,
    question: 'When talking to a customer about a product, what information do you currently have access to?',
    type: 'multiselect',
    options: [
      'Pricing',
      'Stock availability',
      'Lead times',
      'Product specifications or datasheets',
      'Certificate of Analysis (CoA)',
      'MSDS / Safety data sheet',
      'Customer\'s previous order history',
      'Current promotions or special deals',
    ],
    required: true,
  },
  {
    id: 'ps-q10',
    section: S_KNOWLEDGE,
    sectionContext: C_KNOWLEDGE,
    question: 'Where do you get that information from?',
    type: 'multiselect',
    options: [
      'Axil Scientific website',
      'Internal DB system',
      'A product catalogue or brochure',
      'By asking customer care',
      'By asking the warehouse',
      'From memory and experience',
      'From the supplier directly',
      'A shared spreadsheet or document',
    ],
    required: true,
  },
  {
    id: 'ps-q11',
    section: S_KNOWLEDGE,
    sectionContext: C_KNOWLEDGE,
    question: 'Has there ever been a situation where you gave a customer wrong information about availability or pricing — what happened?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'ps-q12',
    section: S_KNOWLEDGE,
    sectionContext: C_KNOWLEDGE,
    question: 'Have you ever lost a deal because you could not confirm availability or pricing fast enough?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'ps-q13',
    section: S_KNOWLEDGE,
    sectionContext: C_KNOWLEDGE,
    question: 'What product or service information do you wish you had at your fingertips during a customer conversation?',
    type: 'multiselect',
    options: [
      'Live stock availability',
      'Current pricing without needing to ask',
      'Lead time for items not in stock',
      'Full product specifications',
      'Expiry dates and lot information',
      'Customer\'s full order history',
      'Whether a quote was already sent and its status',
      'Whether the customer is new or existing',
      'Active promotions or deals',
    ],
    required: true,
  },

  // ── The website and online presence ───────────────────────────────────────
  {
    id: 'ps-q14',
    section: S_WEBSITE,
    sectionContext: C_WEBSITE,
    question: 'Do you currently use the Axil Scientific website as a tool during customer conversations?',
    type: 'radio',
    options: ['Yes, regularly', 'Sometimes', 'Rarely', 'No'],
    required: true,
  },
  {
    id: 'ps-q15',
    section: S_WEBSITE,
    sectionContext: C_WEBSITE,
    question: 'Are there gaps in the website that make it harder to sell?',
    type: 'multiselect',
    options: [
      'Products are missing from the website',
      'Product descriptions are incomplete or outdated',
      'No pricing visible to customers',
      'No stock availability shown',
      'No way to place orders directly',
      'Services are hard to find',
      'Products are hard to search or filter',
      'The website looks outdated or unprofessional',
    ],
    required: true,
  },
  {
    id: 'ps-q16',
    section: S_WEBSITE,
    sectionContext: C_WEBSITE,
    question: 'Have prospects ever asked whether they can browse the full catalogue or place orders online?',
    type: 'radio',
    options: ['Yes, often', 'Sometimes', 'Rarely', 'Never'],
    required: true,
  },
  {
    id: 'ps-q17',
    section: S_WEBSITE,
    sectionContext: C_WEBSITE,
    question: 'What changes to the website would most help your team close deals?',
    type: 'multiselect',
    options: [
      'Show live stock availability',
      'Show pricing upfront',
      'Allow direct online ordering for in-stock items',
      'Better product search and filtering',
      'Downloadable product datasheets and CoA',
      'A combined product and service catalogue',
      'Customer login with quote and order history',
      'Instant quote request button',
    ],
    required: true,
  },

  // ── Pipeline and reporting ────────────────────────────────────────────────
  {
    id: 'ps-q18',
    section: S_PIPELINE,
    sectionContext: C_PIPELINE,
    question: 'How do you currently track your leads, follow-ups, and deals?',
    type: 'multiselect',
    options: [
      'CRM system',
      'Spreadsheet',
      'Notes app or physical notebook',
      'Email folders',
      'Memory',
      'WhatsApp chats',
      'We do not currently track leads formally',
    ],
    required: true,
  },
  {
    id: 'ps-q19',
    section: S_PIPELINE,
    sectionContext: C_PIPELINE,
    question: 'How do you report your sales activity or pipeline to management?',
    type: 'multiselect',
    options: [
      'Weekly or monthly meeting',
      'Shared spreadsheet or document',
      'CRM report',
      'WhatsApp or email update',
      'Verbal update when asked',
      'We do not formally report pipeline',
    ],
    required: true,
  },
  {
    id: 'ps-q20',
    section: S_PIPELINE,
    sectionContext: C_PIPELINE,
    question: 'How do you know which existing customers have not ordered in a while and might need a follow-up?',
    type: 'multiselect',
    options: [
      'We check the DB for last order date',
      'We keep a manual list or spreadsheet',
      'Management tells us',
      'We rely on memory',
      'Customers reach out to us when ready',
      'We do not currently track this',
    ],
    required: true,
  },
  {
    id: 'ps-q21',
    section: S_PIPELINE,
    sectionContext: C_PIPELINE,
    question: 'How do you keep track of which products or services a specific customer regularly buys?',
    type: 'multiselect',
    options: [
      'Memory and experience',
      'Check their order history in the DB',
      'A spreadsheet or notes document',
      'CRM system',
      'Ask customer care',
      'We do not currently track this per customer',
    ],
    required: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'ps-q22',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What tools or processes work well for your team today that you would not want to lose?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'ps-q23',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What are the biggest gaps in your current setup that slow you down?',
    type: 'multiselect',
    options: [
      'No real-time visibility on stock or pricing',
      'No formal CRM or pipeline tracking',
      'Difficult to get quote status updates from customer care',
      'Slow quote preparation and turnaround',
      'No easy way to check a customer\'s order history',
      'Website does not support sales conversations',
      'Too much manual follow-up with no reminders',
      'No visibility on whether a customer received a quote',
    ],
    required: true,
  },
  {
    id: 'ps-q24',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for the pre-sales team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'ps-q25',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'textarea',
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'ps-q26',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What slows you down the most when trying to close a deal?',
    type: 'multiselect',
    options: [
      'Waiting for stock availability confirmation',
      'Waiting for a quote to be prepared by customer care',
      'Not knowing if the customer received or read the quote',
      'Pricing is not immediately available to me',
      'Having to manually chase customer care for updates',
      'Not having product specifications or datasheets ready',
      'Customer takes too long to respond',
    ],
    required: true,
  },
  {
    id: 'ps-q27',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What information would make your customer conversations faster or more confident?',
    type: 'multiselect',
    options: [
      'Live stock availability',
      'Pricing without needing to ask anyone',
      'Lead times for items not in stock',
      'Customer\'s full order and quote history',
      'Whether a quote was already sent and at what stage',
      'Product specs and CoA ready to share instantly',
      'Active promotions or volume discounts',
    ],
    required: true,
  },
  {
    id: 'ps-q28',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What is the biggest gap between what you promise a customer and what actually gets delivered?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'ps-q29',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how pre-sales works today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'ps-q30',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default preSalesQuestions;
