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