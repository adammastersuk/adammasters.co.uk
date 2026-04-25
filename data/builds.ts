export type BuildLink = {
  label: string;
  href: string;
};

export type BuildProject = {
  title: string;
  subtitle?: string;
  status?: 'Live' | 'Prototype' | 'In progress';
  what: string;
  why: string;
  learned: string;
  tags?: string[];
  links?: BuildLink[];
};

export const buildProjects: BuildProject[] = [
  {
    title: 'Weekly Reporting Workflow',
    subtitle: 'Structured e-commerce reporting and executive insight support',
    status: 'In progress',
    what:
      'A repeatable weekly reporting workflow that consolidates commercial performance inputs and turns them into clear stakeholder updates with actions and risks.',
    why:
      'Weekly reporting can become noisy and manual. I wanted a consistent operating rhythm that improves decision speed and reporting quality.',
    learned:
      'The biggest value is clarity and consistency: when reporting format and cadence are stable, stakeholder decisions are faster and more aligned.',
    tags: ['E-Commerce', 'Reporting', 'Leadership', 'Workflow']
  },
  {
    title: 'AI-Assisted Insight Workflow',
    subtitle: 'Using connected data inputs for practical analysis support',
    status: 'In progress',
    what:
      'An evolving workflow that combines marketing and commerce data inputs with AI-assisted analysis to draft first-pass performance summaries and insight prompts.',
    why:
      'I wanted to reduce repetitive analysis tasks while improving the speed of insight generation for weekly trading decisions.',
    learned:
      'AI support works best when data inputs and reporting structure are clean; workflow quality matters more than model novelty.',
    tags: ['AI', 'Data', 'E-Commerce', 'Systems']
  },
  {
    title: 'Bulk Image Resizer',
    subtitle: 'Local-first e-commerce image preparation tool',
    status: 'Live',
    what:
      'A browser-based utility that speeds up product image preparation with batch handling, preset sizing, crop/fill modes, and export controls.',
    why:
      'Catalog operations often lose time to repetitive file prep, especially when teams need consistent image standards across channels.',
    learned:
      'Local-first processing plus simple presets makes repetitive operational tasks faster, safer, and easier to standardise.',
    tags: ['E-Commerce', 'Tools', 'Workflow', 'Images'],
    links: [
      {
        label: 'Open tool',
        href: 'https://bulk-image-resizer-mu.vercel.app/'
      }
    ]
  },
  {
    title: 'Life OS Dashboard',
    subtitle: 'Personal execution and planning system',
    status: 'Prototype',
    what:
      'A custom dashboard built to unify tasks, habits, notes, and planning into one practical operating system for weekly execution.',
    why:
      'I needed a system that matched my real workflow and removed fragmentation across tools.',
    learned:
      'Workflow fit beats feature count. A focused system that supports daily habits creates better execution consistency.',
    tags: ['Systems', 'Next.js', 'Workflow']
  },
  {
    title: 'This Website',
    status: 'Live',
    what:
      'A lightweight Next.js personal brand site structured around work profile, project proof-of-work, and a practical learning log.',
    why:
      'I wanted one credible place to show commercial impact, how I think, and how I ship useful solutions.',
    learned:
      'Clear structure and consistent publishing patterns make a professional site easier to maintain and more useful to recruiters and stakeholders.',
    links: [
      {
        label: 'Live site',
        href: '/'
      }
    ]
  },
  {
    title: 'Snake',
    status: 'Live',
    what:
      'A browser-based Snake game with leaderboard tracking and theme variants, built as a fast iteration and interaction-design exercise.',
    why: 'Small build cycles are useful for sharpening shipping speed, release discipline, and user feedback loops.',
    learned:
      'Simple ideas still demand detail. Interaction feel, responsiveness, and visual feedback are critical to perceived quality.',
    links: [
      {
        label: 'Play game',
        href: 'https://builds.adammasters.co.uk/snake'
      }
    ]
  },
  {
    title: 'Reaction Speed Test',
    status: 'Live',
    what: 'A lightweight browser interaction test focused on timing, responsiveness, and clear state transitions.',
    why: 'Quick experiments are a low-friction way to test UI clarity and iterate on interaction patterns.',
    learned:
      'Fast, reliable feedback loops increase trust and make even simple tools feel more polished and usable.',
    links: [
      {
        label: 'Play test',
        href: 'https://builds.adammasters.co.uk/reaction-speed-test'
      }
    ]
  }
];
