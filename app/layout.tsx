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
    'Senior E-Commerce Executive at Bents Garden & Home. Focused on trading systems, execution discipline, and building useful tools.',
  openGraph: {
  title: 'Adam Masters',
  description:
    'Senior E-Commerce Executive at Bents Garden & Home. Focused on systems, trading rhythm, and building useful tools.',
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
      'Senior E-Commerce Executive at Bents Garden & Home.'
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
