import Link from 'next/link';
import styles from './page.module.css';
import BookingForm from './booking-form';

export default function Home(){return <main>
<header className={styles.nav}><Link href="/" className={styles.brand}><span className={styles.logo}>D</span><span>Dentalora</span></Link><nav><a href="#about">About Us</a><a href="#doctors">Doctors</a><a href="#booking">Booking</a></nav><a className={styles.navButton} href="#booking">Book a visit</a></header>
<section className={styles.hero}><div><small>PREMIUM DENTAL CARE</small><h1>Your smile is <em>our priority.</em></h1><p>A calm, modern dental experience built around thoughtful care, beautiful results and a simple way to book your visit.</p><a className={styles.primary} href="#booking">Book your appointment</a></div><div className={styles.heroCard}><div>Dentalora</div><h2>Care that feels personal.</h2><p>Clear communication. Thoughtful appointments. A patient experience designed around your smile.</p><span>Your smile is our priority.</span></div></section>
<section id="about"><small>ABOUT DENTALORA</small><h2>Modern dentistry. Personal care.</h2><p>Dentalora brings clinical expertise and a warm patient experience together. We keep booking simple and clinic communication clear.</p><div className={styles.values}><div><b>Care</b><span>Thoughtful treatment from first visit to follow-up.</span></div><div><b>Smile</b><span>Personalized plans for healthy, confident smiles.</span></div><div><b>Confidence</b><span>A calm experience with clear next steps.</span></div></div></section>
<section id="doctors"><small>OUR DOCTORS</small><h2>Meet the Dentalora team.</h2><div className={styles.cards}><article><b>Dr. Mina Ayman</b><span>Clinic Admin · Dentist</span></article><article><b>Doctor profile</b><span>Name & specialty to be added</span></article><article><b>Doctor profile</b><span>Name & specialty to be added</span></article></div></section>
<section id="booking" className={styles.booking}><small>SIMPLE BOOKING</small><h2>Book in one easy step.</h2><p>Choose your service, doctor, date and time. The system checks availability on the server before creating the appointment.</p><BookingForm/></section>
<footer><strong>Dentalora</strong><span>Your smile is our priority.</span><span>Premium Dental Care · Booking Portal</span></footer>
</main>}
