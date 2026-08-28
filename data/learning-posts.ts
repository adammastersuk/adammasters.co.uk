export type LearningPost = {
  title: string;
  category: 'Ecommerce' | 'Data & insight' | 'Technology' | 'AI & automation' | 'Building';
  summary: string;
  tags: string[];
};

export const learningPosts: LearningPost[] = [
  {
    category: 'AI & automation',
    title: 'AI is becoming an ecommerce operating layer',
    summary:
      'The useful shift is beyond content generation. I am finding value in using AI to support analysis, troubleshooting, documentation and small internal tools. It works best when it sits inside a clear process, with reliable inputs and a person accountable for the decision.',
    tags: ['AI', 'Operations']
  },
  {
    category: 'Building',
    title: 'Building tools without becoming a developer',
    summary:
      'AI-assisted development lets me turn a well-understood ecommerce problem into a working prototype. The important skill is still defining the problem, testing the output and knowing its limits. Code is a way to implement the solution, not the point of the exercise.',
    tags: ['AI', 'Internal tools']
  },
  {
    category: 'Data & insight',
    title: 'Ecommerce reporting should lead to action',
    summary:
      'A dashboard can describe what happened without helping anybody decide what to do. Useful reporting makes the change clear, investigates likely causes and ends with priorities, owners and questions that need answering.',
    tags: ['Reporting', 'Commercial analysis']
  },
  {
    category: 'AI & automation',
    title: 'AI customer service needs good knowledge, not just a good model',
    summary:
      'An agent can only be as dependable as the information and operating rules around it. Clear source material, sensible routing, guardrails and a route to a person matter as much as the model itself.',
    tags: ['AI', 'Customer experience']
  },
  {
    category: 'Technology',
    title: 'The hidden complexity of ecommerce stock',
    summary:
      'Stock is rarely one number moving neatly from an ERP to a storefront. Middleware, batching, buffers, duplicate SKUs and channel rules all affect what a customer sees. Troubleshooting starts by mapping the full flow and identifying which system owns each decision.',
    tags: ['Integrations', 'Inventory']
  },
  {
    category: 'Data & insight',
    title: 'Onsite search is an underrated ecommerce dataset',
    summary:
      'Search terms show the language customers use, what they expect to find and where navigation is falling short. Reviewing zero-result and high-volume searches can reveal demand, ranging gaps and merchandising opportunities that broader reports miss.',
    tags: ['Onsite search', 'Merchandising']
  },
  {
    category: 'Ecommerce',
    title: 'Category pages should merchandise, not just list products',
    summary:
      'A product listing page can do more than display a grid. Useful editorial content, imagery, filters and onward routes can help customers choose while keeping products close to the point of discovery.',
    tags: ['Merchandising', 'Customer experience']
  },
  {
    category: 'AI & automation',
    title: 'AI changes the build-versus-buy calculation',
    summary:
      'Some small operational problems would never justify a conventional development brief or another subscription. AI-assisted prototyping makes it practical to test a focused internal tool first, then decide whether it should be improved, bought or retired.',
    tags: ['AI', 'Internal tools']
  },
  {
    category: 'Data & insight',
    title: 'A reliable data foundation matters more than another dashboard',
    summary:
      'Testing connected data workflows reinforced that automation cannot rescue inconsistent inputs. Shared definitions, a repeatable structure and checks on the source data have to come before faster summaries or AI-assisted analysis.',
    tags: ['Reporting', 'Data quality']
  },
  {
    category: 'Building',
    title: 'Narrow tools can remove disproportionate friction',
    summary:
      'Building a browser-based bulk image resizer showed the value of solving one repetitive catalogue task well. Clear presets and local processing can be more useful to a team than a larger tool with features that get in the way.',
    tags: ['Internal tools', 'Operations']
  }
];
