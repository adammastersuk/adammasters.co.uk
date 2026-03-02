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
    what: 'A modern personal website built in Next.js to articulate professional direction and ongoing experiments.',
    why: 'To create a clear digital home that reflects 80% professional credibility with 20% personal depth.',
    learned: 'Clarity improves trust. A structured content model also makes future updates significantly easier.',
    links: [
      { label: 'Repository (placeholder)', href: '#' },
      { label: 'Changelog (placeholder)', href: '#' }
    ]
  },
  {
    title: 'Investigating OpenClaw',
    what: 'A research and prototyping track to explore OpenClaw capabilities and potential practical applications.',
    why: 'To stay close to frontier tools and understand where they can support operational workflows.',
    learned: 'Discovery work benefits from constraints, short notes, and regular synthesis points.',
    links: [
      { label: 'Notes (placeholder)', href: '#' },
      { label: 'Prototype (placeholder)', href: '#' }
    ]
  },
  {
    title: 'Mama to Minis Website Project',
    what: 'A practical website support project for Mama to Minis with focus on clarity and conversion flow.',
    why: 'To apply ecommerce and systems thinking in a lean, real-world setting with direct feedback loops.',
    learned: 'Simple UX decisions can remove friction and make small businesses easier to navigate.',
    links: [
      { label: 'Project brief (placeholder)', href: '#' },
      { label: 'Preview (placeholder)', href: '#' }
    ]
  }
];
