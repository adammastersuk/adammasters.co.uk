export type BuildProject = {
  title: string;
  what: string;
  why: string;
  learned: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const buildProjects: BuildProject[] = [
  {
    title: 'This Website',
    what: 'A personal site built in Next.js to share my work, projects, and what I am learning in public.',
    why: 'I wanted one place that feels credible, clear, and genuinely mine.',
    learned: 'Clear writing builds trust, and a simple content model makes updates easier to sustain.',
    links: [
      { label: 'Repository (placeholder)', href: '#' },
      { label: 'Changelog (placeholder)', href: '#' }
    ]
  },
];
