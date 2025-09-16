import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#284139] text-[#e8e4d9] border-t border-[#e8e4d9]/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 font-[Casta]">
        
        {/* Logo and name */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Image 
            src="/logo.svg" 
            alt="AI Cook Logo" 
            width={40} 
            height={40} 
            className="h-7 sm:h-9 md:h-10 w-auto" 
          />
          <span className="tracking-widest font-medium text-base sm:text-lg md:text-xl">
            ai.Cook
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-10 text-center">
          <Link
            href="mailto:jointhewaitlist@aicook.com"
            className="hover:text-[#e8e4d9]/80 hover:underline underline-offset-4 transition-all duration-300 ease-out text-sm sm:text-base md:text-lg font-light tracking-wide"
          >
            Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm md:text-base text-[#e8e4d9]/60 text-center md:text-right font-light tracking-wide">
          &copy; {new Date().getFullYear()} ai.Cook. All rights reserved.
        </div>
      </div>
    </footer>
  );
}