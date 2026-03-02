import { ReactNode } from 'react';
import { Container } from './container';

type SectionProps = {
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, intro, children, className = '' }: SectionProps) {
  return (
    <section className={`editorial-section py-section-y md:py-section-y-lg ${className}`}>
      <Container withRail>
        {title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2> : null}
        {intro ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{intro}</p> : null}
        <div className="mt-8 md:mt-10">{children}</div>
      </Container>
    </section>
  );
}
