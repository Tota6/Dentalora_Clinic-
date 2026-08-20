import { NextRequest, NextResponse } from 'next/server';
import { createDoctorToken, doctorCookie, isValidDoctorCredentials } from '@/lib/doctor-auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  if (!email || !password || !isValidDoctorCredentials(String(email), String(password))) {
    return NextResponse.json({ error: 'Invalid doctor credentials.' }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true, redirect: '/doctor' });
  response.cookies.set(doctorCookie(createDoctorToken()));
  return response;
}
