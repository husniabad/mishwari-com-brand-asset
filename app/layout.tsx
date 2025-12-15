import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'مشواري | mishwari',
  description:
    'Mishwari (مشواري) is the definitive Arabic brand for "My Journey". This premium .com domain is available for acquisition. Contact the developers.',
  icons: {
    icon: '/yallabuslogo.jpeg',
  },
  keywords: [
    'Mishwari',
    'Meshwari',
    'مشواري',
    'Domain for sale',
    'Premium Arabic Domain',
    'Logistics Brand',
    'Transport App Name',
    'Saudi Startup Naming',
  ],
  openGraph: {
    title: 'Mishwari.com (مشواري) - Premium Asset',
    description:
      'The definitive Arabic dictionary term for "My Journey". Available for acquisition.',
    url: 'https://mishwari.com',
    siteName: 'Mishwari.com',
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    languages: {
      'en-US': 'https://mishwari.com',
      'ar-SA': 'https://mishwari.com',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Mishwari.com Premium Domain',
              description:
                'The premium internet domain name Mishwari.com (مشواري) is available for transfer.',
              brand: {
                '@type': 'Brand',
                name: 'Mishwari',
              },
              offers: {
                '@type': 'Offer',
                url: 'https://mishwari.com',
                priceCurrency: 'USD',
                price: '15000.00',
                availability: 'https://schema.org/InStock',
                seller: {
                  '@type': 'Organization',
                  name: 'YallaBus Developers',
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
