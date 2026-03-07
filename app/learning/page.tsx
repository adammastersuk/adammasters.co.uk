import type { Metadata } from 'next';
import LearningClient from './learning-client';

export const metadata: Metadata = {
  title: 'Learning',
  description:
    'Notes, reflections, and progress from building, writing, systems thinking, and AI-assisted workflows.'
};

export default function LearningPage() {
  return <LearningClient />;
}
