'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import { DEPARTMENTS } from '@/lib/questions';

type Step = 'department' | 'details';

const ACTIVE_DEPARTMENTS = new Set(['customer-care', 'pre-sales']);

export default function LandingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('department');
  const [department, setDepartment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedDept = DEPARTMENTS.find((d) => d.id === department);

  const handleBegin = async () => {
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email to continue.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          department,
          respondent_name: name.trim(),
          respondent_email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error('Failed to create response');
      const data = await res.json();
      router.push(`/survey/${department}?responseId=${data.id}&name=${encodeURIComponent(name.trim())}`);
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <VStack align="stretch" spacing={8} maxW="xl" mx="auto">

        {/* Hero */}
        <Box>
          <Flex align="center" gap={2} mb={4}>
            <Box w="8px" h="8px" bg="brand.500" borderRadius="full" />
            <Text fontSize="xs" fontWeight="700" color="brand.500" textTransform="uppercase" letterSpacing="widest">
              Axil Scientific · Internal Survey
            </Text>
          </Flex>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="700"
            color="navy.700"
            lineHeight="1.25"
            mb={3}
          >
            Help us build the right system for your team.
          </Heading>
          <Text fontSize="md" color="secondaryGray.700" lineHeight="1.8" maxW="md">
            This takes about 10–15 minutes. Your answers shape what we build first.
          </Text>
        </Box>

        {/* Step 1 — Department */}
        {step === 'department' && (
          <Box
            bg="white"
            borderRadius="16px"
            border="1px solid"
            borderColor="secondaryGray.100"
            boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.04)"
            p={{ base: 6, md: 8 }}
          >
            <Text fontWeight="700" fontSize="sm" color="navy.700" mb={5} textTransform="uppercase" letterSpacing="wider">
              Select your department
            </Text>
            <Grid templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }} gap={3}>
              {DEPARTMENTS.map((dept) => {
                const isActive = ACTIVE_DEPARTMENTS.has(dept.id);
                return (
                  <Box key={dept.id} position="relative">
                    <Button
                      onClick={() => { setDepartment(dept.id); setStep('details'); }}
                      isDisabled={!isActive}
                      variant="outline"
                      h="auto"
                      w="full"
                      py={4}
                      px={3}
                      borderRadius="12px"
                      borderColor={isActive ? 'secondaryGray.100' : 'secondaryGray.100'}
                      bg={isActive ? 'white' : 'secondaryGray.300'}
                      color={isActive ? 'navy.700' : 'secondaryGray.600'}
                      fontWeight="600"
                      fontSize="sm"
                      whiteSpace="normal"
                      textAlign="center"
                      transition=".25s all ease"
                      opacity={isActive ? 1 : 0.55}
                      cursor={isActive ? 'pointer' : 'not-allowed'}
                      _hover={isActive ? {
                        bg: 'brand.50',
                        borderColor: 'brand.300',
                        color: 'brand.600',
                        transform: 'translateY(-1px)',
                        boxShadow: '0px 4px 16px rgba(29, 158, 117, 0.12)',
                      } : {}}
                      _disabled={{
                        opacity: 0.55,
                        cursor: 'not-allowed',
                        bg: 'secondaryGray.300',
                      }}
                    >
                      {dept.label}
                    </Button>
                    {isActive && (
                      <Box
                        position="absolute"
                        top="-7px"
                        right="-7px"
                        bg="brand.500"
                        borderRadius="full"
                        w="14px"
                        h="14px"
                        border="2px solid white"
                      />
                    )}
                  </Box>
                );
              })}
            </Grid>
          </Box>
        )}

        {/* Step 2 — Name & Email */}
        {step === 'details' && (
          <Box
            bg="white"
            borderRadius="16px"
            border="1px solid"
            borderColor="secondaryGray.100"
            boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.04)"
            p={{ base: 6, md: 8 }}
          >
            {/* Selected dept pill */}
            <Flex align="center" justify="space-between" mb={6}>
              <Flex align="center" gap={3}>
                <Box
                  bg="brand.50"
                  borderRadius="8px"
                  px={3}
                  py={1}
                >
                  <Text fontSize="sm" fontWeight="700" color="brand.600">
                    {selectedDept?.label}
                  </Text>
                </Box>
                <Text fontSize="xs" color="secondaryGray.600">
                  {selectedDept?.questions.length} questions
                </Text>
              </Flex>
              <Button
                variant="ghost"
                size="xs"
                color="secondaryGray.600"
                onClick={() => setStep('department')}
                fontWeight="500"
              >
                Change
              </Button>
            </Flex>

            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel fontSize="sm" fontWeight="600" color="navy.700" mb={1.5}>
                  Your full name
                </FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Johnson"
                  size="lg"
                  h="50px"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" fontWeight="600" color="navy.700" mb={1.5}>
                  Your work email
                </FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sarah@axilscientific.com"
                  size="lg"
                  h="50px"
                />
              </FormControl>

              {error && (
                <Box bg="red.50" borderRadius="8px" px={4} py={3} border="1px solid" borderColor="red.100">
                  <Text color="red.500" fontSize="sm" fontWeight="500">{error}</Text>
                </Box>
              )}

              <Button
                onClick={handleBegin}
                isLoading={loading}
                size="lg"
                h="50px"
                mt={2}
                fontSize="sm"
                fontWeight="600"
                rightIcon={<Arrow />}
              >
                Begin survey
              </Button>
            </VStack>
          </Box>
        )}

        {/* Footer note */}
        <Text fontSize="xs" color="secondaryGray.600" textAlign="center">
          Your responses are saved automatically. You can close and continue later.
        </Text>

      </VStack>
    </PageWrapper>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
