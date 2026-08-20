'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import BookingForm from './booking-form';

const socials = [
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/19kyzYyJzR/?mibextid=wwXIfr' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/dentaloradentalclinic?igsi=MWhzcW52MmhjZ3Z6Mw==' },
  { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@dentalora.dental?_r=1&_t=ZS-993KHWQ7XzW' },
  { key: 'snapchat', label: 'Snapchat', href: 'https://www.snapchat.com/add/mina_ayman169?share_id=AfjaEhvfQLqd4hWga3SeGg&locale=en_EG' },
];

const mapUrl = 'https://maps.app.goo.gl/EQUprKPQP3PNax3X9?g_st=iw';
const qrUrl = 'https://link.gettap.co/DentaloraDentalClinic171169';
const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(qrUrl)}`;

function Logo({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return <img className={className} src="/dentalora-logo.svg" alt={compact ? '' : 'Dentalora Dental Clinic'} aria-hidden={compact ? true : undefined} />;
}

function SocialIcon({ type }: { type: string }) {
  if (type === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.7.3-1 1-1Z" fill="currentColor"/></svg>;
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.3" cy="6.8" r="1.2" fill="currentColor"/></svg>;
  if (type === 'tiktok') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h3c.3 2 1.5 3.5 3.5 4v3.2c-1.4 0-2.7-.4-3.8-1.1v6.2a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.2a2.6 2.6 0 1 0 1.5 2.4V4h.3Z" fill="currentColor"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c-4.1 0-7.2 3.2-7.2 7.3v2.8c0 .7-.3 1.3-.9 1.8l-.7.5c-.7.5-.3 1.6.5 1.6h3.1c.7 1.8 2.6 3 5.2 3s4.5-1.2 5.2-3h3.1c.8 0 1.2-1.1.5-1.6l-.7-.5c-.6-.5-.9-1.1-.9-1.8v-2.8C19.2 6.2 16.1 3 12 3Zm0 19c-1.2 0-2.2-.7-2.6-1.7h5.2C14.2 21.3 13.2 22 12 22Z" fill="currentColor"/></svg>;
}

export default function Home() {
  const [ar, setAr] = useState(false);

  return (
    <main dir={ar ? 'rtl' : 'ltr'} className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="Dentalora home"><Logo className={styles.brandLogo} compact /><span>Dentalora</span></Link>
        <nav aria-label="Main navigation"><a href="#about">{ar ? 'عن العيادة' : 'About Us'}</a><a href="#doctor">{ar ? 'الدكتور' : 'Doctor'}</a><a href="#connect">{ar ? 'تواصل معنا' : 'Connect'}</a></nav>
        <div className={styles.navActions}>
          <button className={styles.lang} onClick={() => setAr(!ar)} aria-label="Change language"><span className={!ar ? styles.activeLang : ''}>EN</span><span className={ar ? styles.activeLang : ''}>ع</span></button>
          <Link className={styles.doctorLogin} href="/doctor/login">{ar ? 'دخول الطبيب' : 'Doctor login'}</Link>
        </div>
      </header>

      <section id="booking" className={styles.bookingFirst}>
        <div className={styles.logoHero} aria-hidden="true"><Logo compact /></div>
        <div className={styles.bookingIntro}>
          <h1>{ar ? <>ابتسامتك هي <em>أولويتنا.</em></> : <>Your smile is <em>our priority.</em></>}</h1>
          <p>{ar ? 'احجزي موعدك بسهولة وفي خطوات بسيطة.' : 'Book your appointment in a few simple steps.'}</p>
        </div>
        <div className={styles.bookingCard}>
          <div className={styles.bookingHeading}><div><small>{ar ? 'الحجز' : 'BOOKING'}</small><h2>{ar ? 'احجزي موعدك' : 'Book your visit'}</h2></div><span className={styles.step}>{ar ? 'بسيط وآمن' : 'Simple & secure'}</span></div>
          <BookingForm ar={ar} />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionBrand}><Logo compact /></div>
        <small>{ar ? 'عن العيادة' : 'ABOUT US'}</small>
        <h2>{ar ? 'رعاية أسنان بهدوء واهتمام.' : 'Dentalora'}</h2>
        <p>{ar ? 'رعاية متخصصة وتجربة بسيطة وهادئة للمريض، من لحظة الحجز وحتى زيارتك للعيادة.' : 'Professional dental care with a calm, simple patient experience. We keep the journey clear from booking to your visit.'}</p>
        <div className={styles.aboutMeta}>
          <div className={styles.aboutContactCard}>
            <span className={styles.aboutMetaIcon}>☎</span>
            <div><strong>{ar ? 'اتصلي بنا' : 'Call the clinic'}</strong><a href="tel:01119090808">01119090808</a><a href="tel:0233447671">0233447671</a></div>
          </div>
          <div className={styles.aboutContactCard}>
            <span className={styles.aboutMetaIcon}>⌖</span>
            <div><strong>{ar ? 'عنوان العيادة' : 'Clinic location'}</strong><span>{ar ? 'العنوان الدقيق على الخريطة' : 'Exact clinic pin on Google Maps'}</span><a className={styles.inlineMap} href={mapUrl} target="_blank" rel="noreferrer">{ar ? 'فتح الخريطة' : 'Open Google Maps'} ↗</a></div>
          </div>
        </div>
      </section>

      <section id="doctor" className={styles.section}>
        <small>{ar ? 'طبيبنا' : 'OUR DOCTOR'}</small><h2>{ar ? 'د. مينا أيمن' : 'Dr. Mina Ayman'}</h2>
        <article className={styles.doctorCard}><div className={styles.doctorLogo}><Logo compact /></div><div><h3>{ar ? 'د. مينا أيمن' : 'Dr. Mina Ayman'}</h3><p>{ar ? 'طبيب أسنان · عيادة دينتالورا' : 'Dentist · Dentalora Clinic'}</p></div></article>
      </section>

      <section id="connect" className={styles.connect}>
        <div className={styles.connectHeading}><small>{ar ? 'تواصل معنا' : 'CONNECT WITH US'}</small><h2>{ar ? 'كل طرق التواصل مع دينتالورا' : 'Everything Dentalora, in one place'}</h2><p>{ar ? 'تابعينا على منصاتنا أو امسحي QR للوصول السريع.' : 'Follow the clinic on social media or scan the QR code for quick access.'}</p></div>
        <div className={styles.connectGrid}>
          <div className={styles.socialPanel}>
            {socials.map((social) => <a key={social.key} href={social.href} target="_blank" rel="noreferrer" className={styles.socialLink}><span className={`${styles.socialIcon} ${styles[social.key]}`}><SocialIcon type={social.key} /></span><span><strong>{social.label}</strong><small>{ar ? 'افتح الصفحة' : 'Open profile'}</small></span><span className={styles.arrow}>↗</span></a>)}
            <a className={styles.emailLink} href="mailto:dentaloradentalclinic@gmail.com"><span className={styles.emailIcon}>✉</span><span><strong>{ar ? 'البريد الإلكتروني' : 'Email'}</strong><small>dentaloradentalclinic@gmail.com</small></span></a>
          </div>
          <div className={styles.qrPanel}><img src={qrImage} alt="Dentalora QR code" /><div><strong>{ar ? 'امسحي QR' : 'Scan to connect'}</strong><p>{ar ? 'وصلي لكل روابط العيادة في خطوة واحدة.' : 'Access Dentalora links in one quick scan.'}</p></div></div>
        </div>
      </section>

      <footer className={styles.footer}><Logo className={styles.footerLogo} compact /><strong>Dentalora</strong><span>{ar ? 'ابتسامتك هي أولويتنا.' : 'Your smile is our priority.'}</span></footer>
    </main>
  );
}
