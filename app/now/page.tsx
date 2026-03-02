import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Now',
  description: 'Current areas of focus across work, builds, music, and learning.'
};

export default function NowPage() {
  return (
    <Section title="Now" intro="What I&apos;m giving most of my attention to right now.">
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-slate-900">Work</h3>
          <p className="mt-2 text-sm text-slate-600">Strengthening trade rhythm and operational clarity at Bents.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900">Builds</h3>
          <p className="mt-2 text-sm text-slate-600">Iterating on this site and testing practical AI-adjacent project ideas.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900">Music</h3>
          <p className="mt-2 text-sm text-slate-600">Rebuilding consistent guitar practice with monthly recording checkpoints.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900">Learning</h3>
          <p className="mt-2 text-sm text-slate-600">Running focused sprints while supporting Mama to Minis on website progress.</p>
        </Card>
      </div>
    </Section>
  );
}
