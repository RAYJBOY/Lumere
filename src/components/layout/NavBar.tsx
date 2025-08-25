import Link from "next/link";
import { HamburgerIcon } from "./HamburgerIcon";
import { playfairDisplay } from "@/app/layout";
import { UserIcon } from "./UserIcon";

interface NavBarProps {
  links: { name: string; href: string }[];
}

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <nav className="bg-transparent px-4 py-2 absolute top-0 w-full z-20">
      <div className="flex items-center justify-between w-full relative">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <HamburgerIcon />
          <h1
            className={`md:font-bold md:text-2xl text-logo tracking-widest ${playfairDisplay.className}`}
          >
            LUMERÉ
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:bg-[var(--hover-color)] p-2 rounded text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: User Icon */}
        <UserIcon />
      </div>
    </nav>
  );
};
