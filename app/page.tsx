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
          <a href="#doctors">Doctor</a>
          <a href="#booking">Booking</a>
        </nav>
        <a className={styles.navButton} href="#booking">Book a visit</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <small>PREMIUM DENTAL CARE</small>
          <h1>Your smile is <em>our priority.</em></h1>
          <p>Simple booking, personal care and a calm dental experience designed around you.</p>
          <a className={styles.primary} href="#booking">Book your appointment</a>
        </div>
        <div className={styles.heroCard} aria-label="Dentalora message">
          <span className={styles.cardMark}>D</span>
          <h2>Care that feels personal.</h2>
          <p>Clear communication. Thoughtful appointments. One simple place to book your visit.</p>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <small>ABOUT DENTALORA</small>
        <h2>Modern dentistry. Personal care.</h2>
        <p>Dentalora combines professional dental care with a warm, straightforward patient experience. Everything is kept simple, from discovering the clinic to booking an appointment.</p>
        <div className={styles.values}>
          <div><b>Care</b><span>Thoughtful treatment from your first visit onward.</span></div>
          <div><b>Smile</b><span>Personalized care focused on healthy, confident smiles.</span></div>
          <div><b>Confidence</b><span>Clear communication and a calm patient journey.</span></div>
        </div>
      </section>

      <section id="doctors" className={styles.section}>
        <small>OUR DOCTOR</small>
        <h2>Meet Dr. Mina Ayman.</h2>
        <article className={styles.doctorCard}>
          <div className={styles.doctorInitial}>M</div>
          <div>
            <h3>Dr. Mina Ayman</h3>
            <p>Dentist · Dentalora Clinic</p>
            <span>Doctor information and professional credentials will be added here as provided by the clinic.</span>
          </div>
        </article>
      </section>

      <section id="booking" className={`${styles.section} ${styles.booking}`}>
        <small>SIMPLE BOOKING</small>
        <h2>Book your visit.</h2>
        <p>Choose your service, doctor, date and time, then enter your contact details. Availability is checked before the appointment is created.</p>
        <BookingForm />
      </section>

      <section className={styles.contact} aria-label="Clinic contact">
        <div>
          <small>CONTACT DENTALORA</small>
          <h2>We are here for you.</h2>
        </div>
        <a href="mailto:dentaloradentalclinic@gmail.com">dentaloradentalclinic@gmail.com</a>
      </section>

      <footer>
        <strong>Dentalora</strong>
        <span>Your smile is our priority.</span>
        <span>Premium Dental Care · Booking Portal</span>
      </footer>
    </main>
  );
}
