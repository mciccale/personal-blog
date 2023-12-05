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
        } rounded-full py-2 text-lg font-bold hover:text-gray-700 md:text-2xl`}
      >
        {label}
      </li>
    </Link>
  );
}
