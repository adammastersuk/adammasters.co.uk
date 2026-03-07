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
