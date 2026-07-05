import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/collections/'],
    },
    sitemap: 'https://slidelink.vercel.app/sitemap.xml',
  };
}
