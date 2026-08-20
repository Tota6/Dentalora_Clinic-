import { redirect } from 'next/navigation';
import { getDoctorSession } from '@/lib/doctor-auth';
import DoctorDashboard from './dashboard';

export default async function DoctorPage() {
  const session = await getDoctorSession();
  if (!session) redirect('/doctor/login');
  return <DoctorDashboard />;
}
