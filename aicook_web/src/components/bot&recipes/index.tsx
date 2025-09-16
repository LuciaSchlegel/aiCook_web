"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion"
import Swiper from "../swiper";

export default function BotAndRecipes() {
  const slides = [
    <Image
      key="ai-bot"
      src="/mockups/ai_recomm.png"
      alt="AI Bot Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipes"
      src="/mockups/recipes.png"
      alt="Recipes Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipe-card"
      src="/mockups/recipe_ext.png"
      alt="Recipe Card Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipe-recommendations"
      src="/mockups/ai_recomm2.png"
      alt="Recipe Recommendations Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-casta text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Your Personal Cooking Assistant
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          You only have to worry about what you want to eat, ai.Cook will take care of the rest.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          Available ingredients are automatically detected, so you just have to tell our smart assistant your personal preferences, available time, and difficulty level.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Smart Detection
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Personal Preferences
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Time Management
        </span>
      </div>
    </div>,
    <div key="desc-2" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-casta text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Your Curated Cookbook
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          Explore a selection of suggested recipes and find inspiration for your next meals.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          ai.Cook&apos;s recipe database is constantly updated and enriched with new recipes, so you can always find something new.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          Our algorithms will suggest you the best recipes according to your available ingredients, preferences, and more.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Smart Algorithms
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Fresh Content
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Personalized
        </span>
      </div>
    </div>,
    <div key="desc-3" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-casta text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Beautiful Recipe Cards
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          It is said that food enters first through the eyes, so we made sure to make our recipe cards as beautiful as they are tasty. They are designed to be easy to understand, use, and follow.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          In case you&apos;re not familiar with an ingredient or quantity unit, you can just jump into our integrated chatbot, and it will give you all the assistance you need.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Visual Design
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Easy to Follow
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Integrated Help
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-casta text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        Smart Recommendations
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          In a matter of seconds, you&apos;ll get a top 3 of recipes that match your available ingredients, diets, and/or personal preferences.
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          You can also go further and ask for more recipes, ingredients substitution, useful tips, and more.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Instant Results
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Diet Friendly
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          Smart Tips
        </span>
      </div>
    </div>
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden" id="bot-and-recipes">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#284139]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#284139]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#284139]/4 rounded-full blur-2xl"></div>
      </div>
      
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-casta text-[#284139] mb-4 sm:mb-6 lg:mb-8" 
                style={{ fontWeight: '400', lineHeight: '1.1', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              Discover ai.Cook
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#284139]/70 max-w-3xl mx-auto px-2 font-light leading-relaxed">
              Experience the future of cooking with our AI-powered assistant
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}