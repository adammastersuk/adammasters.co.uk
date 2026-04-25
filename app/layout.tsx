import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://adammasters.co.uk'),
  title: {
    default: 'Adam Masters | E-Commerce Manager',
    template: '%s | Adam Masters'
  },
  description:
    'Adam Masters is an E-Commerce Manager focused on digital trading, BigCommerce execution, GA4 reporting, customer journey optimisation, and practical AI workflows.',
  keywords: [
    'E-Commerce Manager',
    'Digital Trading',
    'BigCommerce',
    'GA4',
    'Google Search Console',
    'CRO',
    'AI Workflows',
    'E-Commerce Reporting',
    'Wigan',
    'North West'
  ],
  alternates: {
    canonical: 'https://adammasters.co.uk'
  },
  openGraph: {
    title: 'Adam Masters | E-Commerce Manager',
    description:
      'Senior e-commerce and digital trading leader focused on profitable growth, operational clarity, and practical execution.',
    url: 'https://adammasters.co.uk',
    siteName: 'Adam Masters',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Adam Masters professional profile'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Masters | E-Commerce Manager',
    description:
      'Digital trading, e-commerce reporting, and practical AI-assisted workflow delivery.'
  },
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: 'Adam Masters' }],
  creator: 'Adam Masters'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-slate-900 focus:shadow"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
