import { Menu } from 'lucide-react';

export const HamburgerIcon = () => {
  return (
    <button className="p-2 text-white hover:bg-[var(--hover-color)] md:hidden">
        <Menu/>
    </button>
  );
};