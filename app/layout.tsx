import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import Navbar from './components/navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coding Corner Blog',
  description: 'The Coding Corner Blog made by Marco Ciccale',
  creator: 'Marco Ciccale Baztán',
  publisher: 'Marco Ciccale Baztán',
  robots: 'noindex',
  category: 'Tech Blog',
  keywords: [
    'blog',
    'programming',
    'ciccale',
    'marco',
    'javascript',
    'typescript',
    'nextjs',
    'reactjs',
    'html',
    'css',
    'tailwindcss',
    'framework',
    'library',
    'web',
    'portfolio',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mt-24 dark:bg-gray-900`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
