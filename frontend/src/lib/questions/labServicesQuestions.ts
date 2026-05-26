import { Question } from '@/types';

const S_TEAM = 'About your team';
const C_TEAM = 'We want to understand who does what in the lab services team so we can design the right roles, permissions, and workflows for your team in the new system.';

const S_JOBS = 'Job flow — from enquiry to results';
const C_JOBS = 'We need to understand how a lab job moves from the moment a customer contacts you to the moment results are delivered. This end-to-end flow is what we will be building the job management module around.';

const S_SAMPLES = 'Sample receiving and tracking';
const C_SAMPLES = 'Sample management is the operational core of lab services. Understanding how samples are received, labelled, stored, and linked to jobs tells us how much of this needs to be in the system versus handled manually.';

const S_SERVICES = 'Service types and complexity';
const C_SERVICES = 'You offer a wide range of services — from Sanger sequencing to proteomics. We need to understand how different they are operationally so we can design a job system flexible enough to handle all of them without being overcomplicated.';

const S_RESULTS = 'Results and reporting';
const C_RESULTS = 'How results are prepared, reviewed, and delivered to customers directly shapes the customer portal and results module we will build. We want to understand the current process and where it causes the most friction.';

const S_CUSTOMER = 'Customer communication and portal';
const C_CUSTOMER = 'Understanding how customers currently interact with your team — from submitting jobs to receiving results — tells us what the customer-facing side of the platform needs to do.';

const S_INVOICE = 'Invoicing and finance';
const C_INVOICE = 'We need to understand how a completed job becomes an invoice so we can design the right handoff between the job management module and the finance system.';

const S_SYSTEMS = 'Current systems and data';
const C_SYSTEMS = 'Understanding what tools the lab services team uses today — and where data currently lives — tells us what we are replacing, what we are integrating, and where the biggest gaps are.';

const S_PAIN = 'Pain points';
const C_PAIN = 'This is the most important section. Your honest answers here directly shape what we prioritise building first for the lab services team.';

const S_OPEN = 'Open';
const C_OPEN = 'Anything you share here that we have not already covered will help us prepare a better proposal.';

