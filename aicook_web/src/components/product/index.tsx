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
      className="w-full h-auto drop-shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
    key="customing"
    src="/mockups/add_custom.png"
    alt="Add Ingredient Screen"
    className="w-full h-auto drop-shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
    width={360}
    height={640}
    style={{ width: 'auto', height: 'auto' }}
  />,

    <Image
      key="adding-det"
      src="/mockups/edit_ing.png"
      alt="Add Ingredient Details Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="cupboard"
      src="/mockups/cupboard_screen.png"
      alt="Cupboard Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Smart Ingredient Management
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        Add your available ingredients to your pantry quickly and easily. You can either pick from a rich ingredient list or add your own.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Quick Add
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Rich Database
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Custom Ingredients
        </span>
      </div>
    </div>,
        <div key="desc-2" className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
            Personalized Ingredients
          </h2>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
          You can add your own ingredients to your pantry, or you can choose from a rich ingredient list.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
            Custom Ingredients
          </span>
          <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
            Personalized
          </span>
          <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
            Rich Database
          </span>
        </div>
      </div>,
  
    <div key="desc-3" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Intelligent Details
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        You only have to enter your ingredient&apos;s quantity, the app will do the rest.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        Nutritional information, availability tracking, and more will be performed automatically by the integrated AI.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Auto Nutrition
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Smart Tracking
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          AI Powered
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Your Digital Pantry
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        View all ingredients available in your pantry and manage your inventory easily.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        You can classify them by categories, diets, intolerances, and more.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Easy Management
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Smart Categories
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Diet Support
        </span>
      </div>
    </div>
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-white/80 via-[#F8F6F2]/75 to-[#F0EDE8]/80 py-12 sm:py-16 lg:py-20 overflow-hidden" id="product">
      {/* Background decorative elements */}
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#284139] mb-4 sm:mb-6">
              Smart Pantry Management
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#284139]/70 max-w-2xl mx-auto">
              Keep track of your ingredients with intelligent organization and AI-powered insights
            </p>
          </div>
            <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}