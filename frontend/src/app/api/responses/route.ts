import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/responses — create a new survey response record
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { department, respondent_name, respondent_email } = body;

  if (!department || !respondent_name || !respondent_email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const response = await prisma.surveyResponse.create({
      data: {
        department,
        respondentName: respondent_name,
        respondentEmail: respondent_email,
        answers: {},
        completed: false,
      },
      select: { id: true },
    });

    return NextResponse.json({ id: response.id }, { status: 201 });
  } catch (error) {
    console.error('DB insert error:', error);
    return NextResponse.json({ error: 'Failed to create response' }, { status: 500 });
  }
}

// PATCH /api/responses — progressively save answers
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, answers, completed } = body;

  if (!id) {
    return NextResponse.json({ error: 'Missing response id' }, { status: 400 });
  }

  try {
    await prisma.surveyResponse.update({
      where: { id },
      data: {
        answers: answers ?? {},
        completed: completed ?? false,
        // updatedAt is automatically set by Prisma's @updatedAt
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('DB update error:', error);
    return NextResponse.json({ error: 'Failed to save response' }, { status: 500 });
  }
}

// GET /api/responses?id=xxx — fetch a single response for resume
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  try {
    const response = await prisma.surveyResponse.findUniqueOrThrow({
      where: { id },
      select: { id: true, answers: true, completed: true },
    });

    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
