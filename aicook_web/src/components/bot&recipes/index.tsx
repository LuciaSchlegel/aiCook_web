"use client"
import { FadeInMotion } from "../animations/motion"
import SwiperComponent from "../swiper";

export default function BotAndRecipes() {
  const slides = [
    <img
      key="ai-bot"
      src="/mockups/ai_bot.png"
      alt="AI Bot Screen"
      className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
    />,
    <img
      key="recipes"
      src="/mockups/recipes.png"
      alt="Recipes Screen"
      className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
    />,
    <img
      key="recipe-card"
      src="/mockups/recipe_card.png"
      alt="Recipe Card Screen"
      className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
    />
  ];

  const descriptions = [
    <div key="desc-1">
      <h2 className="text-xl font-bold mb-2 text-[#284139]">AI Bot</h2>
      <p className="text-[#284139]">Interact with our intelligent bot to get personalized recipe recommendations based on your ingredients.</p>
    </div>,
    <div key="desc-2">
      <h2 className="text-xl font-bold mb-2 text-[#284139]">Recipes</h2>
      <p className="text-[#284139]">Explore a variety of suggested recipes and find inspiration for your next meals.</p>
    </div>,
    <div key="desc-3">
      <h2 className="text-xl font-bold mb-2 text-[#284139]">Recipe Card</h2>
      <p className="text-[#284139]">View the details of each recipe, including ingredients, steps, and useful tips.</p>
    </div>
  ];

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen w-full justify-center bg-[#E8E4D9] py-12 md:py-16" /* Quitado items-center para evitar corte del mockup */
      style={{
        backgroundImage: "url('/images/dusty.svg')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <FadeInMotion>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <SwiperComponent slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  )
}