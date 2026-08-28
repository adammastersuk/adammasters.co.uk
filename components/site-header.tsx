'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/builds', label: 'Projects' },
  { href: '/learning', label: 'Notes' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#fbfbf9]/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-5 py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
        >
          Adam Masters
        </Link>
        <nav aria-label="Primary" className="-mr-2 flex items-center gap-1 overflow-x-auto text-sm text-slate-600 sm:gap-2">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'min-h-11 shrink-0 rounded-full px-3 py-3 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rail focus-visible:ring-offset-2',
                  isActive ? 'bg-slate-100 font-semibold text-slate-950' : 'hover:bg-slate-100 hover:text-slate-900'
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
