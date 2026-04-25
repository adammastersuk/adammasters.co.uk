import Link from 'next/link';
import { Container } from './container';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Adam Masters. Commercially focused digital leadership, delivered practically.
          </p>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-500"
          >
            Open to relevant opportunities
          </Link>
        </div>
      </Container>
    </footer>
  );
}
