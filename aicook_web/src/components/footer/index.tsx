import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#284139] text-[#e8e4d9] border-t border-[#e8e4d9]/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-5 sm:py-6 gap-3 xs:gap-4 sm:gap-6 font-[Casta] text-sm">
        {/* Logo y nombre */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="AI Cook Logo" className="h-6 sm:h-8 w-auto" />
          <span className="tracking-widest font-light text-sm sm:text-base">ai.Cook</span>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center">
          <Link 
            href="mailto:jointhewaitlist@aicook.com" 
            className="hover:underline transition text-xs sm:text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-[#e8e4d9]/70 text-center md:text-right">
          &copy; {new Date().getFullYear()} ai.Cook. All rights reserved.
        </div>
      </div>
    </footer>
  );
}