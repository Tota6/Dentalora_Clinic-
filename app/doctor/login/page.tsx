'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import styles from './page.module.css';

export default function DoctorLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/doctor/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.get('email'), password: form.get('password') }),
    });
    const data = await response.json();
    setLoading(false);
    if (response.ok) window.location.href = '/doctor';
    else setError(data.error || 'Unable to sign in.');
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link href="/" className={styles.brand}><span className={styles.logo}>D</span>Dentalora</Link>
        <small>DOCTOR ACCESS</small>
        <h1>Doctor login</h1>
        <p>Private access to today&apos;s appointments for the authorized doctor.</p>
        <form onSubmit={submit}>
          <label>Email<input name="email" type="email" defaultValue="dentaloradentalclinic@gmail.com" required /></label>
          <label>Password<input name="password" type="password" required /></label>
          <button disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
        </form>
        {error && <div className={styles.error}>{error}</div>}
        <Link href="/" className={styles.back}>Back to patient booking</Link>
      </div>
    </main>
  );
}
