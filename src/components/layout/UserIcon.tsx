"use client";

import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UserSignInSignUpDialog } from "./UserSignInSignUp";
import { UserSignOut } from "./UserSignOut";

export const UserIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";

  // Fetch signed-in user on mount
  useEffect(() => {
    const getSignedInUser = async () => {
      const res = await fetch("/api/me");
      if (res.ok) {
        const data = await res.json();
        return data.user;
      }
      return null;
    };
    getSignedInUser().then((user) => {
      if (user) setSignedInUser(user);
    });
  }, []);

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
        <User className={`text-${iconColor}`} />
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
