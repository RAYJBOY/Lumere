"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

interface HamburgerIconProps {
  openSideBar: boolean;
  setOpenSidebar: (open: boolean) => void;
}

export const HamburgerIcon = ({
  setOpenSidebar,
  openSideBar,
}: HamburgerIconProps) => {
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";

  return (
    <button
      className={`p-2 hover:bg-[var(--hover-color)] rounded-lg md:hidden`}
      onClick={() => setOpenSidebar(!openSideBar)}
    >
      <Menu className={`text-${iconColor}`} />
    </button>
  );
};