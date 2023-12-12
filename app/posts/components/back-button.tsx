import Link from 'next/link';

import Bold from '@/app/components/bold';

export default function BackButton() {
  return (
    <div className="mb-8 md:mb-10">
      <Link href="/posts">
        <Bold>Back</Bold>
      </Link>
    </div>
  );
}
