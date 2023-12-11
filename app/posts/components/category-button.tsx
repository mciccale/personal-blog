'use client';

import { PostCategory } from '@/app/lib/types';

interface Props {
  handleClick: (category: PostCategory) => void;
  label: PostCategory;
  selected?: boolean;
}

export default function CategoryButton({
  handleClick,
  label,
  selected = false,
}: Props) {
  return (
    <button
      className={`rounded-full border-2 border-blue-600 px-2 font-medium ${
        selected && 'bg-blue-600 text-white'
      }`}
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
}
