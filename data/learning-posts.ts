// /data/learning-posts.ts

export type LearningPost = {
  title: string;
  date: string; // ISO format: "2026-03-03"
  summary: string;
  tags: string[];
  sprint?: string;
};

export const learningPosts: LearningPost[] = [
  {
    date: '2026-04-09',
    sprint: 'Data & AI',
    title: 'Evaluating Windsor.ai to centralise marketing data for AI reporting',
    summary:
      'I spent this week testing Windsor.ai as a connector layer to bring GA4 and paid media data into one pipeline, with the goal of feeding a ChatGPT workspace for faster reporting. The key learning was that the value is less about another dashboard and more about creating a reliable data foundation that can scale insight generation, reduce manual reporting time, and support better e-commerce decisions.',
    tags: ['E-Commerce', 'Data', 'AI', 'Systems']
  },
  {
    date: '2026-04-03',
    sprint: 'Architecture',
    title: 'Improving deployment reliability and frontend boundaries',
    summary:
      'I worked through real deployment friction across builds and Vercel errors, while tightening server/client component boundaries in Next.js and fixing a few data flow issues. I also used Codex and ChatGPT as development co-pilots to speed up debugging and scaffold options, then validated critical changes manually. This reinforced that robust architecture is practical, not academic: cleaner boundaries and better UI feedback make apps easier to debug, safer to ship, and more resilient under day-to-day change.',
    tags: ['Next.js', 'Architecture', 'Deployment', 'Systems']
  },
  {
    date: '2026-03-24',
    sprint: 'Builds',
    title: 'Iterating on a Life OS dashboard and shipping usable workflows',
    summary:
      'I continued building my Life OS dashboard with Next.js, Supabase, and Vercel, focusing on turning rough ideas into workflows I would actually use every day. I learned that small product decisions around structure and usability have a direct impact on adoption, and that shipping early is the fastest way to move from theory to something genuinely useful.',
    tags: ['Builds', 'Next.js', 'Systems', 'E-Commerce']
  },
  {
    date: '2026-03-10',
    sprint: 'Builds',
    title: 'Building and shipping a bulk image resizer tool',
    summary:
      'Built and shipped a dedicated Bulk Image Resizer tool for ecommerce workflows, focused on fast batch processing, preset dimensions, crop/fill modes, and export format controls. This reinforced the value of solving narrow, repetitive operational problems with lightweight browser-based utilities that are easy to access and quick to iterate.',
    tags: ['Builds', 'Tools', 'E-Commerce']
  },
  {
  date: '2026-03-09',
  sprint: 'Builds',
  title: 'Building an aim trainer and refining the builds architecture',
  summary:
    'Built a browser-based Aim Trainer game and used it as an opportunity to further refine the builds architecture. Each experiment now runs in its own repository and deployment while remaining discoverable through a central builds hub. This pattern keeps the personal site focused on explanation and navigation while allowing individual builds to evolve independently, making it easier to ship small experiments quickly without increasing complexity in the main project.',
  tags: ['Builds', 'Systems', 'Architecture']
},
  {
  date: '2026-03-07',
  sprint: 'Architecture',
  title: 'Creating a builds hub and separating projects',
  summary:
    'Refactored how projects are organised by introducing a builds hub on the personal site and moving individual projects like Snake and the Reaction Speed Test into their own repositories and deployments. This creates a cleaner architecture where the main site acts as a navigation layer while each build can evolve independently, making experimentation safer and simplifying future project additions.',
  tags: ['Systems', 'Architecture']
},
  {
  date: '2026-03-07',
  sprint: 'Builds',
  title: 'Building a reaction speed test',
  summary:
    'Built a simple browser-based reaction speed test where users click as quickly as possible once the screen turns green. The project explored timing logic, randomised delays to prevent anticipation, UI feedback loops, and quick iteration using the same Next.js and Vercel deployment workflow used for the Snake build. It reinforced how small interaction-focused projects can be shipped quickly while still requiring careful handling of state, timing, and user feedback.',
  tags: ['Builds', 'Next.js']
},
  {
  date: '2026-03-04',
  sprint: 'Builds',
  title: 'Building a browser-based Snake game',
  summary:
    'Built a browser-based Snake game as a practical project, exploring gameplay logic, input handling, score tracking, replay logic, and leaderboard functionality. The project also introduced Neon for database storage and highlighted the trade-offs between simple builds and adding more complex infrastructure.',
  tags: ['Builds', 'Systems']
},
  {
  date: '2026-03-02',
  sprint: 'Deployment',
  title: 'Deploying and managing projects with Vercel',
  summary:
    'Learned how to move from local development to live deployment using Vercel. This included understanding the GitHub workflow behind commits and pushes, how Vercel builds and deploys automatically, and how to iterate safely while maintaining a stable production site.',
  tags: ['Systems', 'Next.js']
},
  {
  date: '2026-03-01',
  sprint: 'Personal site',
  title: 'Designing and building my personal site',
  summary:
    'Built and iterated on my personal site using Next.js and Vercel, focusing on clarity of structure, restrained design, and content that reflects how I think about systems, execution, and building useful tools. This included shaping page architecture (Work, Learning, Builds), refining tone and layout, and improving presentation through metadata, favicon, and Open Graph assets.',
  tags: ['Next.js', 'Systems', 'Writing']
}
];
