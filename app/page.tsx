import Link from 'next/link';
import styles from './page.module.css';
import BookingForm from './booking-form';

export default function Home() {
  return (
    <main>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="Dentalora home">
          <span className={styles.logo}>D</span>
          <span>Dentalora</span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#about">About Us</a>
          <a href="#doctor">Doctor</a>
        </nav>
        <Link className={styles.doctorLogin} href="/doctor/login">Doctor login</Link>
      </header>

      <section id="booking" className={styles.bookingFirst}>
        <div className={styles.bookingIntro}>
          <small>DENTALORA CLINIC</small>
          <h1>Your smile is <em>our priority.</em></h1>
          <p>Book your appointment in a few simple steps.</p>
        </div>
        <div className={styles.bookingCard}>
          <div className={styles.bookingHeading}>
            <div>
              <small>BOOKING</small>
              <h2>Book your visit</h2>
            </div>
            <span className={styles.step}>Simple & secure</span>
          </div>
          <BookingForm />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <small>ABOUT US</small>
        <h2>Dentalora</h2>
        <p>Professional dental care with a calm, simple patient experience. We keep the journey clear from booking to your visit.</p>
      </section>

      <section id="doctor" className={styles.section}>
        <small>OUR DOCTOR</small>
        <h2>Dr. Mina Ayman</h2>
        <article className={styles.doctorCard}>
          <div className={styles.doctorInitial}>M</div>
          <div>
            <h3>Dr. Mina Ayman</h3>
            <p>Dentist · Dentalora Clinic</p>
            <span>Professional credentials and additional doctor information will be added as provided by the clinic.</span>
          </div>
        </article>
      </section>

      <section className={styles.contact} aria-label="Clinic contact">
        <div>
          <small>CONTACT</small>
          <h2>Dentalora Clinic</h2>
        </div>
        <a href="mailto:dentaloradentalclinic@gmail.com">dentaloradentalclinic@gmail.com</a>
      </section>

      <footer className={styles.footer}>
        <strong>Dentalora</strong>
        <span>Your smile is our priority.</span>
      </footer>
    </main>
  );
}
