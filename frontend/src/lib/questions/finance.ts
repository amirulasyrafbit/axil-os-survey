import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand the Finance team\'s role in relation to inventory so we can design the right financial integrations.';

const S_MONTH = 'Month-end process';
const C_MONTH = 'Month-end is where Finance and inventory intersect most critically. We need to understand every step to design a system that makes it faster and less error-prone.';

const S_COGS = 'COGS and inventory valuation';
const C_COGS = 'Cost of Goods Sold accuracy depends on how inventory data flows into your financial records. We need to understand exactly how that works today.';

const S_FX = 'Currency and forex';
const C_FX = 'Foreign currency purchases add complexity to financial reporting. We need to understand how exchange rates are handled so we can build that into the system.';

const S_REPORT = 'Reporting';
const C_REPORT = 'Understanding what reports Finance currently produces — and what they wish they could produce — will help us design the right analytics module.';

const S_ONLINE = 'Online sales and revenue';
const C_ONLINE = 'With two separate online systems today, Finance must consolidate revenue manually. The new unified platform will change this significantly.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const financeQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'fin-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for in relation to inventory and operations?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people handle the financial side of inventory?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What systems do you currently use for financial reporting and accounting?',
    type: 'multiselect',
    options: ['Excel spreadsheets', 'SQL / Access database', 'AutoCount', 'QuickBooks', 'SQL Accounting', 'SAP', 'Sage', 'Oracle / NetSuite', 'Custom internal system'],
    required: true,
    hasOther: true,
  },

  // ── Month-end process ─────────────────────────────────────────────────────
  {
    id: 'fin-q4',
    section: S_MONTH,
    sectionContext: C_MONTH,
    question: 'Walk us through what month-end looks like for inventory — what do you do, in what order, and who is involved?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q5',
    section: S_MONTH,
    sectionContext: C_MONTH,
    question: 'How long does it typically take to close the books on inventory at month end?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q6',
    section: S_MONTH,
    sectionContext: C_MONTH,
    question: 'What do you do when the inventory balance from production or warehouse does not match your financial records?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q7',
    section: S_MONTH,
    sectionContext: C_MONTH,
    question: 'How often does that mismatch happen — and how long does it typically take to resolve?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── COGS and inventory valuation ──────────────────────────────────────────
  {
    id: 'fin-q8',
    section: S_COGS,
    sectionContext: C_COGS,
    question: 'How do you calculate Cost of Goods Sold today — where exactly does the data come from and what steps are involved?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q9',
    section: S_COGS,
    sectionContext: C_COGS,
    question: 'Do you use standard cost, actual cost, or weighted average cost for inventory valuation?',
    type: 'multiselect',
    options: ['Standard cost', 'Actual cost', 'Weighted average cost', 'Mixed / not sure'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q10',
    section: S_COGS,
    sectionContext: C_COGS,
    question: 'How do you separately account for distributed products versus 1st BASE manufactured products in COGS?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q11',
    section: S_COGS,
    sectionContext: C_COGS,
    question: 'For 1st BASE products — how do you account for the raw material cost that went into each finished product?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q12',
    section: S_COGS,
    sectionContext: C_COGS,
    question: 'Do you currently have visibility into stock value by individual product, or only by category or department?',
    type: 'multiselect',
    options: ['By individual product', 'By category or department only', 'Neither'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q13',
    section: S_COGS,
    sectionContext: C_COGS,
    question: 'The current system tracks inventory in different units of measurement — for example cases, packs, and individual pieces. How do you handle UOM conversion when calculating inventory value for financial reporting?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Currency and forex ────────────────────────────────────────────────────
  {
    id: 'fin-q14',
    section: S_FX,
    sectionContext: C_FX,
    question: 'How do you handle foreign currency purchases (USD, EUR, GBP) in the financial records?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q15',
    section: S_FX,
    sectionContext: C_FX,
    question: 'When do you apply the exchange rate — at the time of the PO, at the time of goods receipt, or at month end?',
    type: 'multiselect',
    options: ['At time of PO', 'At time of goods receipt', 'At month end', 'It varies'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q16',
    section: S_FX,
    sectionContext: C_FX,
    question: 'How do you get the exchange rates — a system, or someone provides them manually?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q17',
    section: S_FX,
    sectionContext: C_FX,
    question: 'Has a currency conversion error ever caused a financial reporting issue — what happened?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },

  // ── Reporting ─────────────────────────────────────────────────────────────
  {
    id: 'fin-q18',
    section: S_REPORT,
    sectionContext: C_REPORT,
    question: 'What financial reports do you currently produce that relate to inventory — please list them.',
    type: 'multiselect',
    options: ['Profit & Loss statement', 'Cost of Goods Sold (COGS) report', 'Inventory valuation report', 'Stock movement report', 'Ageing stock report', 'Department cost allocation report', 'Monthly closing / balance sheet', 'Expired / near-expiry stock report'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q19',
    section: S_REPORT,
    sectionContext: C_REPORT,
    question: 'How do you currently report on stock value by department?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q20',
    section: S_REPORT,
    sectionContext: C_REPORT,
    question: 'How much time per month does your team spend on inventory-related reconciliation?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q21',
    section: S_REPORT,
    sectionContext: C_REPORT,
    question: 'Do you produce any regular reports for senior management related to inventory or COGS — if so what do they contain?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
  {
    id: 'fin-q22',
    section: S_REPORT,
    sectionContext: C_REPORT,
    question: 'Are there reports you wish you could produce but currently cannot — what are they?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },

  // ── Online sales and revenue ──────────────────────────────────────────────
  {
    id: 'fin-q23',
    section: S_ONLINE,
    sectionContext: C_ONLINE,
    question: 'Currently product orders and service orders go through separate systems — does Finance consolidate these into one revenue view, or are they reported separately?',
    type: 'multiselect',
    options: ['Consolidated into one view', 'Reported separately', 'Not currently consolidated'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q24',
    section: S_ONLINE,
    sectionContext: C_ONLINE,
    question: 'When a customer pays through the website, how does that transaction reach Finance — is it automatic or manual?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q25',
    section: S_ONLINE,
    sectionContext: C_ONLINE,
    question: 'How do you currently reconcile online sales against inventory movements?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q26',
    section: S_ONLINE,
    sectionContext: C_ONLINE,
    question: 'Are there any financial reporting challenges specific to having products sold through the website versus through direct quotation?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'fin-q27',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system do well for Finance that you would not want to lose?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q28',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system not handle well — what are the biggest gaps?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q29',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for Finance?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q30',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'fin-q31',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has the COGS figure ever been wrong in a financial report — what caused it and how did you find out?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q32',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What is the most manual and time-consuming part of your month-end process?',
    type: 'multiselect',
    options: ['Chasing other departments for data', 'Manually entering transactions', 'Reconciling inventory against financial records', 'Converting foreign currencies', 'Compiling reports from multiple sources', 'Verifying COGS calculations', 'Reviewing and correcting prior entries'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q33',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What financial data do you wish you could see in real time rather than waiting for month end?',
    type: 'multiselect',
    options: ['Current inventory value by product', 'COGS as transactions happen', 'Stock levels across all departments', 'Outstanding POs and their values', 'Revenue vs cost per order', 'Currency exposure / forex impact'],
    required: true,
    hasOther: true,
  },
  {
    id: 'fin-q34',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how Finance interacts with inventory today, what would it be?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'fin-q35',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
];

export default financeQuestions;
