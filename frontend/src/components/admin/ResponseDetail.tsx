'use client';

import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { SurveyResponse } from '@/types';
import { Question } from '@/types';
import { getDepartment } from '@/lib/questions';
import { formatDate } from '@/utils/formatDate';
import { isOtherOption, parseMultiSelect } from '@/lib/surveyAnswer';

interface ResponseDetailProps {
  response: SurveyResponse;
  onBack: () => void;
}

function AnswerDisplay({ answer, question }: { answer: string; question: Question }) {
  const ms = parseMultiSelect(answer);

  if (!answer || answer === '—') {
    return <Text fontSize="sm" color="gray.400" fontStyle="italic">No answer provided</Text>;
  }

  const hasOptions = (question.options?.length ?? 0) > 0;

  // Free text types (textarea / text / number) and multiselect with no options
  if (!hasOptions) {
    if (!ms.n.trim()) {
      return <Text fontSize="sm" color="gray.400" fontStyle="italic">No answer provided</Text>;
    }
    return (
      <Text fontSize="sm" color="gray.700" whiteSpace="pre-wrap" lineHeight="1.7">
        {ms.n}
      </Text>
    );
  }

  // Radio / multiselect with options
  const chips    = ms.s.filter(s => !isOtherOption(s));
  const hasOther = ms.s.some(isOtherOption);
  const hasNotes = !!ms.n.trim();

  if (!chips.length && !hasOther && !hasNotes) {
    return <Text fontSize="sm" color="gray.400" fontStyle="italic">No answer provided</Text>;
  }

  return (
    <Box>
      {chips.length > 0 && (
        <Wrap spacing={2} mb={hasOther || hasNotes ? 3 : 0}>
          {chips.map(item => (
            <WrapItem key={item}>
              <Box
                bg="brand.50"
                border="1px solid"
                borderColor="brand.200"
                borderRadius="full"
                px={3}
                py={1}
              >
                <Text fontSize="xs" fontWeight="600" color="brand.700">{item}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      )}

      {hasOther && (
        <Box
          bg="orange.50"
          borderRadius="8px"
          px={3}
          py={2.5}
          mb={hasNotes ? 3 : 0}
          borderLeft="2px solid"
          borderColor="orange.300"
        >
          <Text fontSize="xs" fontWeight="600" color="secondaryGray.700" mb={ms.o ? 1 : 0}>
            {question.otherLabel ?? 'Other'}
          </Text>
          {ms.o && (
            <Text fontSize="sm" color="gray.700" whiteSpace="pre-wrap" lineHeight="1.7">
              {ms.o}
            </Text>
          )}
        </Box>
      )}

      {hasNotes && (
        <Box
          bg="secondaryGray.300"
          borderRadius="8px"
          px={3}
          py={2.5}
          borderLeft="2px solid"
          borderColor="secondaryGray.500"
        >
          <Text fontSize="xs" fontWeight="600" color="secondaryGray.700" mb={1}>
            Additional thoughts
          </Text>
          <Text fontSize="sm" color="gray.700" whiteSpace="pre-wrap" lineHeight="1.7">
            {ms.n}
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default function ResponseDetail({ response, onBack }: ResponseDetailProps) {
  const dept = getDepartment(response.department);

  const sections = dept
    ? dept.questions.reduce<{ section: string; items: { question: Question; answer: string }[] }[]>(
        (acc, q) => {
          const answer = response.answers?.[q.id] ?? '—';
          const existing = acc.find(s => s.section === q.section);
          if (existing) {
            existing.items.push({ question: q, answer });
          } else {
            acc.push({ section: q.section, items: [{ question: q, answer }] });
          }
          return acc;
        },
        []
      )
    : [];

  return (
    <Box>
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        color="gray.500"
        mb={6}
        leftIcon={
          <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
            <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
      >
        Back to all responses
      </Button>

      <Box mb={8}>
        <Heading size="md" mb={2}>{response.respondentName}</Heading>
        <Flex gap={3} wrap="wrap" align="center">
          <Text color="gray.500" fontSize="sm">{response.respondentEmail}</Text>
          <Text color="gray.300">·</Text>
          <Badge colorScheme={response.completed ? 'green' : 'yellow'} borderRadius="full" variant="subtle">
            {response.completed ? 'Complete' : 'In progress'}
          </Badge>
          <Text color="gray.300">·</Text>
          <Text color="gray.400" fontSize="sm">{formatDate(response.createdAt)}</Text>
        </Flex>
      </Box>

      <VStack spacing={10} align="stretch">
        {sections.map(({ section, items }) => (
          <Box key={section}>
            <Text fontSize="xs" fontWeight="700" color="brand.500" textTransform="uppercase" letterSpacing="wider" mb={4}>
              {section}
            </Text>
            <VStack spacing={6} align="stretch">
              {items.map(({ question, answer }, i) => (
                <Box key={i}>
                  <Text fontSize="sm" fontWeight="500" color="gray.700" mb={2}>
                    {question.question}
                  </Text>
                  <Box
                    bg="gray.50"
                    borderRadius="lg"
                    px={4}
                    py={3}
                    borderLeft="3px solid"
                    borderColor={answer === '—' ? 'gray.200' : 'brand.300'}
                  >
                    <AnswerDisplay answer={answer} question={question} />
                  </Box>
                </Box>
              ))}
            </VStack>
            <Divider mt={8} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
