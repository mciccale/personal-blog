import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { PostPreview, Frontmatter } from './types';

const postsPath = path.join(process.cwd(), 'app', 'content');

export async function getPostsPreview(): Promise<PostPreview[]> {
  const slugs = await getAllPostsSlugs();
  const promises = slugs.map(async (slug) => getPostPreviewBySlug(slug));
  return Promise.all(promises);
}

export async function getAllPostsSlugs(): Promise<string[]> {
  try {
    return (await fs.readdir(postsPath)).map((slug) =>
      slug.replace(/\.mdx?$/, '')
    );
  } catch (e) {
    return [];
  }
}

async function getPostPreviewBySlug(slug: string): Promise<PostPreview> {
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: (await getPostBySlug(slug)) ?? '',
    options: {
      parseFrontmatter: true,
    },
  });

  return { ...frontmatter, slug };
}

export async function getPostBySlug(slug: string): Promise<Buffer | null> {
  try {
    return await fs.readFile(
      path.join(process.cwd(), 'app', 'content', `${slug}.mdx`)
    );
  } catch (e) {
    return null;
  }
}
