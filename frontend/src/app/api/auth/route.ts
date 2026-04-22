import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET!;
const COOKIE_NAME = 'admin_token';
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

// POST /api/auth — email + password login
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  // Find admin by email
  const admin = await prisma.admin.findUnique({
    where: { email: email.toLowerCase().trim() },
  });

  if (!admin) {
    // Return same message as wrong password to avoid user enumeration
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  // Verify password
  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  // Issue JWT
  const token = jwt.sign(
    { adminId: admin.id, email: admin.email, name: admin.name },
    JWT_SECRET,
    { expiresIn: '8h' }
  );

  const response = NextResponse.json({
    ok: true,
    admin: { id: admin.id, email: admin.email, name: admin.name },
  });

  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });

  return response;
}

// DELETE /api/auth — logout
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(COOKIE_NAME);
  return response;
}
