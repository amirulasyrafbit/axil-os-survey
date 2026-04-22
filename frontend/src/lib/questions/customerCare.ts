import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand how the Customer Care team operates so we can design workflows that reduce manual work and improve response times.';

const S_SYSTEMS = 'Current website and ordering systems';
const C_SYSTEMS = 'Today Axil runs two separate online systems. We are rebuilding them into one. We need to understand how this split affects your team today.';

const S_DB = 'Your internal DB system';
const C_DB = 'The internal DB is the backbone of your daily work. We need to understand exactly what it does and where it falls short.';

const S_QUOTE = 'Quoting process';
const C_QUOTE = 'The quoting process is one of the most important workflows for customer care. We need to map every step to design something faster and more reliable.';

const S_ORDER = 'Order management';
const C_ORDER = 'Understanding how orders are confirmed, tracked, and fulfilled will help us design the right order management module.';

const S_SERVICE = 'Service orders and the orders portal';
const C_SERVICE = 'Service orders have their own separate flow today. We need to understand it fully so we can unify it into the new platform.';

const S_ECOMM = 'E-commerce and the unified platform';
const C_ECOMM = 'The new platform will let customers browse, check availability, and order online. We need to understand what that means for your team.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const customerCareQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'cc-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the customer care team?',
    type: 'number',
    required: true,
  },
  {
    id: 'cc-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What tools does your team currently use?',
    type: 'multiselect',
    options: [
      'Internal DB system',
      'Axil Scientific website',
      'Orders portal (orders.axilscientific.com)',
      'Zendesk',
      'Email',
      'WhatsApp',
      'Phone',
      'Microsoft Teams',
      'Spreadsheets (Excel / Google Sheets)',
    ],
    required: true,
  },
  {
    id: 'cc-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How do customer requests typically reach you?',
    type: 'multiselect',
    options: [
      'Through the pre-sales / sales team',
      'Direct email',
      'WhatsApp',
      'Phone call',
      'Through the website',
      'Through a procurement platform (e.g. Ariba, Zuel)',
      'Walk-in',
    ],
    required: true,
  },
  {
    id: 'cc-q5',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Approximately how many customer enquiries or requests does your team handle per day?',
    type: 'text',
    required: true,
  },

  // ── Current website and ordering systems ──────────────────────────────────
  {
    id: 'cc-q6',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'Axil currently has two separate online systems — the main website for products and the orders portal for services. How does managing two separate systems affect your team\'s daily work?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q7',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'When a customer wants to order both a product and a service, how does that currently work — do they have to use two different systems?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q8',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'How often do customers get confused by having two separate websites and portals?',
    type: 'radio',
    options: ['Very often', 'Sometimes', 'Rarely', 'Never'],
    required: true,
  },
  {
    id: 'cc-q9',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'We are rebuilding everything into one unified platform. What would a single combined system mean for your team day to day?',
    type: 'textarea',
    required: true,
  },

  // ── Your internal DB system ───────────────────────────────────────────────
  {
    id: 'cc-q10',
    section: S_DB,
    sectionContext: C_DB,
    question: 'Can you describe what your internal DB system does — what do you use it for day to day?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q11',
    section: S_DB,
    sectionContext: C_DB,
    question: 'What does the DB do well that you would not want to lose in the new system?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q12',
    section: S_DB,
    sectionContext: C_DB,
    question: 'What does the DB not do well or not do at all — where do you feel its limitations most?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q13',
    section: S_DB,
    sectionContext: C_DB,
    question: 'When customer details are not found in the DB, what is the typical turnaround time to get the information from the customer and create their profile?',
    type: 'text',
    required: true,
  },
  {
    id: 'cc-q14',
    section: S_DB,
    sectionContext: C_DB,
    question: 'When a product code is not found in the DB, you currently reach out to the supplier for information — how long does that typically take and how often does it happen per week?',
    type: 'textarea',
    required: true,
  },

  // ── Quoting process ───────────────────────────────────────────────────────
  {
    id: 'cc-q15',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'Walk us through exactly what happens when a customer sends a quote request — step by step from receiving the request to sending the quote out.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q16',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'What information do you need to prepare a quote?',
    type: 'multiselect',
    options: [
      'Price',
      'Stock availability',
      'Lead time',
      'Lot number',
      'Expiry date',
      'Certificate of Analysis (CoA)',
      'MSDS / Safety data sheet',
      'Product datasheet',
      'Shipping or freight cost',
      'Minimum order quantity',
    ],
    required: true,
  },
  {
    id: 'cc-q17',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'How do you check stock availability before quoting?',
    type: 'multiselect',
    options: [
      'Check the internal DB system',
      'Call or message the warehouse',
      'Ask a colleague',
      'Check the website',
      'Look at a shared spreadsheet',
      'From experience and memory',
      'We do not check before quoting',
    ],
    required: true,
  },
  {
    id: 'cc-q18',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'Most products on the website show a "Submit for Quotation" button rather than a direct purchase option — why is that? Are there products that customers can buy directly without a quote?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q19',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'How long does it typically take to get a quote out when all information is already in the DB?',
    type: 'text',
    required: true,
  },
  {
    id: 'cc-q20',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'How long does it take when customer details or product information is missing?',
    type: 'text',
    required: true,
  },
  {
    id: 'cc-q21',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'Approximately how many quotes does your team handle per day?',
    type: 'text',
    required: true,
  },
  {
    id: 'cc-q22',
    section: S_QUOTE,
    sectionContext: C_QUOTE,
    question: 'Do you ever lose track of a quote — for example a customer follows up and you are not sure what stage it is at?',
    type: 'textarea',
    required: true,
  },

  // ── Order management ──────────────────────────────────────────────────────
  {
    id: 'cc-q23',
    section: S_ORDER,
    sectionContext: C_ORDER,
    question: 'When a customer confirms an order by email (direct purchase without a PO), walk us through exactly what you do step by step.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q24',
    section: S_ORDER,
    sectionContext: C_ORDER,
    question: 'What does the difference between "make order" and "Indent" mean in your DB — when do you use each one?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q25',
    section: S_ORDER,
    sectionContext: C_ORDER,
    question: 'After confirming the order in the DB, what happens next — who picks it up?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q26',
    section: S_ORDER,
    sectionContext: C_ORDER,
    question: 'How do you currently track whether an order has been picked, packed, and delivered?',
    type: 'multiselect',
    options: [
      'Internal DB system',
      'Shared spreadsheet',
      'WhatsApp messages with the warehouse',
      'Email threads',
      'Phone calls',
      'We rely on the warehouse to update us',
      'We do not track this — we only know when the customer asks',
    ],
    required: true,
  },
  {
    id: 'cc-q27',
    section: S_ORDER,
    sectionContext: C_ORDER,
    question: 'How do you update the customer on their order status — proactively or only when they ask?',
    type: 'radio',
    options: ['Proactively at each stage', 'Only when they ask', 'A mix of both'],
    required: true,
  },
  {
    id: 'cc-q28',
    section: S_ORDER,
    sectionContext: C_ORDER,
    question: 'Approximately how many active orders is your team managing at any one time?',
    type: 'text',
    required: true,
  },

  // ── Service orders and the orders portal ──────────────────────────────────
  {
    id: 'cc-q29',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'The service ordering portal at orders.axilscientific.com currently handles sequencing and other lab service orders — can you describe how that system works from your team\'s perspective?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q30',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'Walk us through what happens from when a service order comes in through the portal to when results are delivered to the customer.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q31',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'What is the manual import process — how does an order from the portal get into your internal DB, and what needs to be corrected or completed after import?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q32',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'What does the filter up step do and why is it needed?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q33',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'How does the lab communicate issues with samples back to your team?',
    type: 'multiselect',
    options: [
      'WhatsApp',
      'Email',
      'Phone call',
      'Through the orders portal or system',
      'In person or verbally',
      'They do not — we find out from the customer when results are delayed',
    ],
    required: true,
  },
  {
    id: 'cc-q34',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'What are the most common problems with incoming service orders that your team has to fix manually?',
    type: 'multiselect',
    options: [
      'Missing patient or customer information',
      'Incorrect sample type submitted',
      'Wrong test requested',
      'Missing or unsigned consent forms',
      'Sample arrived without the accompanying form',
      'Incorrect billing or account details',
      'Wrong collection address',
      'Duplicate orders submitted',
    ],
    required: true,
  },
  {
    id: 'cc-q35',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'How long does it typically take from sample collection to results being delivered?',
    type: 'text',
    required: true,
  },
  {
    id: 'cc-q36',
    section: S_SERVICE,
    sectionContext: C_SERVICE,
    question: 'What does the current service ordering system not do well — what are the biggest frustrations?',
    type: 'textarea',
    required: true,
  },

  // ── E-commerce and the unified platform ───────────────────────────────────
  {
    id: 'cc-q37',
    section: S_ECOMM,
    sectionContext: C_ECOMM,
    question: 'Currently the E-Store on the website shows several products as "Sold Out" — what causes that?',
    type: 'multiselect',
    options: [
      'Stock is genuinely unavailable',
      'The website does not update automatically from the inventory system',
      'Manual website updates are delayed',
      'No one is responsible for keeping website stock current',
      'Supplier lead times are too long to keep stock',
      'Not sure what causes it',
    ],
    required: true,
  },
  {
    id: 'cc-q38',
    section: S_ECOMM,
    sectionContext: C_ECOMM,
    question: 'Are there products customers regularly ask to buy directly online but currently cannot?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'cc-q39',
    section: S_ECOMM,
    sectionContext: C_ECOMM,
    question: 'If the new unified platform allowed customers to see live stock availability and place orders directly for in-stock items — how would that change your team\'s workload?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q40',
    section: S_ECOMM,
    sectionContext: C_ECOMM,
    question: 'What would a customer account look like ideally — what should customers be able to see and do when they log in?',
    type: 'multiselect',
    options: [
      'Order history and current status',
      'Quote history and open quotes',
      'Invoice and statement downloads',
      'CoA and MSDS document downloads',
      'Live delivery tracking',
      'Reorder with one click',
      'Service job status and results',
      'Account balance or credit limit',
      'Assigned account manager contact details',
    ],
    required: true,
  },
  {
    id: 'cc-q41',
    section: S_ECOMM,
    sectionContext: C_ECOMM,
    question: 'How do you currently share CoAs, MSDS documents, and product datasheets with customers?',
    type: 'multiselect',
    options: [
      'Email attachment',
      'WhatsApp',
      'We upload to the customer\'s own procurement portal',
      'Physical copy handed over with delivery',
      'Customer downloads from our website',
      'We do not have a systematic process — it is ad hoc',
    ],
    required: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'cc-q42',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What works well across all your current tools that you would not want to lose?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q43',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What are the biggest gaps across your current tools that cause the most pain?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q44',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for the customer care team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q45',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'textarea',
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'cc-q46',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'How often do customers chase you for order or job status updates — and how much time does this take per day?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cc-q47',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What is the most common complaint you hear from customers?',
    type: 'multiselect',
    options: [
      'Slow quote turnaround time',
      'No visibility on order or delivery status',
      'Difficulty ordering online',
      'Products showing as unavailable or sold out',
      'Wrong items or quantities delivered',
      'Long lead times not communicated upfront',
      'Difficulty getting hold of someone',
      'Issues with the service order portal',
    ],
    required: true,
  },
  {
    id: 'cc-q48',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What is the most manual and repetitive task your team does every day that a system should be doing automatically?',
    type: 'multiselect',
    options: [
      'Manually importing service orders from the portal into the DB',
      'Following up on quotes that customers have not responded to',
      'Manually updating customers on order status',
      'Copying data between systems',
      'Preparing quotes by looking up info across multiple systems',
      'Sending documents by email one by one',
      'Re-entering information the customer already provided',
    ],
    required: true,
  },
  {
    id: 'cc-q49',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how customer care works today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'cc-q50',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default customerCareQuestions;
