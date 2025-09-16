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
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 xs:px-6 sm:px-8">
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
          className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 drop-shadow-lg"
          width={200}
          height={200}
          priority
        />
      </motion.div>
      
      {/* Text Container */}
      <div className="flex items-center justify-center w-full mt-4 sm:mt-6 z-10 min-h-[80px] xs:min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]">
        {showText && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-5xl mx-auto"
          >
            <h1
              className="font-melodrama-regular text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light tracking-wider text-center leading-tight"
              style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(255,255,255,0.3)'
              }}
            >
              ai.Cook
            </h1>
            <p className="font-melodrama-light text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3 sm:mt-4 lg:mt-6 text-center max-w-3xl px-4 leading-relaxed" 
               style={{ letterSpacing: '0.05em' }}>
              Your personal AI-powered cooking assistant.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}