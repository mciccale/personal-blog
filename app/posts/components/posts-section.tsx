'use client';

import { PostCategory, PostPreview } from '@/app/lib/types';
import { useState } from 'react';
import CategoryFilter from './category-filter';
import PostPreviews from './post-previews';
import { POST_CATEGORIES } from '@/app/lib/constants';

interface Props {
  posts: PostPreview[];
}

export default function PostsSection({ posts }: Props) {
  const [categories, setCategories] = useState<PostCategory[]>([]);

  return (
    <>
      <CategoryFilter categories={categories} setCategories={setCategories} />
      <PostPreviews posts={posts} categories={categories} />
    </>
  );
}
