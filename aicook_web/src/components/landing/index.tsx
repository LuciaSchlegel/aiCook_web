"use client"
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FadeInMotion } from "../animations/motion";

export default function LandingPage() {
  const shouldReduceMotion = useReducedMotion();

  // Sophisticated animation variants for organic shapes
  /* eslint-disable */
  const createFloatingAnimation = (amplitude: number, duration: number, delay: number = 0) => {
    if (shouldReduceMotion) return {};
    return {
      y: [-amplitude, amplitude, -amplitude],
      x: [-amplitude * 0.3, amplitude * 0.3, -amplitude * 0.3],
      rotate: [-1, 1, -1],
      scale: [0.98, 1.02, 0.98],
    };
  };
/* eslint-enable */
  const createFloatingTransition = (duration: number, delay: number = 0) => ({
    duration: duration,
    delay: delay,
    repeat: Infinity,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    type: "tween" as const
  });

  const createPulsingAnimation = (scaleRange: number) => {
    if (shouldReduceMotion) return {};
    return {
      scale: [1, 1 + scaleRange, 1],
      opacity: [0.6, 0.9, 0.6],
    };
  };

  const createPulsingTransition = (duration: number, delay: number = 0) => ({
    duration: duration,
    delay: delay,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1] as const,
    type: "tween" as const
  });

  const createOrbitingAnimation = (radius: number) => {
    if (shouldReduceMotion) return {};
    return {
      rotate: [0, 360],
      x: [0, radius * 0.3, 0, -radius * 0.3, 0],
      y: [0, -radius * 0.2, 0, radius * 0.2, 0],
    };
  };

  const createOrbitingTransition = (duration: number, delay: number = 0) => ({
    duration: duration,
    delay: delay,
    repeat: Infinity,
    ease: "linear" as const,
    type: "tween" as const
  });

  const createBreathingAnimation = (amplitude: number) => {
    if (shouldReduceMotion) return {};
    return {
      scale: [1, 1 + amplitude, 1],
      rotate: [-2, 2, -2],
      opacity: [0.7, 1, 0.7],
    };
  };

  const createBreathingTransition = (duration: number, delay: number = 0) => ({
    duration: duration,
    delay: delay,
    repeat: Infinity,
    ease: [0.37, 0, 0.63, 1] as const,
    type: "tween" as const
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E8E4D9] via-[#F1EDE7] to-[#E8E4D9] overflow-hidden">
      <FadeInMotion>
        <div className="flex flex-col md:flex-row min-h-screen w-full">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 min-h-[60vh] md:min-h-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0 relative">
            <div className="text-center relative z-20 max-w-2xl mx-auto">
              <h1 
                className="font-light tracking-wide text-[#284139] leading-tight mb-4 sm:mb-6 md:mb-8"
                style={{
                  fontFamily: 'Casta',
                  fontSize: 'clamp(1.8rem, 6vw, 4rem)',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.02em',
                }}
              >
                get to know ai, one recipe at a time
              </h1>
              
              <p 
                className="font-light tracking-wider text-[#284139]"
                style={{
                  fontFamily: 'Casta',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.05em',
                }}
              >
                coming this fall
              </p>
            </div>

            {/* Sophisticated organic shapes background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Primary large organic shape - warm tone with floating animation */}
              <motion.div 
                className="absolute top-1/4 left-1/6 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-400/50 via-amber-400/40 to-yellow-300/30 rounded-[60%_40%_70%_30%] blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 0.8,
                  scale: 1,
                  ...createFloatingAnimation(12, 18, 0)
                }}
                transition={{
                  opacity: { duration: 2, ease: "easeOut" as const },
                  scale: { duration: 2, ease: "easeOut" as const },
                  ...createFloatingTransition(18, 0)
                }}
              />
              
              {/* Secondary flowing shape - cool tone with breathing animation */}
              <motion.div 
                className="absolute bottom-1/3 right-1/4 w-32 h-40 sm:w-44 sm:h-52 lg:w-56 lg:h-64 bg-gradient-to-tl from-teal-400/40 via-cyan-400/30 to-green-400/25 rounded-[40%_60%_80%_20%] blur-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 0.7,
                  x: 0,
                  ...createBreathingAnimation(0.08)
                }}
                transition={{
                  opacity: { duration: 2.5, ease: "easeOut" as const },
                  x: { duration: 2.5, ease: "easeOut" as const },
                  ...createBreathingTransition(14, 2)
                }}
              />
              
              {/* Accent droplet shape - vibrant with orbiting motion */}
              <motion.div 
                className="absolute top-1/3 right-1/3 w-24 h-28 sm:w-32 sm:h-36 lg:w-40 lg:h-44 bg-gradient-to-tr from-emerald-400/50 via-teal-400/40 to-cyan-400/30 rounded-[50%_50%_50%_50%_/_70%_30%_70%_30%] blur-lg"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 0.75,
                  scale: 1,
                  ...createOrbitingAnimation(8)
                }}
                transition={{
                  opacity: { duration: 3, ease: "easeOut" as const },
                  scale: { duration: 3, ease: "easeOut" as const },
                  ...createOrbitingTransition(25, 1)
                }}
              />
              
              {/* Small accent bubble - warm with pulsing */}
              <motion.div 
                className="absolute bottom-1/2 left-2/5 w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-yellow-400/45 via-orange-400/35 to-amber-400/25 rounded-full blur-lg"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: 0.6,
                  scale: 1,
                  ...createPulsingAnimation(0.15)
                }}
                transition={{
                  opacity: { duration: 1.5, ease: "easeOut" as const },
                  scale: { duration: 1.5, ease: "easeOut" as const },
                  ...createPulsingTransition(8, 3)
                }}
              />
              
              {/* Flowing ribbon shape - subtle with gentle sway */}
              <motion.div 
                className="absolute top-2/5 left-1/3 w-28 h-14 sm:w-36 sm:h-18 lg:w-44 lg:h-22 bg-gradient-to-r from-indigo-400/30 via-purple-400/25 to-pink-400/15 rounded-[80%_20%_60%_40%] blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 0.5,
                  y: 0,
                  ...createFloatingAnimation(8, 20, 4)
                }}
                transition={{
                  opacity: { duration: 2.8, ease: "easeOut" as const },
                  y: { duration: 2.8, ease: "easeOut" as const },
                  ...createFloatingTransition(20, 4)
                }}
              />
              
              {/* Elegant teardrop - sophisticated with complex motion */}
              <motion.div 
                className="absolute bottom-1/4 left-1/5 w-20 h-28 sm:w-28 sm:h-40 lg:w-32 lg:h-44 bg-gradient-to-b from-rose-400/40 via-pink-400/30 to-orange-400/25 rounded-[50%_50%_50%_50%_/_80%_20%_60%_40%] blur-lg"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{
                  opacity: 0.65,
                  rotate: 0,
                  ...(shouldReduceMotion ? {} : {
                    x: [-8, 8, -8],
                    y: [-6, 6, -6],
                    rotate: [-2, 2, -2],
                    scale: [0.98, 1.02, 0.98],
                  })
                }}
                transition={shouldReduceMotion ? {
                  opacity: { duration: 3.2, ease: "easeOut" as const },
                  rotate: { duration: 3.2, ease: "easeOut" as const },
                } : {
                  opacity: { duration: 3.2, ease: "easeOut" as const },
                  rotate: { duration: 3.2, ease: "easeOut" as const },
                  x: { duration: 16, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 5 },
                  y: { duration: 16, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 5.5 },
                  scale: { duration: 12, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const, delay: 6.5 },
                }}
              />
              
              {/* Dynamic cloud shape - atmospheric with gentle drift */}
              <motion.div 
                className="absolute top-1/5 right-1/5 w-26 h-20 sm:w-38 sm:h-28 lg:w-42 lg:h-32 bg-gradient-to-tr from-lime-400/30 via-green-400/25 to-emerald-400/15 rounded-[70%_30%_40%_60%] blur-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{
                  opacity: 0.5,
                  x: 0,
                  ...createFloatingAnimation(10, 22, 7)
                }}
                transition={{
                  opacity: { duration: 4, ease: "easeOut" as const },
                  x: { duration: 4, ease: "easeOut" as const },
                  ...createFloatingTransition(22, 7)
                }}
              />
              
              {/* Additional micro-shapes for depth */}
              <motion.div 
                className="absolute top-3/4 right-2/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-violet-400/25 via-blue-400/20 to-cyan-400/15 rounded-full blur-md"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{
                  opacity: 0.4,
                  scale: 1,
                  ...createPulsingAnimation(0.12)
                }}
                transition={{
                  opacity: { duration: 5, ease: "easeOut" as const },
                  scale: { duration: 5, ease: "easeOut" as const },
                  ...createPulsingTransition(6, 8)
                }}
              />
              
              <motion.div 
                className="absolute top-1/6 left-3/5 w-8 h-12 sm:w-12 sm:h-16 lg:w-14 lg:h-18 bg-gradient-to-t from-amber-400/30 via-yellow-400/25 to-lime-400/20 rounded-[40%_60%_70%_30%] blur-sm"
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: 0.35,
                  y: 0,
                  ...createFloatingAnimation(6, 11, 9)
                }}
                transition={{
                  opacity: { duration: 3.5, ease: "easeOut" as const },
                  y: { duration: 3.5, ease: "easeOut" as const },
                  ...createFloatingTransition(11, 9)
                }}
              />
              
              {/* Subtle background wash with gentle animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange-100/3 via-transparent to-teal-100/3 rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                }}
                transition={{
                  opacity: { duration: 6, ease: "easeOut" as const },
                }}
              />
            </div>
          </div>

          {/* Right Column: Mockups */}
          <div className="flex items-end justify-center w-full md:w-1/2 min-h-[40vh] md:min-h-full px-4 sm:px-6 md:px-8 pr-8 sm:pr-12 md:pr-16 lg:pr-20 py-6 md:py-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-row items-end gap-1 xs:gap-2 sm:gap-3 md:gap-4">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPhone.png"
                  alt="First Screen iPhone"
                  className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px]"
                  width={360}
                  height={640}
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPad.png"
                  alt="First Screen iPad"
                  className="w-full h-auto drop-shadow-2xl max-w-[220px] xs:max-w-[440px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px]"
                  width={1024}
                  height={1366}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
}