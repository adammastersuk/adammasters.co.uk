import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'E-Commerce Manager: Digital Trading, Reporting, and AI Workflows',
  description:
    'Adam Masters leads e-commerce trading at Bents Garden & Home, combining BigCommerce execution, GA4 and Search Console insight, CRO, and practical AI-assisted workflows.'
};

const pillars = [
  {
    title: 'Work Profile',
    description:
      'Commercial ownership, digital trading cadence, stakeholder reporting, and platform experience across BigCommerce, GA4, GSC, Dotdigital, and Clerk.',
    href: '/work'
  },
  {
    title: 'Projects & Builds',
    description:
      'Proof-of-work projects spanning workflow automation, reporting tools, practical AI experiments, and lightweight product builds.',
    href: '/builds'
  },
  {
    title: 'Learning Log',
    description:
      'Short updates on what I am testing, what changed, and what those learnings mean for commercial e-commerce delivery.',
    href: '/learning'
  },
  {
    title: 'Contact',
    description: 'Open for senior e-commerce, digital trading, and commercially focused leadership conversations.',
    href: '/contact'
  }
];

const focusAreas = [
  'E-Commerce Manager at Bents Garden & Home',
  'BigCommerce trading, merchandising, CRO, and customer journey optimisation',
  'Performance reporting via GA4, GSC, Dotdigital, Clerk, and Windsor.ai',
  'AI-assisted workflows for faster insight generation and operational execution'
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-6 pb-18">
        <Container>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Adam Masters</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Senior e-commerce operator focused on profitable digital trading and clear commercial execution.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            I currently lead e-commerce trading at Bents Garden &amp; Home. My role combines day-to-day trading
            delivery with strategic commercial ownership across conversion, margin, customer journey performance, and
            cross-functional execution.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            I build practical systems to reduce noise: structured reporting, clearer trading rhythm, and AI-assisted
            workflows that help teams move from data to action faster.
          </p>

          <ul className="mt-6 grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {focusAreas.map((area) => (
              <li key={area} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
            >
              View Work Profile
            </Link>

            <Link
              href="/builds"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
            >
              Explore Projects
            </Link>
          </div>
        </Container>
      </Section>

      <Section
        title="Explore"
        intro="A concise overview of how I lead, what I build, and how I keep improving commercially useful execution."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.description}</p>

              <Link
                href={pillar.href}
                className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
              >
                Visit {pillar.title}
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
