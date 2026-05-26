import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand the Procurement team\'s scope and how it relates to other departments so we can design the right purchasing and order workflows.';

const S_INDENT = 'The indent inventory in SQL DB';
const C_INDENT = 'The indent inventory is a critical but complex part of how Axil manages stock. We need to fully understand how it works before we can design a replacement.';

const S_CUST_PO = 'Purchase orders from institutional customers';
const C_CUST_PO = 'Institutional customer POs arrive through procurement platforms and have their own workflow. We need to map every step.';

const S_SUPPLIER = 'Purchasing from suppliers';
const C_SUPPLIER = 'Understanding how you raise and track supplier POs will help us design the right procurement module.';

const S_UOM = 'Unit of measurement';
const C_UOM = 'Units of measurement are a common source of errors in procurement. We need to understand how you handle them today.';

const S_COORD = 'Coordination with other departments';
const C_COORD = 'Procurement touches every other department. We need to understand how those handoffs work so we can design the right notifications and workflows.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const procurementQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'proc-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the procurement team?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Does procurement handle all purchasing for the company — distributed products, raw materials for manufacturing, lab consumables — or only certain categories?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How does your team\'s responsibilities differ from the production team\'s responsibilities?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── The indent inventory in SQL DB ────────────────────────────────────────
  {
    id: 'proc-q5',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'There is an indent inventory system within the SQL DB that manages a separate category of stock items — can you describe what indent inventory is and how it differs from the production inventory?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q6',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'Which products or categories of items are managed as indent items versus ex-stock items?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q7',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'Can an item be reclassified from indent to ex-stock or vice versa — if so how does that process work and who has authority to do it?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q8',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'When an indent item is ordered and received, how is that recorded — is it in the SQL DB only, or does it also appear in the production inventory system?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q9',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'How do you currently prevent an indent item from being counted twice — once in the SQL DB and once in the production inventory?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q10',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'The indent inventory flow in the SQL DB is complex and currently only fully understood by one person — can you walk us through how it works from start to finish, including what happens when an order is placed, received, and issued?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q11',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'How does the indent inventory connect to the purchase order module in SQL DB — what data flows between them?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q12',
    section: S_INDENT,
    sectionContext: C_INDENT,
    question: 'Are there items that exist in both the indent inventory and the production inventory simultaneously — and if so how is that managed?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Purchase orders from institutional customers ───────────────────────────
  {
    id: 'proc-q13',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'Your team receives purchase orders from customers through procurement platforms — can you describe which platforms you use and how that process works step by step?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q14',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'How do you match an incoming customer PO to the original quotation number?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q15',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'What does the difference between "make order" and "Indent" mean in your DB — when do you use each one?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q16',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'After confirming the order in the DB, what happens next — who picks it up and what do they do?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q17',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'How do you send the order confirmation back to the customer — through the same procurement platform or by email?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q18',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'How many customer POs do you typically receive and process per day?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q19',
    section: S_CUST_PO,
    sectionContext: C_CUST_PO,
    question: 'Are there procurement platforms other than the main ones you currently use that customers occasionally send POs through?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },

  // ── Purchasing from suppliers ─────────────────────────────────────────────
  {
    id: 'proc-q20',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'When you need to order stock from a supplier, how do you raise a purchase order — which system do you use?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q21',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'How do you decide which supplier to use when multiple suppliers carry the same product?',
    type: 'multiselect',
    options: ['Lowest price', 'Fastest lead time', 'Quality / past performance', 'Existing preferred supplier relationship', 'Stock availability at time of order', 'Compliance certifications (ISO, etc.)', 'Management or director decision'],
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q22',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'How do you track whether a supplier has delivered against an open PO?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q23',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'How do you handle suppliers who deliver in multiple batches against one PO?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q24',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'How do you handle purchases in foreign currencies — who provides exchange rates and how often are they updated?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q25',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'Roughly how many active suppliers does the company deal with?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q26',
    section: S_SUPPLIER,
    sectionContext: C_SUPPLIER,
    question: 'How do you currently manage supplier performance — lead times, delivery accuracy, rejection rates?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Unit of measurement ───────────────────────────────────────────────────
  {
    id: 'proc-q27',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'When raising a purchase order, what unit of measurement do you use — the supplier\'s unit (cases, packs) or the internal stock unit (pieces, vials)?',
    type: 'multiselect',
    options: ["Supplier's unit", 'Internal stock unit', 'Both depending on the item', 'Not sure'],
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q28',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Are there items where the supplier unit and the internal stock unit are different — and how is that conversion currently handled in the system?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q29',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Has a UOM mismatch ever caused a procurement error — for example ordering the wrong quantity because of a unit confusion?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },

  // ── Coordination with other departments ───────────────────────────────────
  {
    id: 'proc-q30',
    section: S_COORD,
    sectionContext: C_COORD,
    question: 'How does your team coordinate with the warehouse when goods are expected to arrive?',
    type: 'multiselect',
    options: ['WhatsApp message to warehouse team', 'Email notification', 'Phone call', 'System notification or PO status update', 'In-person coordination', 'Shared spreadsheet or tracking file'],
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q31',
    section: S_COORD,
    sectionContext: C_COORD,
    question: 'How does your team coordinate with customer care when a customer PO comes in?',
    type: 'multiselect',
    options: ['WhatsApp message', 'Email', 'Phone call', 'System notification', 'In-person discussion', 'Shared document or tracker', 'No formal coordination — they check themselves'],
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q32',
    section: S_COORD,
    sectionContext: C_COORD,
    question: 'If a product is out of stock when a customer PO arrives, what do you do?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q33',
    section: S_COORD,
    sectionContext: C_COORD,
    question: 'How does your team coordinate with production when raw materials need to be replenished?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'proc-q34',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system do well for procurement that you would not want to lose?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q35',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system not handle well — what are the biggest gaps?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q36',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for the procurement team?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q37',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'proc-q38',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What part of your team\'s work takes the most time but feels like it shouldn\'t?',
    type: 'multiselect',
    options: ['Manually cross-referencing multiple systems', 'Chasing suppliers for delivery updates', 'Matching customer POs to quotations manually', 'Updating records in multiple places', 'Preparing purchase reports or summaries', 'Coordinating with warehouse on arrivals'],
    required: true,
    hasOther: true,
  },
  {
    id: 'proc-q39',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has a customer PO ever been processed incorrectly — what caused it?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
  {
    id: 'proc-q40',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Have you ever had a supplier dispute or delivery issue that was difficult to resolve because records were unclear?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
  {
    id: 'proc-q41',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how procurement works today, what would it be?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'proc-q42',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
];

export default procurementQuestions;
