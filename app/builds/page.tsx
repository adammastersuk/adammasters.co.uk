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

const buildAreas = [
  {
    title: 'Games',
    href: '#games',
    description:
      'Small browser-based games built quickly to practise shipping, interaction design, and polishing simple ideas into something playable.'
  },
  {
    title: 'Work tools',
    href: '#tools',
    description:
      'Practical utilities shaped by real e-commerce problems: reporting, structure, trading rhythm, and clearer operational visibility.'
  },
  {
    title: 'Site systems',
    href: '#systems',
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
  },
  {
    title: 'Aim Trainer',
    description:
      'A fast-paced click accuracy game where targets appear randomly and players try to hit as many as possible within 30 seconds.',
    href: 'https://builds.adammasters.co.uk/aim-trainer'
  },
];

export default function BuildsPage() {
  const completedProjects = buildProjects.filter((project) => project.status === 'Live');
  const systemProjects = completedProjects.filter((project) => project.title === 'This Website');
  const toolProjects = completedProjects.filter(
    (project) => !['Snake', 'Reaction Speed Test', 'This Website'].includes(project.title)
  );

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
          <a key={area.title} href={area.href} className="block h-full">
            <Card className="h-full transition hover:border-slate-300">
              <h2 className="text-base font-semibold text-slate-900">{area.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
            </Card>
          </a>
        ))}
      </div>

      <div id="games" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Playable Experiments</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          Small browser-based experiments exploring interaction design and gameplay logic.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          The cards below highlight a few examples — the full collection lives in the Builds Hub.
        </p>

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

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">
          These are a few representative examples. The full set of experiments and small tools lives in the Builds Hub.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <div id="tools" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Work tools</p>

        {toolProjects.length ? (
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {toolProjects.map((project) => {
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
              <p className="text-sm leading-relaxed text-slate-600">No completed work tools published yet.</p>
            </Card>
          </div>
        )}
      </div>

      <div id="systems" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Site systems</p>

        {systemProjects.length ? (
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
              <p className="text-sm leading-relaxed text-slate-600">No completed site systems published yet.</p>
            </Card>
          </div>
        )}
      </div>
    </Section>
  );
}
