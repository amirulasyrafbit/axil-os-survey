import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { exportResponsesAsCsv } from '@/utils/csvExport';
import { SurveyResponse } from '@/types';

// GET /api/admin/export — stream a CSV of all responses
export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  try {
    const rows = await prisma.surveyResponse.findMany({
      orderBy: { createdAt: 'desc' },
    });

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

    const csv = exportResponsesAsCsv(data);
    const filename = `axil-os-survey-${new Date().toISOString().slice(0, 10)}.csv`;

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('DB export error:', error);
    return NextResponse.json({ error: 'Failed to export responses' }, { status: 500 });
  }
}
