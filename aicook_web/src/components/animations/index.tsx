"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const logoVariants = {
  initial: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function AnimatedWelcome() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // espera a que termine el logo

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col font-casta items-center justify-center min-h-screen w-screen overflow-hidden" style={{ minHeight: '100vh', width: '100vw' }}>
      {/* Logo */}
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="visible"
        className="flex items-center justify-center z-10"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] drop-shadow-lg"
          width={120}
          height={120}
        />
      </motion.div>
      {/* Placeholder reservado para el texto */}
      <div className="flex items-center justify-center w-full mt-4 z-10" style={{ minHeight: '120px' }}>
        {showText && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-light tracking-wider text-center">Welcome to ai.Cook</h1>
            <p className="text-base sm:text-xl md:text-2xl mt-4 text-center">Your personal AI-powered cooking assistant.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}