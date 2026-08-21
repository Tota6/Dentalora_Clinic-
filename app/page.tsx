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

function Logo({ className = '' }: { className?: string }) {
  return <img className={className} src="/dentalora-logo-v2.svg" alt="Dentalora" />;
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

  return <main dir={ar ? 'rtl' : 'ltr'} className={styles.page}>
    <header className={styles.nav}>
      <Link href="/" className={styles.brand} aria-label="Dentalora home"><Logo className={styles.brandLogo}/></Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        <a href="#booking">{ar ? 'الحجز' : 'Booking'}</a>
        <a href="#services">{ar ? 'الخدمات' : 'Services'}</a>
        <a href="#contact">{ar ? 'تواصل معنا' : 'Contact'}</a>
      </nav>
      <div className={styles.navActions}>
        <button className={styles.lang} onClick={() => setAr(!ar)} aria-label="Change language"><span className={!ar ? styles.langActive : ''}>EN</span><span className={ar ? styles.langActive : ''}>ع</span></button>
        <Link className={styles.doctorLogin} href="/doctor/login">{ar ? 'دخول الطبيب' : 'Doctor Login'}</Link>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu" aria-expanded={menuOpen}><i/><i/><i/></button>
      </div>
    </header>

    {menuOpen && <div className={styles.menuOverlay} onClick={closeMenu}>
      <aside className={styles.sideMenu} onClick={e => e.stopPropagation()}>
        <div className={styles.sideHead}><Logo className={styles.sideLogo}/><button onClick={closeMenu} className={styles.closeButton} aria-label="Close menu">×</button></div>
        <a href="#booking" onClick={closeMenu}>{ar ? 'حجز موعد' : 'Book Appointment'}</a>
        <a href="#services" onClick={closeMenu}>{ar ? 'الخدمات' : 'Services'}</a>
        <a href="#contact" onClick={closeMenu}>{ar ? 'تواصل معنا' : 'Connect With Us'}</a>
        <Link href="/doctor/login" onClick={closeMenu}>{ar ? 'دخول الطبيب' : 'Doctor Login'}</Link>
        <button className={styles.sideLanguage} onClick={() => { setAr(!ar); closeMenu(); }}>{ar ? 'English' : 'العربية'}</button>
      </aside>
    </div>}

    <section id="home" className={styles.hero}>
      <div className={styles.heroGlow}/>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}>DENTALORA CLINIC &nbsp;·&nbsp; CARE · SMILE · CONFIDENCE</div>
        <h1>{ar ? <>ابتسامتك هي<br/><em>أولويتنا.</em></> : <>Your Smile Is<br/><em>Our Priority.</em></>}</h1>
        <p>{ar ? 'رعاية أسنان هادئة وعصرية، مصممة حول راحتك وتجربتك.' : 'Elegant, modern dental care designed around your comfort and experience.'}</p>
        <a className={styles.primaryHero} href="#booking">{ar ? 'احجزي موعدك' : 'Book Your Appointment'} <b>→</b></a>
        <div className={styles.heroMeta}><span>✦ {ar ? 'رعاية هادئة' : 'Calm care'}</span><span>✦ {ar ? 'حجز سهل' : 'Easy booking'}</span><span>✦ {ar ? 'الدقي، الجيزة' : 'Dokki, Giza'}</span></div>
      </div>
      <div className={styles.heroVisual} aria-label="Dentalora clinic style visual">
        <div className={styles.visualArch}><div className={styles.visualInner}><Logo className={styles.visualLogo}/><span>{ar ? 'عيادة أسنان' : 'DENTAL CLINIC'}</span></div></div>
        <div className={styles.visualLight}/>
      </div>
    </section>

    <section id="booking" className={styles.booking}>
      <div className={styles.bookingIntro}><div className={styles.eyebrow}>{ar ? 'الحجز' : 'BOOK YOUR VISIT'}</div><h2>{ar ? 'احجزي موعدك بسهولة' : 'Book Your Appointment'}</h2><p>{ar ? 'كل ما تحتاجينه في خطوات بسيطة.' : 'Everything you need in a few simple steps.'}</p></div>
      <div className={styles.bookingCard}>
        <div className={styles.bookingTop}><div><span className={styles.bookingBadge}>01</span><h3>{ar ? 'اختاري تفاصيل زيارتك' : 'Choose your visit details'}</h3></div><Logo className={styles.bookingLogo}/></div>
        <BookingForm ar={ar}/>
      </div>
    </section>

    <section id="services" className={styles.services}>
      <div className={styles.sectionHead}><div><div className={styles.eyebrow}>{ar ? 'خدماتنا' : 'OUR SERVICES'}</div><h2>{ar ? 'رعاية أسنان متكاملة' : 'Thoughtful Dental Care'}</h2></div></div>
      <div className={styles.serviceGrid}>
        {[['01','General Dentistry', 'Check-ups, cleanings and preventive care.'],['02','Cosmetic Dentistry','Natural-looking smile enhancement.'],['03','Orthodontics','Braces and aligners for a confident smile.'],['04','Endodontics','Gentle, focused root-canal care.']].map(([num,title,text])=><article className={styles.serviceCard} key={title}><span>{num}</span><h3>{title}</h3><p>{ar ? ({'General Dentistry':'كشف وتنظيف ورعاية وقائية.','Cosmetic Dentistry':'تجميل طبيعي ومتناغم للابتسامة.','Orthodontics':'تقويم وأساليب حديثة لابتسامة واثقة.','Endodontics':'علاج جذور دقيق وهادئ.'} as Record<string,string>)[title] : text}</p></article>)}
      </div>
    </section>

    <section id="contact" className={styles.footerArea}>
      <div className={styles.contactTitle}><div className={styles.eyebrow}>KEEP IN TOUCH</div><h2>{ar ? 'نحن في انتظارك' : 'Come Visit Dentalora'}</h2><p>{ar ? 'كل طرق التواصل والوصول إلينا في مكان واحد.' : 'Everything you need to reach us, in one place.'}</p></div>
      <div className={styles.contactGrid}>
        <a href={mapUrl} target="_blank" rel="noreferrer" className={styles.contactCard}><span className={styles.contactIcon}>⌖</span><div><b>{ar ? 'الموقع' : 'Our Location'}</b><span>{clinicAddress}</span><small>{ar ? 'افتحي Google Maps ↗' : 'Open Google Maps ↗'}</small></div></a>
        <a href="tel:+201119090808" className={styles.contactCard}><span className={styles.contactIcon}>⌕</span><div><b>{ar ? 'اتصلي بنا' : 'Call Us'}</b><span>01119090808</span><span>0233447671</span></div></a>
        <a href="mailto:dentaloradentalclinic@gmail.com" className={styles.contactCard}><span className={styles.contactIcon}>✉</span><div><b>{ar ? 'البريد الإلكتروني' : 'Email Us'}</b><span>dentaloradentalclinic@gmail.com</span></div></a>
        <div className={styles.contactCard}><span className={styles.contactIcon}>◎</span><div><b>{ar ? 'تواصل معنا' : 'Connect With Us'}</b><div className={styles.socials}>{socials.map(s=><a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><SocialIcon type={s.key}/></a>)}</div></div></div>
        <div className={styles.qrCard}><img src={qrImage} alt="Dentalora QR Code"/><div><b>{ar ? 'امسحي للتواصل' : 'Scan to Connect'}</b><span>All our links in one scan</span></div></div>
      </div>
      <div className={styles.bottom}><Logo className={styles.bottomLogo}/><span>© 2026 Dentalora Clinic</span><a href={mapUrl} target="_blank" rel="noreferrer">Dokki · Giza · Egypt</a></div>
    </section>
  </main>;
}
