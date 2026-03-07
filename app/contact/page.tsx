import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Adam Masters about ecommerce, systems, digital projects, and practical collaboration.'
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      intro="The best way to reach me is by email. I’m most interested in conversations around ecommerce, systems, execution, and useful digital work."
    >
      <Card className="max-w-2xl">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Primary
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-slate-900">Email</p>
              <a
                href="mailto:hello@adammasters.co.uk"
                className="text-base text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-500"
              >
                hello@adammasters.co.uk
              </a>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              For thoughtful conversations, relevant opportunities, or practical collaboration,
              email is the simplest route.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Elsewhere
            </p>
            <div className="space-y-3 text-slate-700">
              <p>
                <span className="font-medium text-slate-900">LinkedIn:</span>{' '}
                <a
                  href="https://www.linkedin.com/in/adammasters-digital"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-500"
                >
                  linkedin.com/in/adammasters-digital
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-900">GitHub:</span>{' '}
                <a
                  href="https://github.com/adammastersuk"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-500"
                >
                  github.com/adammastersuk
                </a>
              </p>
            </div>
          </div>

          <p className="border-t border-slate-200 pt-6 text-sm leading-relaxed text-slate-600">
            Open to thoughtful conversations, practical collaboration, and interesting problems.
          </p>
        </div>
      </Card>
    </Section>
  );
}