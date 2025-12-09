// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jobhunt - Find Your Dream Job',
  description: 'Search, apply and get your dream job. The best job portal for finding career opportunities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}