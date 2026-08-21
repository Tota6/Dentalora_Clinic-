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
const logoUrl = 'https://raw.githubusercontent.com/Tota6/Dentalora_Clinic-/main/public/dentalora-logo-v2.svg';

function Logo({ className = '' }: { className?: string }) {
  return <img className={className} src={logoUrl} alt="Dentalora" loading="eager" decoding="async" />;
}
function SocialIcon({ type }: { type: string }) {
  if (type === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.7.3-1 1-1Z" fill="currentColor"/></svg>;
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.3" cy="6.8" r="1.2" fill="currentColor"/></svg>;
  if (type === 'tiktok') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h3c.3 2 1.5 3.5 3.5 4v3.2c-1.4 0-2.7-.4-3.8-1.1v6.2a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.2a2.6 2.6 0 1 0 1.5 2.4V4h.3Z" fill="currentColor"/></svg>;
  return <span aria-hidden="true">◎</span>;
}

export default function Home() {
  const [ar, setAr] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const services = ar
    ? [
        ['01','طب الأسنان العام','فحوصات وتنظيف ورعاية وقائية.'],
        ['02','تجميل الأسنان','تحسين طبيعي ومتناسق للابتسامة.'],
        ['03','تقويم الأسنان','تقويم ومحاذاة لابتسامة أكثر ثقة.'],
        ['04','زراعة الأسنان','حلول متقدمة لاستعادة الأسنان.'],
        ['05','أسنان الأطفال','رعاية لطيفة ومريحة للأطفال.'],
      ]
    : [
        ['01','General Dentistry','Routine check-ups, cleanings, and preventive care.'],
        ['02','Cosmetic Dentistry','Enhance your smile with veneers, whitening & more.'],
        ['03','Orthodontics','Braces and aligners for a healthier, straighter smile.'],
        ['04','Implants','Advanced dental implants for a natural look & feel.'],
        ['05','Pediatric Dentistry','Gentle care designed for your little ones.'],
      ];

  return <main dir={ar ? 'rtl' : 'ltr'} className={styles.page}>
    <header className={styles.nav}>
      <Link href="/" className={styles.brand} aria-label="Dentalora home"><Logo className={styles.brandLogo}/></Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        <a href="#home">{ar ? 'الرئيسية' : 'Home'}</a>
        <a href="#services">{ar ? 'الخدمات' : 'Services'}</a>
        <a href="#about">{ar ? 'عن العيادة' : 'About'}</a>
        <a href="#contact">{ar ? 'تواصل معنا' : 'Contact'}</a>
      </nav>
      <div className={styles.navActions}>
        <button className={styles.lang} onClick={() => setAr(!ar)} aria-label="Change language"><span className={!ar ? styles.langActive : ''}>EN</span><span className={ar ? styles.langActive : ''}>العربية</span></button>
        <a className={styles.navBooking} href="#booking">{ar ? 'حجز موعد' : 'Book Appointment'} <span>↗</span></a>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen}><i/><i/><i/></button>
      </div>
    </header>

    {menuOpen && <div className={styles.menuOverlay} onClick={closeMenu}><aside className={styles.sideMenu} onClick={e => e.stopPropagation()}><div className={styles.sideHead}><Logo className={styles.sideLogo}/><button onClick={closeMenu} className={styles.closeButton} aria-label="Close menu">×</button></div><a href="#booking" onClick={closeMenu}>{ar ? 'حجز موعد' : 'Book Appointment'}</a><a href="#services" onClick={closeMenu}>{ar ? 'الخدمات' : 'Services'}</a><a href="#about" onClick={closeMenu}>{ar ? 'عن العيادة' : 'About'}</a><a href="#contact" onClick={closeMenu}>{ar ? 'تواصل معنا' : 'Contact'}</a><Link href="/doctor/login" onClick={closeMenu}>{ar ? 'دخول الطبيب' : 'Doctor Login'}</Link></aside></div>}

    <section id="home" className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}>{ar ? 'مرحبًا بكم في دينتالورا' : 'WELCOME TO DENTALORA'}</div>
        <h1>{ar ? <>ابتسامتك هي<br/><em>أولويتنا.</em></> : <>Your Smile,<br/><em>Our Priority.</em></>}</h1>
        <div className={styles.heroRule}/>
        <p>{ar ? 'نجمع بين رعاية الأسنان المتقدمة واللمسة الهادئة لنساعدك على الابتسام بثقة كل يوم.' : 'We combine advanced dental care with a gentle touch to help you smile with confidence every day.'}</p>
        <div className={styles.heroCtas}><a className={styles.primaryHero} href="#booking">{ar ? 'احجزي موعدك' : 'Book Appointment'} <b>▣</b></a><a className={styles.secondaryHero} href="#services">{ar ? 'استكشفي الخدمات' : 'Explore Services'} <b>→</b></a></div>
      </div>
      <div className={styles.heroVisual} aria-label="Dentalora clinic interior">
        <div className={styles.archGlow}/><div className={styles.archWall}><div className={styles.archLogo}><Logo className={styles.heroLogo}/></div></div>
        <div className={styles.reception}><div className={styles.receptionTop}/><div className={styles.receptionFront}/></div>
        <div className={styles.plant plantOne}/><div className={styles.plant plantTwo}/><div className={styles.windowGlow}/>
      </div>
      <div className={styles.heroBenefits}><span>◉ {ar ? 'تكنولوجيا متقدمة' : 'Advanced Technology'}</span><span>◉ {ar ? 'بيئة مريحة' : 'Comfortable Environment'}</span><span>◉ {ar ? 'رعاية متخصصة' : 'Expert Care'}</span><span>◉ {ar ? 'راحة المريض' : 'Patient Comfort'}</span></div>
    </section>

    <section id="booking" className={styles.booking}>
      <div className={styles.bookingCard}>
        <div className={styles.bookingIntro}>
          <div className={styles.eyebrow}>{ar ? 'احجزي زيارتك' : 'BOOK YOUR VISIT'}</div>
          <h2>{ar ? <>احجزي<br/><em>موعدك</em></> : <>Book Your<br/><em>Appointment</em></>}</h2>
          <div className={styles.bookingRule}/><p>{ar ? 'نحن هنا لنجعل زيارتك مريحة وبسيطة.' : "We're here to make your visit comfortable and stress-free."}</p>
          <div className={styles.bookingNote}><span>◎</span><b>{ar ? 'نتطلع لرؤيتك!' : 'We look forward to seeing you!'}</b></div>
        </div>
        <div className={styles.bookingFormWrap}><BookingForm ar={ar}/></div>
        <div className={styles.bookingSide}><div className={styles.bookingSideIcon}>▣</div><strong>{ar ? 'احجزي موعد' : 'Book Appointment'}</strong><span>{ar ? 'سريع · سهل · آمن' : 'Fast  ·  Easy  ·  Secure'}</span></div>
      </div>
    </section>

    <section id="services" className={styles.services}>
      <div className={styles.sectionHead}><div><div className={styles.eyebrow}>{ar ? 'خدماتنا' : 'OUR SERVICES'}</div><h2>{ar ? 'رعاية أسنان متكاملة لك ولعائلتك' : 'Comprehensive Dental Care for You & Your Family'}</h2></div><a href="#booking">{ar ? 'احجزي الآن' : 'Book Now'} →</a></div>
      <div className={styles.serviceGrid}>{services.map(([num,title,text]) => <article className={styles.serviceCard} key={title}><div className={styles.serviceIcon}>⌁</div><span>{num}</span><h3>{title}</h3><p>{text}</p><a href="#booking">{ar ? 'اعرفي المزيد' : 'Learn More'} →</a></article>)}</div>
    </section>

    <section id="about" className={styles.locationSection}>
      <div className={styles.locationPanel}><div className={styles.eyebrow}>{ar ? 'موقعنا' : 'OUR LOCATION'}</div><h2>{ar ? 'زورينا' : 'Visit Us'}</h2><p>{clinicAddress}</p><a href={mapUrl} target="_blank" rel="noreferrer">{ar ? 'افتحي الاتجاهات' : 'Get Directions'} →</a></div><a href={mapUrl} target="_blank" rel="noreferrer" className={styles.mapVisual} aria-label="Open Dentalora location in Google Maps"><div className={styles.mapGrid}/><div className={styles.mapPin}>●<strong>Dentalora Clinic</strong></div><span className={styles.mapLabel}>Dokki · Giza</span></a></section>

    <section id="contact" className={styles.contactStrip}>
      <div><span className={styles.stripIcon}>⌖</span><b>{ar ? 'الموقع' : 'Location'}</b><span>{clinicAddress}</span></div>
      <a href="mailto:dentaloradentalclinic@gmail.com"><span className={styles.stripIcon}>✉</span><b>{ar ? 'البريد الإلكتروني' : 'Email Us'}</b><span>dentaloradentalclinic@gmail.com</span></a>
      <div><b>{ar ? 'تابعينا' : 'Follow Us'}</b><div className={styles.socials}>{socials.map(s=><a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><SocialIcon type={s.key}/></a>)}</div></div>
      <div className={styles.qr}><img src={qrImage} alt="Dentalora QR Code"/><span>{ar ? 'امسحي للتواصل' : 'Scan to Connect'}</span></div>
    </section>

    <footer className={styles.footer}><div className={styles.footerBrand}><Logo className={styles.footerLogo}/><p>{ar ? 'ابتسامتك هي أولويتنا.' : 'Your smile is our priority.'}<br/>{ar ? 'نحن هنا لنجعلها مثالية.' : "We're here to make it perfect."}</p></div><div><b>{ar ? 'روابط سريعة' : 'Quick Links'}</b><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div><div><b>{ar ? 'الخدمات' : 'Services'}</b><span>General Dentistry</span><span>Cosmetic Dentistry</span><span>Orthodontics</span><span>Implants</span><span>Pediatric Dentistry</span></div><div><b>{ar ? 'مواعيد العمل' : 'Working Hours'}</b><span>Saturday – Thursday</span><span>10:00 AM – 8:00 PM</span><span>Friday</span><span>Closed</span></div><div className={styles.copyright}>© 2026 Dentalora Clinic. All rights reserved.</div></footer>
  </main>;
}
