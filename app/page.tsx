'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import BookingForm from './booking-form';

const LOGO = `<svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e8c36b"/><stop offset=".5" stop-color="#b88632"/><stop offset="1" stop-color="#f1d58b"/></linearGradient></defs><path d="M31 17C17 25 13 48 18 72c5 25 12 50 23 57 8 5 13-11 16-31 3-17 8-17 11 0 3 20 8 36 16 31 11-7 18-32 23-57 5-24 1-47-13-55-12-7-21 5-30 10-8-5-17-17-30-10Z" fill="none" stroke="url(#g)" stroke-width="7" stroke-linejoin="round"/><path d="M72 30c12 5 18 11 21 20M70 49c-17 13-18 27-4 35 11 6 14 14 7 27" fill="none" stroke="url(#g)" stroke-width="5" stroke-linecap="round"/></svg>`;

function Logo({ className = '' }: { className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: LOGO }} />;
}

export default function Home() {
  const [ar, setAr] = useState(false);
  return (
    <main dir={ar ? 'rtl' : 'ltr'} className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="Dentalora home">
          <Logo className={styles.brandLogo} /><span>Dentalora</span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#about">{ar ? 'عن العيادة' : 'About Us'}</a>
          <a href="#doctor">{ar ? 'الدكتور' : 'Doctor'}</a>
        </nav>
        <div className={styles.navActions}>
          <button className={styles.lang} onClick={() => setAr(!ar)} aria-label="Change language"><span className={!ar ? styles.activeLang : ''}>EN</span><span className={ar ? styles.activeLang : ''}>ع</span></button>
          <Link className={styles.doctorLogin} href="/doctor/login">{ar ? 'دخول الطبيب' : 'Doctor login'}</Link>
        </div>
      </header>

      <section id="booking" className={styles.bookingFirst}>
        <div className={styles.logoHero} aria-hidden="true"><Logo /></div>
        <div className={styles.bookingIntro}>
          <small>{ar ? 'عيادة دينتالورا للأسنان' : 'DENTALORA DENTAL CLINIC'}</small>
          <h1>{ar ? 'ابتسامتك هي <em>أولويتنا.</em>' : <>Your smile is <em>our priority.</em></>}</h1>
          <p>{ar ? 'احجزي موعدك بسهولة وفي خطوات بسيطة.' : 'Book your appointment in a few simple steps.'}</p>
        </div>
        <div className={styles.bookingCard}>
          <div className={styles.bookingHeading}><div><small>{ar ? 'الحجز' : 'BOOKING'}</small><h2>{ar ? 'احجزي موعدك' : 'Book your visit'}</h2></div><span className={styles.step}>{ar ? 'بسيط وآمن' : 'Simple & secure'}</span></div>
          <BookingForm ar={ar} />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionBrand}><Logo /></div>
        <small>{ar ? 'عن العيادة' : 'ABOUT US'}</small>
        <h2>{ar ? 'رعاية أسنان بهدوء واهتمام.' : 'Dentalora'}</h2>
        <p>{ar ? 'رعاية متخصصة وتجربة بسيطة وهادئة للمريض، من لحظة الحجز وحتى زيارتك للعيادة.' : 'Professional dental care with a calm, simple patient experience. We keep the journey clear from booking to your visit.'}</p>
      </section>

      <section id="doctor" className={styles.section}>
        <small>{ar ? 'طبيبنا' : 'OUR DOCTOR'}</small>
        <h2>{ar ? 'د. مينا أيمن' : 'Dr. Mina Ayman'}</h2>
        <article className={styles.doctorCard}><div className={styles.doctorLogo}><Logo /></div><div><h3>{ar ? 'د. مينا أيمن' : 'Dr. Mina Ayman'}</h3><p>{ar ? 'طبيب أسنان · عيادة دينتالورا' : 'Dentist · Dentalora Clinic'}</p></div></article>
      </section>

      <section className={styles.contact} aria-label="Clinic contact"><div><small>{ar ? 'تواصل معنا' : 'CONTACT'}</small><h2>{ar ? 'عيادة دينتالورا' : 'Dentalora Clinic'}</h2></div><a href="mailto:dentaloradentalclinic@gmail.com">dentaloradentalclinic@gmail.com</a></section>
      <footer className={styles.footer}><Logo className={styles.footerLogo} /><strong>Dentalora</strong><span>{ar ? 'ابتسامتك هي أولويتنا.' : 'Your smile is our priority.'}</span></footer>
    </main>
  );
}
