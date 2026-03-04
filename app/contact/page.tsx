import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Simple contact details for Adam Masters.'
};

export default function ContactPage() {
  return (
    <Section title="Contact" intro="The simplest way to reach me is by email.">
      <Card className="max-w-xl">
        <div className="space-y-3 text-slate-600">
          <p>
            <span className="font-medium text-slate-800">Email:</span> your.email@example.com
          </p>
          <p>
            <span className="font-medium text-slate-800">GitHub:</span> <a href="https://github.com/adammastersuk">github.com/adammastersuk</a>
          </p>
          <p>
            <span className="font-medium text-slate-800">LinkedIn:</span> <a href="https://www.linkedin.com/in/adammasters-digital" target="_blank">linkedin.com/in/adammasters-digital</a>
          </p>
        </div>
      </Card>
    </Section>
  );
}
