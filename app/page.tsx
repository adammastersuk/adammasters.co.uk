import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'E-Commerce Manager',
  description:
    'Adam Masters is E-Commerce Manager at Bents Garden & Home, working across trading, customer experience, ecommerce technology, data, automation and practical AI implementation.',
  alternates: { canonical: '/' }
};

const capabilities = [
  {
    title: 'Ecommerce',
    description: 'Trading, onsite merchandising, conversion, promotional activity and customer journey improvement.',
    tools: 'BigCommerce · product presentation · CRO'
  },
  {
    title: 'Data & insight',
    description: 'Performance reporting, product analysis and onsite search insight that lead to clear priorities.',
    tools: 'GA4 · Search Console · Looker Studio'
  },
  {
    title: 'Technology',
    description: 'Integrations, product feeds, APIs and inventory flows across ecommerce systems and partners.',
    tools: 'BigCommerce · Patchworks · ERP data flows'
  },
  {
    title: 'AI & automation',
    description: 'AI-assisted analysis, internal tools, service agents and repeatable workflows for real team problems.',
    tools: 'AI-assisted development · agents · automation'
  }
];

const selectedWork = [
  {
    label: 'Reporting & decision support',
    title: 'Turning weekly performance data into priorities',
    description:
      'A repeatable reporting workflow that brings commercial inputs together, frames risks and opportunities, and makes the next actions clear.'
  },
  {
    label: 'Ecommerce operations',
    title: 'Removing friction from product image preparation',
    description:
      'A focused browser tool for batch resizing, consistent presets and export controls, built around a repetitive catalogue task.'
  },
  {
    label: 'AI implementation',
    title: 'Testing AI-assisted ecommerce analysis',
    description:
      'A structured workflow for using connected data and AI to support first-pass analysis without handing over the commercial judgement.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200/80 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Container>
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rail">E-Commerce Manager</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Commercial ecommerce, improved through technology, data and customer experience.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              I’m Adam Masters, E-Commerce Manager at Bents Garden &amp; Home. I work across trading, merchandising,
              integrations, reporting and practical AI implementation to solve commercial and operational problems.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              I am comfortable moving from a customer journey or performance question into the systems underneath it,
              then working with teams and technology partners or building a focused solution myself.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/work" className="focus-ring inline-flex min-h-11 items-center rounded-full bg-rail px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-950">
                See how I work
              </Link>
              <Link href="/builds" className="focus-ring inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-500">
                View selected projects
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Capabilities" title="Commercial thinking, hands-on delivery" intro="Capabilities come first. Platforms are useful when they help a team make better decisions, serve customers or operate more reliably.">
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => (
            <Card key={capability.title}>
              <h3 className="text-xl font-semibold text-slate-900">{capability.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{capability.description}</p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-medium uppercase tracking-wide text-slate-500">{capability.tools}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected work" title="Evidence through useful work" intro="Projects and operating workflows grounded in real ecommerce needs. No invented case-study theatre.">
        <div className="grid gap-5 lg:grid-cols-3">
          {selectedWork.map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rail">{item.label}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold">
          <Link href="/builds" className="focus-ring rounded-sm text-rail underline decoration-emerald-800/30 underline-offset-4 hover:decoration-rail">Explore the project detail →</Link>
          <Link href="/learning" className="focus-ring rounded-sm text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950">Read working notes →</Link>
        </div>
      </Section>
    </>
  );
}
