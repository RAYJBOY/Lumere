'use client';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const HamburgerIcon = () => {
  const pathname = usePathname();
  const iconColor = pathname === '/' ? 'white' : 'black';

  return (
    <button className={`p-2 text-${iconColor} hover:bg-[var(--hover-color)] md:hidden`}>
      <Menu />
    </button>
  );
};