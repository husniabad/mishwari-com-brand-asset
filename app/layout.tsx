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
  title: 'mishwari.com is available | مشواري',
  description:
    'Mishwari.com is available. A memorable Arabic name for mobility, delivery, hiring, and fintech products. Secure checkout available through GoDaddy/Afternic after agreement.',
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
    'Arabic domain name',
    'Saudi Arabia domain',
    'UAE domain',
    'mobility domain',
    'delivery domain',
    'recruitment domain',
    'fintech domain',
    'MENA startup',
    'GCC domain',
  ],
  openGraph: {
    title: 'mishwari.com is available | مشواري',
    description:
      'A memorable Arabic name for mobility, delivery, hiring, and fintech products.',
    url: 'https://mishwari.com',
    siteName: 'mishwari.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mishwari.com/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'mishwari.com domain',
      },
    ],
  },
  alternates: {
    languages: {
      en: 'https://mishwari.com',
      ar: 'https://mishwari.com',
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
              '@type': 'WebPage',
              name: 'mishwari.com is available',
              description:
                'Mishwari.com (مشواري) is an Arabic domain name available for acquisition.',
              url: 'https://mishwari.com',
              inLanguage: ['en', 'ar'],
              mainEntity: {
                '@type': 'Thing',
                name: 'Mishwari.com',
                alternateName: 'مشواري',
                description:
                  'Mishwari means "my journey" or "my errand" in Arabic.',
              },
              potentialAction: {
                '@type': 'CommunicateAction',
                target: 'mailto:contact@mishwari.com',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
