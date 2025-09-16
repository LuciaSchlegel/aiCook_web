"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('/#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <header
      className={`backdrop-blur-md transition-all duration-500 fixed top-0 left-0 w-full z-50 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } bg-[#E8E4D9]/80`}
      style={{
        boxShadow: scrolled
          ? "0 4px 20px 0 rgba(40, 65, 57, 0.08), 0 2px 8px 0 rgba(40, 65, 57, 0.04)"
          : "0 2px 8px 0 rgba(40, 65, 57, 0.03)",
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(40, 65, 57, 0.06)'
          : '1px solid rgba(40, 65, 57, 0.03)'
      }}
    >
      <div className="flex justify-between items-center p-3 xs:p-4 sm:p-5 lg:p-6 transition-all duration-500 max-w-7xl mx-auto">
        <Link
          href="/#bot-and-recipes"
          onClick={handleSmoothScroll}
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:scale-105 active:scale-95 text-[#284139] font-light tracking-wide"
          style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
        >
          sneak peek
        </Link>
        <Link
          href="mailto:jointhewaitlist@aicook.com"
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:scale-105 active:scale-95 text-[#284139] font-light tracking-wide text-center px-2 max-w-[45vw] xs:max-w-[55vw] sm:max-w-none truncate"
          style={{
            textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)',
          }}
        >
          <span className="hidden lg:inline">jointhewaitlist@aicook.com</span>
          <span className="hidden sm:inline lg:hidden">join@aicook.com</span>
          <span className="inline sm:hidden">join waitlist</span>
        </Link>
        <Link
          href="/#product"
          onClick={handleSmoothScroll}
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:scale-105 active:scale-95 text-[#284139] font-light tracking-wide"
          style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
        >
          about
        </Link>
      </div>
    </header>
  );
}