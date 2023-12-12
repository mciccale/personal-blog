import '@/styles/highlight-js/tokyo-night-dark.css';

import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

import Header from '@/app/components/header';
import MainContainer from '@/app/components/main-container';
import TextSection from '@/app/components/text-section';
import { getPostBySlug } from '@/app/lib/postUtils';

import BackButton from '../components/back-button';

interface Props {
  params: {
    slug: string;
  };
}

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function Post({ params }: Props) {
  const markdown = await getPostBySlug(params.slug);

  return (
    <MainContainer>
      <TextSection>
        <BackButton />
        {markdown ? (
          // @ts-ignore
          <MDXRemote options={options} source={markdown} />
        ) : (
          <Header>404 - Post Not Found</Header>
        )}
      </TextSection>
    </MainContainer>
  );
}
