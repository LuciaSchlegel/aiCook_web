"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface FadeInMotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}
export const FadeInMotion: React.FC<FadeInMotionProps> = ({
  children,
  delay = 0.1,
  duration = 0.8,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      variants={variants}
      className={className}
      data-framer-motion
    >
      {children}
    </motion.div>
  );
};

interface ZoomInMotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Componente para animar zoom in con fade in.
 * Uso: <ZoomInMotion><div>...</div></ZoomInMotion>
 */
export const ZoomInMotion: React.FC<ZoomInMotionProps> = ({
  children,
  delay = 0.2,
  duration = 0.9,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.9,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      variants={variants}
      className={className}
      data-framer-motion
    >
      {children}
    </motion.div>
  );
}; 