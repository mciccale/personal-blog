import { getPostsPreview } from '../lib/postUtils';
import MainContainer from '../components/main-container';
import PostsSection from './components/posts-section';

export default async function Posts() {
  const posts = await getPostsPreview();

  return (
    <MainContainer>
      <PostsSection posts={posts} />
    </MainContainer>
  );
}
