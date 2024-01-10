import { MetadataRoute } from 'next';

import { getPostsPreview } from './lib/postUtils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsPreview = await getPostsPreview();

  const postsMetadata: MetadataRoute.Sitemap = postsPreview.map(
    ({ slug, date }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${slug}`,
      lastModified: new Date(date),
      changeFrequency: 'never',
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date('2023-12-11'),
      changeFrequency: 'never',
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date('2023-12-11'),
      changeFrequency: 'never',
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
      lastModified: new Date('2023-12-11'),
      changeFrequency: 'never',
    },
    ...postsMetadata,
  ];
}
