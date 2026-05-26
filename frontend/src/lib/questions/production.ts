import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand who does what so we can design the right roles and permissions for your team.';

const S_MFG = '1st BASE manufacturing';
const C_MFG = 'We need to understand your production flow so we can design a manufacturing module that truly fits how 1st BASE is made.';

const S_BOM = 'Bill of materials and formulations';
const C_BOM = 'The bill of materials is the backbone of the manufacturing module. We need to understand how your recipes are structured and maintained so we can build a system that reflects reality — not a textbook version of manufacturing.';

const S_SCHEDULE = 'Production planning and scheduling';
const C_SCHEDULE = 'Understanding how runs are planned, communicated, and changed helps us design a scheduling module that fits your team\'s actual rhythm — not an idealised process.';

const S_WIP = 'Work in progress and production execution';
const C_WIP = 'We need to understand what actually happens during a production run so we can decide how much stage-by-stage tracking is needed versus what would be overkill for your team.';

const S_YIELD = 'Yield, wastage and rework';
const C_YIELD = 'Yield tracking is how we measure manufacturing efficiency. Understanding how you handle yield variance and failed batches now tells us how much of this to build into the system.';

const S_QC = 'Quality control and batch release';
const C_QC = 'QC is a hard gate in the manufacturing flow. We need to understand your inspection process and batch release workflow so nothing moves forward in the system until it is properly approved.';

