"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion"
import SwiperComponent from "../swiper";

export default function BotAndRecipes() {
  const slides = [
    <Image
      key="ai-bot"
      src="/mockups/ai_bot.png"
      alt="AI Bot Screen"
      className="w-full h-auto drop-shadow-xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
    />,
    <Image
      key="recipes"
      src="/mockups/recipes.png"
      alt="Recipes Screen"
      className="w-full h-auto drop-shadow-xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
    />,
    <Image
      key="recipe-card"
      src="/mockups/recipe_card.png"
      alt="Recipe Card Screen"
      className="w-full h-auto drop-shadow-xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
    />
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#284139]">AI Bot</h2>
      <p className="text-sm sm:text-base md:text-lg text-[#284139] leading-relaxed">
        Interact with our intelligent bot to get personalized recipe recommendations based on your ingredients.
      </p>
    </div>,
    <div key="desc-2" className="space-y-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#284139]">Recipes</h2>
      <p className="text-sm sm:text-base md:text-lg text-[#284139] leading-relaxed">
        Explore a variety of suggested recipes and find inspiration for your next meals.
      </p>
    </div>,
    <div key="desc-3" className="space-y-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#284139]">Recipe Card</h2>
      <p className="text-sm sm:text-base md:text-lg text-[#284139] leading-relaxed">
        View the details of each recipe, including ingredients, steps, and useful tips.
      </p>
    </div>
  ];

  return (
    <div className="flex flex-col justify-center min-h-screen w-full bg-[#E8E4D9] py-8 sm:py-12 lg:py-16">
      <FadeInMotion>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwiperComponent slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}