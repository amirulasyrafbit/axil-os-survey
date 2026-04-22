'use client';

import { Box, Button, Flex, Spinner, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '@/types';
import { useSurveyState } from '@/hooks/useSurveyState';
import QuestionCard from './QuestionCard';
import SurveyProgressBar from './ProgressBar';
import SectionTransition from './SectionTransition';

const MotionBox = motion(Box);

interface SurveyShellProps {
  questions: Question[];
  responseId: string;
  respondentName: string;
}

export default function SurveyShell({ questions, responseId, respondentName }: SurveyShellProps) {
  const router = useRouter();
  const [showValidation, setShowValidation] = useState(false);

  const {
    currentIndex,
    currentQuestion,
    totalQuestions,
    answers,
    phase,
    isSaving,
    isFirst,
    isLast,
    nextSectionTitle,
    nextSectionContext,
    currentSectionIdx,
    totalSections,
    questionIndexInSection,
    totalQuestionsInSection,
    setAnswer,
    handleNext,
    handleBack,
    handleSectionContinue,
  } = useSurveyState({ questions, responseId });

  const currentAnswer = answers[currentQuestion?.id ?? ''] ?? '';
  const canProceed = !currentQuestion?.required || currentAnswer.trim().length > 0;

  // Clear validation error as soon as user types something
  useEffect(() => {
    if (showValidation && canProceed) setShowValidation(false);
  }, [canProceed, showValidation]);

  // Reset validation on question change
  useEffect(() => {
    setShowValidation(false);
  }, [currentIndex]);

  const handleNextWithValidation = useCallback(async () => {
    if (!canProceed) {
      setShowValidation(true);
      return;
    }
    setShowValidation(false);
    await handleNext();
  }, [canProceed, handleNext]);

  // Auto-advance handler for radio (called after 420ms delay in QuestionCard)
  const handleAutoAdvance = useCallback(async () => {
    if (canProceed && phase === 'answering') {
      await handleNext();
    }
  }, [canProceed, handleNext, phase]);

  // Keyboard navigation
  useEffect(() => {
    if (phase !== 'answering') return;

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName.toLowerCase();
      const isTextarea = tag === 'textarea';
      const isCmdEnter = e.key === 'Enter' && (e.metaKey || e.ctrlKey);
      const isPlainEnter = e.key === 'Enter' && !e.metaKey && !e.ctrlKey;

      if (isTextarea) {
        // In a textarea: only Cmd/Ctrl+Enter advances
        if (isCmdEnter) {
          e.preventDefault();
          handleNextWithValidation();
        }
      } else {
        // In other inputs: plain Enter advances
        if (isPlainEnter) {
          e.preventDefault();
          handleNextWithValidation();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase, handleNextWithValidation]);

  if (phase === 'done') {
    const firstName = respondentName.split(' ')[0];
    router.push(`/complete?name=${encodeURIComponent(firstName)}`);
    return null;
  }

  if (phase === 'submitting') {
    return (
      <VStack justify="center" align="center" minH="50vh" spacing={4}>
        <Spinner size="xl" color="brand.500" thickness="3px" />
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          Saving your responses…
        </Text>
      </VStack>
    );
  }

  if (phase === 'section-transition' && nextSectionTitle && nextSectionContext) {
    return (
      <SectionTransition
        sectionTitle={nextSectionTitle}
        sectionContext={nextSectionContext}
        onContinue={handleSectionContinue}
        respondentName={respondentName}
        sectionNumber={currentSectionIdx + 2} // +1 for 1-based, +1 because we're entering the next section
        totalSections={totalSections}
      />
    );
  }

  return (
    <Box>
      <SurveyProgressBar
        current={currentIndex + 1}
        total={totalQuestions}
        section={currentQuestion.section}
        sectionNumber={currentSectionIdx + 1}
        totalSections={totalSections}
        questionInSection={questionIndexInSection + 1}
        totalInSection={totalQuestionsInSection}
      />

      {/* Question card */}
      <Box
        bg="white"
        borderRadius="20px"
        border="1px solid"
        borderColor={showValidation ? 'red.200' : 'secondaryGray.100'}
        boxShadow={showValidation
          ? '0px 0px 0px 3px rgba(229, 62, 62, 0.08)'
          : '0px 1px 11px 0px rgba(28, 35, 50, 0.04)'}
        p={{ base: 6, md: 8 }}
        mb={4}
        minH="260px"
        transition="border-color 0.2s, box-shadow 0.2s"
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.26, ease: 'easeInOut' }}
          >
            <QuestionCard
              question={currentQuestion}
              value={currentAnswer}
              onChange={(val) => setAnswer(currentQuestion.id, val)}
              onAutoAdvance={handleAutoAdvance}
            />
          </MotionBox>
        </AnimatePresence>
      </Box>

      {/* Inline validation message */}
      {showValidation && (
        <Box
          bg="red.50"
          border="1px solid"
          borderColor="red.100"
          borderRadius="10px"
          px={4}
          py={3}
          mb={4}
        >
          <Text fontSize="sm" color="red.500" fontWeight="500">
            This question is required — please share your answer before continuing.
          </Text>
        </Box>
      )}

      {/* Navigation */}
      <Flex justify="space-between" align="center">
        <Button
          variant="ghost"
          onClick={handleBack}
          isDisabled={isFirst}
          size="md"
          h="44px"
          px={5}
          color="secondaryGray.700"
          fontSize="sm"
          fontWeight="600"
          leftIcon={<BackArrow />}
          _hover={{ bg: 'secondaryGray.300' }}
        >
          Back
        </Button>

        <Button
          onClick={handleNextWithValidation}
          isLoading={isSaving}
          size="md"
          h="44px"
          px={8}
          fontSize="sm"
          fontWeight="600"
          rightIcon={isLast ? undefined : <ForwardArrow />}
          opacity={canProceed ? 1 : 0.6}
        >
          {isLast ? 'Submit my responses' : 'Next'}
        </Button>
      </Flex>
    </Box>
  );
}

function ForwardArrow() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackArrow() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
      <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
