import { compareDates, getPostsPreview } from '../lib/utils';
import MainContainer from '../components/main-container';
import PostPreview from './components/post-preview';

export default async function Posts() {
  await new Promise<void>((res) => setTimeout(() => res(), 3000));
  const posts = await getPostsPreview();

  return (
    <MainContainer>
      <section className="mx-auto flex max-w-2xl flex-col justify-around gap-2">
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
