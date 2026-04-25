'use client';

import { useMemo, useState } from 'react';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { learningFocusAreas } from '@/data/learning-focus-areas';
import { learningPosts } from '@/data/learning-posts';

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });
}

export default function LearningClient() {
  const [activeTag, setActiveTag] = useState<string>('All');

  const sortedPosts = useMemo(() => {
    return [...learningPosts].sort((a, b) => b.date.localeCompare(a.date));
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    learningPosts.forEach((post) => post.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeTag === 'All') return sortedPosts;
    return sortedPosts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, sortedPosts]);

  return (
    <>
      <Section
        title="Learning"
        intro="I treat learning as part of delivery, not a side activity. The focus is practical: build something, test it in context, and carry the useful parts into commercial work."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {learningFocusAreas.map((area) => (
            <Card key={area.title}>
              <h3 className="text-base font-semibold text-slate-900">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Learning Log"
        intro="Short updates on what I changed, what I learned, and why it matters for e-commerce execution, reporting, and AI-enabled delivery."
      >
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter learning posts by tag">
          {allTags.map((tag) => {
            const isActive = tag === activeTag;

            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={[
                  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2',
                  isActive
                    ? 'border-slate-300 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                ].join(' ')}
                aria-pressed={isActive}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {learningPosts.length === 0 ? (
          <div className="mt-6">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900">Coming soon</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                I’m building this as a lightweight journal of practical experiments and working notes.
              </p>
            </Card>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {filteredPosts.map((post) => (
              <Card key={`${post.date}-${post.title}`}>
                <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                  <div className="text-sm text-slate-500">
                    <p className="font-medium text-slate-700">{formatDate(post.date)}</p>
                    {post.sprint ? <p className="mt-1 text-xs text-slate-500">Focus: {post.sprint}</p> : null}
                  </div>

                  <div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <button
                          key={`${post.title}-${tag}`}
                          type="button"
                          onClick={() => setActiveTag(tag)}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                          aria-label={`Filter by tag: ${tag}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>

                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{post.summary}</p>
                  </div>
                </div>
              </Card>
            ))}

            {learningPosts.length > 0 && filteredPosts.length === 0 ? (
              <Card>
                <h3 className="text-lg font-semibold text-slate-900">No posts for “{activeTag}” yet</h3>
                <p className="mt-2 text-sm text-slate-600">
                  I’ll add notes here as I learn and ship. For now, try another tag.
                </p>
              </Card>
            ) : null}
          </div>
        )}
      </Section>
    </>
  );
}