const S_LOT = 'Lot traceability and genealogy';
const C_LOT = 'Lot genealogy — knowing exactly which raw material lots went into which finished goods batch — is one of the most important features we are building. Your answers here will determine how deep that traceability needs to go.';

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

  // ── About your team ───────────────────────────────────────────────────────

  {
    id: 'prod-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    // KEEP textarea — genuinely open, team roles vary too much to predict
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
    question: 'Does your team handle purchasing for 1st BASE raw materials specifically — or does a separate procurement team handle all purchasing?',
    type: 'radio',
    options: [
      'Production team handles its own purchasing',
      'Separate procurement team handles all purchasing',
      'We raise requests and procurement executes',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Who has the authority to approve a production run before it starts?',
    type: 'multiselect',
    options: [
      'Production manager',
      'QC manager',
      'Operations director',
      'Any senior team member',
      'No formal approval required',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── 1st BASE manufacturing ─────────────────────────────────────────────────

  {
    id: 'prod-q5',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'Who decides what to produce and how much?',
    type: 'multiselect',
    options: [
      'Based on current stock levels',
      'Based on incoming customer orders',
      'Based on a fixed production schedule',
      'Based on sales team forecast',
      'Ad hoc — decided run by run',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q6',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'Is there a formal production order raised before a production run starts, or is it more informal?',
    type: 'radio',
    options: [
      'Formal production order — written or in a system',
      'Informal — verbal or WhatsApp instruction',
      'Somewhere in between — partial documentation',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q7',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'When raw materials are taken from stock to use in manufacturing, how is that movement recorded?',
    type: 'multiselect',
    options: [
      'Entered into inventory system',
      'Recorded in Excel',
      'Written on paper form',
      'Scanned via barcode',
      'Sent via WhatsApp to admin',
      'Not currently recorded',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q8',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'When a production run is finished, how do the finished goods get added to inventory?',
    type: 'multiselect',
    options: [
      'Production team enters it in the system',
      'Warehouse team updates the record',
      'Admin staff keys it in manually',
      'Paper form is submitted',
      'It is not currently recorded formally',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q9',
    section: S_MFG,
    sectionContext: C_MFG,
    question: 'How does the production team communicate with QC when finished goods are ready for inspection?',
    type: 'multiselect',
    options: [
      'WhatsApp message',
      'Email',
      'Phone call',
      'Walk over in person',
      'System notification',
      'Paper form or delivery note',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Bill of materials and formulations ────────────────────────────────────

  {
    id: 'prod-q10',
    section: S_BOM,
    sectionContext: C_BOM,
    question: 'Is there a documented recipe or bill of materials that specifies exactly how much of each raw material goes into each 1st BASE product?',
    type: 'radio',
    options: [
      'Yes — fully documented and up to date',
      'Yes — documented but may be outdated',
      'Partially — some products documented, some not',
      'No — it is in someone\'s head or passed down verbally',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q11',
    section: S_BOM,
    sectionContext: C_BOM,
    question: 'Where are the bills of materials or formulations currently kept?',
    type: 'multiselect',
    options: [
      'Excel spreadsheet',
      'Word or PDF document',
      'Printed paper kept in the production area',
      'Existing inventory or production system',
      'Shared drive or folder',
      'Not written down anywhere formally',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q12',
    section: S_BOM,
    sectionContext: C_BOM,
    question: 'Do any 1st BASE products have multi-level components — for example, a sub-mix or intermediate blend that is itself made from multiple raw materials before going into the final product?',
    type: 'radio',
    options: [
      'Yes — some products have intermediate stages',
      'No — all products are single-level (raw materials straight to finished goods)',
      'Not sure',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q13a',
    section: S_BOM,
    sectionContext: C_BOM,
    // CONVERTED — frequency is predictable; approval ownership is predictable
    question: 'How often do formulations typically change?',
    type: 'radio',
    options: [
      'Rarely — less than once a year',
      'Occasionally — a few times a year',
      'Regularly — monthly or more',
      'Frequently — ongoing tweaks',
      'Never — formulations are fixed',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q13b',
    section: S_BOM,
    sectionContext: C_BOM,
    question: 'Who approves a formulation change before it is used in production?',
    type: 'multiselect',
    options: [
      'Production manager',
      'QC or R&D team',
      'Operations director',
      'No formal approval process',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q14',
    section: S_BOM,
    sectionContext: C_BOM,
    question: 'Are there expected yield factors or waste percentages built into the recipe — for example, you expect to lose 5% in mixing?',
    type: 'radio',
    options: [
      'Yes — yield factors are documented per product',
      'Yes — but only for some products',
      'No — we do not currently account for expected waste',
      'Not sure',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Production planning and scheduling ────────────────────────────────────

  {
    id: 'prod-q15',
    section: S_SCHEDULE,
    sectionContext: C_SCHEDULE,
    question: 'How far in advance is a production schedule typically planned?',
    type: 'radio',
    options: [
      'Same day or next day',
      '1 week ahead',
      '2 to 4 weeks ahead',
      'More than a month ahead',
      'No fixed planning horizon — ad hoc',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q16',
    section: S_SCHEDULE,
    sectionContext: C_SCHEDULE,
    question: 'How is the production schedule communicated to the team?',
    type: 'multiselect',
    options: [
      'WhatsApp group',
      'Email',
      'Printed schedule on the production floor',
      'Verbal briefing',
      'Shared spreadsheet or file',
      'There is no formal communication — people just know',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q17',
    section: S_SCHEDULE,
    sectionContext: C_SCHEDULE,
    // KEEP textarea — situational, how they manage parallel runs is highly specific
    question: 'Do you ever run multiple products simultaneously on the same day? If so, how do you manage the floor?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q18',
    section: S_SCHEDULE,
    sectionContext: C_SCHEDULE,
    // KEEP textarea — exception handling is a narrative process, not a checklist
    question: 'What happens when a scheduled production run needs to be changed or cancelled at short notice?',
    type: 'textarea',
    required: true,
  },

  // ── Work in progress and production execution ─────────────────────────────

  {
    id: 'prod-q19',
    section: S_WIP,
    sectionContext: C_WIP,
    // KEEP textarea — the most important narrative question in the whole survey
    question: 'Walk me through a typical production run from the moment it starts to the moment finished goods are ready. What does the team actually do at each stage?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q20',
    section: S_WIP,
    sectionContext: C_WIP,
    question: 'Are there distinct stages in a production run — for example mixing, filling, labelling, packaging — that are completed in sequence?',
    type: 'radio',
    options: [
      'Yes — clear defined stages that must happen in order',
      'Yes — but the sequence can vary depending on the product',
      'No — it is one continuous process with no formal stages',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q21',
    section: S_WIP,
    sectionContext: C_WIP,
    question: 'Is anything recorded during a production run — for example temperatures, weights, timings, or operator sign-offs?',
    type: 'multiselect',
    options: [
      'Temperatures or environmental conditions',
      'Weights or measurements at each stage',
      'Timings or durations',
      'Operator name or sign-off per stage',
      'Equipment or machine used',
      'Only a final record at the end of the run',
      'Nothing is formally recorded during the run',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q22a',
    section: S_WIP,
    sectionContext: C_WIP,
    // CONVERTED — equipment types are predictable; maintenance question split separately
    question: 'What types of equipment or machines are involved in production?',
    type: 'multiselect',
    options: [
      'Mixers or blenders',
      'Filling or dispensing machines',
      'Labelling machines',
      'Packaging or sealing machines',
      'Weighing scales or balances',
      'Ovens, incubators, or temperature-controlled units',
      'Mostly manual — no major equipment',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q22b',
    section: S_WIP,
    sectionContext: C_WIP,
    question: 'Do any of these machines have a scheduled maintenance programme or known downtime patterns?',
    type: 'radio',
    options: [
      'Yes — formal maintenance schedule exists',
      'Yes — but it is informal or ad hoc',
      'No — maintenance is done when something breaks',
      'Not applicable — mostly manual processes',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Yield, wastage and rework ─────────────────────────────────────────────

  {
    id: 'prod-q23',
    section: S_YIELD,
    sectionContext: C_YIELD,
    question: 'How do you record the actual quantity produced versus what was planned?',
    type: 'multiselect',
    options: [
      'Entered into inventory system after the run',
      'Written on a production record or form',
      'Recorded in Excel',
      'Not formally recorded — we just move finished goods to stock',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q24',
    section: S_YIELD,
    sectionContext: C_YIELD,
    question: 'What happens if the actual yield from a production run is significantly less than expected?',
    type: 'multiselect',
    options: [
      'Variance is recorded in the system',
      'Supervisor is informed and investigates',
      'Stock is adjusted manually',
      'Finance or costing team is notified',
      'Root cause analysis is done formally',
      'No formal process — we just note it informally',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q25',
    section: S_YIELD,
    sectionContext: C_YIELD,
    // KEEP textarea — rework scenarios are too varied; needs narrative
    question: 'Does your team ever rework a batch that did not meet expectations — for example re-mixing, re-filling, or correcting a labelling error? If so, how is that handled?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q26',
    section: S_YIELD,
    sectionContext: C_YIELD,
    question: 'Is production wastage currently tracked in any way for cost purposes?',
    type: 'radio',
    options: [
      'Yes — wastage is formally recorded and costed',
      'Informally — we are aware of it but do not track it precisely',
      'No — it is not tracked at all',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Quality control and batch release ─────────────────────────────────────

  {
    id: 'prod-q27a',
    section: S_QC,
    sectionContext: C_QC,
    // CONVERTED — QC check types are enumerable; when they happen is a separate radio
    question: 'What types of QC checks are carried out on 1st BASE products?',
    type: 'multiselect',
    options: [
      'Visual inspection — appearance, colour, clarity',
      'Weight or volume check',
      'pH or chemical property testing',
      'Microbial or sterility testing',
      'Label accuracy check',
      'Packaging integrity check',
      'Stability or shelf life testing',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q27b',
    section: S_QC,
    sectionContext: C_QC,
    question: 'At which point in the process do QC checks happen?',
    type: 'multiselect',
    options: [
      'During the production run — in-process checks',
      'At the end of the run before finished goods go to stock',
      'After a hold period — e.g. stability or incubation',
      'Only when a customer complaint is received',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q28',
    section: S_QC,
    sectionContext: C_QC,
    question: 'Who performs QC on finished 1st BASE products?',
    type: 'radio',
    options: [
      'Dedicated QC team — completely separate from production',
      'Production team does its own QC',
      'Shared — production does initial checks, QC does final release',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q29',
    section: S_QC,
    sectionContext: C_QC,
    question: 'How are QC results currently recorded?',
    type: 'multiselect',
    options: [
      'Paper QC form or checklist',
      'Excel spreadsheet',
      'Existing system or database',
      'Email or WhatsApp to QC manager',
      'Not formally recorded',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q30',
    section: S_QC,
    sectionContext: C_QC,
    question: 'Is there a formal batch release step — a sign-off that must happen before finished goods can be moved to stock or dispatched to customers?',
    type: 'radio',
    options: [
      'Yes — formal sign-off required before release',
      'Informal — a verbal or WhatsApp approval',
      'No — finished goods go straight to stock after production',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q31',
    section: S_QC,
    sectionContext: C_QC,
    // KEEP textarea — QC failure handling is a process narrative, too situational for chips
    question: 'What happens when a finished goods batch fails QC? Walk me through the process.',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q32',
    section: S_QC,
    sectionContext: C_QC,
    question: 'Do you generate a Certificate of Analysis (COA) for 1st BASE products? If so, how is it currently produced?',
    type: 'radio',
    options: [
      'Yes — generated automatically from a system',
      'Yes — created manually in Word or Excel',
      'Sometimes — only for certain products or customers',
      'No — we do not issue COAs',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q33',
    section: S_QC,
    sectionContext: C_QC,
    question: 'Are there any regulatory or certification requirements that govern how QC records must be kept?',
    type: 'multiselect',
    options: [
      'ISO 9001',
      'ISO 13485',
      'GMP (Good Manufacturing Practice)',
      'MoH or HSA requirements',
      'Customer-specific audit requirements',
      'None that we are aware of',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Lot traceability and genealogy ────────────────────────────────────────

  {
    id: 'prod-q34',
    section: S_LOT,
    sectionContext: C_LOT,
    question: 'Are batch or lot numbers assigned to finished 1st BASE products? If so, how are they generated today?',
    type: 'radio',
    options: [
      'Yes — system-generated automatically',
      'Yes — manually assigned following a naming convention',
      'Yes — manually assigned with no fixed convention',
      'No — we do not currently use batch or lot numbers',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q35',
    section: S_LOT,
    sectionContext: C_LOT,
    question: 'When a production run is completed, do you record which raw material lot numbers were used in that batch?',
    type: 'radio',
    options: [
      'Yes — always recorded formally',
      'Sometimes — not consistently',
      'No — raw material lot numbers are not linked to finished goods',
      'Not sure',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q36',
    section: S_LOT,
    sectionContext: C_LOT,
    // KEEP textarea — traceability capability is a narrative that reveals the real gap
    question: 'If a customer reported a quality issue with a 1st BASE product today, could you trace back which raw material lots were used in that specific batch — and how long would it take?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q37',
    section: S_LOT,
    sectionContext: C_LOT,
    // KEEP textarea — recall events are rare, situational, and need narrative
    question: 'Have you ever needed to recall or quarantine a batch of finished goods? If so, how was it handled?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'prod-q38',
    section: S_LOT,
    sectionContext: C_LOT,
    question: 'Some raw materials arrive in large containers — for example a drum of solvent — that get split into smaller quantities for different production runs. How is this currently tracked?',
    type: 'multiselect',
    options: [
      'The remaining quantity in the drum is updated in the system',
      'It is tracked manually in Excel or on paper',
      'We assign a new internal lot number when we split',
      'It is not tracked — we just use from the container until it is empty',
      'This does not apply to our materials',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q39a',
    section: S_LOT,
    sectionContext: C_LOT,
    // CONVERTED — retention period is a radio; storage location is a multiselect
    question: 'How long are production and lot records required to be retained?',
    type: 'radio',
    options: [
      'Less than 1 year',
      '1 to 3 years',
      '3 to 5 years',
      'More than 5 years',
      'No defined retention period',
      'Not sure',
    ],
    required: true,
  },
  {
    id: 'prod-q39b',
    section: S_LOT,
    sectionContext: C_LOT,
    question: 'Where are production and lot records currently stored?',
    type: 'multiselect',
    options: [
      'Physical paper files on-site',
      'Excel files on a shared drive',
      'An existing system or database',
      'Email archives',
      'Cloud storage — e.g. Google Drive or OneDrive',
      'Not stored systematically',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Raw material management ───────────────────────────────────────────────

  {
    id: 'prod-q40',
    section: S_RM,
    sectionContext: C_RM,
    question: 'How does your team know when raw materials need to be replenished?',
    type: 'multiselect',
    options: [
      'System alert or notification',
      'Minimum stock level threshold we track manually',
      'Based on experience or gut feel',
      'Visual check of physical stock',
      'Reviewed during production planning',
      'Weekly or monthly review meeting',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q41a',
    section: S_RM,
    sectionContext: C_RM,
    // CONVERTED — who they inform is predictable; how they inform is also enumerable
    question: 'When raw materials run low, who do you inform?',
    type: 'multiselect',
    options: [
      'Procurement team',
      'Warehouse team',
      'Production manager',
      'Operations director',
      'We handle it ourselves without informing others',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q41b',
    section: S_RM,
    sectionContext: C_RM,
    question: 'How do you communicate that a raw material needs replenishing?',
    type: 'multiselect',
    options: [
      'WhatsApp message',
      'Email',
      'Verbal — walk over or phone call',
      'Raise a request in the system',
      'Fill in a paper requisition form',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q42',
    section: S_RM,
    sectionContext: C_RM,
    // KEEP textarea — stockout root causes are situational and reveal real process gaps
    question: 'Has a production run ever been delayed or stopped because raw materials were unavailable? What caused it?',
    type: 'textarea',
    required: true,
  },

  // ── Unit of measurement and stock classification ───────────────────────────

  {
    id: 'prod-q43',
    section: S_UOM,
    sectionContext: C_UOM,
    // CONVERTED — common UOMs are enumerable; Other captures anything unusual
    question: 'Which units of measurement does your team use when recording raw material stock? Select all that apply.',
    type: 'multiselect',
    options: [
      'Litres (L) or millilitres (mL)',
      'Kilograms (kg) or grams (g)',
      'Pieces or units',
      'Bottles or vials',
      'Packs or sachets',
      'Cases or cartons',
      'Drums or containers',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q44',
    section: S_UOM,
    sectionContext: C_UOM,
    // KEEP textarea — the conversion specifics (which items, what factor) need free text
    question: 'Are there items where the purchase unit and the stock unit are different — for example you receive a drum of 20 litres but record stock in millilitres? If so, which items and what is the conversion?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q45',
    section: S_UOM,
    sectionContext: C_UOM,
    // KEEP textarea — error narratives reveal real system design needs
    question: 'Has a unit of measurement mismatch ever caused a stock error or a production problem? What happened?',
    type: 'textarea',
    required: false,
  },
  {
    id: 'prod-q46',
    section: S_UOM,
    sectionContext: C_UOM,
    question: 'When you set a minimum stock level or reorder point for a raw material, which unit of measurement do you use?',
    type: 'radio',
    options: [
      'Purchase unit — how it comes from the supplier',
      'Stock unit — how we record it internally',
      'Both — we track in both units',
      'We do not currently set minimum stock levels',
      'Not sure',
    ],
    required: true,
  },

  // ── The data pipeline ─────────────────────────────────────────────────────

  {
    id: 'prod-q47',
    section: S_DATA,
    sectionContext: C_DATA,
    // KEEP textarea — system navigation patterns are unique to each person's role
    question: 'Your inventory currently sits across multiple systems. From your team\'s perspective, can you describe how you move between these systems in a typical day?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q48',
    section: S_DATA,
    sectionContext: C_DATA,
    // KEEP textarea — consistency mechanisms vary and need explanation
    question: 'Are there items that exist in more than one system — and if so, how do you ensure the numbers stay consistent?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q49',
    section: S_DATA,
    sectionContext: C_DATA,
    // KEEP textarea — reclassification process is specific to Axil's setup
    question: 'Are there items that can be reclassified — for example between indent and ex-stock — and how does that currently happen?',
    type: 'textarea',
    required: true,
  },

  // ── Current system and rebuild ─────────────────────────────────────────────

  {
    id: 'prod-q50',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    // KEEP textarea — what people value is unpredictable and revealing
    question: 'What does the current system do well for your team that you would not want to lose in the new system?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q51',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    // KEEP textarea — frustrations need to be in their own words
    question: 'What does the current system not do well, or not do at all, that causes the most frustration for your team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q52',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    // CONVERTED — failure reasons for prior proposals are largely predictable
    question: 'Previous proposals for a new system were considered but not pursued. What do you think went wrong?',
    type: 'multiselect',
    options: [
      'Cost was too high',
      'System was too complex for the team',
      'Did not fit our actual workflow',
      'Management did not prioritise it',
      'Change was too disruptive to daily operations',
      'No one owned the implementation',
      'We were not consulted in the decision',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q53',
    section: S_REBUILD,
    sectionContext: C_REBUILD,
    // CONVERTED — priority areas are enumerable; this gives us quantifiable data
    question: 'We are rebuilding everything from scratch. What is the single most important thing the new system must get right for the production team?',
    type: 'radio',
    options: [
      'Accurate real-time raw material stock levels',
      'Clear production orders and scheduling',
      'Full lot traceability from raw material to finished goods',
      'Streamlined QC and batch release workflow',
      'Automatic stock updates when materials are issued or received',
      'Visibility of yield and wastage per run',
      'Reducing manual data entry and duplication',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────

  {
    id: 'prod-q54',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What part of your team\'s work takes the most time but feels like it should not be manual?',
    type: 'multiselect',
    options: [
      'Manual data entry across multiple systems',
      'Chasing approvals or sign-offs',
      'Stock counting and reconciliation',
      'Preparing production reports or summaries',
      'Coordinating with warehouse or procurement',
      'Locating raw materials in the warehouse',
      'Creating or updating production records',
      'Tracking which raw materials are running low',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'prod-q55',
    section: S_PAIN,
    sectionContext: C_PAIN,
    // KEEP textarea — this is a high-value narrative question; reveals real stockout stories
    question: 'Has there ever been a situation where your team did not have an accurate picture of raw material stock before starting a production run? What happened?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'prod-q56',
    section: S_PAIN,
    sectionContext: C_PAIN,
    // KEEP textarea — open wish-list; should not be constrained by chips
    question: 'If you could fix one thing about how production is managed today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────

  {
    id: 'prod-q57',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how your team works that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default productionQuestions;
