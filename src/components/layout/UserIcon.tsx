"use client";

import { User } from 'lucide-react';
import { usePathname } from "next/navigation";

export const UserIcon = () => {
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";
  return (
    <button className={`p-2 hover:bg-[var(--hover-color)] rounded-lg`}>
        <User className={`text-${iconColor}`}/>
    </button>
  );
};
