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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col font-casta items-center justify-center min-h-screen w-full overflow-hidden px-4">
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
          className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 drop-shadow-lg"
          width={176}
          height={176}
          priority
        />
      </motion.div>

      {/* Text Container */}
      <div className="flex items-center justify-center w-full mt-4 z-10 min-h-[100px] sm:min-h-[120px]">
        {showText && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider text-center leading-tight">
            ai.Cook
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 text-center max-w-2xl px-4">
              Your personal AI-powered cooking assistant.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}