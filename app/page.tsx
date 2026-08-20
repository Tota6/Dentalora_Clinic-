'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import BookingForm from './booking-form';

function Logo({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <img
      className={className}
      src="/dentalora-logo.svg"
      alt={compact ? '' : 'Dentalora Dental Clinic'}
      aria-hidden={compact ? true : undefined}
    />
  );
}

export default function Home() {
  const [ar, setAr] = useState(false);

  return (
    <main dir={ar ? 'rtl' : 'ltr'} className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="Dentalora home">
          <Logo className={styles.brandLogo} compact />
          <span>Dentalora</span>
        </Link>

        <nav aria-label="Main navigation">
          <a href="#about">{ar ? 'عن العيادة' : 'About Us'}</a>
          <a href="#doctor">{ar ? 'الدكتور' : 'Doctor'}</a>
        </nav>

        <div className={styles.navActions}>
          <button className={styles.lang} onClick={() => setAr(!ar)} aria-label="Change language">
            <span className={!ar ? styles.activeLang : ''}>EN</span>
            <span className={ar ? styles.activeLang : ''}>ع</span>
          </button>
          <Link className={styles.doctorLogin} href="/doctor/login">
            {ar ? 'دخول الطبيب' : 'Doctor login'}
          </Link>
        </div>
      </header>

      <section id="booking" className={styles.bookingFirst}>
        <div className={styles.logoHero} aria-hidden="true">
          <Logo compact />
        </div>

        <div className={styles.bookingIntro}>
          <small>{ar ? 'عيادة دينتالورا للأسنان' : 'DENTALORA DENTAL CLINIC'}</small>
          <h1>
            {ar ? <>ابتسامتك هي <em>أولويتنا.</em></> : <>Your smile is <em>our priority.</em></>}
          </h1>
          <p>{ar ? 'احجزي موعدك بسهولة وفي خطوات بسيطة.' : 'Book your appointment in a few simple steps.'}</p>
        </div>

        <div className={styles.bookingCard}>
          <div className={styles.bookingHeading}>
            <div>
              <small>{ar ? 'الحجز' : 'BOOKING'}</small>
              <h2>{ar ? 'احجزي موعدك' : 'Book your visit'}</h2>
            </div>
            <span className={styles.step}>{ar ? 'بسيط وآمن' : 'Simple & secure'}</span>
          </div>
          <BookingForm ar={ar} />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionBrand}>
          <Logo compact />
        </div>
        <small>{ar ? 'عن العيادة' : 'ABOUT US'}</small>
        <h2>{ar ? 'رعاية أسنان بهدوء واهتمام.' : 'Dentalora'}</h2>
        <p>{ar ? 'رعاية متخصصة وتجربة بسيطة وهادئة للمريض، من لحظة الحجز وحتى زيارتك للعيادة.' : 'Professional dental care with a calm, simple patient experience. We keep the journey clear from booking to your visit.'}</p>
      </section>

      <section id="doctor" className={styles.section}>
        <small>{ar ? 'طبيبنا' : 'OUR DOCTOR'}</small>
        <h2>{ar ? 'د. مينا أيمن' : 'Dr. Mina Ayman'}</h2>
        <article className={styles.doctorCard}>
          <div className={styles.doctorLogo}>
            <Logo compact />
          </div>
          <div>
            <h3>{ar ? 'د. مينا أيمن' : 'Dr. Mina Ayman'}</h3>
            <p>{ar ? 'طبيب أسنان · عيادة دينتالورا' : 'Dentist · Dentalora Clinic'}</p>
          </div>
        </article>
      </section>

      <section className={styles.contact} aria-label="Clinic contact">
        <div>
          <small>{ar ? 'تواصل معنا' : 'CONTACT'}</small>
          <h2>{ar ? 'عيادة دينتالورا' : 'Dentalora Clinic'}</h2>
        </div>
        <a href="mailto:dentaloradentalclinic@gmail.com">dentaloradentalclinic@gmail.com</a>
      </section>

      <footer className={styles.footer}>
        <Logo className={styles.footerLogo} compact />
        <strong>Dentalora</strong>
        <span>{ar ? 'ابتسامتك هي أولويتنا.' : 'Your smile is our priority.'}</span>
      </footer>
    </main>
  );
}
