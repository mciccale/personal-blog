import Link from 'next/link';

export default function BackButton() {
  return (
    <div className="mb-8 md:mb-10">
      <Link href="/posts">
        <span className="font-bold">Back</span>
      </Link>
    </div>
  );
}
