import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { PostPreview, Frontmatter } from './types';

const postsPath = path.join(process.cwd(), 'app', 'content');

export const compareDates = (date1: string, date2: string): number => {
  const [year1, month1, day1] = date1.split('-');
  const [year2, month2, day2] = date2.split('-');

  if (year1 > year2) return 1;
  if (year1 < year2) return -1;
  if (month1 > month2) return 1;
  if (month1 < month2) return -1;
  if (day1 > day2) return 1;
  if (day1 < day2) return -1;

  return 1;
};

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
