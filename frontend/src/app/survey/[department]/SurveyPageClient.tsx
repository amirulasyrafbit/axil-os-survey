'use client';

import PageWrapper from '@/components/layout/PageWrapper';
import SurveyShell from '@/components/survey/SurveyShell';
import { Department } from '@/types';

interface SurveyPageClientProps {
  department: Department;
  responseId: string;
  respondentName: string;
}

export default function SurveyPageClient({
  department,
  responseId,
  respondentName,
}: SurveyPageClientProps) {
  return (
    <PageWrapper>
      <SurveyShell
        questions={department.questions}
        responseId={responseId}
        respondentName={respondentName}
      />
    </PageWrapper>
  );
}
