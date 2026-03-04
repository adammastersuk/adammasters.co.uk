import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { buildProjects } from '@/data/builds';

export const metadata: Metadata = {
  title: 'Builds',
  description: 'A list of practical tools and projects Adam Masters is building.'
};

const pipeline = [
  'Pricing & competitor tracking',
  'Weekly reporting automation',
  'Personal site components & content system',
  'Small utilities for work + life'
];

export default function BuildsPage() {
  const hasProjects = buildProjects.length > 0;

  return (
    <>
      <Section
        title="Builds"
        intro="I build to think clearly, test ideas quickly, and leave myself something useful at the end."
      >
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">
          Most projects begin as a simple question. Building is how I find better answers.
        </p>

        {/* Coming soon / pipeline (de-emphasised) */}
        <div className="mt-6 max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-600">
            This page is intentionally lightweight for now. I’ll add more builds as they become stable enough to share.
          </p>

          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              In progress / next up
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {pipeline.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        {hasProjects ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
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

                {/* Links */}
                {project.links?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900">More coming soon</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                I’m still shaping what belongs here. I’ll publish builds once they’re stable, useful, and worth documenting.
              </p>
            </Card>
          </div>
        )}
      </Section>
    </>
  );
}