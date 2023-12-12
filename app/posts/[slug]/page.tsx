import { MDXRemote } from 'next-mdx-remote/rsc';

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

export default async function Post({ params }: Props) {
  const markdown = await getPostBySlug(params.slug);

  return (
    <MainContainer>
      <TextSection>
        <BackButton />
        {markdown ? (
          <MDXRemote options={{ parseFrontmatter: true }} source={markdown} />
        ) : (
          <Header>404 - Post Not Found</Header>
        )}
      </TextSection>
    </MainContainer>
  );
}
