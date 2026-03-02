import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { buildProjects } from '@/data/builds';

export const metadata: Metadata = {
  title: 'Builds',
  description: 'A list of practical tools and projects Adam Masters is building.'
};

export default function BuildsPage() {
  return (
    <Section title="Builds" intro="Practical projects built to sharpen thinking, test tools, and create utility.">
      <div className="grid gap-5 md:grid-cols-2">
        {buildProjects.map((project) => (
          <Card key={project.title} className="flex h-full flex-col">
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                <span className="font-medium text-slate-800">What it is:</span> {project.what}
              </p>
              <p>
                <span className="font-medium text-slate-800">Why it exists:</span> {project.why}
              </p>
              <p>
                <span className="font-medium text-slate-800">What I learned:</span> {project.learned}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {project.links.map((link) => (
                <a key={link.label} href={link.href} className="font-medium text-accent hover:text-slate-900">
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
