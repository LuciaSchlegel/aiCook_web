"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 flex items-center p-2 transition-all duration-300
        ${scrolled ? "bg-gradient-to-b from-[#284139]/90 to-[#284139]/60 shadow-lg shadow-black/10 backdrop-blur-md" : "bg-transparent shadow-none"}
      `}
    >
    <div className="flex w-full justify-between p-2">
        <Link href="/" className="hover:text-gray-400 text-2xl font-bold transition-all duration-300">
            Sneak Peek
        </Link>
        <Link href="mailto:jointhewaitlist@aicook.com" className="hover:text-gray-400 text-2xl font-bold transition-all duration-300">
            jointhewaitlist@aicook.com
        </Link>
        <Link href="/register" className="hover:text-gray-400 text-2xl font-bold transition-all duration-300">
            About
        </Link>
    </div>
    </header>
  );
}