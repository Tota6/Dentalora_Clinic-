import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  const doctors = await sql`SELECT id,name,specialty FROM doctors WHERE active=true ORDER BY name`;
  return NextResponse.json({ doctors });
}
