import { Container } from './container';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <Container>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Adam Masters. Calm execution, ongoing curiosity.</p>
      </Container>
    </footer>
  );
}
