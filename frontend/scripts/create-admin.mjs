#!/usr/bin/env node
/**
 * create-admin.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Creates an admin account in the database.
 *
 * Usage:
 *   npm run admin:create -- --email=admin@axil.com --password=yourpassword --name="Your Name"
 *
 * Or directly:
 *   node scripts/create-admin.mjs --email=admin@axil.com --password=yourpassword --name="Your Name"
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Load .env manually (Prisma CLI handles this in migrations, but not in plain Node scripts)
const __dir = dirname(fileURLToPath(import.meta.url));
try {
  const envPath = resolve(__dir, '../.env');
  const envLines = readFileSync(envPath, 'utf8').split('\n');
  for (const line of envLines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
} catch {}

// Parse CLI args
const args = process.argv.slice(2);
const get = (flag) => args.find((a) => a.startsWith(`--${flag}=`))?.split('=').slice(1).join('=');

const email    = get('email');
const password = get('password');
const name     = get('name') ?? 'Admin';

if (!email || !password) {
  console.error('\n❌  Missing required arguments.\n');
  console.error('Usage:');
  console.error('  npm run admin:create -- --email=admin@axil.com --password=yourpassword --name="Your Name"\n');
  process.exit(1);
}

const prisma = new PrismaClient();

try {
  const existing = await prisma.admin.findUnique({ where: { email: email.toLowerCase() } });
  if (existing) {
    console.error(`\n❌  An admin with email "${email}" already exists.\n`);
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.create({
    data: {
      email: email.toLowerCase().trim(),
      name:  name.trim(),
      passwordHash,
    },
  });

  console.log(`\n✅  Admin created successfully!`);
  console.log(`    Name:  ${admin.name}`);
  console.log(`    Email: ${admin.email}`);
  console.log(`    ID:    ${admin.id}\n`);
  console.log(`You can now sign in at /admin\n`);
} catch (err) {
  console.error('\n❌  Failed to create admin:', err.message, '\n');
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
