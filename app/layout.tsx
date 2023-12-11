import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coding Corner Blog',
  description: 'The Coding Corner Blog made by Marco Ciccale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mt-24`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
