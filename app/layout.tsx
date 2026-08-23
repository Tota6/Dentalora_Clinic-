import type { Metadata } from 'next';
import './globals.css';
import './hero-animation.css';
export const metadata: Metadata={title:'Dentalora | Your smile is our priority',description:'Dentalora premium dental care and appointment booking'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}