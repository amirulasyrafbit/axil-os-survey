'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';

function CompleteContent() {
  const params = useSearchParams();
  const name = params.get('name') ?? 'there';

  return (
    <Box maxW="lg" mx="auto">
      <Box
        bg="white"
        borderRadius="20px"
        border="1px solid"
        borderColor="secondaryGray.100"
        boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.04)"
        p={{ base: 8, md: 10 }}
      >
        <VStack align="flex-start" spacing={6}>
          {/* Check icon */}
          <Flex
            align="center"
            justify="center"
            w="56px"
            h="56px"
            bg="brand.50"
            borderRadius="16px"
            border="1px solid"
            borderColor="brand.100"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 13l4 4L19 7"
                stroke="#1D9E75"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Flex>

          <Box>
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="700"
              color="navy.700"
              lineHeight="1.25"
              letterSpacing="-0.5px"
              mb={3}
            >
              Thank you, {name}.
            </Text>
            <Text fontSize="md" color="secondaryGray.700" lineHeight="1.8">
              Your responses have been saved. We will be in touch soon to share
              what we have prepared for your team.
            </Text>
          </Box>

          <Box
            w="full"
            bg="secondaryGray.300"
            borderRadius="12px"
            p={4}
            borderLeft="3px solid"
            borderColor="brand.300"
          >
            <Text fontSize="sm" color="secondaryGray.700" fontWeight="500" lineHeight="1.7">
              Your input directly shapes what we build first for Axil Scientific.
            </Text>
          </Box>

          <Text fontSize="xs" color="secondaryGray.500" fontWeight="500">
            — The Axil OS team
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default function CompletePage() {
  return (
    <PageWrapper>
      <Suspense>
        <CompleteContent />
      </Suspense>
    </PageWrapper>
  );
}
