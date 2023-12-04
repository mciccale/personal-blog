'use client';

import { useNavbarScroll } from '../hooks/useNavbarScroll';
import NavbarItem from './navbar-item';

export default function Navbar() {
  const { visible, lastScroll } = useNavbarScroll();

  return (
    <header
      className={`px-8 bg-white opacity-90 fixed top-0 w-full shadow-lg ${
        visible || lastScroll === 0 ? 'visible' : 'hidden'
      }`}
    >
      <nav className="my-4 mx-auto max-w-2xl">
        <ul className="flex justify-between items-center">
          <NavbarItem label="Home" path="/" />
          <NavbarItem label="About Me" path="/about" />
          <NavbarItem label="Posts" path="/posts" />
        </ul>
      </nav>
    </header>
  );
}
