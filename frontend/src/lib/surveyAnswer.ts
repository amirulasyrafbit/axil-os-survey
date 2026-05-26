import { Question } from '@/types';

// The label used for "Other" options in question options arrays
export const OTHER_LABEL_PATTERN = /^other/i;

export function isOtherOption(opt: string): boolean {
  return OTHER_LABEL_PATTERN.test(opt.trim());
}

export interface MultiSelectValue {
  s: string[]; // selected option labels
  n: string;   // free-text notes (always shown on multiselect; the answer for textarea/text/number)
  o: string;   // text entered when an "Other" option is selected
}

export function parseMultiSelect(raw: string): MultiSelectValue {
  if (!raw) return { s: [], n: '', o: '' };
  if (raw.startsWith('{')) {
    try {
      const parsed = JSON.parse(raw);
      return {
        s: Array.isArray(parsed.s) ? parsed.s : [],
        n: typeof parsed.n === 'string' ? parsed.n : '',
        o: typeof parsed.o === 'string' ? parsed.o : '',
      };
    } catch {
      return { s: [], n: raw, o: '' };
    }
  }
  // Legacy plain-text answer — treat as notes
  return { s: [], n: raw, o: '' };
}

export function serializeMultiSelect(ms: MultiSelectValue): string {
  if (!ms.s.length && !ms.n.trim() && !ms.o.trim()) return '';
  return JSON.stringify({ s: ms.s, n: ms.n, o: ms.o });
}

export function isQuestionAnswered(value: string, question: Question): boolean {
  const ms = parseMultiSelect(value);
  const hasOptions = (question.options?.length ?? 0) > 0;

  if (!hasOptions) {
    // textarea / text / number — answer lives in `n`
    return !!ms.n.trim();
  }

  if (question.type === 'radio') {
    if (!ms.s.length) return false;
    const selected = ms.s[0];
    if (isOtherOption(selected)) return !!ms.o.trim();
    return true;
  }

  // multiselect
  if (!ms.s.length) return false;
  if (ms.s.some(isOtherOption)) return !!ms.o.trim();
  return true;
}

export function formatAnswerForCsv(raw: string, question: Question): string {
  const ms = parseMultiSelect(raw);
  const hasOptions = (question.options?.length ?? 0) > 0;
  if (!hasOptions) return ms.n;

  const parts: string[] = [];
  for (const item of ms.s) {
    if (isOtherOption(item) && ms.o.trim()) {
      parts.push(`Other: ${ms.o.trim()}`);
    } else {
      parts.push(item);
    }
  }
  if (ms.n.trim()) parts.push(`Notes: ${ms.n.trim()}`);
  return parts.join('; ');
}
