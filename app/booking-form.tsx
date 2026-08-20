'use client';
import { FormEvent, useEffect, useState } from 'react';
import styles from './page.module.css';

type Doctor={id:string;name:string;specialty:string};

export default function BookingForm(){
 const [doctors,setDoctors]=useState<Doctor[]>([]); const [loading,setLoading]=useState(false); const [message,setMessage]=useState('');
 useEffect(()=>{fetch('/api/doctors').then(r=>r.json()).then(d=>setDoctors(d.doctors||[])).catch(()=>setMessage('Unable to load doctors right now.'))},[]);
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);setMessage('');const f=new FormData(e.currentTarget);const startsAt=String(f.get('startsAt'));const end=new Date(startsAt);end.setMinutes(end.getMinutes()+30);const payload={fullName:f.get('fullName'),email:f.get('email'),phone:f.get('phone'),doctorId:f.get('doctorId'),service:f.get('service'),startsAt:new Date(startsAt).toISOString(),endsAt:end.toISOString()};const r=await fetch('/api/bookings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await r.json();setLoading(false);if(r.ok){setMessage('Your visit is booked successfully. Please keep your email for clinic updates.');e.currentTarget.reset()}else setMessage(data.error||'Please try again.');}
 return <form className={styles.form} onSubmit={submit}>
  <div className={styles.formGrid}><label>Full name<input name="fullName" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label><label>Phone<input name="phone" placeholder="01xxxxxxxxx"/></label><label>Service<select name="service" required><option value="">Choose service</option><option>Dental consultation</option><option>Cleaning</option><option>Cosmetic dentistry</option><option>Orthodontics</option><option>Endodontics</option></select></label><label>Doctor<select name="doctorId" required><option value="">Choose doctor</option>{doctors.map(d=><option key={d.id} value={d.id}>{d.name} · {d.specialty}</option>)}</select></label><label>Date & time<input name="startsAt" type="datetime-local" required/></label></div>
  <button className={styles.primary} disabled={loading}>{loading?'Booking…':'Book appointment'}</button>
  {message&&<p className={styles.message}>{message}</p>}
 </form>
}
