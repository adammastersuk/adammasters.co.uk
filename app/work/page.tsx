import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Professional profile of Adam Masters, E-Commerce Manager at Bents Garden & Home.'
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
    As E-Commerce Manager at{' '}
    <a
      href="https://www.bents.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-slate-900"
    >
      Bents Garden & Home
    </a>
    , I lead digital trading performance across our online operation. My focus is to connect commercial priorities,
    customer experience, and day-to-day execution so performance improves in a reliable, measurable way.
  </>
}
      >
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          I&apos;m at my best where strategy needs practical delivery — translating targets into clear plans, structured
          trading activity, and accountable execution across teams.
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
            I own ecommerce trading cadence, performance reporting, and optimisation priorities — working across
            merchandising, marketing, operations, and customer teams to improve conversion, margin, and customer
            outcomes.
          </p>
        </Card>

        {/* Pull-quote */}
        <div className="mt-6">
          <Card>
            <p className="text-lg font-semibold leading-snug text-slate-900">
              “Strong digital performance comes from consistent trading decisions, clear accountability, and better
              customer journeys.”
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Strategy and execution only matter when they improve commercial outcomes.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Where I Add Value" intro="I operate at the intersection of commercial strategy and execution.">
        <div className="max-w-3xl text-base leading-relaxed text-slate-700">
          <p className="mt-6">In practice, that means:</p>

          <ul className="mt-4 space-y-2">
            <li>– Owning the <strong>trading plan</strong> and turning it into structured weekly execution</li>
            <li>– Connecting <strong>digital performance data</strong> to practical commercial decisions</li>
            <li>– Driving <strong>CRO and customer journey improvements</strong> with measurable outcomes</li>
            <li>– Aligning <strong>cross-functional stakeholders</strong> around priorities that move revenue and margin</li>
          </ul>

          <p className="mt-6">
            I&apos;m most useful when things feel complex. My approach is to simplify, structure, and make progress easy
            to measure and communicate.
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
            'Strengthened weekly trading rhythm through clearer planning, ownership, and performance accountability.',
            'Implemented API-driven automation across commerce and retention systems to reduce manual workload.',
            'Led customer service platform strategy, including Gnatta evaluation and rollout planning.',
            'Introduced structured optimisation across merchandising, content, and conversion opportunities.',
            'Improved product feed governance and paid-channel alignment across Merchant Center, ProductHero, and Google Ads.',
            'Built senior stakeholder reporting dashboards to improve commercial visibility and decision quality.'
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
