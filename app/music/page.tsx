import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Music background, practice themes, and ongoing recording plans for Adam Masters.'
};

const musicInfluences = {
  guitarInfluences: [
    'James Hetfield',
    'John Mayer',
    'Dimebag Darrell',
    'David Gilmour',
    'Kirk Hammett',
    'Nuno Bettencourt',
    'Eddie Van Halen',
    'Michael Hedges',
  ],
  bandsAndArtists: [
    'Metallica',
    'Sleep Token',
    'Bad Omens',
    'Ren',
    'Gojira',
    'Pantera',
    'Rage Against the Machine',
    'Black Sabbath',
    'Lamb of God',
    'Architects',
  ],
  genresAndStyles: [
    'Metal',
    'Classic Rock',
    'Indie',
    'Singer-songwriter',
  ],
  currentInterests: [
    'Learning full songs',
    'Timing + groove',
    'Touch + dynamics',
    'Clean tone control',
  ]
};

export default function MusicPage() {
  return (
    <>
      <Section
        title="Music"
        intro="Music shaped how I listen, how I practice, and how I approach progress in every part of life."
      >
        <Card>
          <h3 className="text-xl font-semibold text-slate-900">Return to Practice</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            It was my first discipline. Returning to guitar reinforced a simple truth: consistency compounds.
          </p>
        </Card>
      </Section>

      <Section
        title="Influences & Interests"
        intro="The reference points behind what I listen to, what I learn, and how I approach guitar."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Guitar influences</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {musicInfluences.guitarInfluences.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Bands & artists</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {musicInfluences.bandsAndArtists.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Genres & styles</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {musicInfluences.genresAndStyles.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-slate-900">Current interests</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {musicInfluences.currentInterests.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <p className="mt-5 max-w-3xl text-sm text-slate-600">
          I’m less interested in collecting gear and more interested in clarity: timing, touch, and musical choices.
        </p>
      </Section>

      <Section title="Recordings & Covers" intro="I&apos;ll share clips here as I keep showing up to practice.">
        <Card>
          <p className="text-slate-600">Media collection coming soon.</p>
        </Card>
      </Section>
    </>
  );
}
