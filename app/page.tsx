import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Adam Masters, E-Commerce Manager at Bents, focused on trading performance, customer experience, and commercial growth.'
};

const pillars = [
  {
    title: 'Work',
    description:
      'How I lead digital trading at Bents — connecting performance, customer experience, and commercial decision-making.',
    href: '/work'
  },
  {
    title: 'Builds',
    description:
      'Small tools and experiments — built to test ideas quickly and turn messy problems into something usable.',
    href: '/builds'
  },
  {
    title: 'Music',
    description:
      'A long-term discipline. I’m returning to guitar with more patience, better taste, and a focus on clarity.',
    href: '/music'
  },
  {
    title: 'Learning',
    description:
      'Active focus areas and a lightweight learning log — progress notes, reflections, and patterns over time.',
    href: '/learning'
  }
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-4 pb-18">
        <Container>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Adam Masters</p>

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span>E-Commerce Manager at Bents Garden &amp; Home</span>
            <span className="hidden sm:inline">•</span>
            <span>Commercial trading &amp; performance</span>
            <span className="hidden sm:inline">•</span>
            <span>Music degree (Guitar)</span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            E-Commerce Manager focused on profitable digital growth.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            I lead online trading at Bents — balancing strategy, execution, and commercial performance across the
            customer journey. I focus on turning data into clear action, improving conversion and profitability, and
            helping teams deliver consistently.
          </p>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Outside work, I build practical tools and workflows that simplify repetitive tasks and support better
            decisions.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400 hover:text-slate-900"
            >
              View Professional Profile
            </Link>

            <Link
              href="/builds"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
            >
              Browse Builds
            </Link>
          </div>
        </Container>
      </Section>

      <Section
        title="Explore"
        intro="A small set of pages that reflect how I work, what I’m building, and what I’m learning."
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
