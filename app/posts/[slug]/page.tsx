import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/app/lib/utils';
import MainContainer from '@/app/components/main-container';
import TextSection from '@/app/components/text-section';
import Header from '@/app/components/header';

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
        {markdown ? (
          <MDXRemote source={markdown} />
        ) : (
          <Header>404 - Post Not Found</Header>
        )}
      </TextSection>
    </MainContainer>
  );
}
