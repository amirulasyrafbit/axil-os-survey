import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.ADMIN_JWT_SECRET!;
const COOKIE_NAME = 'admin_token';

export interface AdminTokenPayload {
  adminId: string;
  email: string;
  name: string;
}

export function getAdminFromRequest(req: NextRequest): AdminTokenPayload | null {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const payload = jwt.verify(token, JWT_SECRET) as AdminTokenPayload;
    return payload;
  } catch {
    return null;
  }
}

export function isAdminAuthenticated(req: NextRequest): boolean {
  return getAdminFromRequest(req) !== null;
}
