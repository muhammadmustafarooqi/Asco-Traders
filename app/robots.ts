import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // TODO: REMOVE BEFORE LAUNCH - Temporary disallow for staging/testing deployment
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://www.ascotraders.com/sitemap.xml',
  };
}
