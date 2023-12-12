import Image from 'next/image';
import Link from 'next/link';

import type { PostPreview } from '@/app/lib/types';

export default function PostPreview({
  title,
  description,
  image,
  slug,
}: PostPreview) {
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <figure className="mx-auto flex max-h-80 max-w-2xl overflow-x-auto rounded-lg border-2 border-solid border-blue-200 hover:border-blue-600 hover:shadow-lg">
        <div className="hidden flex-shrink-0 sm:block">
          <Image
            className="rounded-l-md"
            src={image}
            priority={true}
            alt={`${title} cover`}
            width={200}
            height={75}
          />
        </div>
        <div className="max-w-[400px] px-3 pb-3 pt-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </figure>
    </Link>
  );
}
