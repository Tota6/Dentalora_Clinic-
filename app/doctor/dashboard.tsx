'use client';

import { useEffect, useState } from 'react';
import styles from './doctor.module.css';

type Appointment={id:string;service:string;starts_at:string;ends_at:string;status:string;full_name:string;email:string;phone?:string|null};

export default function DoctorDashboard(){
 const [appointments,setAppointments]=useState<Appointment[]>([]); const [doctor,setDoctor]=useState<any>(null); const [loading,setLoading]=useState(true); const [error,setError]=useState('');
 async function load(){setLoading(true);const r=await fetch('/api/doctor/appointments',{cache:'no-store'});const d=await r.json();if(r.ok){setAppointments(d.appointments||[]);setDoctor(d.doctor)}else setError(d.error||'Unable to load appointments.');setLoading(false)}
 useEffect(()=>{load()},[]);
 async function cancel(id:string){if(!window.confirm('Cancel this appointment?'))return;const r=await fetch('/api/doctor/appointments/cancel',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({appointmentId:id})});if(r.ok)load();else{const d=await r.json();setError(d.error||'Unable to cancel appointment.')}}
 async function logout(){await fetch('/api/doctor/logout',{method:'POST'});window.location.href='/doctor/login'}
 return <main className={styles.page}><header className={styles.header}><div><span className={styles.logo}>D</span><div><strong>Dentalora</strong><small>Doctor dashboard</small></div></div><button onClick={logout}>Log out</button></header><section className={styles.content}><div className={styles.heading}><div><small>TODAY&apos;S SCHEDULE</small><h1>{doctor?.name||'Doctor'}</h1><p>{doctor?.specialty||'Authorized doctor access'}</p></div><div className={styles.date}>{new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})}</div></div>{error&&<div className={styles.error}>{error}</div>}{loading?<div className={styles.empty}>Loading today&apos;s appointments…</div>:appointments.length===0?<div className={styles.empty}>No appointments scheduled for today.</div>:<div className={styles.list}>{appointments.map(a=><article key={a.id} className={styles.item}><div className={styles.time}>{new Date(a.starts_at).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}<span>– {new Date(a.ends_at).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span></div><div className={styles.patient}><strong>{a.full_name}</strong><span>{a.service}</span><a href={`mailto:${a.email}`}>{a.email}</a>{a.phone&&<span>{a.phone}</span>}</div>{a.status==='booked'&&<button className={styles.cancel} onClick={()=>cancel(a.id)}>Cancel</button>}<span className={a.status==='booked'?styles.booked:styles.cancelled}>{a.status}</span></article>)}</div>}</section></main>
}
