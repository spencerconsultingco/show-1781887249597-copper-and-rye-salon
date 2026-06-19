import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Copper & Rye Salon | Asheville, NC Hair Salon',
  description:
    'Copper & Rye Salon crafts lived-in color, precision cuts, and transformative hair care in Asheville, NC. Balayage, color correction, keratin treatments, and more by master colorist Renata.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${jost.variable}`}>
      <body className="bg-brand-background font-body text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
