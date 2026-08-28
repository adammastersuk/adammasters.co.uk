import type { Metadata } from 'next';
import LearningClient from './learning-client';

export const metadata: Metadata = {
  title: 'Ecommerce Learning Notes',
  description:
    'Evergreen working notes from Adam Masters on ecommerce management, reporting, integrations, customer experience, AI and automation.',
  alternates: { canonical: '/learning' }
};

export default function LearningPage() {
  return <LearningClient />;
}
