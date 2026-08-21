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

function Logo({ className = '' }: { className?: string }) { return <img className={className} src="/dentalora-logo-v2.svg" alt="Dentalora" />; }
function SocialIcon({ type }: { type: string }) {
  if (type === 'facebook') return <svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.7.3-1 1-1Z" fill="currentColor"/></svg>;
  if (type === 'instagram') return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.3" cy="6.8" r="1.2" fill="currentColor"/></svg>;
  if (type === 'tiktok') return <svg viewBox="0 0 24 24"><path d="M14 4h3c.3 2 1.5 3.5 3.5 4v3.2c-1.4 0-2.7-.4-3.8-1.1v6.2a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.2a2.6 2.6 0 1 0 1.5 2.4V4h.3Z" fill="currentColor"/></svg>;
  return <span>◎</span>;
}

export default function Home() {
  const [ar, setAr] = useState(false);
  return <main dir={ar ? 'rtl' : 'ltr'} className={styles.page}>
    <header className={styles.nav}>
      <Link href="/" className={styles.brand}><Logo className={styles.brandLogo}/></Link>
      <nav><a className={styles.active} href="#home">{ar ? 'الرئيسية' : 'Home'}</a><a href="#services">{ar ? 'الخدمات' : 'Services'}</a><a href="#booking">{ar ? 'حجز موعد' : 'Book Appointment'}</a><a href="#contact">{ar ? 'تواصل معنا' : 'Contact'}</a></nav>
      <div className={styles.navActions}><button className={styles.lang} onClick={() => setAr(!ar)}>{ar ? 'عربي' : 'EN'}⌄</button><Link className={styles.doctorLogin} href="/doctor/login">♙ &nbsp;{ar ? 'دخول الطبيب' : 'Doctor Login'}</Link></div>
    </header>

    <section id="home" className={styles.hero}>
      <div className={styles.heroCopy}><div className={styles.eyebrow}>— &nbsp; CARE · SMILE · CONFIDENCE</div><h1>{ar ? <>ابتسامتك،<br/><em>شغفنا.</em></> : <>Your Smile,<br/><em>Our Passion.</em></>}</h1><p>{ar ? 'رعاية أسنان متقدمة في بيئة هادئة وعصرية، مصممة لراحتك.' : 'Advanced dental care in a calm and modern environment, designed for your comfort.'}</p><div className={styles.heroActions}><a className={styles.primary} href="#booking">▣ &nbsp; {ar ? 'احجزي موعدك' : 'Book Appointment'} <b>→</b></a><a className={styles.secondary} href="#contact">{ar ? 'تواصلي معنا' : 'Contact Us'} <b>→</b></a></div></div>
      <div className={styles.heroImage}><div className={styles.heroShade}/><div className={styles.imageLogo}><Logo/></div><div className={styles.heroTag}>Dentalora<br/><small>Dental Clinic</small></div></div>
    </section>

    <section id="services" className={styles.services}><div className={styles.sectionHead}><div><div className={styles.eyebrow}>OUR SERVICES &nbsp;—</div><h2>{ar ? 'رعاية الأسنان، في مكان واحد' : 'Dental Care, All in One Place'}</h2></div></div><div className={styles.serviceGrid}>{[['◉','General Dentistry','Cleanings, check-ups and preventive care.'],['✦','Cosmetic Dentistry','Enhance your smile with modern solutions.'],['✣','Orthodontics','Braces & aligners for a perfect smile.'],['◌','Dental Implants','Permanent solutions for missing teeth.']].map(([icon,title,text])=><article className={styles.serviceCard} key={title}><span className={styles.serviceIcon}>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section id="booking" className={styles.booking}><div className={styles.bookingCard}><div className={styles.bookingTop}><div><div className={styles.eyebrow}>BOOK YOUR VISIT</div><h2>{ar ? 'احجزي موعدك' : 'Book Your Appointment'}</h2><p>{ar ? 'اختاري الخدمة والطبيب والموعد المناسب لك.' : 'Choose your service, doctor and preferred time.'}</p></div><Logo className={styles.bookingLogo}/></div><BookingForm ar={ar}/></div></section>

    <section id="contact" className={styles.footerArea}><div className={styles.contactRow}><div><span className={styles.contactIcon}>⌖</span><div><b>Our Location</b><span>Dokki, Giza, Egypt</span></div></div><div><span className={styles.contactIcon}>⌕</span><div><b>Call Us</b><span>+20 11 1909 0808</span></div></div><div><span className={styles.contactIcon}>✉</span><div><b>Email Us</b><span>dentaloradentalclinic@gmail.com</span></div></div><div id="connect"><b>Connect With Us</b><div className={styles.socials}>{socials.slice(0,3).map(s=><a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><SocialIcon type={s.key}/></a>)}</div></div><div className={styles.qr}><img src={qrImage} alt="Dentalora QR Code"/><span>{ar ? 'امسحي للتواصل' : 'Scan to Connect'}<i>↙</i></span></div></div><div className={styles.bottom}><Logo className={styles.bottomLogo}/><span>© 2025 Dentalora. All rights reserved.</span><a href={mapUrl} target="_blank" rel="noreferrer">{clinicAddress}</a></div></section>
  </main>;
}
