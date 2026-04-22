import { SurveyResponse } from '@/types';
import { getDepartment } from '@/lib/questions';

export function exportResponsesAsCsv(responses: SurveyResponse[]): string {
  if (responses.length === 0) return '';

  // Collect all unique question IDs across all responses
  const allQuestionIds = new Set<string>();
  responses.forEach((r) => {
    Object.keys(r.answers ?? {}).forEach((k) => allQuestionIds.add(k));
  });

  const questionIds = Array.from(allQuestionIds).sort();

  const fixedHeaders = [
    'id',
    'department',
    'respondent_name',
    'respondent_email',
    'completed',
    'created_at',
    'updated_at',
  ];

  const questionHeaders = questionIds.map((qId) => {
    const prefix = qId.split('-')[0];
    const deptId =
      prefix === 'cc' ? 'customer-care' : prefix === 'ps' ? 'pre-sales' : prefix;
    const dept = getDepartment(deptId);
    const question = dept?.questions.find((q) => q.id === qId);
    return question ? `[${qId}] ${question.question.slice(0, 60)}` : qId;
  });

  const headers = [...fixedHeaders, ...questionHeaders];

  const rows = responses.map((r) => {
    const fixed = [
      r.id,
      r.department,
      r.respondentName,
      r.respondentEmail,
      String(r.completed),
      r.createdAt,
      r.updatedAt,
    ];
    const answers = questionIds.map((qId) => r.answers?.[qId] ?? '');
    return [...fixed, ...answers].map(escapeCsvCell).join(',');
  });

  return [headers.map(escapeCsvCell).join(','), ...rows].join('\n');
}

function escapeCsvCell(value: string): string {
  const str = String(value ?? '');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}
