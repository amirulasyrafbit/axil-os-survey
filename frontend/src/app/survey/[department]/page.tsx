import { notFound } from 'next/navigation';
import { getDepartment } from '@/lib/questions';
import SurveyPageClient from './SurveyPageClient';

interface PageProps {
  params: { department: string };
  searchParams: { responseId?: string; name?: string };
}

export default function SurveyPage({ params, searchParams }: PageProps) {
  const dept = getDepartment(params.department);
  if (!dept) notFound();

  const { responseId, name } = searchParams;
  if (!responseId) notFound();

  return (
    <SurveyPageClient
      department={dept}
      responseId={responseId}
      respondentName={name ?? ''}
    />
  );
}
