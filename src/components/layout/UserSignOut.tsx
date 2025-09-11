"use client";

import { useEffect, useRef, useState } from "react";

interface UserSignOutDialogProps {
  onSignOut?: () => void;
}

export const UserSignOut = ({ onSignOut }: UserSignOutDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if click is outside
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

  const handleSignOut = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        onSignOut?.();
      } else {
        console.error("Failed to log out");
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-[var(--hover-color)] text-white rounded hover:opacity-90"
      >
        Sign Out
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div
            ref={dropdownRef}
            className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Confirm Sign Out</h2>
            <p className="mb-6">Are you sure you want to sign out?</p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-[var(--hover-color)] text-white rounded hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Signing Out..." : "Sign Out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
