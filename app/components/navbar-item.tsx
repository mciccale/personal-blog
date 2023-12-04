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
          pathname === path ? 'text-black' : 'text-gray-500'
        } p-4 rounded-full text-lg md:text-2xl font-bold hover:text-gray-700`}
      >
        {label}
      </li>
    </Link>
  );
}
