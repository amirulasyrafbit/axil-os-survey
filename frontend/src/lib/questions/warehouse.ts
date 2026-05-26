import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand the warehouse team\'s scope and physical setup so we can design a system that fits how you actually work.';

const S_RACK = 'Storage and rack locations';
const C_RACK = 'Understanding your physical rack system — and how it is currently tracked — is essential for designing the warehouse location module.';

const S_COND = 'Storage conditions';
const C_COND = 'Temperature zones and special storage requirements need to be built into the system from the start.';

const S_FEFO = 'FEFO and stock reservations';
const C_FEFO = 'First Expiry First Out and stock reservations are critical for a medical supply business. We need to understand how you manage these today.';

const S_SCAN = 'Barcode scanning';
const C_SCAN = 'Barcode scanning is a core part of your workflow. We need to understand every step so we can design the right scanning experience.';

const S_UOM = 'Unit of measurement';
const C_UOM = 'Units of measurement are a common source of errors. We need to understand exactly how your team records stock in and out.';

const S_ISSUE = 'Issuing stock';
const C_ISSUE = 'Understanding the full stock issuance process helps us design the right pick-and-pack workflow.';

const S_STOCK = 'Stock takes';
const C_STOCK = 'Stock takes are a major operational event. We need to understand how they work today so we can make them faster and more accurate.';

