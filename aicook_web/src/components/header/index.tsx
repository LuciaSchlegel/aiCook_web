"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
      
      // Detectar si el fondo es claro basado en la posición del scroll
      // Puedes ajustar estos valores según las secciones de tu página
      const isOnLightSection = scrollY > 50; // Cambia según tu diseño
      setIsDarkBackground(isOnLightSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`backdrop-blur-md transition-all duration-500 fixed top-0 left-0 w-full z-50 ${
        scrolled ? "shadow-xl" : "shadow-lg"
      } ${isDarkBackground ? "bg-[#E8E4D9]/30" : "bg-[#E8E4D9]/70"}`}
      style={{
        boxShadow: scrolled 
          ? (isDarkBackground 
              ? "0 8px 32px 0 rgba(0,0,0,0.08), 0 2px 8px 0 rgba(0,0,0,0.04)" 
              : "0 8px 32px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.06)")
          : (isDarkBackground 
              ? "0 4px 16px 0 rgba(0,0,0,0.05), 0 1px 4px 0 rgba(0,0,0,0.02)" 
              : "0 4px 16px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)"),
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled 
          ? (isDarkBackground ? '1px solid rgba(0,0,0,0.03)' : '1px solid rgba(0,0,0,0.06)') 
          : (isDarkBackground ? '1px solid rgba(0,0,0,0.02)' : '1px solid rgba(0,0,0,0.03)')
      }}
    >
      <div 
        className={`flex flex-wrap w-full justify-between p-2 md:p-3 transition-all duration-500 gap-2 md:gap-0 ${
          isDarkBackground ? "text-gray-900" : "text-white"
        }`} 
        style={{ 
          fontFamily: 'Inter', 
          fontWeight: 200, 
          letterSpacing: '0.15em',
          fontSize: '1rem',
        }}
      >
        <Link 
          href="/" 
          className={`text-base sm:text-lg md:text-xl transition-all duration-300 hover:text-2xl ${
            isDarkBackground 
              ? "hover:text-white active:text-orange" 
              : "hover:text-white active:text-orange"
          }`}
          style={{
            filter: !isDarkBackground ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' : 'none'
          }}
        >
          sneak peek
        </Link>
        <Link 
          href="mailto:jointhewaitlist@aicook.com" 
          className={`text-base sm:text-lg md:text-xl transition-all duration-300 hover:text-2xl ${
            isDarkBackground 
              ? "hover:text-white active:text-orange" 
              : "hover:text-white active:text-orange"
          }`}
          style={{
            filter: !isDarkBackground ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' : 'none',
            wordBreak: 'break-all',
            maxWidth: '100vw',
          }}
        >
          jointhewaitlist@aicook.com
        </Link>
        <Link 
          href="/register" 
          className={`text-base sm:text-lg md:text-xl transition-all duration-300 hover:text-2xl ${
            isDarkBackground 
              ? "hover:text-white active:text-orange" 
              : "hover:text-white active:text-orange"
          }`}
          style={{
            filter: !isDarkBackground ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' : 'none'
          }}
        >
          about
        </Link>
      </div>
    </header>
  );
}