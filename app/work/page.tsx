import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Professional profile of Adam Masters as Senior E-Commerce Executive at Bents.'
};

const METRICS = [
  {
    label: 'Revenue growth',
    value: '+27%',
    detail: 'YoY digital revenue growth'
  },
  {
    label: 'Contribution margin',
    value: 'Improved',
    detail: 'Strengthened end-to-end digital profitability'
  },
  {
    label: 'Average order value',
    value: '+8.8%',
    detail: 'YoY increase in ASP'
  },
  {
    label: 'Operating focus',
    value: 'Reliability',
    detail: 'Structured trading rhythm + execution discipline'
  }
];

export default function WorkPage() {
  return (
    <>
      <Section
        title="Work"
        intro={
  <>
    As Senior E-Commerce Executive at{' '}
    <a
      href="https://www.bents.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-slate-900"
    >
      Bents Garden & Home
    </a>
    , I lead digital trading and execution across our online operation. My focus is on building reliable systems, improving trading rhythm, and creating consistent customer outcomes at scale.
  </>
}
      >
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          I&apos;m drawn to complex problems, especially when the answer is to make things clearer.
        </p>

        {/* Metrics highlight row */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {metric.value}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        <Card className="mt-10">
          <h3 className="text-xl font-semibold text-slate-900">Role Summary</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            I work across ecommerce trading, operational systems, and execution planning - aligning teams around clear priorities, measurable outcomes, and sustainable trading rhythm.
          </p>
        </Card>

        {/* Pull-quote */}
        <div className="mt-6">
          <Card>
            <p className="text-lg font-semibold leading-snug text-slate-900">
              “Digital should not just grow, it should compound profit through disciplined execution and better systems.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Trading, systems, and execution - designed to compound over time.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Where I Add Value" intro="I operate at the intersection of trading, systems, and execution.">
        <div className="max-w-3xl text-base leading-relaxed text-slate-700">
          <p className="mt-6">In practice, that means:</p>

          <ul className="mt-4 space-y-2">
            <li>– Turning <strong>commercial strategy</strong> into structured daily action</li>
            <li>– <strong>Building internal workflows</strong> that reduce friction and increase reliability</li>
            <li>– <strong>Improving digital performance</strong> through clarity, not constant reinvention</li>
            <li>– <strong>Aligning teams</strong> around priorities that actually move outcomes</li>
          </ul>

          <p className="mt-6">
            I’m most useful when things feel complex. My instinct is to simplify, structure, and make progress measurable.
          </p>
        </div>
      </Section>

      {/* Tools & Platforms */}
      <Section
        title="Tools & Platforms"
        intro="The stack behind the day-to-day: trading, analytics, retention, and the systems that keep digital commerce moving."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Commerce & Trading</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'BigCommerce',
                'Attentive',
                'Clerk',
                'Cloudflare',
                'Patchworks',
                'GoDataFeed',
                'ProductHero',
                'Zapier'
              ].map((item) => (
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
            <h3 className="text-sm font-semibold text-slate-900">Measurement & Optimisation</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'GA4',
                'Google Search Console',
                'Google Merchant Center',
                'Google Ads',
                'Looker Studio',
                'Hotjar'
              ].map((item) => (
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
            <h3 className="text-sm font-semibold text-slate-900">Customer & Retention</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Attentive', 'Journeys/Flows', 'Feefo', 'Gnatta'].map((item) => (
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
            <h3 className="text-sm font-semibold text-slate-900">Operations, Planning & Fulfilment</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'Microsoft Teams',
                'OpSuite',
                'Weekly Trading Rhythm',
                'Merchandising Planning',
                'Carrier Management',
                'Packaging Solutions'
              ].map((item) => (
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

        <p className="mt-5 max-w-3xl text-sm text-slate-600">
          Tools matter less than structure - but the right stack makes execution compound.
        </p>
      </Section>

      <Section title="Selected Initiatives" intro="A few examples of where I&apos;ve focused my effort.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            'Improved weekly trade rhythm through clearer planning, ownership, and retrospectives.',
            'Implemented API-driven automation across commerce and retention systems.',
            'Led customer service platform strategy (Gnatta evaluation & rollout plan)',
            'Introduced structured optimisation across merchandising, content and conversion',
            'Improved product feed governance and paid channel alignment across Merchant Center, ProductHero and Google Ads.',
            'Built executive-level performance reporting dashboards'
          ].map((initiative) => (
            <Card key={initiative}>
              <p className="leading-relaxed text-slate-600">{initiative}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
