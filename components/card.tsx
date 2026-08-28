import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-slate-300 ${className}`}
    >
      {children}
    </article>
  );
}
