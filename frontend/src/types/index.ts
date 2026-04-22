// ─── Question & Department ────────────────────────────────────────────────────

export type QuestionType = 'text' | 'textarea' | 'number' | 'select' | 'radio' | 'multiselect';

export interface Question {
  id: string;
  section: string;
  sectionContext: string;
  question: string;
  type: QuestionType;
  options?: string[];
  required: boolean;
}

export type DepartmentId =
  | 'production'
  | 'warehouse'
  | 'qc'
  | 'finance'
  | 'customer-care'
  | 'procurement'
  | 'pre-sales'
  | 'courier';

export interface Department {
  id: DepartmentId;
  label: string;
  questions: Question[];
}

// ─── Survey State ─────────────────────────────────────────────────────────────

export interface SurveyMeta {
  department: DepartmentId;
  respondentName: string;
  respondentEmail: string;
}

export interface SurveyStateShape {
  meta: SurveyMeta | null;
  answers: Record<string, string>;
  currentIndex: number;
  responseId: string | null;
  showSectionTransition: boolean;
}

// ─── Database Row (matches Prisma generated type) ────────────────────────────

export interface SurveyResponse {
  id: string;
  createdAt: string;     // ISO string (serialised from Date)
  updatedAt: string;     // ISO string (serialised from Date)
  department: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  completed: boolean;
}

// ─── API Payloads ─────────────────────────────────────────────────────────────

export interface CreateResponsePayload {
  department: string;
  respondentName: string;
  respondentEmail: string;
}

export interface UpdateResponsePayload {
  id: string;
  answers: Record<string, string>;
  completed?: boolean;
}

// ─── Admin ────────────────────────────────────────────────────────────────────

export interface AdminLoginPayload {
  password: string;
}
