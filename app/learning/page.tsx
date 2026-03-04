import type { Metadata } from 'next';
import LearningClient from './learning-client';

export const metadata: Metadata = {
  title: 'Learning',
  description: 'Structured learning sprints with goals, cadence, milestones, and current focus.'
};

export default function LearningPage() {
  return <LearningClient />;
}
