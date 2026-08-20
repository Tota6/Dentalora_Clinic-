import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getDoctorSession } from '@/lib/doctor-auth';

export async function POST(request: NextRequest) {
  const session = await getDoctorSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });

  const { appointmentId, reason } = await request.json();
  if (!appointmentId) return NextResponse.json({ error: 'Appointment id is required.' }, { status: 400 });

  const doctors = await sql`SELECT id FROM doctors WHERE lower(name)=lower('Dr. Mina Ayman') AND active=true LIMIT 1`;
  if (!doctors.length) return NextResponse.json({ error: 'Doctor account not found.' }, { status: 404 });

  const rows = await sql`
    UPDATE appointments
    SET status='cancelled', cancelled_by='doctor', cancellation_reason=${reason || 'Cancelled by doctor'}, updated_at=now()
    WHERE id=${appointmentId} AND doctor_id=${doctors[0].id} AND status='booked'
    RETURNING id
  `;
  if (!rows.length) return NextResponse.json({ error: 'Appointment not found or already cancelled.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
