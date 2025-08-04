import Image from "next/image";
import { FadeInMotion } from "../animations/motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E8E4D9] via-[#F1EDE7] to-[#E8E4D9]">
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
              {/* Primary large organic shape - warm tone */}
              <div className="absolute top-1/4 left-1/6 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-br from-orange-200/25 via-amber-200/20 to-yellow-200/15 rounded-[60%_40%_70%_30%] blur-2xl opacity-80 animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              {/* Secondary flowing shape - cool tone */}
              <div className="absolute bottom-1/3 right-1/4 w-28 h-36 xs:w-32 xs:h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 lg:w-44 lg:h-52 xl:w-48 xl:h-56 bg-gradient-to-tl from-teal-200/20 via-cyan-200/15 to-blue-200/10 rounded-[40%_60%_80%_20%] blur-xl opacity-70"></div>
              
              {/* Accent droplet shape - vibrant */}
              <div className="absolute top-1/3 right-1/3 w-20 h-24 xs:w-24 xs:h-28 sm:w-28 sm:h-32 md:w-32 md:h-36 lg:w-36 lg:h-40 xl:w-40 xl:h-44 bg-gradient-to-tr from-emerald-200/30 via-teal-200/25 to-cyan-200/20 rounded-[50%_50%_50%_50%_/_70%_30%_70%_30%] blur-lg opacity-60"></div>
              
              {/* Small accent bubble - warm */}
              <div className="absolute bottom-1/2 left-2/5 w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-r from-yellow-200/25 via-orange-200/20 to-amber-200/15 rounded-full blur-lg opacity-50"></div>
              
              {/* Flowing ribbon shape - subtle */}
              <div className="absolute top-2/5 left-1/3 w-24 h-12 xs:w-28 xs:h-14 sm:w-32 sm:h-16 md:w-36 md:h-18 lg:w-40 lg:h-20 xl:w-44 xl:h-22 bg-gradient-to-r from-indigo-200/15 via-purple-200/12 to-pink-200/10 rounded-[80%_20%_60%_40%] blur-md opacity-45 transform rotate-12"></div>
              
              {/* Elegant teardrop - sophisticated */}
              <div className="absolute bottom-1/4 left-1/5 w-18 h-24 xs:w-20 xs:h-28 sm:w-22 sm:h-32 md:w-24 md:h-36 lg:w-28 lg:h-40 xl:w-32 xl:h-44 bg-gradient-to-b from-rose-200/20 via-pink-200/15 to-orange-200/12 rounded-[50%_50%_50%_50%_/_80%_20%_60%_40%] blur-lg opacity-55 transform -rotate-6"></div>
              
              {/* Dynamic cloud shape - atmospheric */}
              <div className="absolute top-1/5 right-1/5 w-22 h-18 xs:w-26 xs:h-20 sm:w-30 sm:h-22 md:w-34 md:h-24 lg:w-38 lg:h-28 xl:w-42 xl:h-32 bg-gradient-to-tr from-lime-200/18 via-green-200/14 to-emerald-200/10 rounded-[70%_30%_40%_60%] blur-xl opacity-40 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
              
              {/* Subtle background wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/5 via-transparent to-teal-100/5 rounded-3xl"></div>
            </div>
          </div>

          {/* Right Column: Mockups */}
          <div className="flex flex-row items-center justify-center w-full md:w-1/2 min-h-[40vh] md:min-h-full gap-3 xs:gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-6 md:py-0">
            <div className="relative">
              <Image
                src="/mockups/first.png"
                alt="First Screen"
                className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px]"
                width={360}
                height={640}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </div>
            <div className="relative">
              <Image
                src="/mockups/signup.png"
                alt="Signup Screen"
                className="w-full h-auto drop-shadow-2xl max-w-[120px] xs:max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px]"
                width={300}
                height={600}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
}