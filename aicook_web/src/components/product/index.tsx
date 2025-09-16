"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion";
import Swiper from "../swiper";

export default function Product() {
  const slides = [
    <Image
      key="adding"
      src="/mockups/add_ing.png"
      alt="Add Ingredient Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="customing"
      src="/mockups/add_custom.png"
      alt="Add Ingredient Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="adding-det"
      src="/mockups/edit_ing.png"
      alt="Add Ingredient Details Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="cupboard"
      src="/mockups/cupboard_screen.png"
      alt="Cupboard Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Smart Ingredient Management
      </h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
        Add your available ingredients to your pantry quickly and easily. You can either pick from a rich ingredient list or add your own.
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Quick Add
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Rich Database
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Custom Ingredients
        </span>
      </div>
    </div>,
    <div key="desc-2" className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
            style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Personalized Ingredients
      </h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
        You can add your own ingredients to your pantry, or you can choose from a rich ingredient list.
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Custom Ingredients
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Personalized
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Rich Database
        </span>
      </div>
    </div>,
    <div key="desc-3" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Intelligent Details
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          You only have to enter your ingredient&apos;s quantity, the app will do the rest.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          Nutritional information, availability tracking, and more will be performed automatically by the integrated AI.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Auto Nutrition
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Smart Tracking
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          AI Powered
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Your Digital Pantry
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          View all ingredients available in your pantry and manage your inventory easily.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          You can classify them by categories, diets, intolerances, and more.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Easy Management
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Smart Categories
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Diet Support
        </span>
      </div>
    </div>
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden" id="product">
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-melodrama-medium text-[#284139] mb-4 sm:mb-6 lg:mb-8" 
                style={{ lineHeight: '1.1', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
              Smart Organization
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#284139]/70 max-w-3xl mx-auto font-melodrama-regular leading-relaxed">
              Keep track of your ingredients with intelligent organization and AI-powered insights
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}