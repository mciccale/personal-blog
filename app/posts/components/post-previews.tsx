'use client';

import { compareDates } from '@/app/lib/dateUtils';
import { PostCategory, type PostPreview } from '@/app/lib/types';
import PostPreviewRFC from './post-preview';

interface Props {
  posts: PostPreview[];
  categories: PostCategory[];
}

export default function PostPreviews({ posts, categories }: Props) {
  return (
    <section className="mx-auto flex max-w-2xl flex-col justify-around gap-2">
      {posts.length === 0 ? (
        <p className="text-2xl font-semibold md:text-4xl">Loading...</p>
      ) : (
        posts
          .filter(({ categories: postCategories }) =>
            categories.length === 0
              ? true
              : postCategories.some((category) => categories.includes(category))
          )
          .sort((a, b) => compareDates(b.date, a.date))
          .map(({ title, image, description, date, categories, slug }) => (
            <PostPreviewRFC
              key={slug}
              title={title}
              image={image}
              description={description}
              categories={categories}
              date={date}
              slug={slug}
            />
          ))
      )}
    </section>
  );
}
