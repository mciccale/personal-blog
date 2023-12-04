import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import { getPostBySlug } from '@/app/lib/utils';
import MainContainer from '@/app/components/main-container';
import TextSection from '@/app/components/text-section';
import Header from '@/app/components/header';
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
