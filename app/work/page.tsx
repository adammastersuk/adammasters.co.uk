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
        intro="Senior E-Commerce Executive at Bents, focused on operational excellence, scalable systems, and sustainable growth."
      >
        <Card>
          <h3 className="text-xl font-semibold text-slate-900">Role Summary</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            I operate across ecommerce trading and execution, aligning teams around structured priorities while improving
            reliability, pace, and customer outcomes.
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

      <Section title="Tools & Platforms" intro="Representative tools and categories used in modern ecommerce environments.">
        <Card>
          <p className="leading-relaxed text-slate-600">
            Ecommerce platforms, analytics suites, experimentation frameworks, CRM tooling, merchandising workflows, and
            cross-functional planning systems.
          </p>
        </Card>
      </Section>

      <Section title="Selected Initiatives" intro="High-level initiatives with no confidential commercial metrics.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            'Improved weekly trade rhythm through clearer planning, ownership, and retrospective loops.',
            'Standardised operational handovers to reduce delivery risk and increase consistency.',
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
