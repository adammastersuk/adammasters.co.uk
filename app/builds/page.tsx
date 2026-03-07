import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { buildProjects } from '@/data/builds';

export const metadata: Metadata = {
  title: 'Builds',
  description:
    'Practical tools, experiments, and small games built by Adam Masters to test ideas and make useful things.'
};

const pipeline = [
  'Browser games built to ship fast and learn in public',
  'Pricing & competitor tracking tools',
  'Weekly reporting automation',
  'Personal site components & content system',
  'Small utilities for work and life'
];

const buildAreas = [
  {
    title: 'Games',
    description:
      'Small browser-based games built quickly to practise shipping, interaction design, and polishing simple ideas into something playable.'
  },
  {
    title: 'Work tools',
    description:
      'Practical utilities shaped by real e-commerce problems: reporting, structure, trading rhythm, and clearer operational visibility.'
  },
  {
    title: 'Site systems',
    description:
      'Components, content patterns, and lightweight systems that make this site easier to maintain and improve over time.'
  }
];

const featuredPlayableBuilds = [
  {
    title: 'Snake',
    description:
      'Classic Snake with leaderboard support and theme variations. Built to practise shipping interaction-heavy browser games quickly.',
    href: 'https://builds.adammasters.co.uk/snake'
  },
  {
    title: 'Reaction Speed Test',
    description:
      'A simple timing test designed to explore fast feedback loops and clean interaction design in the browser.',
    href: 'https://builds.adammasters.co.uk/reaction-speed-test'
  }
];

export default function BuildsPage() {
  const systemProjects = buildProjects.filter((project) => project.title !== 'Snake' && project.title !== 'Reaction Speed Test');
  const hasProjects = systemProjects.length > 0;

  return (
    <Section
      title="Builds"
      intro="A growing collection of practical tools, experiments, and small games built to test ideas quickly and leave something useful behind."
    >
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
        <p>
          I use building as a way to think more clearly. Sometimes that leads to a work tool, sometimes a cleaner system,
          and sometimes a small game that sharpens product instinct through shipping.
        </p>
        <p>
          The common thread is the same: make something real, learn from it, and improve the next version.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {buildAreas.map((area) => (
          <Card key={area.title} className="h-full">
            <h2 className="text-base font-semibold text-slate-900">{area.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 max-w-3xl">
        <p className="text-sm leading-relaxed text-slate-600">
          This page is intentionally selective. I only publish projects once they feel clear enough to explain and solid
          enough to stand on their own.
        </p>

        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">In progress / next up</p>

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

      <div className="mt-12 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Playable Experiments</p>

        <Card className="mt-4 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-900">Builds Hub</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Many smaller experiments and browser-based games now live in a separate Builds Hub. Each project runs
            independently but remains discoverable from one central place.
          </p>

          <div className="mt-5">
            <a
              href="https://builds.adammasters.co.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore Builds Hub →
            </a>
          </div>
        </Card>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {featuredPlayableBuilds.map((build) => (
            <Card key={build.title} className="flex h-full flex-col">
              <h3 className="text-xl font-semibold text-slate-900">{build.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{build.description}</p>

              <div className="mt-5">
                <a
                  href={build.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  Play →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Systems &amp; Tools</p>

        {hasProjects ? (
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {systemProjects.map((project) => {
              return (
                <Card key={project.title} className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    {project.status ? (
                      <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                        {project.status}
                      </span>
                    ) : null}
                  </div>

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

                  {project.links?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.links.map((link) => {
                        const isInternal = link.href.startsWith('/');

                        const className =
                          'inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900';

                        return isInternal ? (
                          <Link key={link.label} href={link.href} className={className}>
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={className}
                          >
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="mt-4">
            <Card className="max-w-3xl">
              <h3 className="text-lg font-semibold text-slate-900">First builds coming soon</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                I’m currently building out the first set of published projects for this page, including lightweight browser
                games, practical work tools, and reusable site components.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                For now, this page acts as a marker of direction rather than a finished archive.
              </p>
            </Card>
          </div>
        )}
      </div>
    </Section>
  );
}
