import NavbarItem from './navbar-item';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full shadow-lg">
      <nav className="my-4">
        <ul className="flex justify-evenly items-center gap-5">
          <NavbarItem label="Home" path="/" />
          <NavbarItem label="About Me" path="/about" />
          <NavbarItem label="Posts" path="/posts" />
        </ul>
      </nav>
    </header>
  );
}
