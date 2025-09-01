"use client";

import Link from "next/link";
import { HamburgerIcon } from "./HamburgerIcon";
import { UserIcon } from "./UserIcon";
import { plusJakartaDisplay } from "@/styles/fonts";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SideBar } from "./SideBar";

interface NavBarProps {
  links: { name: string; href: string }[];
}

export const NavBar = ({ links }: NavBarProps) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-transparent px-4 py-2 absolute top-0 w-full z-20">
        <div className="flex items-center justify-between w-full relative">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center gap-4">
            <HamburgerIcon
              setOpenSidebar={setOpenSideBar}
              openSideBar={openSideBar}
            />
            <Link href="/">
              <h1
                className={`md:font-bold md:text-2xl text-logo tracking-widest`}
              >
                LUMERÉ
              </h1>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:bg-[var(--hover-color)] hover:text-white p-2 rounded ${
                  pathname === "/" ? "text-white" : "text-[#3f3f3f]"
                } ${plusJakartaDisplay.className}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: User Icon */}
          <UserIcon />
        </div>
      </nav>
      <SideBar setOpenSidebar={setOpenSideBar} isOpen={openSideBar} />
    </>
  );
};
