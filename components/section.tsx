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
    <section className={`py-14 md:py-20 ${className}`}>
      <Container>
        {title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2> : null}
        {intro ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">{intro}</p> : null}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
