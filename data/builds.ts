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
  {
    title: 'Investigating OpenClaw',
    what: 'An ongoing research and prototype track to understand OpenClaw and where it might be useful.',
    why: 'I like staying close to emerging tools before the use cases become obvious.',
    learned: 'Exploration improves when I work in short loops and write down what surprised me.',
    links: [
      { label: 'Notes (placeholder)', href: '#' },
      { label: 'Prototype (placeholder)', href: '#' }
    ]
  },
  {
    title: 'Mama to Minis Website Project',
    what: 'Hands-on website support for Mama to Minis, with attention on clarity and conversion flow.',
    why: 'It lets me apply ecommerce thinking in a lean setting with direct feedback from real users.',
    learned: 'Small UX decisions often create the biggest lift in confidence and ease.',
    links: [
      { label: 'Project brief (placeholder)', href: '#' },
      { label: 'Preview (placeholder)', href: '#' }
    ]
  }
];
