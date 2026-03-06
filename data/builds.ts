export type BuildLink = {
  label: string;
  href: string;
};

export type BuildProject = {
  title: string;
  status?: 'Live' | 'Prototype' | 'In progress';
  what: string;
  why: string;
  learned: string;
  links?: BuildLink[];
};

export const buildProjects: BuildProject[] = [
  {
    title: 'This Website',
    status: 'Live',
    what:
      'A personal website built with Next.js to share my work, document projects, and publish what I am learning in public.',
    why:
      'I wanted one place that felt credible, calm, and genuinely mine — something that reflects how I think about systems, clarity, and execution.',
    learned:
      'Clear writing builds trust. A simple content structure makes publishing easier to maintain long term.',
    links: [
      {
        label: 'Live site',
        href: '/'
      },
    ]
  },

  {
    title: 'Snake',
    status: 'Prototype',
    what:
      'A lightweight browser-based version of Snake built to practise shipping small interactive products quickly.',
    why:
      'Simple games are a great way to practise the full build loop: mechanics, interface, responsiveness, and polish.',
    learned:
      'Even basic games benefit massively from careful handling of layout, game state, and mobile behaviour.',
    links: [
      {
        label: 'Play game',
        href: 'https://builds.adammasters.co.uk/snake'
      },
    ]
  },

  {
    title: 'Competitor Pricing Tracker',
    status: 'In progress',
    what:
      'A small system that monitors competitor product prices and highlights meaningful changes.',
    why:
      'In ecommerce trading, price awareness matters — but manually checking competitor sites does not scale.',
    learned:
      'Simple automation often solves operational friction better than large platforms.',
    links: [
      {
        label: 'Project notes',
        href: '/learning'
      }
    ]
  },

  {
    title: 'Weekly Reporting Automation',
    status: 'In progress',
    what:
      'An automated workflow that generates structured weekly ecommerce performance summaries.',
    why:
      'Reporting should create clarity, not manual workload.',
    learned:
      'Well-designed data pipelines can remove repetitive operational tasks.',
    links: []
  }
];