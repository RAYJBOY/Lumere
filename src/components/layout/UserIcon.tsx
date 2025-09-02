"use client";

import { User, LogIn, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const UserIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const iconColor = pathname === "/" ? "white" : "black";

  // Handle click outside
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`p-2 hover:bg-[var(--hover-color)] rounded-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className={`text-${iconColor}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => {
                console.log("Sign In clicked");
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-[var(--hover-color)] hover:text-white text-gray-700 flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => {
                console.log("Sign Out clicked");
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-[var(--hover-color)] hover:text-white text-gray-700 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
