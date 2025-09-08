"use client";

import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UserSignInSignUpDialog } from "./UserSignInSignUp";
import { UserSignOut } from "./UserSignOut";

export const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`p-2 hover:bg-[var(--hover-color)] rounded-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className={`text-${iconColor}`} />
      </button>

      {isOpen && !signedInUser && (
        <UserSignInSignUpDialog
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        />
      )}

      {isOpen && signedInUser && (
        <div className="absolute right-0 mt-2 inline-block rounded-lg shadow-lg z-50 top-10 w-25">
          <UserSignOut onSignOut={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};
