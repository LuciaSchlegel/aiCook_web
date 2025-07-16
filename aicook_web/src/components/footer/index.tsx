import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#284139] text-[#e8e4d9] border-t border-[#e8e4d9]/10 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 font-[Casta] text-sm relative z-10">
      {/* Logo y nombre */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="AI Cook Logo" className="h-8 w-auto" />
        <span className="tracking-widest font-light text-base hidden sm:inline">ai.Cook</span>
      </div>
      {/* Enlaces */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <Link href="mailto:jointhewaitlist@aicook.com" className="hover:underline transition">Contact Us</Link>
        <Link href="/register" className="hover:underline transition">About</Link>
      </div>
      {/* Copyright */}
      <div className="text-xs text-[#e8e4d9]/70 text-center md:text-right w-full md:w-auto">
        &copy; {new Date().getFullYear()} ai.Cook. All rights reserved.
      </div>
    </footer>
  );
}