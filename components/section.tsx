import { ReactNode } from 'react';
import { Container } from './container';

type SectionProps = {
  eyebrow?: string;
  title?: string;
  headingLevel?: 1 | 2;
  intro?: React.ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, headingLevel = 2, intro, children, className = '' }: SectionProps) {
  const headingClassName = 'text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl';
  return (
    <section className={`editorial-section py-section-y md:py-section-y-lg ${className}`}>
      <Container withRail>
        {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-rail">{eyebrow}</p> : null}
        {title && headingLevel === 1 ? <h1 className={headingClassName}>{title}</h1> : null}
        {title && headingLevel === 2 ? <h2 className={headingClassName}>{title}</h2> : null}
        {intro ? <div className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{intro}</div> : null}
        <div className="mt-8 md:mt-10">{children}</div>
      </Container>
    </section>
  );
}
