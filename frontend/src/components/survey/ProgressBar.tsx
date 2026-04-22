'use client';

import { Box, Flex, Text } from '@chakra-ui/react';

interface SurveyProgressBarProps {
  current: number;          // 1-based overall question index
  total: number;            // total questions
  section: string;          // current section name
  sectionNumber: number;    // 1-based
  totalSections: number;
  questionInSection: number;    // 1-based within section
  totalInSection: number;
}

const SECS_PER_QUESTION = 45; // estimated seconds per question

export default function SurveyProgressBar({
  current,
  total,
  section,
  sectionNumber,
  totalSections,
  questionInSection,
  totalInSection,
}: SurveyProgressBarProps) {
  const percent = Math.round((current / total) * 100);
  const remaining = total - current;
  const estMins = Math.max(1, Math.round((remaining * SECS_PER_QUESTION) / 60));
  const timeLabel = remaining <= 1 ? 'Almost done' : `~${estMins} min left`;

  return (
    <Box mb={7}>
      {/* Top row: section pill + time estimate */}
      <Flex justify="space-between" align="center" mb={2}>
        <Flex align="center" gap={2} flexWrap="wrap">
          {/* Section name pill */}
          <Box bg="brand.50" borderRadius="full" px={3} py={0.5}>
            <Text fontSize="10px" fontWeight="700" color="brand.600" textTransform="uppercase" letterSpacing="wider">
              {section}
            </Text>
          </Box>
          {/* Section counter */}
          <Text fontSize="xs" fontWeight="500" color="secondaryGray.600">
            Section {sectionNumber} of {totalSections}
          </Text>
        </Flex>
        {/* Time estimate */}
        <Text fontSize="xs" fontWeight="600" color="secondaryGray.500">
          {timeLabel}
        </Text>
      </Flex>

      {/* Progress bar */}
      <Box bg="secondaryGray.100" borderRadius="full" h="6px" overflow="hidden">
        <Box
          bg="brand.500"
          h="full"
          borderRadius="full"
          w={`${percent}%`}
          transition="width 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        />
      </Box>

      {/* Bottom row: question counter within section */}
      <Flex justify="space-between" align="center" mt={2}>
        <Text fontSize="xs" color="secondaryGray.500" fontWeight="400">
          Question {questionInSection} of {totalInSection} in this section
        </Text>
        <Text fontSize="xs" fontWeight="600" color="secondaryGray.600">
          {current} / {total} total
        </Text>
      </Flex>
    </Box>
  );
}
