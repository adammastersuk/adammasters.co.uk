import type { Metadata } from 'next';
import LearningClient from './learning-client';

export const metadata: Metadata = {
  title: 'Learning Log: AI Workflows, Reporting, and Build Notes',
  description:
    'Learning updates from Adam Masters covering AI-assisted workflows, e-commerce reporting systems, architecture decisions, and practical experiments.'
};

export default function LearningPage() {
  return <LearningClient />;
}
