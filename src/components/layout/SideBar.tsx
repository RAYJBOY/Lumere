"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface SideBarProps {
  setOpenSidebar: (open: boolean) => void;
  isOpen: boolean;
}

export const SideBar = ({ setOpenSidebar, isOpen }: SideBarProps) => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-30"
            onClick={() => setOpenSidebar(false)}
          />

          {/* Sidebar */}
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40"
          >
            <div className="p-4 flex flex-col h-full">
              <button
                onClick={() => setOpenSidebar(false)}
                className="self-end p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-widest text-logo">
                  LUMERÉ
                </h1>
              </div>

              <nav className="mt-8">
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setOpenSidebar(false)}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          pathname === link.href
                            ? "bg-[var(--hover-color)] text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
