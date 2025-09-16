import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#284139] text-[#e8e4d9] border-t border-[#e8e4d9]/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 xs:px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 gap-6 sm:gap-8 font-[Casta]">
        {/* Logo and name */}
        <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
          <Image
            src="/logo.svg"
            alt="AI Cook Logo"
            width={40}
            height={40}
            className="h-8 xs:h-9 sm:h-10 lg:h-12 w-auto"
          />
          <span className="tracking-widest font-medium text-lg xs:text-xl sm:text-2xl lg:text-3xl">
            ai.Cook
          </span>
        </div>
        
        {/* Links */}
        <div className="flex flex-col xs:flex-row items-center gap-4 sm:gap-6 lg:gap-8 text-center">
          <Link
            href="mailto:jointhewaitlist@aicook.com"
            className="hover:text-[#e8e4d9]/80 hover:underline underline-offset-4 transition-all duration-300 ease-out text-sm xs:text-base sm:text-lg lg:text-xl font-light tracking-wide"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-xs xs:text-sm sm:text-base lg:text-lg text-[#e8e4d9]/60 text-center sm:text-right font-light tracking-wide">
          &copy; {new Date().getFullYear()} ai.Cook. All rights reserved.
        </div>
      </div>
    </footer>
  );
}