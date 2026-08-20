import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getDoctorSession } from '@/lib/doctor-auth';

export async function GET() {
  const session = await getDoctorSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });

  const doctors = await sql`SELECT id,name,specialty,email FROM doctors WHERE lower(name)=lower('Dr. Mina Ayman') AND active=true LIMIT 1`;
  if (!doctors.length) return NextResponse.json({ appointments: [], doctor: null });

  const doctor = doctors[0];
  const appointments = await sql`
    SELECT a.id,a.service,a.starts_at,a.ends_at,a.status,a.cancellation_reason,
           p.full_name,p.email,p.phone
    FROM appointments a
    JOIN patients p ON p.id=a.patient_id
    WHERE a.doctor_id=${doctor.id}
      AND a.starts_at >= date_trunc('day', now())
      AND a.starts_at < date_trunc('day', now()) + interval '1 day'
    ORDER BY a.starts_at
  `;
  return NextResponse.json({ doctor, appointments });
}
