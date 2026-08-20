'use client';
import { FormEvent, useEffect, useState } from 'react';
import styles from './page.module.css';

type Doctor={id:string;name:string;specialty:string};
export default function BookingForm({ar=false}:{ar?:boolean}){
 const [doctors,setDoctors]=useState<Doctor[]>([]); const [loading,setLoading]=useState(false); const [message,setMessage]=useState('');
 useEffect(()=>{fetch('/api/doctors').then(r=>r.json()).then(d=>setDoctors(d.doctors||[])).catch(()=>setMessage(ar?'تعذر تحميل الأطباء حاليًا.':'Unable to load doctors right now.'))},[ar]);
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);setMessage('');const f=new FormData(e.currentTarget);const startsAt=String(f.get('startsAt'));const end=new Date(startsAt);end.setMinutes(end.getMinutes()+30);const payload={fullName:f.get('fullName'),email:f.get('email'),phone:f.get('phone'),doctorId:f.get('doctorId'),service:f.get('service'),startsAt:new Date(startsAt).toISOString(),endsAt:end.toISOString()};const r=await fetch('/api/bookings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await r.json();setLoading(false);if(r.ok){setMessage(ar?'تم حجز موعدك بنجاح. يرجى الاحتفاظ بإيميلك لتحديثات العيادة.':'Your visit is booked successfully. Please keep your email for clinic updates.');e.currentTarget.reset()}else setMessage(data.error||(ar?'يرجى المحاولة مرة أخرى.':'Please try again.'));}
 return <form className={styles.form} onSubmit={submit}>
  <div className={styles.formGrid}>
   <label>{ar?'الاسم بالكامل':'Full name'}<input name="fullName" required placeholder={ar?'اكتبي اسمك':'Your name'}/></label>
   <label>{ar?'البريد الإلكتروني':'Email'}<input name="email" type="email" required placeholder="you@example.com"/></label>
   <label>{ar?'رقم الهاتف':'Phone'}<input name="phone" placeholder="01xxxxxxxxx"/></label>
   <label>{ar?'الخدمة':'Service'}<select name="service" required><option value="">{ar?'اختاري الخدمة':'Choose service'}</option><option>{ar?'كشف أسنان':'Dental consultation'}</option><option>{ar?'تنظيف الأسنان':'Cleaning'}</option><option>{ar?'تجميل الأسنان':'Cosmetic dentistry'}</option><option>{ar?'تقويم الأسنان':'Orthodontics'}</option><option>{ar?'علاج جذور الأسنان':'Endodontics'}</option></select></label>
   <label>{ar?'الطبيب':'Doctor'}<select name="doctorId" required><option value="">{ar?'اختاري الطبيب':'Choose doctor'}</option>{doctors.map(d=><option key={d.id} value={d.id}>{d.name} · {d.specialty}</option>)}</select></label>
   <label>{ar?'التاريخ والوقت':'Date & time'}<input name="startsAt" type="datetime-local" required/></label>
  </div>
  <button className={styles.primary} disabled={loading}>{loading?(ar?'جارٍ الحجز…':'Booking…'):(ar?'احجزي الموعد':'Book appointment')}</button>
  {message&&<p className={styles.message}>{message}</p>}
 </form>
}
