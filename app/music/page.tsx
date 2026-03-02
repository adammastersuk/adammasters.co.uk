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
        intro="Music is a core foundation. I hold a music degree in guitar, and structured practice continues to shape how I learn and build."
      >
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          Music was my first discipline. After time away, I&apos;m returning to it deliberately — rebuilding consistency
          and sharing progress publicly.
        </p>
        <Card>
          <h3 className="text-xl font-semibold text-slate-900">Return to Practice</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            I&apos;m deliberately rebuilding consistency through short, focused sessions and regular review, balancing
            technique, repertoire, and creative output.
          </p>
        </Card>
      </Section>

      <Section title="Structured Practice Themes">
        <div className="grid gap-5 md:grid-cols-3">
          {musicThemes.map((theme) => (
            <Card key={theme.title}>
              <h3 className="font-semibold text-slate-900">{theme.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{theme.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Recordings & Covers" intro="A placeholder section for published clips, covers, and progress snapshots.">
        <Card>
          <p className="text-slate-600">Media collection coming soon.</p>
        </Card>
      </Section>
    </>
  );
}
