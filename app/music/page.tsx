import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { musicThemes } from '@/data/music';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Music background, practice themes, and ongoing recording plans for Adam Masters.'
};

export default function MusicPage() {
  return (
    <>
      <Section
        title="Music"
        intro="Music shaped how I listen, how I practice, and how I approach progress in every part of life."
      >
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          It was my first discipline. Coming back to guitar has reminded me that consistency matters more than intensity.
        </p>
        <Card>
          <h3 className="text-xl font-semibold text-slate-900">Return to Practice</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            I&apos;m rebuilding through short, focused sessions and regular review, balancing technique, repertoire, and
            creative output.
          </p>
        </Card>
      </Section>

      <Section title="Practice Themes">
        <div className="grid gap-5 md:grid-cols-3">
          {musicThemes.map((theme) => (
            <Card key={theme.title}>
              <h3 className="font-semibold text-slate-900">{theme.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{theme.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Recordings & Covers" intro="I&apos;ll share clips here as I keep showing up to practice.">
        <Card>
          <p className="text-slate-600">Media collection coming soon.</p>
        </Card>
      </Section>
    </>
  );
}
