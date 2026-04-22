import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand the QC team\'s scope and responsibilities so we can design the right inspection and approval workflows.';

const S_INSP = 'Inspection process';
const C_INSP = 'We need to understand every step of your inspection process — from the moment goods arrive to the moment they are cleared — so we can build a system that supports it properly.';

const S_QUAR = 'Quarantine and rejection';
const C_QUAR = 'Quarantine and rejection workflows need to be fully supported in the new system with clear audit trails.';

const S_SHELF = 'Shelf life and expiry';
const C_SHELF = 'Shelf life management is critical in a medical supply environment. We need to understand how you handle it today.';

const S_MFG = '1st BASE manufacturing QC';
const C_MFG = 'Finished goods from 1st BASE manufacturing go through a different QC process. We need to understand it separately.';

const S_ISO = 'ISO 13485 and traceability';
const C_ISO = 'ISO 13485 compliance is non-negotiable. We need to understand what records you must keep and how you maintain traceability today.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const qcQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'qc-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the QC team?',
    type: 'number',
    required: true,
  },
  {
    id: 'qc-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Does your team inspect both incoming goods from suppliers and finished goods from 1st BASE manufacturing?',
    type: 'radio',
    options: ['Yes, both', 'Incoming goods only', 'Finished goods only', 'It depends'],
    required: true,
  },

  // ── Inspection process ────────────────────────────────────────────────────
  {
    id: 'qc-q4',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'Walk us through exactly what happens step by step when a new shipment arrives and your team needs to do a QC check — from the moment you are notified to the moment the item is approved or rejected.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q5',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'How do you get notified that new goods have arrived and are ready for inspection?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q6',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'Where do you get the information needed for the inspection — CoA, acceptance criteria, MSDS? How does this reach you?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q7',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'How do you record inspection results today — paper form, Excel, the Access system, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q8',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'How long does a typical QC inspection take from receiving the item to recording the result — including any waiting time?',
    type: 'text',
    required: true,
  },
  {
    id: 'qc-q9',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'After approving an item, how do you notify the warehouse that it is cleared for use?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q10',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'You currently print QC barcode labels for approved items — can you describe exactly what information the label contains, where the label is placed on the item, and how it is used during stock out?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q11',
    section: S_INSP,
    sectionContext: C_INSP,
    question: 'There have been occasional issues with barcode scanning — the label material or printer sometimes causes scan failures. How often does this happen and how do you handle it when it does?',
    type: 'textarea',
    required: false,
  },

  // ── Quarantine and rejection ──────────────────────────────────────────────
  {
    id: 'qc-q12',
    section: S_QUAR,
    sectionContext: C_QUAR,
    question: 'What happens step by step when an item fails QC?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q13',
    section: S_QUAR,
    sectionContext: C_QUAR,
    question: 'How do you physically identify and separate quarantined items in the warehouse?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q14',
    section: S_QUAR,
    sectionContext: C_QUAR,
    question: 'How is a quarantine or rejection recorded in the current system?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q15',
    section: S_QUAR,
    sectionContext: C_QUAR,
    question: 'What is the process for returning a rejected item to the supplier — who handles that and how?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q16',
    section: S_QUAR,
    sectionContext: C_QUAR,
    question: 'Are QC rejection results ever shared with the customer directly?',
    type: 'radio',
    options: ['Yes, always', 'Yes, sometimes', 'No', 'Not applicable'],
    required: true,
  },

  // ── Shelf life and expiry ─────────────────────────────────────────────────
  {
    id: 'qc-q17',
    section: S_SHELF,
    sectionContext: C_SHELF,
    question: 'When goods arrive, how do you check if they meet the minimum shelf life requirement at the time of receipt?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q18',
    section: S_SHELF,
    sectionContext: C_SHELF,
    question: 'Who decides what the minimum shelf life threshold is for each product — and is it documented somewhere?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q19',
    section: S_SHELF,
    sectionContext: C_SHELF,
    question: 'Has there ever been a situation where goods arrived with insufficient shelf life — what happened?',
    type: 'textarea',
    required: false,
  },

  // ── 1st BASE manufacturing QC ─────────────────────────────────────────────
  {
    id: 'qc-q20',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'For finished 1st BASE products — walk us through how QC works for manufactured goods step by step.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q21',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'What specific tests or checks do you perform on finished 1st BASE goods before releasing them to stock?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q22',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'How do you document and store QC results for manufactured goods?',
    type: 'textarea',
    required: true,
  },

  // ── ISO 13485 and traceability ────────────────────────────────────────────
  {
    id: 'qc-q23',
    section: S_ISO,
    sectionContext: C_ISO,
    question: 'What records does ISO 13485 specifically require your team to keep?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q24',
    section: S_ISO,
    sectionContext: C_ISO,
    question: 'If an auditor asked you to trace a specific raw material lot through to the finished 1st BASE product it went into — how would you do that today and how long would it take?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q25',
    section: S_ISO,
    sectionContext: C_ISO,
    question: 'How long does it take to pull together all documentation when preparing for an audit?',
    type: 'text',
    required: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'qc-q26',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system do well for QC that you would not want to lose?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q27',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system not handle well for QC — what are the biggest gaps?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q28',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for the QC team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q29',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'textarea',
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'qc-q30',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What information do you wish you had at the time of inspection that you currently do not have?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q31',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has QC ever been delayed because you were waiting for information from another department — what caused it?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q32',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What part of the QC documentation process is most tedious or error-prone?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'qc-q33',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how QC is managed today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'qc-q34',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default qcQuestions;
