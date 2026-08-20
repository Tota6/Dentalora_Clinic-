import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

export const DOCTOR_EMAIL = process.env.DOCTOR_LOGIN_EMAIL || 'dentaloradentalclinic@gmail.com';
const PASSWORD = process.env.DOCTOR_LOGIN_PASSWORD || '';
const COOKIE = 'dentalora_doctor_session';

function secret() {
  if (!PASSWORD) throw new Error('DOCTOR_LOGIN_PASSWORD is not configured.');
  return PASSWORD;
}

function sign(value: string) {
  return createHmac('sha256', secret()).update(value).digest('hex');
}

export function isValidDoctorCredentials(email: string, password: string) {
  if (!PASSWORD) return false;
  return email.trim().toLowerCase() === DOCTOR_EMAIL.toLowerCase() && password === PASSWORD;
}

export function createDoctorToken() {
  const payload = `${DOCTOR_EMAIL}|${Date.now()}`;
  return `${Buffer.from(payload).toString('base64url')}.${sign(payload)}`;
}

export function verifyDoctorToken(token: string | undefined) {
  if (!token) return false;
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return false;
  try {
    const payload = Buffer.from(encoded, 'base64url').toString('utf8');
    const expected = sign(payload);
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
    const [email, issued] = payload.split('|');
    return email.toLowerCase() === DOCTOR_EMAIL.toLowerCase() && Date.now() - Number(issued) < 1000 * 60 * 60 * 12;
  } catch {
    return false;
  }
}

export async function getDoctorSession() {
  const store = await cookies();
  return verifyDoctorToken(store.get(COOKIE)?.value) ? { email: DOCTOR_EMAIL } : null;
}

export function doctorCookie(token: string) {
  return {
    name: COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 12,
  };
}

export function doctorCookieName() { return COOKIE; }
