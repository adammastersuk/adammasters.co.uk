import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Work and Ecommerce Capabilities',
  description:
    'Adam Masters is E-Commerce Manager at Bents Garden & Home. Explore his work across trading, merchandising, customer experience, reporting, integrations, automation and AI.',
  alternates: { canonical: '/work' }
};

const capabilityAreas = [
  {
    title: 'Ecommerce management',
    summary: 'Running and improving the day-to-day ecommerce operation.',
    points: ['Trading and promotional priorities', 'Onsite merchandising and product presentation', 'Category, landing-page and customer journey optimisation']
  },
  {
    title: 'Data & insight',
    summary: 'Finding the commercial question behind the numbers.',
    points: ['GA4 and Search Console analysis', 'Product, channel and onsite search performance', 'Reporting that turns evidence into implementation priorities']
  },
  {
    title: 'Ecommerce technology',
    summary: 'Understanding how the storefront and its connected systems work together.',
    points: ['BigCommerce management and troubleshooting', 'ERP, middleware, product feed and inventory flows', 'Working with developers, agencies and technology partners']
  },
  {
    title: 'AI & automation',
    summary: 'Applying newer tools to specific team and customer problems.',
    points: ['AI-assisted analysis and repeatable reporting', 'Internal tools built through AI-assisted development', 'Agent knowledge, workflow automation and practical guardrails']
  }
];

const toolGroups = [
  { title: 'Commerce & integration', items: ['BigCommerce', 'Patchworks', 'Clerk', 'GoDataFeed', 'ProductHero'] },
  { title: 'Measurement & acquisition', items: ['GA4', 'Google Search Console', 'Looker Studio', 'Merchant Center', 'Google Ads'] },
  { title: 'Customer & retention', items: ['Dotdigital', 'Attentive', 'Feefo', 'Gnatta'] },
  { title: 'Workflow & automation', items: ['Windsor.ai', 'Zapier', 'AI-assisted development', 'Structured reporting workflows'] }
];

export default function WorkPage() {
  return (
    <>
      <Section
        eyebrow="Work profile"
        headingLevel={1}
        title="E-Commerce Manager at Bents Garden & Home"
        intro="I sit between the commercial plan, the customer experience and the technology that makes ecommerce run. My role combines day-to-day management with the work needed to make the operation clearer, more useful and more reliable."
      >
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Card>
            <h2 className="text-xl font-semibold text-slate-900">How I approach the role</h2>
            <p className="mt-4 leading-7 text-slate-600">
              I move between trading decisions, customer journeys, performance data and connected systems. That might
              mean improving how a category is merchandised, investigating a stock-flow problem, shaping a weekly
              report or testing whether automation can remove repetitive work.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              I stay hands-on while working across merchandising, marketing, operations, customer service and external
              technology partners. The aim is not more activity. It is a better decision and a dependable route to implementation.
            </p>
          </Card>
          <aside className="rounded-2xl bg-rail p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">Current scope</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-50">
              <li>Commercial ecommerce management</li>
              <li>BigCommerce and connected systems</li>
              <li>Customer experience and optimisation</li>
              <li>Reporting, automation and AI implementation</li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="Where I contribute" intro="Four connected areas, with commercial priorities and customer outcomes at the centre.">
        <div className="grid gap-5 md:grid-cols-2">
          {capabilityAreas.map((area) => (
            <Card key={area.title}>
              <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{area.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {area.points.map((point) => <li key={point} className="flex gap-3"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rail" />{point}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Tools in context" intro="The stack supports the work. It is not a substitute for understanding the commercial or operational problem.">
        <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
          {toolGroups.map((group) => (
            <div key={group.title} className="border-t border-slate-300 pt-4">
              <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/builds" className="focus-ring inline-flex min-h-11 items-center rounded-full bg-rail px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-950">See project evidence</Link>
          <Link href="/learning" className="focus-ring inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-500">Read working notes</Link>
        </div>
      </Section>
    </>
  );
}
