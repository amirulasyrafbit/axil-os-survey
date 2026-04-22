import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { SurveyResponse } from '@/types';

// GET /api/admin/responses — fetch all survey responses
export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  try {
    const rows = await prisma.surveyResponse.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Serialise Date objects to ISO strings to match SurveyResponse shape
    const data: SurveyResponse[] = rows.map((r) => ({
      id: r.id,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
      department: r.department,
      respondentName: r.respondentName,
      respondentEmail: r.respondentEmail,
      answers: r.answers as Record<string, string>,
      completed: r.completed,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error('DB fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch responses' }, { status: 500 });
  }
}
