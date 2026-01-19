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
  title: 'Mishwari.com (مشواري) - Premium Arabic Domain for Sale',
  description:
    'Premium Arabic domain Mishwari.com (مشواري) for sale. Perfect for ride-hailing, logistics, fintech startups in Saudi Arabia, UAE, Qatar. Escrow transfer.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'Mishwari',
    'مشواري',
    'domain for sale',
    'premium domain',
    'Arabic domain',
    'Saudi Arabia domain',
    'UAE domain',
    'ride-hailing domain',
    'logistics domain',
    'transport app',
    'MENA startup',
    'GCC domain',
    'fintech domain',
    'HR tech domain',
  ],
  openGraph: {
    title: 'Mishwari.com (مشواري) - Premium Arabic Domain for Sale',
    description:
      'Premium Arabic domain for ride-hailing, logistics, and fintech. Perfect for Saudi Arabia, UAE, and MENA startups.',
    url: 'https://mishwari.com',
    siteName: 'Mishwari.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mishwari.com/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Mishwari.com Premium Domain',
      },
    ],
  },
  alternates: {
    languages: {
      'en': 'https://mishwari.com',
      'ar': 'https://mishwari.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
              image: 'https://mishwari.com/yallabuslogo.jpeg',
              brand: {
                '@type': 'Brand',
                name: 'Mishwari',
              },
              offers: {
                '@type': 'Offer',
                url: 'https://mishwari.com',
                priceCurrency: 'USD',
                price: '20000',
                priceValidUntil: '2026-02-31',
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
