'use client';

import {
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Question } from '@/types';
import {
  isOtherOption,
  MultiSelectValue,
  parseMultiSelect,
  serializeMultiSelect,
} from '@/lib/surveyAnswer';

// Re-export so other files (ResponseDetail, etc.) can import from here
export { parseMultiSelect, serializeMultiSelect } from '@/lib/surveyAnswer';
export type { MultiSelectValue } from '@/lib/surveyAnswer';

interface QuestionCardProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
  onAutoAdvance?: () => void;
}

const MAX_CHARS = 2000;

export default function QuestionCard({ question, value, onChange, onAutoAdvance }: QuestionCardProps) {
  const inputRef  = useRef<HTMLInputElement>(null);
  const textaRef  = useRef<HTMLTextAreaElement>(null);
  const otherRef  = useRef<HTMLInputElement>(null);

  const ms         = parseMultiSelect(value);
  const hasOptions = (question.options?.length ?? 0) > 0;

  // Effective options list: if hasOther and no option already starts with "Other", append one
  const options = hasOptions
    ? (question.hasOther && !question.options!.some(isOtherOption)
        ? [...question.options!, 'Other (please specify)']
        : question.options!)
    : [];

  const radioSelected = ms.s[0] ?? '';
  const otherSelected = ms.s.some(isOtherOption);

  useEffect(() => {
    const t = setTimeout(() => {
      inputRef.current?.focus();
      textaRef.current?.focus();
    }, 280);
    return () => clearTimeout(t);
  }, [question.id]);

  const update = (next: MultiSelectValue) => onChange(serializeMultiSelect(next));

  // ── Radio ──────────────────────────────────────────────────────────────────
  const handleRadioChange = (opt: string) => {
    const newOther = isOtherOption(opt) ? ms.o : '';
    update({ s: [opt], n: ms.n, o: newOther });
    if (onAutoAdvance && !isOtherOption(opt)) {
      setTimeout(onAutoAdvance, 420);
    }
  };

  // ── Multiselect ────────────────────────────────────────────────────────────
  const toggleChip = (opt: string) => {
    const newSelected = ms.s.includes(opt)
      ? ms.s.filter(s => s !== opt)
      : [...ms.s, opt];
    const newOther = newSelected.some(isOtherOption) ? ms.o : '';
    update({ s: newSelected, n: ms.n, o: newOther });
  };

  // ── Notes / Other text ────────────────────────────────────────────────────
  const setNotes     = (n: string) => update({ s: ms.s, n: n.slice(0, MAX_CHARS), o: ms.o });
  const setOtherText = (o: string) => update({ s: ms.s, n: ms.n, o: o.slice(0, MAX_CHARS) });

  // ── Free-text (textarea / text / number) ──────────────────────────────────
  const setFreeText = (n: string) => update({ s: [], n: n.slice(0, MAX_CHARS), o: '' });
  const setNumber   = (n: string) => update({ s: [], n, o: '' });

  const charCount   = ms.n.length;
  const isNearLimit = charCount > MAX_CHARS * 0.85;
  const selectedCount = ms.s.length;

  return (
    <Box>
      {/* Question text + optional badge */}
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
            value={ms.n}
            onChange={e => setFreeText(e.target.value)}
            placeholder="Share your thoughts here…"
            rows={5}
            fontSize="sm"
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
          value={ms.n}
          onChange={e => setFreeText(e.target.value)}
          placeholder="Your answer…"
          h="50px"
          fontSize="sm"
          borderRadius="10px"
        />
      )}

      {/* ── Number ────────────────────────────────────────────────────────── */}
      {question.type === 'number' && (
        <NumberInput value={ms.n} onChange={val => setNumber(val)} min={0} maxW="180px">
          <NumberInputField ref={inputRef} h="50px" placeholder="0" borderRadius="10px" fontSize="sm" />
        </NumberInput>
      )}

      {/* ── Radio ─────────────────────────────────────────────────────────── */}
      {question.type === 'radio' && (
        <Box>
          <RadioGroup value={radioSelected} onChange={handleRadioChange}>
            <Stack spacing={3} mt={1}>
              {options.map(opt => (
                <Box
                  key={opt}
                  as="label"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  p={4}
                  bg={radioSelected === opt ? 'brand.50' : 'white'}
                  border="1px solid"
                  borderColor={radioSelected === opt ? 'brand.400' : 'secondaryGray.100'}
                  borderRadius="12px"
                  cursor="pointer"
                  transition=".2s all ease"
                  _hover={{ borderColor: 'brand.200', bg: 'brand.50' }}
                >
                  <Radio value={opt} colorScheme="brand" size="md" />
                  <Text fontSize="sm" fontWeight="500" color="navy.700">{opt}</Text>
                  {radioSelected === opt && (
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

          {/* Other specify field */}
          {question.hasOther && isOtherOption(radioSelected) && (
            <Box mt={4}>
              <Text fontSize="sm" fontWeight="600" color="navy.700" mb={2}>
                Please specify
                {question.required && <Text as="span" color="red.400" ml={1}>*</Text>}
              </Text>
              <Input
                ref={otherRef}
                value={ms.o}
                onChange={e => setOtherText(e.target.value)}
                placeholder="Please describe…"
                h="50px"
                fontSize="sm"
                borderRadius="10px"
                autoFocus
              />
            </Box>
          )}
        </Box>
      )}

      {/* ── Multiselect ───────────────────────────────────────────────────── */}
      {question.type === 'multiselect' && (
        <Box>
          {options.length > 0 && (
            <>
              <Text fontSize="xs" fontWeight="600" color="secondaryGray.600" mb={3}>
                Select all that apply
              </Text>
              <Flex flexWrap="wrap" gap={2} mb={otherSelected ? 4 : 5}>
                {options.map(opt => {
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

              {/* Other specify field */}
              {otherSelected && (
                <Box mb={5}>
                  <Text fontSize="sm" fontWeight="600" color="navy.700" mb={2}>
                    Please specify (other)
                    {question.required && <Text as="span" color="red.400" ml={1}>*</Text>}
                  </Text>
                  <Input
                    ref={otherRef}
                    value={ms.o}
                    onChange={e => setOtherText(e.target.value)}
                    placeholder="Please describe…"
                    h="50px"
                    fontSize="sm"
                    borderRadius="10px"
                  />
                </Box>
              )}

              {/* Notes field */}
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
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Any additional context or details…"
                  rows={3}
                  fontSize="sm"
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

              {selectedCount > 0 && (
                <Text fontSize="xs" color="brand.600" fontWeight="600" mt={2}>
                  {selectedCount} option{selectedCount !== 1 ? 's' : ''} selected
                </Text>
              )}
            </>
          )}

          {/* No options — free text only */}
          {options.length === 0 && (
            <Box>
              <Textarea
                ref={textaRef}
                value={ms.n}
                onChange={e => setFreeText(e.target.value)}
                placeholder="Share your thoughts here…"
                rows={5}
                fontSize="sm"
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
        </Box>
      )}
    </Box>
  );
}
