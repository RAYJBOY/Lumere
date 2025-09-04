"use client";

import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { UserSignInSignUpDialog } from "./UserSignInSignUp";

export const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`p-2 hover:bg-[var(--hover-color)] rounded-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className={`text-${iconColor}`} />
      </button>
      {isOpen && (
        <UserSignInSignUpDialog
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        />
      )}
    </div>
  );
};
