export type PostPreview = Frontmatter & { slug: string };

export type PostCategory =
  | 'web'
  | 'machine learning'
  | 'technology'
  | 'library'
  | 'framework'
  | 'javascript'
  | 'typescript'
  | 'cloud'
  | 'history'
  | 'tutorial'
  | 'frontend'
  | 'backend'
  | 'nodejs'
  | 'nextjs'
  | 'reactjs'
  | 'database'
  | 'programming languages';

export type Frontmatter = {
  title: string;
  description: string;
  image: string;
  date: string;
  categories: PostCategory[];
};
