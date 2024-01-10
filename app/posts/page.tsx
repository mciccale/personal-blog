import { Metadata } from 'next';

import Header from '../components/header';
import MainContainer from '../components/main-container';
import TextSection from '../components/text-section';
import { getPostsPreview } from '../lib/postUtils';
import PostsSection from './components/posts-section';

export const metadata: Metadata = {
  title: 'Posts',
};

export default async function Posts() {
  const posts = await getPostsPreview();

  return (
    <MainContainer>
      <TextSection>
        <Header>All Posts</Header>
      </TextSection>
      <section className="mt-10">
        <PostsSection posts={posts} />
      </section>
    </MainContainer>
  );
}