const labServicesQuestions: Question[] = [

  // ── About your team ───────────────────────────────────────────────────────

  {
    id: 'lab-q1',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'What is your role in the lab services team, and what are you responsible for day to day?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q2',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'How many people work in the lab services team in total?',
    type: 'number',
    required: true,
  },
  {
    id: 'lab-q3',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Are there distinct sub-teams or specialists — for example, one team for sequencing and another for molecular biology?',
    type: 'radio',
    options: [
      'Yes — clearly separated by service type',
      'Yes — loosely separated but people cross over',
      'No — everyone handles all service types',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q4',
    section: S_TEAM,
    sectionContext: C_TEAM,
    question: 'Who is the primary point of contact for customers when they have a question about their job?',
    type: 'multiselect',
    options: [
      'A dedicated customer service or admin person',
      'The scientist or analyst handling the job',
      'The lab manager',
      'Whoever picks up the email or phone',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Job flow — from enquiry to results ────────────────────────────────────

  {
    id: 'lab-q5',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'Walk me through how a typical lab job is handled — from the moment a customer contacts you to the moment results are sent out. What happens at each step?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q6',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'How do customers currently place a job request?',
    type: 'multiselect',
    options: [
      'Email directly to the lab team',
      'Through the AxillentHub portal',
      'Phone call',
      'Walk in with samples',
      'Via a sales representative',
      'Online order form',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q7',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'Is there a formal job acceptance or confirmation step — where you confirm to the customer that their job has been received and will proceed?',
    type: 'radio',
    options: [
      'Yes — a formal confirmation is always sent',
      'Sometimes — depends on the service or customer',
      'No — we just start the job when samples arrive',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q8',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'Is a quotation required before a job proceeds — and if so, who prepares it?',
    type: 'radio',
    options: [
      'Yes — always, and the customer must approve before we proceed',
      'Yes — for custom or non-standard jobs only',
      'No — pricing is fixed and listed, no quote needed',
      'Depends on the customer — some have contracts, some need quotes',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q9',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'How is each job assigned to the right team member or analyst?',
    type: 'multiselect',
    options: [
      'Lab manager assigns jobs manually',
      'Self-assigned — analysts pick up jobs based on capacity',
      'Automatically routed by service type',
      'Based on who is available that day',
      'No formal assignment — whoever is free does it',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q10',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'What is the typical turnaround time for your most common service types?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q11',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'How many jobs does the lab services team handle per month, roughly?',
    type: 'radio',
    options: [
      'Fewer than 50',
      '50 to 150',
      '150 to 500',
      'More than 500',
      'Not sure',
    ],
    required: true,
  },
  {
    id: 'lab-q12',
    section: S_JOBS,
    sectionContext: C_JOBS,
    question: 'Are there jobs that span multiple service types — for example, a customer needs sample preparation and then sequencing? How are those handled?',
    type: 'textarea',
    required: true,
  },

  // ── Sample receiving and tracking ─────────────────────────────────────────

  {
    id: 'lab-q13',
    section: S_SAMPLES,
    sectionContext: C_SAMPLES,
    question: 'How are samples physically received — and who is responsible for receiving them?',
    type: 'multiselect',
    options: [
      'Courier delivery — received by lab team',
      'Courier delivery — received by warehouse or admin',
      'Walk-in drop-off by customer',
      'Collected by our team from the customer site',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q14',
    section: S_SAMPLES,
    sectionContext: C_SAMPLES,
    question: 'When a sample arrives, how is it linked to the job it belongs to?',
    type: 'multiselect',
    options: [
      'Customer labels the sample with a job or reference number',
      'We assign an internal sample ID when it arrives',
      'We match it to an email or submission form',
      'Barcode or QR code scan',
      'Manually matched by the receiving person',
      'It is not always clear — this causes problems sometimes',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q15',
    section: S_SAMPLES,
    sectionContext: C_SAMPLES,
    question: 'Is the condition of the sample checked and recorded when it arrives — for example temperature, integrity, or quantity?',
    type: 'radio',
    options: [
      'Yes — always checked and formally recorded',
      'Yes — checked but only noted informally',
      'Sometimes — depends on the service type',
      'No — samples go straight to processing',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q16',
    section: S_SAMPLES,
    sectionContext: C_SAMPLES,
    question: 'What happens when a sample arrives in poor condition or is insufficient for the requested service?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q17',
    section: S_SAMPLES,
    sectionContext: C_SAMPLES,
    question: 'How are samples stored between receipt and processing — and is storage tracked?',
    type: 'multiselect',
    options: [
      'Refrigerated storage — 2 to 8°C',
      'Frozen storage — -20°C or -80°C',
      'Room temperature',
      'Storage location is logged in a system',
      'Storage location is written on a form or log',
      'Storage is not formally tracked',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q18',
    section: S_SAMPLES,
    sectionContext: C_SAMPLES,
    question: 'What is the sample retention policy after a job is completed — how long are samples kept and then what happens to them?',
    type: 'textarea',
    required: true,
  },

  // ── Service types and complexity ──────────────────────────────────────────

  {
    id: 'lab-q19',
    section: S_SERVICES,
    sectionContext: C_SERVICES,
    question: 'Which of the following services does your team currently provide? Select all that apply.',
    type: 'multiselect',
    options: [
      'Standard Sanger Sequencing',
      'Sequencing+ PLUS',
      'Ready to Load Sequencing',
      'Primer Walking',
      'Whole Plasmid Sequencing',
      'Next-Generation Sequencing (NGS)',
      'Bioinformatics Analysis',
      'Sample Preparation',
      'PCR Services',
      'Cloning and Synthetic Biology',
      'DNA Barcoding',
      'Custom Research',
      'Standard Fragment Analysis',
      'Mycoplasma Detection',
      'Human Cell Line Authentication',
      'Avian DNA Testing',
      'Peptide Synthesis',
      'Proteomics Services',
      'Antibody Production',
      'Metabolomics Services',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q20',
    section: S_SERVICES,
    sectionContext: C_SERVICES,
    question: 'Which three services make up the highest volume of jobs per month?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q21',
    section: S_SERVICES,
    sectionContext: C_SERVICES,
    question: 'Are there services that are significantly more complex to manage operationally — more steps, longer turnaround, or more coordination required?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q22',
    section: S_SERVICES,
    sectionContext: C_SERVICES,
    question: 'Are there services that are outsourced to a third-party lab — and if so, how is that coordination currently managed?',
    type: 'radio',
    options: [
      'Yes — some services are outsourced, managed by email',
      'Yes — some services are outsourced, managed through a portal or system',
      'No — all services are performed in-house',
      'Not sure',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q23',
    section: S_SERVICES,
    sectionContext: C_SERVICES,
    question: 'Do different service types follow materially different workflows — or is the job flow broadly the same regardless of service type?',
    type: 'radio',
    options: [
      'Broadly the same — most services follow the same flow',
      'Somewhat different — a few services have unique steps',
      'Very different — each service type has its own distinct process',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Results and reporting ─────────────────────────────────────────────────

  {
    id: 'lab-q24',
    section: S_RESULTS,
    sectionContext: C_RESULTS,
    question: 'How are results currently prepared and reviewed before being sent to the customer?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q25',
    section: S_RESULTS,
    sectionContext: C_RESULTS,
    question: 'Is there a formal review or sign-off step before results are released to the customer?',
    type: 'radio',
    options: [
      'Yes — results must be approved by a senior scientist or manager',
      'Yes — but it is informal, not tracked in any system',
      'No — results go straight to the customer after analysis',
      'Depends on the service type',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q26',
    section: S_RESULTS,
    sectionContext: C_RESULTS,
    question: 'In what format are results delivered to customers?',
    type: 'multiselect',
    options: [
      'PDF report emailed directly',
      'Raw data files — e.g. FASTQ, ab1, Excel',
      'Link to an online portal or dashboard',
      'Printed report handed over in person',
      'Results embedded in an email body',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q27',
    section: S_RESULTS,
    sectionContext: C_RESULTS,
    question: 'How are results currently stored after they are sent to the customer — and for how long?',
    type: 'multiselect',
    options: [
      'Stored on a local server or NAS',
      'Stored on cloud storage — e.g. Google Drive, OneDrive',
      'Stored in an existing LIMS or lab system',
      'Stored in email archives only',
      'Not stored systematically after delivery',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q28',
    section: S_RESULTS,
    sectionContext: C_RESULTS,
    question: 'Has a customer ever had trouble retrieving or accessing past results — and how was it handled?',
    type: 'textarea',
    required: false,
  },

  // ── Customer communication and portal ─────────────────────────────────────

  {
    id: 'lab-q29',
    section: S_CUSTOMER,
    sectionContext: C_CUSTOMER,
    question: 'How do customers currently find out the status of their job while it is in progress?',
    type: 'multiselect',
    options: [
      'They email or call us to ask',
      'We proactively send status updates',
      'They check the AxillentHub portal',
      'They do not — they just wait for results',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q30',
    section: S_CUSTOMER,
    sectionContext: C_CUSTOMER,
    question: 'How often do customers contact the lab team to ask for a job status update?',
    type: 'radio',
    options: [
      'Very frequently — it is a significant part of our workload',
      'Occasionally — a few times a week',
      'Rarely — customers mostly wait for results',
      'Almost never',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q31',
    section: S_CUSTOMER,
    sectionContext: C_CUSTOMER,
    question: 'Do customers currently have a way to view their past jobs, results, or invoices online without contacting your team?',
    type: 'radio',
    options: [
      'Yes — through AxillentHub',
      'Partially — some information is available but not everything',
      'No — they need to contact us for everything',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q32',
    section: S_CUSTOMER,
    sectionContext: C_CUSTOMER,
    question: 'Are there customers who submit jobs in bulk or on a recurring basis — and do they have any special handling or pricing?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q33',
    section: S_CUSTOMER,
    sectionContext: C_CUSTOMER,
    question: 'What are the most common complaints or frustrations customers express about the current service experience?',
    type: 'multiselect',
    options: [
      'Slow turnaround time',
      'No visibility on job status',
      'Difficulty reaching someone for updates',
      'Results format is hard to interpret',
      'Invoicing errors or delays',
      'Difficulty reordering or repeating a previous job',
      'No easy way to access past results',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Invoicing and finance ─────────────────────────────────────────────────

  {
    id: 'lab-q34',
    section: S_INVOICE,
    sectionContext: C_INVOICE,
    question: 'How does a completed job currently become an invoice — who triggers it and what system is used?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q35',
    section: S_INVOICE,
    sectionContext: C_INVOICE,
    question: 'When is the customer invoiced for a lab service?',
    type: 'radio',
    options: [
      'Before the job starts — upfront payment required',
      'When results are delivered',
      'At end of month for all jobs in that period',
      'Based on a purchase order from the customer',
      'Varies by customer or contract',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q36',
    section: S_INVOICE,
    sectionContext: C_INVOICE,
    question: 'Are there customers on contract pricing or special rates — and how is that currently managed?',
    type: 'radio',
    options: [
      'Yes — contract pricing is tracked in a system',
      'Yes — contract pricing is tracked manually or in Excel',
      'No — everyone is on the same published pricing',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q37',
    section: S_INVOICE,
    sectionContext: C_INVOICE,
    question: 'Are there jobs where the final price differs from the initial quote — for example additional samples or repeat runs? How is that handled?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q38',
    section: S_INVOICE,
    sectionContext: C_INVOICE,
    question: 'How are credit notes or refunds handled when a job does not produce usable results?',
    type: 'textarea',
    required: true,
  },

  // ── Current systems and data ──────────────────────────────────────────────

  {
    id: 'lab-q39',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'What systems or tools does the lab services team currently use to manage jobs day to day?',
    type: 'multiselect',
    options: [
      'AxillentHub — the existing service portal',
      'Email — Gmail or Outlook',
      'Excel spreadsheets',
      'A LIMS (Laboratory Information Management System)',
      'Shared Word documents or Google Docs',
      'WhatsApp',
      'Paper forms or logbooks',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q40',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'What does AxillentHub currently do well for your team?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q41',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'What does AxillentHub not do well, or not do at all, that causes friction for your team or your customers?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q42',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'Is there any job data — past results, customer history, pricing — that currently exists only in email, Excel, or someone\'s head that we would need to migrate into the new system?',
    type: 'radio',
    options: [
      'Yes — significant historical data exists outside any system',
      'Some — a moderate amount in spreadsheets or email',
      'Not much — most data is already in AxillentHub',
      'Not sure',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q43',
    section: S_SYSTEMS,
    sectionContext: C_SYSTEMS,
    question: 'Are there any instruments or lab equipment that currently generate data files that need to be linked to job records — for example sequencers outputting ab1 or FASTQ files?',
    type: 'radio',
    options: [
      'Yes — and this is currently done manually',
      'Yes — and it is partially automated',
      'No — data files are managed separately from job records',
      'Not applicable',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },

  // ── Pain points ───────────────────────────────────────────────────────────

  {
    id: 'lab-q44',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'What part of the lab services workflow takes the most time but feels like it should not be manual?',
    type: 'multiselect',
    options: [
      'Logging and tracking incoming samples',
      'Assigning jobs to the right analyst',
      'Updating customers on job status',
      'Preparing and formatting results for delivery',
      'Creating invoices after job completion',
      'Chasing payment or following up on purchase orders',
      'Searching for past results or job records',
      'Coordinating with outsourced labs',
      'Other (please specify)',
    ],
    hasOther: true,
    required: true,
  },
  {
    id: 'lab-q45',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'Has a job ever been lost, delayed, or duplicated because of a system or communication gap? What happened?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'lab-q46',
    section: S_PAIN,
    sectionContext: C_PAIN,
    question: 'If you could fix one thing about how lab services jobs are managed today, what would it be?',
    type: 'textarea',
    required: true,
  },

  // ── Open ──────────────────────────────────────────────────────────────────

  {
    id: 'lab-q47',
    section: S_OPEN,
    sectionContext: C_OPEN,
    question: 'Is there anything else about how lab services operates that you think we should know before we prepare our proposal?',
    type: 'textarea',
    required: false,
  },
];

export default labServicesQuestions;
