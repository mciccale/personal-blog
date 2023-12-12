'use client';

import { useState } from 'react';

import { PostCategory, PostPreview } from '@/app/lib/types';

import CategoryFilter from './category-filter';
import PostPreviews from './post-previews';

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
