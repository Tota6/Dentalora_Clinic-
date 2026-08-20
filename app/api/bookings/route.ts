import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(request: NextRequest) {
  const doctorId = request.nextUrl.searchParams.get('doctorId');
  const date = request.nextUrl.searchParams.get('date');
  const rows = doctorId && date
    ? await sql`SELECT a.id,a.service,a.starts_at,a.ends_at,a.status,p.full_name,p.email,p.phone,d.name AS doctor_name FROM appointments a JOIN patients p ON p.id=a.patient_id JOIN doctors d ON d.id=a.doctor_id WHERE a.doctor_id=${doctorId} AND a.starts_at::date=${date} ORDER BY a.starts_at`
    : await sql`SELECT a.id,a.service,a.starts_at,a.ends_at,a.status,p.full_name,p.email,p.phone,d.name AS doctor_name FROM appointments a JOIN patients p ON p.id=a.patient_id JOIN doctors d ON d.id=a.doctor_id ORDER BY a.starts_at DESC LIMIT 200`;
  return NextResponse.json({ appointments: rows });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { fullName, email, phone, doctorId, service, startsAt, endsAt } = body;
  if (!fullName || !email || !doctorId || !service || !startsAt || !endsAt) return NextResponse.json({ error: 'Missing required booking information.' }, { status: 400 });
  const existing = await sql`SELECT id FROM appointments WHERE doctor_id=${doctorId} AND starts_at=${startsAt} AND status='booked' LIMIT 1`;
  if (existing.length) return NextResponse.json({ error: 'This appointment time is no longer available. Please choose another time.' }, { status: 409 });
  const patients = await sql`INSERT INTO patients(full_name,email,phone) VALUES(${fullName},${email},${phone || null}) RETURNING id`;
  try {
    const rows = await sql`INSERT INTO appointments(patient_id,doctor_id,service,starts_at,ends_at) VALUES(${patients[0].id},${doctorId},${service},${startsAt},${endsAt}) RETURNING id,starts_at,ends_at,status`;
    return NextResponse.json({ appointment: rows[0] }, { status: 201 });
  } catch (error: any) {
    if (error?.code === '23505') return NextResponse.json({ error: 'This appointment time is no longer available. Please choose another time.' }, { status: 409 });
    throw error;
  }
}
