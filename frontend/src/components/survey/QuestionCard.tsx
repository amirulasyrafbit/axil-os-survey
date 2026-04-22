'use client';

import {
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
  onAutoAdvance?: () => void;
}

// ── Multiselect value helpers ─────────────────────────────────────────────────
export interface MultiSelectValue {
  s: string[]; // selected chip labels
  n: string;   // free-text notes
}

export function parseMultiSelect(raw: string): MultiSelectValue {
  if (!raw) return { s: [], n: '' };
  try {
    const parsed = JSON.parse(raw);
    return { s: Array.isArray(parsed.s) ? parsed.s : [], n: parsed.n ?? '' };
  } catch {
    return { s: [], n: '' };
  }
}

export function serializeMultiSelect(ms: MultiSelectValue): string {
  if (ms.s.length === 0 && !ms.n.trim()) return '';
  return JSON.stringify({ s: ms.s, n: ms.n });
}

// ─────────────────────────────────────────────────────────────────────────────

const MAX_CHARS = 2000;

export default function QuestionCard({ question, value, onChange, onAutoAdvance }: QuestionCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const textaRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-focus when question changes
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
      textaRef.current?.focus();
    }, 280);
    return () => clearTimeout(timer);
  }, [question.id]);

  // Clear auto-advance timer on question change
  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [question.id]);

  const handleRadioChange = (val: string) => {
    onChange(val);
    if (onAutoAdvance) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => onAutoAdvance(), 420);
    }
  };

  const charCount = value.length;
  const isNearLimit = charCount > MAX_CHARS * 0.85;

  // ── Multiselect state helpers ──────────────────────────────────────────────
  const ms = parseMultiSelect(value);

  const toggleChip = (opt: string) => {
    const newSelected = ms.s.includes(opt)
      ? ms.s.filter((s) => s !== opt)
      : [...ms.s, opt];
    onChange(serializeMultiSelect({ s: newSelected, n: ms.n }));
  };

  const setNotes = (notes: string) => {
    onChange(serializeMultiSelect({ s: ms.s, n: notes }));
  };

  return (
    <Box>
      {/* Question text + Optional badge */}
      <Flex align="flex-start" justify="space-between" gap={3} mb={6}>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="700"
          color="navy.700"
          lineHeight="1.45"
          letterSpacing="-0.3px"
          flex={1}
        >
          {question.question}
        </Text>
        {!question.required && (
          <Box flexShrink={0} mt={1} bg="secondaryGray.300" borderRadius="full" px={2.5} py={0.5}>
            <Text fontSize="10px" fontWeight="600" color="secondaryGray.700" whiteSpace="nowrap">
              Optional
            </Text>
          </Box>
        )}
      </Flex>

      {/* ── Textarea ──────────────────────────────────────────────────────── */}
      {question.type === 'textarea' && (
        <Box>
          <Textarea
            ref={textaRef}
            value={value}
            onChange={(e) => onChange(e.target.value.slice(0, MAX_CHARS))}
            placeholder="Share your thoughts here…"
            rows={5}
            fontSize="sm"
            fontWeight="400"
            color="navy.700"
            bg="white"
            border="1px solid"
            borderColor="secondaryGray.100"
            borderRadius="12px"
            p={4}
            resize="vertical"
            _placeholder={{ color: 'secondaryGray.600' }}
            _hover={{ borderColor: 'secondaryGray.500' }}
            _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1D9E75' }}
          />
          <Flex justify="space-between" align="center" mt={1.5}>
            <Text fontSize="xs" color="secondaryGray.500" fontStyle="italic">
              Tip: Cmd+Enter (or Ctrl+Enter) to continue
            </Text>
            <Text fontSize="xs" fontWeight="500" color={isNearLimit ? 'orange.400' : 'secondaryGray.500'}>
              {charCount} / {MAX_CHARS}
            </Text>
          </Flex>
        </Box>
      )}

      {/* ── Text ──────────────────────────────────────────────────────────── */}
      {question.type === 'text' && (
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Your answer…"
          h="50px"
          fontSize="sm"
          borderRadius="10px"
        />
      )}

      {/* ── Number ────────────────────────────────────────────────────────── */}
      {question.type === 'number' && (
        <NumberInput value={value} onChange={(val) => onChange(val)} min={0} maxW="180px">
          <NumberInputField ref={inputRef} h="50px" placeholder="0" borderRadius="10px" fontSize="sm" />
        </NumberInput>
      )}

      {/* ── Select ────────────────────────────────────────────────────────── */}
      {question.type === 'select' && question.options && (
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Select an option…"
          h="50px"
          fontSize="sm"
          borderRadius="10px"
          maxW="360px"
        >
          {question.options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </Select>
      )}

      {/* ── Radio ─────────────────────────────────────────────────────────── */}
      {question.type === 'radio' && question.options && (
        <RadioGroup value={value} onChange={handleRadioChange}>
          <Stack spacing={3} mt={1}>
            {question.options.map((opt) => (
              <Box
                key={opt}
                as="label"
                display="flex"
                alignItems="center"
                gap={3}
                p={4}
                bg={value === opt ? 'brand.50' : 'white'}
                border="1px solid"
                borderColor={value === opt ? 'brand.400' : 'secondaryGray.100'}
                borderRadius="12px"
                cursor="pointer"
                transition=".2s all ease"
                _hover={{ borderColor: 'brand.200', bg: 'brand.50' }}
              >
                <Radio value={opt} colorScheme="brand" size="md" />
                <Text fontSize="sm" fontWeight="500" color="navy.700">{opt}</Text>
                {value === opt && (
                  <Box ml="auto">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Box>
                )}
              </Box>
            ))}
          </Stack>
        </RadioGroup>
      )}

      {/* ── Multiselect ───────────────────────────────────────────────────── */}
      {question.type === 'multiselect' && question.options && (
        <Box>
          {/* Instruction */}
          <Text fontSize="xs" fontWeight="600" color="secondaryGray.600" mb={3}>
            Select all that apply
          </Text>

          {/* Option chips */}
          <Flex flexWrap="wrap" gap={2} mb={5}>
            {question.options.map((opt) => {
              const selected = ms.s.includes(opt);
              return (
                <Box
                  key={opt}
                  as="button"
                  type="button"
                  onClick={() => toggleChip(opt)}
                  display="inline-flex"
                  alignItems="center"
                  gap={1.5}
                  px={4}
                  py={2.5}
                  borderRadius="full"
                  border="1.5px solid"
                  borderColor={selected ? 'brand.400' : 'secondaryGray.100'}
                  bg={selected ? 'brand.50' : 'white'}
                  color={selected ? 'brand.700' : 'navy.700'}
                  fontWeight="600"
                  fontSize="sm"
                  cursor="pointer"
                  transition=".15s all ease"
                  _hover={{ borderColor: 'brand.300', bg: 'brand.50' }}
                  _active={{ transform: 'scale(0.97)' }}
                >
                  {selected && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="#178f68" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {opt}
                </Box>
              );
            })}
          </Flex>

          {/* Add more thoughts */}
          <Box
            bg="secondaryGray.300"
            borderRadius="12px"
            p={4}
            border="1px solid"
            borderColor="secondaryGray.100"
          >
            <Text fontSize="xs" fontWeight="700" color="secondaryGray.700" mb={2} textTransform="uppercase" letterSpacing="wider">
              Add more thoughts{' '}
              <Text as="span" fontWeight="400" textTransform="none" letterSpacing="normal">
                (optional)
              </Text>
            </Text>
            <Textarea
              value={ms.n}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional context or details not covered above…"
              rows={3}
              fontSize="sm"
              fontWeight="400"
              color="navy.700"
              bg="white"
              border="1px solid"
              borderColor="secondaryGray.100"
              borderRadius="8px"
              p={3}
              resize="vertical"
              _placeholder={{ color: 'secondaryGray.600' }}
              _hover={{ borderColor: 'secondaryGray.500' }}
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1D9E75' }}
            />
          </Box>

          {/* Selection summary */}
          {ms.s.length > 0 && (
            <Text fontSize="xs" color="brand.600" fontWeight="600" mt={2}>
              {ms.s.length} option{ms.s.length !== 1 ? 's' : ''} selected
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
}
