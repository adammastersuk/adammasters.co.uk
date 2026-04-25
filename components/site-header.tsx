'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/builds', label: 'Builds' },
  { href: '/music', label: 'Music' },
  { href: '/learning', label: 'Learning' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
      <Container className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
        >
          Adam Masters
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'rounded-sm underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2',
                  isActive ? 'font-medium text-slate-900 underline' : 'hover:text-slate-900'
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
