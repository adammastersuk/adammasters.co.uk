import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Professional profile of Adam Masters as Senior E-Commerce Executive at Bents.'
};

export default function WorkPage() {
  return (
    <>
      <Section
        title="Work"
        intro="As Senior E-Commerce Executive at Bents, I focus on building reliable systems, better trading rhythm, and consistent customer outcomes."
      >
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          I&apos;m drawn to complex problems, especially when the answer is to make things clearer.
        </p>
        <Card>
          <h3 className="text-xl font-semibold text-slate-900">Role Summary</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            I work across ecommerce trading and execution, helping teams stay aligned on priorities while improving reliability,
            pace, and customer experience.
          </p>
        </Card>
      </Section>

      <Section title="Focus Areas">
        <div className="grid gap-5 md:grid-cols-2">
          {['E-commerce operations', 'Systems thinking', 'Trading performance', 'Optimisation', 'Leadership'].map((item) => (
            <Card key={item}>
              <p className="font-medium text-slate-800">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Tools & Platforms" intro="The tools I use to run, measure, and improve ecommerce work day to day.">
        <Card>
          <p className="leading-relaxed text-slate-600">
            Ecommerce platforms, analytics, CRM tools, merchandising workflows, and planning systems that help teams move
            with more clarity.
          </p>
        </Card>
      </Section>

      <Section title="Selected Initiatives" intro="A few examples of where I&apos;ve focused my effort.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            'Improved weekly trade rhythm through clearer planning, ownership, and retrospectives.',
            'Standardised operational handovers to reduce delivery risk and improve consistency.',
            'Introduced optimisation routines across content, merchandising, and conversion touchpoints.'
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
