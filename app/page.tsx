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
const clinicAddress = '39 El-Batal Ahmed Abd El-Aziz, Ad Doqi, Dokki, Giza Governorate 3753601';
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
        <nav aria-label="Main navigation">
          <a href="#booking">{ar ? 'الحجز' : 'Booking'}</a>
          <a href="#contact">{ar ? 'اتصلي بنا' : 'Contact'}</a>
          <a href="#location">{ar ? 'الموقع' : 'Location'}</a>
          <a href="#connect">{ar ? 'تواصل معنا' : 'Connect'}</a>
        </nav>
        <div className={styles.navActions}>
          <button className={styles.lang} onClick={() => setAr(!ar)} aria-label="Change language"><span className={!ar ? styles.activeLang : ''}>EN</span><span className={ar ? styles.activeLang : ''}>ع</span></button>
          <Link className={styles.doctorLogin} href="/doctor/login">{ar ? 'دخول الطبيب' : 'Doctor login'}</Link>
          <a className={styles.navBook} href="#booking">{ar ? 'احجزي الآن' : 'Book Appointment'} ↗</a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <small>{ar ? 'ابتسامات صحية · حياة أفضل' : 'HEALTHY SMILES · BETTER LIVES'}</small>
          <h1>{ar ? <>ابتسامتك، <em>هي أولويتنا.</em></> : <>Your Smile,<br/><em>Our Priority.</em></>}</h1>
          <p>{ar ? 'رعاية أسنان احترافية في تجربة هادئة وبسيطة، تبدأ من حجز موعدك.' : 'Professional dental care with a calm, simple experience — starting with an easy appointment.'}</p>
          <div className={styles.heroActions}><a className={styles.primary} href="#booking">{ar ? 'احجزي موعدك' : 'Book Appointment'} →</a><a className={styles.secondary} href="#contact">{ar ? 'تواصلي معنا' : 'Contact us'} →</a></div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.glow}></div><div className={styles.orbit}></div><Logo className={styles.heroLogo} compact />
          <div className={styles.heroBadge}>{ar ? 'دينتالورا' : 'Dentalora'}<span>{ar ? 'عيادة الأسنان' : 'Dental Clinic'}</span></div>
        </div>
      </section>

      <section id="booking" className={styles.bookingSection}>
        <div className={styles.sectionEyebrow}><span></span>{ar ? 'الحجز' : 'BOOKING'}<span></span></div>
        <h2>{ar ? 'احجزي موعدك بسهولة' : 'Book your appointment'}</h2>
        <p className={styles.sectionLead}>{ar ? 'كل احتياجات الحجز في مكان واحد.' : 'Everything you need to book your visit, in one simple place.'}</p>
        <div className={styles.bookingCard}><div className={styles.bookingHeading}><div><small>{ar ? 'بسيط وآمن' : 'SIMPLE & SECURE'}</small><h3>{ar ? 'اختاري الموعد المناسب لكِ' : 'Choose the visit that suits you'}</h3></div><div className={styles.bookingMark}><Logo compact /></div></div><BookingForm ar={ar} /></div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionEyebrow}><span></span>{ar ? 'اتصلي بنا' : 'CONTACT US'}<span></span></div>
        <h2>{ar ? 'خلي ابتسامتك تبدأ هنا.' : 'Get in touch'}</h2>
        <p className={styles.sectionLead}>{ar ? 'إحنا هنا عشان نساعدك.' : 'We are here to help you smile brighter.'}</p>
        <div className={styles.contactGrid}>
          <a href="tel:01119090808" className={styles.infoCard}><span>☎</span><div><strong>01119090808</strong><small>{ar ? 'موبايل' : 'Mobile'}</small></div>↗</a>
          <a href="tel:0233447671" className={styles.infoCard}><span>☎</span><div><strong>0233447671</strong><small>{ar ? 'أرضي' : 'Landline'}</small></div>↗</a>
          <a href="mailto:dentaloradentalclinic@gmail.com" className={styles.infoCard}><span>✉</span><div><strong>dentaloradentalclinic@gmail.com</strong><small>{ar ? 'البريد الإلكتروني' : 'Email'}</small></div>↗</a>
        </div>
      </section>

      <section id="location" className={styles.locationSection}>
        <div className={styles.locationCopy}><div className={styles.sectionEyebrow}><span></span>{ar ? 'موقعنا' : 'FIND US'}<span></span></div><h2>{ar ? 'موقع العيادة' : 'Our Location'}</h2><p>{ar ? 'زورينا في الدقي.' : 'Visit us at our clinic in Dokki.'}</p><div className={styles.addressCard}><span>⌖</span><div><strong>Dentalora Dental Clinic</strong><p>{clinicAddress}</p><a href={mapUrl} target="_blank" rel="noreferrer">{ar ? 'فتح Google Maps' : 'Open Google Maps'} ↗</a></div></div></div>
        <a className={styles.mapCard} href={mapUrl} target="_blank" rel="noreferrer"><div className={styles.mapGrid}></div><div className={styles.mapPin}>⌖</div><div className={styles.mapLabel}><strong>Dentalora</strong><span>Dokki, Giza</span></div><span className={styles.mapButton}>{ar ? 'فتح الخريطة' : 'Open Google Maps'} ↗</span></a>
      </section>

      <section id="connect" className={styles.connectSection}>
        <div className={styles.connectHeading}><div><div className={styles.sectionEyebrow}><span></span>{ar ? 'تواصل معنا' : 'CONNECT WITH US'}<span></span></div><h2>{ar ? 'تابعينا' : 'Follow our journey'}</h2><p>{ar ? 'كل روابط العيادة في مكان واحد.' : 'Stay connected for tips, updates & transformations.'}</p></div></div>
        <div className={styles.connectGrid}>
          <div className={styles.socialPanel}>{socials.map((social) => <a key={social.key} href={social.href} target="_blank" rel="noreferrer" className={styles.socialLink}><span className={`${styles.socialIcon} ${styles[social.key]}`}><SocialIcon type={social.key} /></span><span><strong>{social.label}</strong><small>{ar ? 'افتح الصفحة' : 'Visit our page'}</small></span><span className={styles.arrow}>↗</span></a>)}<a className={styles.emailLink} href="mailto:dentaloradentalclinic@gmail.com"><span className={styles.emailIcon}>✉</span><span><strong>Email</strong><small>dentaloradentalclinic@gmail.com</small></span></a></div>
          <div className={styles.qrPanel}><img src={qrImage} alt="Dentalora QR code" /><div><strong>{ar ? 'امسحي QR Code' : 'Scan QR Code'}</strong><p>{ar ? 'وصلي لكل روابط العيادة فورًا.' : 'Visit our profiles instantly.'}</p></div></div>
        </div>
      </section>

      <section className={styles.finalCta}><div><h2>{ar ? 'جاهزة لابتسامة أكثر صحة وإشراقًا؟' : 'Ready for a healthier, brighter smile?'}</h2><p>{ar ? 'احجزي موعدك اليوم.' : 'Book your appointment today.'}</p></div><a className={styles.primary} href="#booking">{ar ? 'احجزي موعدك' : 'Book Appointment'} →</a></section>

      <footer className={styles.footer}><div className={styles.footerBrand}><Logo className={styles.footerLogo} compact /><strong>Dentalora</strong><small>{ar ? 'ابتسامتك هي أولويتنا.' : 'Your smile is our priority.'}</small></div><div><strong>Contact</strong><span>01119090808</span><span>0233447671</span><span>dentaloradentalclinic@gmail.com</span></div><div><strong>Location</strong><span>39 El-Batal Ahmed Abd El-Aziz</span><span>Ad Doqi, Dokki, Giza</span></div><div className={styles.footerSocials}>{socials.map(s=><a key={s.key} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div></footer>
    </main>
  );
}
