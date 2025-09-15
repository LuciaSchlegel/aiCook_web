"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInMotion } from "../animations/motion";
import GraphicAssets from "../graphic assets";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F1EDE7]/85 to-[#E8E4D9]/90 overflow-hidden">
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
            <GraphicAssets />
          </div>

          {/* Right Column: Mockups */}
          <div className="flex items-end justify-center w-full md:w-1/2 min-h-[40vh] md:min-h-full px-4 sm:px-6 md:px-8 pr-8 sm:pr-12 md:pr-16 lg:pr-20 py-6 md:mt-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-row items-end gap-2 sm:gap-3 md:gap-4">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPhone.png"
                  alt="First Screen iPhone"
                  className="w-full h-auto drop-shadow-2xl max-w-[200px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px]"
                  width={360}
                  height={640}
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </motion.div>
              <motion.div 
                className="relative hidden lg:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPad.png"
                  alt="First Screen iPad"
                  className="w-full h-auto drop-shadow-2xl max-w-[280px] lg:max-w-[320px] xl:max-w-[560px]"
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