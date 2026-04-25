import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Work: E-Commerce Leadership and Digital Trading',
  description:
    'Professional profile of Adam Masters, E-Commerce Manager at Bents Garden & Home, covering commercial ownership, digital trading, reporting, and optimisation delivery.'
};

const METRICS = [
  {
    label: 'Revenue growth',
    value: '+27%',
    detail: 'Year-on-year digital revenue growth'
  },
  {
    label: 'Average selling price',
    value: '+8.8%',
    detail: 'Year-on-year improvement in ASP'
  },
  {
    label: 'Operating rhythm',
    value: 'Weekly',
    detail: 'Structured trading cadence and reporting governance'
  },
  {
    label: 'Commercial focus',
    value: 'Margin + CX',
    detail: 'Balancing profitable growth with customer experience'
  }
];

const capabilityAreas = [
  {
    title: 'Commercial ownership',
    points: [
      'Own weekly and seasonal digital trading priorities against revenue, margin, and conversion goals.',
      'Translate performance trends into practical actions across product mix, promotions, and onsite merchandising.',
      'Maintain execution discipline across campaigns, launches, and customer journey moments.'
    ]
  },
  {
    title: 'Performance and reporting',
    points: [
      'Build decision-ready reporting using GA4, Google Search Console, Dotdigital, Clerk, and Windsor.ai inputs.',
      'Create clear weekly insight packs for stakeholders with actions, risks, and commercial implications.',
      'Use reporting as an operating tool, not just a retrospective dashboard.'
    ]
  },
  {
    title: 'Growth and optimisation',
    points: [
      'Lead CRO and customer journey improvements across navigation, product discovery, and checkout pathways.',
      'Align SEO, PPC, and trading priorities so channel activity compounds rather than conflicts.',
      'Support better retention through practical segmentation, messaging, and lifecycle optimisation.'
    ]
  },
  {
    title: 'Leadership and collaboration',
    points: [
      'Work cross-functionally with marketing, merchandising, operations, and customer service teams.',
      'Set clear priorities and communicate trade-offs early so teams can execute with confidence.',
      'Combine hands-on delivery with strategic direction to keep momentum high and outcomes measurable.'
    ]
  }
];

const tools = {
  commerce: ['BigCommerce', 'Clerk', 'Patchworks', 'GoDataFeed', 'ProductHero'],
  analytics: ['GA4', 'Google Search Console', 'Looker Studio', 'Google Merchant Center', 'Google Ads'],
  crm: ['Dotdigital', 'Attentive', 'Feefo', 'Gnatta'],
  workflow: ['Windsor.ai', 'Zapier', 'Structured weekly trading and reporting cadence']
};

export default function WorkPage() {
  return (
    <>
      <Section
        title="Work"
        intro={
          <>
            I am E-Commerce Manager at{' '}
            <a
              href="https://www.bents.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-slate-900"
            >
              Bents Garden &amp; Home
            </a>
            . I lead digital trading performance with accountability for commercial outcomes, customer experience, and
            reliable delivery.
          </>
        }
      >
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          My day-to-day role sits between strategy and execution: setting priorities, turning data into action,
          coordinating stakeholders, and ensuring work lands in market in a way that improves revenue quality,
          profitability, and customer outcomes.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{metric.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Where I Add Value"
        intro="Senior-level impact comes from consistent commercial judgement and dependable execution across the full e-commerce journey."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {capabilityAreas.map((area) => (
            <Card key={area.title}>
              <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                {area.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Platforms and Operating Stack"
        intro="I use platforms as part of a wider operating system: clear priorities, clean data, and practical execution discipline."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Commerce and trading</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.commerce.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Analytics and acquisition</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.analytics.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-slate-900">CRM and customer retention</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.crm.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Workflow and reporting enablement</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.workflow.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">Selected initiatives</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
            <li>• Strengthened weekly trading governance and ownership clarity across teams.</li>
            <li>• Introduced more structured executive reporting with clearer recommendations and risk framing.</li>
            <li>• Improved feed and paid-channel alignment to support stronger product visibility and spend quality.</li>
            <li>• Embedded practical AI-assisted workflows for faster analysis and delivery support.</li>
          </ul>

          <div className="mt-5">
            <Link
              href="/builds"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-slate-400 hover:text-slate-900"
            >
              View proof-of-work projects
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
}
