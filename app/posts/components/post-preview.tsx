import Link from 'next/link';
import Image from 'next/image';
import type { PostPreview } from '@/app/lib/types';

export default function PostPreview({
  title,
  description,
  image,
  slug,
}: PostPreview) {
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <figure className="flex rounded-lg border-solid border-2 border-blue-200 hover:border-blue-600 hover:shadow-lg mx-auto max-w-2xl max-h-80 overflow-y-auto">
        <Image
          className="rounded-l-md"
          src={image}
          alt={`${title} cover`}
          width={200}
          height={75}
        />
        <div className="px-3 pb-3 pt-2">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p>{description}</p>
        </div>
      </figure>
    </Link>
  );
}
