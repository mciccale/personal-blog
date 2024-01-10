import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Navbar from './components/navbar';
import { metadataContent } from './lib/constants';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = metadataContent;

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
