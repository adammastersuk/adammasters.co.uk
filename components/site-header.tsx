import Link from 'next/link';
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
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
      <Container className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
          Adam Masters
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
