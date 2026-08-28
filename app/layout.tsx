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
    'Adam Masters is an E-Commerce Manager working across trading, customer experience, ecommerce technology, data, automation and practical AI implementation.',
  keywords: [
    'E-Commerce Manager',
    'Ecommerce Management',
    'BigCommerce',
    'GA4',
    'Google Search Console',
    'CRO',
    'Ecommerce Integrations',
    'Ecommerce Automation',
    'Wigan',
    'North West'
  ],
  openGraph: {
    title: 'Adam Masters | E-Commerce Manager',
    description:
      'Commercial ecommerce management across trading, customer experience, technology, data, automation and AI implementation.',
    url: 'https://adammasters.co.uk',
    siteName: 'Adam Masters',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Adam Masters, E-Commerce Manager'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Masters | E-Commerce Manager',
    description:
      'Commercial ecommerce management across trading, technology, data, automation and customer experience.'
  },
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: 'Adam Masters' }],
  creator: 'Adam Masters'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adam Masters',
    url: 'https://adammasters.co.uk',
    jobTitle: 'E-Commerce Manager',
    worksFor: {
      '@type': 'Organization',
      name: 'Bents Garden & Home',
      url: 'https://www.bents.co.uk'
    },
    sameAs: ['https://www.linkedin.com/in/adammasters-digital', 'https://github.com/adammastersuk'],
    knowsAbout: [
      'Ecommerce management',
      'BigCommerce',
      'Ecommerce analytics',
      'Ecommerce integrations',
      'Conversion optimisation',
      'Workflow automation'
    ]
  };

  return (
    <html lang="en-GB">
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
        />
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
