'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Question } from '@/types';

interface UseSurveyStateOptions {
  questions: Question[];
  responseId: string | null;
}

export type SurveyPhase = 'answering' | 'section-transition' | 'submitting' | 'done';

interface SurveyState {
  currentIndex: number;
  answers: Record<string, string>;
  phase: SurveyPhase;
  isSaving: boolean;
  saveError: string | null;
}

interface UseSurveyStateReturn extends SurveyState {
  currentQuestion: Question;
  totalQuestions: number;
  isFirst: boolean;
  isLast: boolean;
  isNewSection: boolean;
  nextSectionTitle: string | null;
  nextSectionContext: string | null;
  // Section-level progress
  currentSectionIdx: number;   // 0-based
  totalSections: number;
  questionIndexInSection: number; // 0-based
  totalQuestionsInSection: number;
  // Actions
  setAnswer: (questionId: string, value: string) => void;
  handleNext: () => Promise<void>;
  handleBack: () => void;
  handleSectionContinue: () => void;
}

export function useSurveyState({
  questions,
  responseId,
}: UseSurveyStateOptions): UseSurveyStateReturn {
  const [state, setState] = useState<SurveyState>({
    currentIndex: 0,
    answers: {},
    phase: 'answering',
    isSaving: false,
    saveError: null,
  });

  // Pending index when a section transition is active
  const pendingIndexRef = useRef<number>(0);

  const currentQuestion = questions[state.currentIndex];
  const totalQuestions = questions.length;

  // Build ordered section list once
  const sections = useMemo(() => {
    const result: Array<{ name: string; start: number; count: number }> = [];
    questions.forEach((q) => {
      const last = result[result.length - 1];
      if (!last || last.name !== q.section) {
        result.push({ name: q.section, start: result.reduce((acc, s) => acc + s.count, 0), count: 1 });
      } else {
        last.count++;
      }
    });
    return result;
  }, [questions]);

  const currentSectionIdx = sections.findIndex(
    (s) => state.currentIndex >= s.start && state.currentIndex < s.start + s.count
  );
  const currentSectionData = sections[Math.max(0, currentSectionIdx)];
  const questionIndexInSection = state.currentIndex - (currentSectionData?.start ?? 0);
  const totalQuestionsInSection = currentSectionData?.count ?? 0;

  // Detect whether moving forward would enter a new section
  const isNewSection = useCallback(
    (fromIndex: number, toIndex: number): boolean => {
      if (toIndex >= questions.length) return false;
      return questions[toIndex].section !== questions[fromIndex].section;
    },
    [questions]
  );

  const saveProgress = useCallback(
    async (answers: Record<string, string>, completed = false) => {
      if (!responseId) return;
      try {
        await fetch('/api/responses', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: responseId, answers, completed }),
        });
      } catch {
        // Non-blocking — progress is best-effort
      }
    },
    [responseId]
  );

  const setAnswer = useCallback((questionId: string, value: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  }, []);

  const handleNext = useCallback(async () => {
    const { currentIndex, answers } = state;
    const nextIndex = currentIndex + 1;

    // Persist current answers
    await saveProgress(answers);

    if (nextIndex >= questions.length) {
      // Final question — mark complete
      setState((prev) => ({ ...prev, phase: 'submitting', isSaving: true }));
      await saveProgress(answers, true);
      setState((prev) => ({ ...prev, phase: 'done', isSaving: false }));
      return;
    }

    if (isNewSection(currentIndex, nextIndex)) {
      pendingIndexRef.current = nextIndex;
      setState((prev) => ({ ...prev, phase: 'section-transition' }));
    } else {
      setState((prev) => ({ ...prev, currentIndex: nextIndex }));
    }
  }, [state, questions.length, isNewSection, saveProgress]);

  const handleBack = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.max(0, prev.currentIndex - 1),
      phase: 'answering',
    }));
  }, []);

  const handleSectionContinue = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: pendingIndexRef.current,
      phase: 'answering',
    }));
  }, []);

  // Restore answers from DB on mount (resume support)
  useEffect(() => {
    if (!responseId) return;
    fetch(`/api/responses?id=${responseId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.answers && Object.keys(data.answers).length > 0) {
          const answeredCount = Object.keys(data.answers).length;
          const resumeIndex = Math.min(answeredCount, questions.length - 1);
          setState((prev) => ({
            ...prev,
            answers: data.answers,
            currentIndex: resumeIndex,
          }));
        }
      })
      .catch(() => {});
  }, [responseId, questions.length]);

  // Compute section transition info
  const nextIndex = pendingIndexRef.current;
  const nextSectionTitle =
    state.phase === 'section-transition' ? questions[nextIndex]?.section ?? null : null;
  const nextSectionContext =
    state.phase === 'section-transition' ? questions[nextIndex]?.sectionContext ?? null : null;

  return {
    ...state,
    currentQuestion,
    totalQuestions,
    isFirst: state.currentIndex === 0,
    isLast: state.currentIndex === questions.length - 1,
    isNewSection: isNewSection(state.currentIndex, state.currentIndex + 1),
    nextSectionTitle,
    nextSectionContext,
    currentSectionIdx: Math.max(0, currentSectionIdx),
    totalSections: sections.length,
    questionIndexInSection,
    totalQuestionsInSection,
    setAnswer,
    handleNext,
    handleBack,
    handleSectionContinue,
  };
}