const S_REBUILD = 'Current system and rebuild';
const C_REBUILD = 'Understanding what works and what does not will directly shape our priorities for the new platform.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const warehouseQuestions: Question[] = [
  // ── About your team ──────────────────────────────────────────────────────
  {
    id: 'wh-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your team responsible for day to day? Please describe in your own words.',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people are in the warehouse team?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Can you briefly describe the physical warehouse — how many storage areas or zones are there and what are they used for?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Approximately how many different products or SKUs does the warehouse currently hold?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Storage and rack locations ────────────────────────────────────────────
  {
    id: 'wh-q5',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'Your warehouse has a physical rack location system with Row, Bay, and Level labels — can you describe how that system is currently organised?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q6',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'How many rows, bays, and levels does the warehouse have approximately?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q7',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'Are all items in the warehouse assigned to a specific rack location — or only certain categories like buffer items?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q8',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'When a new item arrives, how do you decide which rack location it goes to?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q9',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'If someone asked you right now where a specific item with a specific lot number was — how would you find it? How long would that take?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q10',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'Currently the rack location system exists physically but is not yet connected to the inventory software — items are being tracked in a separate Excel file instead. Can you describe how that Excel file works and what information it contains?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q11',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'How often do items get moved from one rack location to another — and what triggers that move?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q12',
    section: S_RACK,
    sectionContext: C_RACK,
    question: 'When an item is moved from location A to location B, how is that movement currently recorded — or is it not recorded at all?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Storage conditions ────────────────────────────────────────────────────
  {
    id: 'wh-q13',
    section: S_COND,
    sectionContext: C_COND,
    question: 'How do you handle items that need different storage temperatures — room temperature, 2–8°C, -20°C, -80°C? Are these zones in separate physical areas?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q14',
    section: S_COND,
    sectionContext: C_COND,
    question: 'Are temperature-sensitive zones tracked and managed separately from the main rack system?',
    type: 'multiselect',
    options: ['Yes, separately', 'No, same system', 'Not currently tracked'],
    required: true,
    hasOther: true,
  },

  // ── FEFO and stock reservations ───────────────────────────────────────────
  {
    id: 'wh-q15',
    section: S_FEFO,
    sectionContext: C_FEFO,
    question: 'Do you currently follow FEFO (First Expiry First Out) when issuing stock — meaning you always pick the item closest to expiry first? If yes, how do you enforce that today?',
    type: 'multiselect',
    options: ['System automatically sorts by expiry date', 'Staff manually check labels before picking', 'Items are physically arranged by expiry', 'Barcode scanner enforces the sequence', 'We rely on staff knowledge/experience', 'FEFO is not formally enforced yet'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q16',
    section: S_FEFO,
    sectionContext: C_FEFO,
    question: 'Do you ever reserve stock for a specific customer order so it is not issued to someone else — if so how do you track that reservation?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Barcode scanning ──────────────────────────────────────────────────────
  {
    id: 'wh-q17',
    section: S_SCAN,
    sectionContext: C_SCAN,
    question: 'You currently use barcode labels on QC-approved items and a laptop with a barcode scanner on a mobile trolley for stock out — can you describe exactly how that process works step by step?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q18',
    section: S_SCAN,
    sectionContext: C_SCAN,
    question: 'During stock out, does the user scan the rack location barcode, the item barcode, or both?',
    type: 'multiselect',
    options: ['Rack location only', 'Item barcode only', 'Both', 'Neither — manual entry'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q19',
    section: S_SCAN,
    sectionContext: C_SCAN,
    question: 'The warehouse team has expressed a need to scan rack location barcodes when transferring items between locations — can you describe exactly what that transfer process looks like today and how you would want it to work?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q20',
    section: S_SCAN,
    sectionContext: C_SCAN,
    question: 'What equipment is currently used for scanning — the laptop scanner only, or also mobile phones?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q21',
    section: S_SCAN,
    sectionContext: C_SCAN,
    question: 'Are there other warehouse processes where barcode scanning would be useful but is not yet available?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
  {
    id: 'wh-q22',
    section: S_SCAN,
    sectionContext: C_SCAN,
    question: 'The rack barcodes have not yet been placed on the physical racks — what is preventing that from happening, and what would need to be in place before it can start?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Unit of measurement ───────────────────────────────────────────────────
  {
    id: 'wh-q23',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'For each product category in the warehouse, what unit of measurement is used when recording stock in and stock out?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q24',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Are there items where the purchase unit and the stock unit are different — for example received as a case but issued as individual pieces?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q25',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Are there any units of measurement that staff find confusing or that have caused errors — for example "tips" versus "pack," or "case" versus "carton"?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
  {
    id: 'wh-q26',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'When you do a stock take and count physical items, which unit of measurement do you count in — the purchase unit or the stock unit?',
    type: 'multiselect',
    options: ['Purchase unit', 'Stock unit', 'Both', 'Depends on the item'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q27',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'Has a UOM mismatch ever caused a stock discrepancy or an incorrect stock out — what happened?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },

  // ── Issuing stock ─────────────────────────────────────────────────────────
  {
    id: 'wh-q28',
    section: S_ISSUE,
    sectionContext: C_ISSUE,
    question: 'When a department needs stock, how does that request reach you — email, phone, a paper form, WhatsApp, or something else?',
    type: 'multiselect',
    options: ['Email', 'WhatsApp message', 'Phone call', 'Paper request form', 'Walk-in / verbal request', 'System request / digital form', 'Teams or internal chat'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q29',
    section: S_ISSUE,
    sectionContext: C_ISSUE,
    question: 'How do you record that an item has been taken out of stock?',
    type: 'multiselect',
    options: ['Barcode scan in the system', 'Manual entry in inventory system', 'Written on paper / issue form', 'Updated in Excel spreadsheet', 'WhatsApp message to admin', 'Not formally recorded'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q30',
    section: S_ISSUE,
    sectionContext: C_ISSUE,
    question: 'Do you issue stock by lot number, or just by item and quantity?',
    type: 'multiselect',
    options: ['By lot number', 'By item and quantity only', 'Both depending on the item'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q31',
    section: S_ISSUE,
    sectionContext: C_ISSUE,
    question: 'What happens if a department requests something and you do not have enough in stock?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Stock takes ───────────────────────────────────────────────────────────
  {
    id: 'wh-q32',
    section: S_STOCK,
    sectionContext: C_STOCK,
    question: 'How often do you do a physical stock count?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q33',
    section: S_STOCK,
    sectionContext: C_STOCK,
    question: 'How long does a full stock take typically take from start to finish?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q34',
    section: S_STOCK,
    sectionContext: C_STOCK,
    question: 'For the March stock take there were 700 items but only 200 were buffer items tracked in the warehouse system — what happens to the other 500 items during a stock take?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q35',
    section: S_STOCK,
    sectionContext: C_STOCK,
    question: 'What do you use during the count — paper sheets, a spreadsheet, a barcode scanner, or something else?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q36',
    section: S_STOCK,
    sectionContext: C_STOCK,
    question: 'How do you handle discrepancies between what the system shows and what you physically counted?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q37',
    section: S_STOCK,
    sectionContext: C_STOCK,
    question: 'When Finance does month-end, how often does your physical count differ from the system — and by how much typically?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Current system and rebuild ────────────────────────────────────────────
  {
    id: 'wh-q38',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current inventory system do well for the warehouse that you would not want to lose?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q39',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'What does the current system not handle well for warehouse operations — what are the biggest gaps?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q40',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'We are rebuilding everything from scratch into one unified platform including a proper warehouse rack module. What is the single most important thing the new system must get right for the warehouse team?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q41',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    question: 'Previous proposals for a new system were considered but not pursued. From your team\'s perspective, what went wrong — and what would need to be different this time?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────
  {
    id: 'wh-q42',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Have you ever issued the wrong item or the wrong quantity by mistake — what caused it?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q43',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has an item ever expired in the warehouse without anyone noticing?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q44',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'How do you currently know which items are approaching their expiry date — system alert or manual check?',
    type: 'multiselect',
    options: ['System alert', 'Manual check', 'We do not currently track this'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q45',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What is the most frustrating part of managing physical stock today?',
    type: 'multiselect',
    options: ['Stock levels in the system do not match physical stock', 'Items are hard to locate without a proper system', 'Expiry tracking is manual and error-prone', 'Too much paperwork and manual data entry', 'Poor communication between departments', 'No real-time visibility of stock movement', 'Stock takes are very time-consuming'],
    required: true,
    hasOther: true,
  },
  {
    id: 'wh-q46',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how the warehouse is managed today, what would it be?',
    type: 'multiselect',
    required: true,
    hasOther: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────
  {
    id: 'wh-q47',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how the warehouse works that you think we should know before we prepare our proposal?',
    type: 'multiselect',
    required: false,
    hasOther: true,
  },
];

export default warehouseQuestions;
