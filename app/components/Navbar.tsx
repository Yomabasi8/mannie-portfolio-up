"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Work Samples", href: "/work" },
  { label: "Clients", href: "/clients" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#F1F7FE]/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
        <nav className="flex items-center gap-10 font-jetbrains text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href
                  ? "text-brand-button"
                  : "text-brand-black-light hover:text-brand-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
