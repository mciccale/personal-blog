'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Path = '/' | '/about' | '/posts' | '/contact';

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
            ? 'text-black dark:text-white'
            : 'text-gray-500 dark:text-gray-300'
        } rounded-full py-2 text-lg font-bold hover:text-black dark:hover:text-white md:text-2xl`}
      >
        {label}
      </li>
    </Link>
  );
}
