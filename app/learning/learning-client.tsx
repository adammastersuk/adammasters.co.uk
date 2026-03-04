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
  intro="I keep a small number of active focus areas that I’m exploring over time. Not everything I learn has to be practical; sometimes the point is simply to pay attention and improve (sometimes just a bit of fun!)."
>

        {/* Focus Areas (de-emphasised) */}
        <div className="mt-4 max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-600">
            The log below is where the detail lives — quick progress notes, reflections, and small wins.
          </p>
        </div>
      </Section>

      <Section
        title="Learning Log"
        intro="Progress notes, reflections, and small wins — tagged so I can spot patterns over time."
      >
        {/* Tag chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isActive = tag === activeTag;

            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={[
                  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition',
                  isActive
                    ? 'border-slate-300 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                ].join(' ')}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Empty state */}
        {learningPosts.length === 0 ? (
          <div className="mt-6">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900">Coming soon</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                I’m building this as a lightweight learning journal — short updates, tagged by topic. Check back soon.
              </p>
            </Card>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {filteredPosts.map((post) => (
              <Card key={`${post.date}-${post.title}`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-sm text-slate-500">
                    <p className="font-medium text-slate-700">{formatDate(post.date)}</p>
                    {post.sprint ? (
                      <p className="mt-1 text-xs text-slate-500">Focus: {post.sprint}</p>
                    ) : null}
                  </div>

                  {/* Tags (matching your Work badges) */}
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {post.tags.map((tag) => (
                      <button
                        key={`${post.title}-${tag}`}
                        type="button"
                        onClick={() => setActiveTag(tag)}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
                        aria-label={`Filter by tag: ${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  {post.summary}
                </p>
              </Card>
            ))}

            {/* No results state */}
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