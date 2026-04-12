import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata = {
  metadataBase: new URL('https://adammasters.co.uk'),
  title: {
    default: 'Adam Masters',
    template: '%s | Adam Masters'
  },
  description:
    'E-Commerce Manager at Bents Garden & Home. Focused on digital trading performance, customer experience, and commercial growth.',
  openGraph: {
  title: 'Adam Masters',
  description:
    'E-Commerce Manager at Bents Garden & Home. Focused on trading performance, commercial clarity, and practical execution.',
  url: 'https://adammasters.co.uk',
  siteName: 'Adam Masters',
  images: [
    {
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Adam Masters'
    }
  ],
  locale: 'en_GB',
  type: 'website'
},
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Masters',
    description:
      'E-Commerce Manager at Bents Garden & Home.'
  },
  authors: [{ name: 'Adam Masters' }],
creator: 'Adam Masters',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
