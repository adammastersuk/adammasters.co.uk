import type { Metadata } from 'next';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { learningSprints } from '@/data/learning-sprints';

export const metadata: Metadata = {
  title: 'Learning',
  description: 'Structured learning sprints with goals, cadence, milestones, and current focus.'
};

export default function LearningPage() {
  return (
    <Section
      title="Learning Sprints"
      intro="I use short learning sprints to stay sharp, follow curiosity, and build consistency over time."
    >
      <p className="max-w-3xl text-base leading-relaxed text-slate-600">
        Not everything I learn has to be practical. Sometimes the point is simply to pay attention and improve.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {learningSprints.map((sprint) => (
          <Card key={sprint.title}>
            <h3 className="text-xl font-semibold text-slate-900">{sprint.title}</h3>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              <p>
                <span className="font-medium text-slate-800">Goal:</span> {sprint.goal}
              </p>
              <p>
                <span className="font-medium text-slate-800">Practice cadence:</span> {sprint.cadence}
              </p>
              <p>
                <span className="font-medium text-slate-800">Current focus:</span> {sprint.currentFocus}
              </p>
              <p>
                <span className="font-medium text-slate-800">Media:</span> {sprint.media}
              </p>
              <div>
                <p className="font-medium text-slate-800">Milestones:</p>
                <ul className="mt-1 list-inside list-disc">
                  {sprint.milestones.map((milestone) => (
                    <li key={milestone}>{milestone}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
