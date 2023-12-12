'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import TextSection from '@/app/components/text-section';
import { POST_CATEGORIES } from '@/app/lib/constants';
import { PostCategory } from '@/app/lib/types';

import CategoryButton from './category-button';

interface Props {
  categories: PostCategory[];
  setCategories: Dispatch<SetStateAction<PostCategory[]>>;
}

export default function CategoryFilter({ categories, setCategories }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  const addToCategories = (category: PostCategory) =>
    setCategories((prevState) => [...prevState, category]);

  const removeFromCategories = (category: PostCategory) =>
    setCategories((prevState) => prevState.filter((c) => c !== category));

  const handleClick = (category: PostCategory) =>
    categories.includes(category)
      ? removeFromCategories(category)
      : addToCategories(category);

  return (
    <TextSection>
      <div className="pb-4 text-xl font-semibold">
        Categories:
        <button
          className="mx-2 rounded-full bg-blue-600 px-2 text-lg font-medium text-white"
          onClick={() => setVisible(!visible)}
        >
          {visible ? 'Hide' : 'Show'}
        </button>
        <button
          className={`rounded-full bg-blue-600 px-2 text-lg font-medium text-white ${
            visible ? 'fill-inherit' : 'hidden'
          }`}
          onClick={() => setCategories([])}
        >
          Clear
        </button>
      </div>
      <div
        className={`${visible ? 'block' : 'hidden'} flex flex-wrap gap-2 pb-10`}
      >
        {POST_CATEGORIES.map((category) =>
          categories.includes(category) ? (
            <CategoryButton
              key={category}
              handleClick={handleClick}
              label={category}
              selected
            />
          ) : (
            <CategoryButton
              key={category}
              handleClick={handleClick}
              label={category}
            />
          )
        )}
      </div>
    </TextSection>
  );
}
