'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Path = '/' | '/about' | '/posts';

interface Props {
  label: string;
  path: Path;
}

export default function NavbarItem({ label, path }: Props) {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <li
        className={`${
          pathname === path ||
          (pathname.includes('posts') && path.includes('posts'))
            ? 'text-black'
            : 'text-gray-500'
        } py-2 rounded-full text-lg md:text-2xl font-bold hover:text-gray-700`}
      >
        {label}
      </li>
    </Link>
  );
}
