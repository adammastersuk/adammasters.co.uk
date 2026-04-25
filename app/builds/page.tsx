import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { buildProjects } from '@/data/builds';

export const metadata: Metadata = {
  title: 'Projects and Builds: Workflow Tools, Reporting, and Experiments',
  description:
    'Proof-of-work projects by Adam Masters across e-commerce workflow tools, reporting systems, AI-assisted processes, and lightweight product builds.'
};

const buildAreas = [
  {
    title: 'Commercial workflow tools',
    href: '#tools',
    description: 'Projects grounded in real e-commerce operations, reporting needs, and day-to-day delivery constraints.'
  },
  {
    title: 'Build experiments',
    href: '#games',
    description: 'Small browser builds that strengthen product judgement, interaction design, and shipping rhythm.'
  },
  {
    title: 'Site systems',
    href: '#systems',
    description: 'Reusable architecture patterns and content systems that keep this website maintainable and focused.'
  }
];

const featuredBuilds = [
  {
    title: 'Reaction Speed Test',
    description: 'A timing and feedback-loop experiment built to improve interaction clarity and responsiveness.',
    href: 'https://builds.adammasters.co.uk/reaction-speed-test'
  },
  {
    title: 'Snake',
    description: 'A browser game used to practise iterative releases, player feedback, and polished interactions.',
    href: 'https://builds.adammasters.co.uk/snake'
  },
  {
    title: 'Aim Trainer',
    description: 'A fast-paced click-accuracy build focused on pace, score loops, and gameplay consistency.',
    href: 'https://builds.adammasters.co.uk/aim-trainer'
  }
];

export default function BuildsPage() {
  const systemProjects = buildProjects.filter((project) => project.title === 'This Website');
  const toolProjects = buildProjects.filter(
    (project) => !['Snake', 'Reaction Speed Test', 'This Website'].includes(project.title)
  );

  return (
    <Section
      title="Projects and Builds"
      intro="A practical portfolio of tools and experiments. Each project is built to solve a real problem, test a specific idea, or improve execution quality."
    >
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
        <p>
          This page is the proof-of-work layer of the site. It covers internal-style workflow builds, AI-enabled
          experimentation, and smaller interaction projects that sharpen product craft.
        </p>
        <p>
          Where outcomes are still in progress, I document the learning honestly instead of over-claiming results.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {buildAreas.map((area) => (
          <a key={area.title} href={area.href} className="block h-full">
            <Card className="h-full">
              <h2 className="text-base font-semibold text-slate-900">{area.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
            </Card>
          </a>
        ))}
      </div>

      <div id="tools" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Commercial workflow tools</p>

        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {toolProjects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  {project.subtitle ? <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p> : null}
                </div>
                {project.status ? (
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    {project.status}
                  </span>
                ) : null}
              </div>

              {project.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Problem:</span> {project.why}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Action:</span> {project.what}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Outcome / learning:</span> {project.learned}
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
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={className}>
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>

      <div id="games" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Build experiments</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          These small projects live in a separate Builds Hub so each build can evolve independently without making this
          site heavier.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredBuilds.map((build) => (
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
                  Open build
                </a>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-900">Builds Hub</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Many smaller experiments and browser builds live in a dedicated hub. This keeps discovery simple while
            preserving flexibility for each individual project.
          </p>

          <div className="mt-5">
            <a
              href="https://builds.adammasters.co.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore Builds Hub
            </a>
          </div>
        </Card>
      </div>

      <div id="systems" className="mt-12 scroll-mt-24 border-t border-slate-200 pt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Site systems</p>

        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {systemProjects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col">
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Structure:</span> {project.what}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Purpose:</span> {project.why}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Learning:</span> {project.learned}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
