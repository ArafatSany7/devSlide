import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devslide.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://devslide.vercel.app/create',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://devslide.vercel.app/join',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://devslide.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
