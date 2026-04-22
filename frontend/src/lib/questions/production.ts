import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand who does what so we can design the right roles and permissions for your team.';

const S_MFG = '1st BASE manufacturing';
const C_MFG = 'We need to understand your production flow so we can design a manufacturing module that truly fits how 1st BASE is made.';

const S_RM = 'Raw material management';
const C_RM = 'Knowing how raw materials are tracked and replenished helps us design the right stock alerts and procurement triggers for your team.';

const S_UOM = 'Unit of measurement and stock classification';
const C_UOM = 'Units of measurement are a common source of errors. We need to understand exactly how your team records stock to design a system that prevents mismatches.';

const S_DATA = 'The data pipeline';
const C_DATA = 'Your inventory sits across multiple systems. We need to understand how data flows between them so we can design a single source of truth.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const productionQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'prod-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the production team?',
    type: 'number',
    required: true,
  },
  {
    id: 'prod-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Does your team handle purchasing for 1st BASE manufactured products specifically — or does a separate procurement team handle all purchasing?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Who has the authority to approve a production run before it starts?',
    type: 'text',
    required: true,
  },

  // ── 1st BASE manufacturing ────────────────────────────────────────────────
  {
    id: 'prod-q5',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'Who decides what to produce and how much — is it based on stock levels, customer demand, a production schedule, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q6',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'Is there a formal production order raised before a production run starts, or is it more informal?',
    type: 'radio',
    options: ['Formal production order', 'Informal', 'Not sure'],
    required: true,
  },
  {
    id: 'prod-q7',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'Is there a documented recipe or bill of materials that specifies exactly how much of each raw material goes into each 1st BASE product?',
    type: 'radio',
    options: ['Yes, it is documented', "No, it is in someone's head", 'Partially documented'],
    required: true,
  },
  {
    id: 'prod-q8',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'When raw materials are taken from stock to use in manufacturing, how is that movement recorded?',
    type: 'multiselect',
    options: ['Entered into inventory system', 'Recorded in Excel', 'Written on paper form', 'Scanned via barcode', 'Sent via WhatsApp to admin', 'Not currently recorded'],
    required: true,
  },
  {
    id: 'prod-q9',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'When a production run is finished, how do the finished goods get added to inventory — who records it and how?',
    type: 'multiselect',
    options: ['Production team enters it in the system', 'Warehouse team updates the record', 'Admin staff keys it in manually', 'Paper form is submitted', 'It is not currently recorded formally'],
    required: true,
  },
  {
    id: 'prod-q10',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'What happens if the actual yield from a production run is less than expected?',
    type: 'multiselect',
    options: ['Variance is recorded in the system', 'Supervisor is informed', 'Stock is adjusted manually', 'Root cause is investigated', 'Finance is notified', 'No formal process exists'],
    required: true,
  },
  {
    id: 'prod-q11',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'How does the production team communicate with QC when finished goods are ready for inspection?',
    type: 'multiselect',
    options: ['WhatsApp message', 'Email', 'Phone call', 'Walk over in person', 'System notification', 'Paper form or delivery note'],
    required: true,
  },

  // ── Raw material management ───────────────────────────────────────────────
  {
    id: 'prod-q12',
    section: S_RM,
    sectionContext: C_RM,
    question: 'How does your team know when raw materials need to be replenished — is there a system alert, a minimum stock level, or is it based on experience?',
    type: 'multiselect',
    options: ['System alert or notification', 'Minimum stock level threshold', 'Based on experience / gut feel', 'Visual check of physical stock', 'Reviewed during production planning', 'Weekly or monthly review meeting'],
    required: true,
  },
  {
    id: 'prod-q13',
    section: S_RM,
    sectionContext: C_RM,
    question: 'When raw materials run low, who do you inform — procurement, warehouse, or someone else?',
    type: 'text',
    required: true,
  },
  {
    id: 'prod-q14',
    section: S_RM,
    sectionContext: C_RM,
    question: 'Has a production run ever been delayed or stopped because raw materials were unavailable — what caused it?',
    type: 'textarea',
    required: true,
  },

  // ── Unit of measurement ───────────────────────────────────────────────────
  {
    id: 'prod-q15',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'For each raw material, what unit of measurement does your team use when recording stock — for example pieces, vials, bottles, packs, cases, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q16',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Are there items where the purchase unit and the stock unit are different — for example you receive a case of 12 bottles but record stock in individual bottles? If so, which items and what is the conversion factor?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q17',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Are there items where the stock unit could be confused or misunderstood — for example "tips" versus "pack of tips," or "case" versus "carton"? Please list any you are aware of.',
    type: 'textarea',
    required: false,
  },
  {
    id: 'prod-q18',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Has the unit of measurement ever caused a stock discrepancy or an error in production — what happened?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'prod-q19',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'When you set a minimum stock level or reorder point for a raw material, which unit of measurement do you use — the purchase unit or the stock unit?',
    type: 'radio',
    options: ['Purchase unit', 'Stock unit', 'Both', 'Not sure'],
    required: true,
  },

  // ── The data pipeline ─────────────────────────────────────────────────────
  {
    id: 'prod-q20',
    section: S_DATA,
    sectionContext: C_DATA,
    question: 'Your current inventory system is one part of a larger data flow that includes the SQL DB and a separate indent inventory. Can you describe how data flows between these systems from your team\'s perspective?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q21',
    section: S_DATA,
    sectionContext: C_DATA,
    question: 'Are there items that exist in the indent inventory but also appear in the production inventory — and if so how are they tracked to avoid double counting?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q22',
    section: S_DATA,
    sectionContext: C_DATA,
    question: 'Are there items that can be reclassified between indent and ex-stock — and how does that reclassification currently happen?',
    type: 'textarea',
    required: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'prod-q23',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current inventory system do well for your team that you would not want to lose in the new system?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q24',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system not do well, or not do at all, that causes the most frustration for your team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q25',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for the production team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q26',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time for a new system to succeed?',
    type: 'textarea',
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'prod-q27',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What part of your team\'s work takes the most time but feels like it shouldn\'t?',
    type: 'multiselect',
    options: ['Manual data entry into multiple systems', 'Chasing approvals or sign-offs', 'Stock counting and reconciliation', 'Preparing production reports', 'Coordinating with other departments', 'Locating raw materials in the warehouse'],
    required: true,
  },
  {
    id: 'prod-q28',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has there ever been a situation where you did not know how much raw material stock you had?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q29',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how production is managed today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'prod-q30',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default productionQuestions;
