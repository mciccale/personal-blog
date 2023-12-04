import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const postsPath = path.join(process.cwd(), 'app', 'content');

export async function getAllPostsName(): Promise<string[]> {
  try {
    return await fs.readdir(postsPath);
  } catch (e) {
    return [];
  }
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
