"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion"
import Swiper from "../swiper";

export default function BotAndRecipes() {
  const slides = [
    <Image
      key="ai-bot"
      src="/mockups/ai_bot.png"
      alt="AI Bot Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipes"
      src="/mockups/recipes.png"
      alt="Recipes Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipe-card"
      src="/mockups/recipe_card.png"
      alt="Recipe Card Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipe-recommendations"
      src="/mockups/ai_recomm.png"
      alt="Recipe Recommendations Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Your Personal Cooking Assistant
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        You only have to worry about what you want to eat, ai.Cook will take care of the rest.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        Available ingredients are automatically detected, so you just have to tell our smart assistant your personal preferences, available time, and difficulty level.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Smart Detection
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Personal Preferences
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Time Management
        </span>
      </div>
    </div>,
    <div key="desc-2" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Your Curated Cookbook
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        Explore a selection of suggested recipes and find inspiration for your next meals.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        ai.Cook&apos;s recipe database is constantly updated and enriched with new recipes, so you can always find something new.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        Our algorithms will suggest you the best recipes according to your available ingredients, preferences, and more.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Smart Algorithms
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Fresh Content
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Personalized
        </span>
      </div>
    </div>,
    <div key="desc-3" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Beautiful Recipe Cards
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        It is said that food enters first through the eyes, so we made sure to make our recipe cards as beautiful as they are tasty.
        They are designed to be easy to understand, use, and follow.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        In case you&apos;re not familiar with an ingredient or quantity unit, you can just jump into our integrated chatbot, and it will give you all the assistance you need.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Visual Design
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Easy to Follow
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Integrated Help
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-[#284139] rounded-full"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#284139] leading-tight">
          Smart Recommendations
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#284139]/80 leading-relaxed">
        In a matter of seconds, you&apos;ll get a top 3 of recipes that match your available ingredients, diets, and/or personal preferences.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-[#284139]/70 leading-relaxed">
        You can also go further and ask for more recipes, ingredients substitution, useful tips, and more.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Instant Results
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Diet Friendly
        </span>
        <span className="px-3 py-1 bg-[#284139]/10 text-[#284139] text-xs rounded-full border border-[#284139]/20">
          Smart Tips
        </span>
      </div>
    </div>
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 py-12 sm:py-16 lg:py-20 overflow-hidden" id="bot-and-recipes">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#284139]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#284139]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#284139]/4 rounded-full blur-2xl"></div>
      </div>
      
      <FadeInMotion>
              <div className="relative w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#284139] mb-3 xs:mb-4 sm:mb-6">
            Discover ai.Cook
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-[#284139]/70 max-w-2xl mx-auto px-2 xs:px-0">
            Experience the future of cooking with our AI-powered assistant
          </p>
        </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}