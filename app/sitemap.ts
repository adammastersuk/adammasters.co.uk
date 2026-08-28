import type { MetadataRoute } from 'next';

const routes = ['', '/work', '/builds', '/music', '/learning', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://adammasters.co.uk${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
