"use client";

import { User as LucideUserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UserSignInSignUpDialog } from "./UserSignInSignUp";
import { UserSignOut } from "./UserSignOut";
import { User } from "@/types/user";

interface UserIconProps {
  signedInUser: User | null;
}

export const UserIcon = ({ signedInUser }: UserIconProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isDropdownOpen) return;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleIconClick = () => {
    if (signedInUser) {
      setIsDropdownOpen((prev) => !prev);
    } else {
      setIsDialogOpen(true); // open the sign-in/sign-up dialog
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`p-2 hover:bg-[var(--hover-color)] rounded-lg`}
        onClick={handleIconClick}
      >
        <LucideUserIcon className={`text-${iconColor}`} />
      </button>

      {/* Sign In / Sign Up Dialog */}
      {!signedInUser && (
        <UserSignInSignUpDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}

      {/* Dropdown for signed-in user */}
      {isDropdownOpen && signedInUser && (
        <div className="absolute right-0 mt-2 inline-block rounded-lg shadow-lg z-50 top-10 w-25">
          <UserSignOut onSignOut={() => setIsDropdownOpen(false)} />
        </div>
      )}
    </div>
  );
};
