'use client';

import { useVisibilityOnScrollUp } from 'use-visibility-on-scroll-up';

import NavbarItem from './navbar-item';

export default function Navbar() {
  const { visible, lastScroll } = useVisibilityOnScrollUp();

  return (
    <header
      className={`fixed top-0 w-full bg-white px-8 opacity-90 shadow-lg ${
        visible || lastScroll === 0 ? 'visible' : 'hidden'
      }`}
    >
      <nav className="mx-auto my-4 max-w-2xl">
        <ul className="flex items-center justify-between">
          <NavbarItem label="Home" path="/" />
          <NavbarItem label="About Me" path="/about" />
          <NavbarItem label="Posts" path="/posts" />
          <NavbarItem label="Contact" path="/contact" />
        </ul>
      </nav>
    </header>
  );
}
