'use client';

import { useMemo, useState } from 'react';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { learningFocusAreas } from '@/data/learning-focus-areas';
import { learningPosts } from '@/data/learning-posts';

export default function LearningClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(learningPosts.map((post) => post.category)))],
    []
  );
  const filteredPosts =
    activeCategory === 'All' ? learningPosts : learningPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <Section
        eyebrow="Working notes"
        headingLevel={1}
        title="Learning, testing and noticing"
        intro="An evergreen collection of useful lessons from ecommerce work. These are observations in progress, not articles written to fill a publishing schedule."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {learningFocusAreas.map((area) => (
            <Card key={area.title}>
              <h2 className="text-base font-semibold text-slate-900">{area.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="The collection"
        intro="Concise notes on ecommerce management, data, technology and the practical use of AI."
      >
        <div className="flex flex-wrap gap-2" aria-label="Filter notes by category">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium focus-ring ${
                  isActive
                    ? 'border-rail bg-rail text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-500'
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.title} className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rail">{post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Topics">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
