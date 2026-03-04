// /data/learning-posts.ts

export type LearningPost = {
  title: string;
  date: string; // ISO format: "2026-03-03"
  summary: string;
  tags: string[];
  sprint?: string;
};

export const learningPosts: LearningPost[] = [
  // Example post (delete if you want to start empty)
  {
    title: 'Building the Work page: clarity, metrics, and rhythm',
    date: '2026-03-03',
    summary:
      'A small reminder that senior work is often about sequencing: signal early, structure the middle, and keep the narrative consistent.',
    tags: ['Systems', 'Writing', 'Next.js'],
    sprint: 'Personal site'
  }
];