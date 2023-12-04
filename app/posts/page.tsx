import { compareDates, getPostsPreview } from '../lib/utils';
import MainContainer from '../components/main-container';
import PostPreview from './components/post-preview';

export default async function Posts() {
  await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const posts = await getPostsPreview();

  return (
    <MainContainer>
      <section className="flex flex-col gap-2 justify-around mx-auto max-w-2xl">
        {posts
          .sort((a, b) => compareDates(b.date, a.date))
          .map(({ title, image, description, date, slug }) => (
            <PostPreview
              key={slug}
              title={title}
              image={image}
              description={description}
              date={date}
              slug={slug}
            />
          ))}
      </section>
    </MainContainer>
  );
}
