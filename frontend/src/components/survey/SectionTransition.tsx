'use client';

import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface SectionTransitionProps {
  sectionTitle: string;
  sectionContext: string;
  onContinue: () => void;
  respondentName?: string;
  sectionNumber?: number;
  totalSections?: number;
}

const ENCOURAGEMENTS = [
  'Keep going',
  'Great answers so far',
  'You\'re making great progress',
  'Halfway there',
  'Nearly done',
];

export default function SectionTransition({
  sectionTitle,
  sectionContext,
  onContinue,
  respondentName,
  sectionNumber,
  totalSections,
}: SectionTransitionProps) {
  const firstName = respondentName?.split(' ')[0];

  // Pick an encouragement phrase based on section number
  const encouragement = sectionNumber && totalSections
    ? sectionNumber >= totalSections
      ? 'Nearly done'
      : sectionNumber >= Math.ceil(totalSections / 2)
      ? 'Halfway there'
      : ENCOURAGEMENTS[Math.min(sectionNumber - 1, ENCOURAGEMENTS.length - 1)]
    : null;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      <Box
        bg="white"
        borderRadius="20px"
        border="1px solid"
        borderColor="secondaryGray.100"
        boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.04)"
        p={{ base: 8, md: 10 }}
      >
        <VStack align="flex-start" spacing={5}>

          {/* Section counter + encouragement */}
          <Flex align="center" gap={2} flexWrap="wrap">
            {sectionNumber && totalSections && (
              <Box bg="secondaryGray.300" borderRadius="full" px={3} py={0.5}>
                <Text fontSize="10px" fontWeight="700" color="secondaryGray.700" textTransform="uppercase" letterSpacing="wider">
                  Section {sectionNumber} of {totalSections}
                </Text>
              </Box>
            )}
            {encouragement && (
              <Box bg="brand.50" borderRadius="full" px={3} py={0.5}>
                <Text fontSize="10px" fontWeight="700" color="brand.600" textTransform="uppercase" letterSpacing="wider">
                  {encouragement}
                </Text>
              </Box>
            )}
          </Flex>

          {/* Personalised heading */}
          <Box>
            {firstName && (
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.500"
                mb={1}
              >
                Nice work, {firstName}.
              </Text>
            )}
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="700"
              color="navy.700"
              lineHeight="1.25"
              letterSpacing="-0.5px"
            >
              {sectionTitle}
            </Text>
          </Box>

          {/* Section context */}
          <Box
            bg="secondaryGray.300"
            borderRadius="12px"
            p={4}
            borderLeft="3px solid"
            borderColor="brand.300"
            w="full"
          >
            <Text fontSize="sm" color="secondaryGray.700" lineHeight="1.8" fontWeight="400">
              {sectionContext}
            </Text>
          </Box>

          <Button
            onClick={onContinue}
            size="lg"
            h="50px"
            px={8}
            mt={2}
            fontSize="sm"
            fontWeight="600"
            rightIcon={<Arrow />}
          >
            Let&apos;s go
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
