"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInMotion } from "../animations/motion";
import GraphicAssets from "../graphic assets";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F1EDE7]/85 to-[#E8E4D9]/90 overflow-hidden">
      <FadeInMotion>
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 min-h-[50vh] lg:min-h-full px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-0 relative">
            <div className="text-center relative z-20 max-w-2xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
              <h1
                className="font-melodrama-regular tracking-wide text-[#284139] leading-tight"
                style={{
                  fontSize: 'clamp(1.5rem, 4.5vw + 1rem, 4rem)',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.08em',
                  lineHeight: '1.15'
                }}
              >
                get to know ai, one recipe at a time
              </h1>
              <p
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#284139] font-melodrama-light"
                style={{
                  letterSpacing: '0.05em',
                }}
              >
                coming this fall
              </p>
            </div>
            <GraphicAssets />
          </div>
          
          {/* Right Column: Mockups */}
          <div className="flex items-end justify-center w-full lg:w-1/2 min-h-[50vh] lg:min-h-full px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-16 xl:py-20">
            <div className="flex flex-row items-end gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPhone.png"
                  alt="First Screen iPhone"
                  className="w-full h-auto drop-shadow-2xl max-w-[160px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px]"
                  width={360}
                  height={640}
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </motion.div>
              <motion.div
                className="relative hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPad.png"
                  alt="First Screen iPad"
                  className="w-full h-auto drop-shadow-2xl max-w-[240px] lg:max-w-[280px] xl:max-w-[480px]"
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