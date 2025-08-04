"use client";
import { motion } from "framer-motion";
import React from "react";

interface FadeInMotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Componente genérico para animar fade in cualquier elemento hijo.
 * Uso: <FadeInMotion><img src="..." /></FadeInMotion>
 */
export const FadeInMotion: React.FC<FadeInMotionProps> = ({
  children,
  delay = 0.1,
  duration = 0.7,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

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
  duration = 0.8,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ 
      duration, 
      delay, 
      ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
    }}
    className={className}
  >
    {children}
  </motion.div>
); 