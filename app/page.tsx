import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Senior E-Commerce Executive at Bents, with a builder practice shaped by curiosity and practical systems.'
};

const pillars = [
  {
    title: 'Work',
    description: 'I lead e-commerce at Bents, balancing trading performance, day-to-day execution, and team direction.',
    href: '/work'
  },
  {
    title: 'Builds',
    description: 'I build small tools to test ideas, learn faster, and make useful things from open questions.',
    href: '/builds'
  },
  {
    title: 'Music',
    description: 'Music trained my ear for detail, and returning to guitar is teaching me patience again.',
    href: '/music'
  },
  {
    title: 'Learning',
    description: 'I run focused learning sprints to stay curious, stretch my thinking, and keep momentum.',
    href: '/learning'
  }
];

export default function HomePage() {
  return (
    <>
      <Section className="pb-8 pt-20 md:pt-28">
        <Container>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Adam Masters</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
  <span>Senior E-Commerce Executive at Bents Garden &amp; Home</span>
  <span className="hidden sm:inline">•</span>
  <span>Music Degree (Guitar)</span>
  <span className="hidden sm:inline">•</span>
  <span>Systems &amp; AI Workflow Builder</span>
</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            E-commerce by trade. Curious by nature.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            I lead e-commerce at Bents, where my focus is trading, systems, and clear execution. Outside work, I build small tools and explore AI workflows that can make messy work feel simpler.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            I care about steady progress, useful systems, and doing good work without noise.
          </p>
          <Link
            href="/now"
            className="mt-8 inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400"
          >
            See what I&apos;m focused on now
          </Link>

        </Container>
      </Section>

      <Section title="Explore" intro="This is where I share what I&apos;m working on, what I&apos;m practicing, and what I&apos;m learning along the way.">
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.description}</p>
              <Link href={pillar.href} className="mt-4 inline-block text-sm font-medium text-accent hover:text-slate-900">
                Visit {pillar.title}
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
