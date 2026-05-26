#!/usr/bin/env node
/**
 * Converts all question definitions to type: 'multiselect' with hasOther: true.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const questionsDir = resolve(__dir, '../src/lib/questions');

const FILES = readdirSync(questionsDir).filter(
  (f) => f.endsWith('.ts') && f !== 'index.ts'
);

function migrateContent(src) {
  let out = src;

  out = out.replace(
    /type: '(text|textarea|number|select|radio|multiselect)'/g,
    "type: 'multiselect'"
  );

  // Add hasOther after required when missing (per question block)
  out = out.replace(
    /(required: (?:true|false),)\n(?!\s+hasOther:)/g,
    '$1\n    hasOther: true,\n'
  );

  return out;
}

for (const file of FILES) {
  const path = resolve(questionsDir, file);
  const before = readFileSync(path, 'utf8');
  const after = migrateContent(before);
  if (before !== after) {
    writeFileSync(path, after);
    console.log(`Updated ${file}`);
  }
}

console.log('Done.');
