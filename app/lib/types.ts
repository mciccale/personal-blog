export type PostPreview = Frontmatter & { slug: string };

export type Frontmatter = {
  title: string;
  description: string;
  image: string;
  date: string;
};
