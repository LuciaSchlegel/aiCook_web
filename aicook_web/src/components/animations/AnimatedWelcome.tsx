"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LOGO_SIZE = 220;

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
    <div className="flex flex-col font-casta items-center justify-center min-h-screen">
      {/* Logo */}
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="visible"
        className="flex items-center justify-center"
      >
        <img
          src="/logo.svg"
          alt="Logo"
          style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Placeholder reservado para el texto */}
      <div style={{ minHeight: '180px' }} className="flex items-center justify-center w-full mt-4">
        {showText && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h1 className="text-8xl font-light tracking-wider text-center">Welcome to ai.Cook</h1>
            <p className="text-2xl mt-4 text-center">Your personal AI-powered cooking assistant.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}