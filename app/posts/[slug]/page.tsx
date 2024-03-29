import '@/styles/highlight-js/tokyo-night-dark.css';

import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

import Header from '@/app/components/header';
import MainContainer from '@/app/components/main-container';
import TextSection from '@/app/components/text-section';
import {
  getPostBySlug,
  getPostPreviewBySlug,
  getPostsPreview,
} from '@/app/lib/postUtils';

import BackButton from '../components/back-button';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsPreview = await getPostsPreview();

  return postsPreview.map(({ slug }) => slug);
}

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title, description, image } = await getPostPreviewBySlug(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function Post({ params: { slug } }: Props) {
  const markdown = await getPostBySlug(slug);

  if (!markdown) notFound();

  return (
    <MainContainer>
      <TextSection>
        <BackButton />
        {/* @ts-ignore */}
        <MDXRemote options={options} source={markdown} />
      </TextSection>
    </MainContainer>
  );
}
