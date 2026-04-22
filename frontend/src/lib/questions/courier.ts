import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand the Courier team\'s scope and responsibilities so we can design the right sample collection and handoff workflows.';

const S_WORKFLOW = 'Sample collection workflow';
const C_WORKFLOW = 'Sample collection is a precise, time-sensitive process. We need to understand every step — from notification to delivery — to design a system that supports it reliably.';

const S_HANDOFF = 'Handoff to the lab';
const C_HANDOFF = 'The handoff from courier to lab is a critical point where errors can occur. We need to understand exactly how it works today.';

const S_COMMS = 'Communication';
const C_COMMS = 'Clear communication between the courier, customer care, and the lab is essential. We need to understand what tools and channels you use today.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const courierQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'cur-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the courier team?',
    type: 'number',
    required: true,
  },
  {
    id: 'cur-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What types of samples do you collect — DNA, tissue, blood, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What geographical areas do you currently cover for sample collection?',
    type: 'textarea',
    required: true,
  },

  // ── Sample collection workflow ────────────────────────────────────────────
  {
    id: 'cur-q5',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'How do you find out that a sample needs to be collected — through the system, a notification from customer care, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q6',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'How do you know the collection location, contact person, and time — where does that information come from?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q7',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'How do you currently plan your collection routes — is there a system, or is it done manually?',
    type: 'radio',
    options: ['System / app', 'Manually', 'A mix of both'],
    required: true,
  },
  {
    id: 'cur-q8',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'When you arrive at a collection location, what do you do — is there a checklist or a form to fill in?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q9',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'How do you confirm that a sample has been collected — do you update a system, send a message to customer care, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q10',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'How do you handle a situation where you arrive at a collection location and the sample is not ready?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q11',
    section: S_WORKFLOW,
    sectionContext: C_WORKFLOW,
    question: 'How do you transport samples — are there temperature or handling requirements you need to manage during transit?',
    type: 'textarea',
    required: true,
  },

  // ── Handoff to the lab ────────────────────────────────────────────────────
  {
    id: 'cur-q12',
    section: S_HANDOFF,
    sectionContext: C_HANDOFF,
    question: 'When you deliver samples to the lab, what is the handoff process — do you sign anything, scan anything, or just hand them over?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q13',
    section: S_HANDOFF,
    sectionContext: C_HANDOFF,
    question: 'How does the lab confirm receipt of the samples?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q14',
    section: S_HANDOFF,
    sectionContext: C_HANDOFF,
    question: 'What happens if the lab finds an issue with a sample after you have delivered it?',
    type: 'textarea',
    required: true,
  },

  // ── Communication ─────────────────────────────────────────────────────────
  {
    id: 'cur-q15',
    section: S_COMMS,
    sectionContext: C_COMMS,
    question: 'How do you currently communicate with customer care during a collection — WhatsApp, phone, Teams, or something else?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q16',
    section: S_COMMS,
    sectionContext: C_COMMS,
    question: 'How do you communicate with the lab?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q17',
    section: S_COMMS,
    sectionContext: C_COMMS,
    question: 'If there is a delay or issue during collection, how do you escalate it?',
    type: 'textarea',
    required: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'cur-q18',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Are there any tools or processes that currently work well for your team that you would not want to lose?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q19',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What information do you currently have to find manually that you wish was available automatically?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q20',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform. What is the single most important thing the new system must get right for the courier team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q21',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'textarea',
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'cur-q22',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What is the most common problem you encounter during sample collection?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q23',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has a sample ever been lost, damaged, or mixed up — what happened?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'cur-q24',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'How much time do you spend on administrative tasks like updating records or communicating status — and does it feel like too much?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q25',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What information do you wish you had before going out for a collection that you currently do not have?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'cur-q26',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how the courier process works today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'cur-q27',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how the courier team works that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default courierQuestions;
