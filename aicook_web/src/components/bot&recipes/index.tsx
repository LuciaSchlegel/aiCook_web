"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion"
import Swiper from "../swiper";
import { useI18nContext } from "@/context/I18nContext";

export default function BotAndRecipes() {
  const { t, isReady } = useI18nContext();

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
    key="recipe-recommendations"
    src="/mockups/ai_recomm_ready.png"
    alt="Recipe Recommendations Screen"
    className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
    width={360}
    height={640}
    style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipes"
      src="/mockups/recipes_screen.png"
      alt="Recipes Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
    key="recipe-card"
    src="/mockups/recipe_ov.png"
    alt="Recipe Card Screen"
    className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
    width={360}
    height={640}
    style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
    key="unavailable"
    src="/mockups/unavailable.png"
    alt="Unavailable Ingredients"
    className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
    width={360}
    height={640}
    style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
    key="recipe-steps"
    src="/mockups/recipe_steps.png"
    alt="Recipe Steps"
    className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
    width={360}
    height={640}
    style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
    key="ai-substitution"
    src="/mockups/ai_subst.png"
    alt="AI Ingredient Substitution"
    className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
    width={360}
    height={640}
    style={{ width: 'auto', height: 'auto' }}
    />,
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('botAndRecipes.headers.1', 'Your Digital Chef') : 'Your Digital Chef'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.1', 'You only have to worry about what you want to eat, ai.Cook will take care of the rest.') : 'You only have to worry about what you want to eat, ai.Cook will take care of the rest.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.2', 'Available ingredients are automatically detected, so you just have to tell our smart assistant your personal preferences, available time, and difficulty level.') : 'Available ingredients are automatically detected, so you just have to tell our smart assistant your personal preferences, available time, and difficulty level.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.1', 'Smart Detection') : 'Smart Detection'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.2', 'Personal Preferences') : 'Personal Preferences'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.3', 'Time Management') : 'Time Management'}
        </span>
      </div>
    </div>,
    <div key="desc-2" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('botAndRecipes.headers.2', 'Your Curated Cookbook') : 'Your Curated Cookbook'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.3', 'Explore a selection of suggested recipes and find inspiration for your next meals.') : 'Explore a selection of suggested recipes and find inspiration for your next meals.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.4', 'ai.Cook&apos;s recipe database is constantly updated and enriched with new recipes, so you can always find something new.') : 'ai.Cook&apos;s recipe database is constantly updated and enriched with new recipes, so you can always find something new.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.5', 'Our algorithms will suggest you the best recipes according to your available ingredients, preferences, and more.') : 'Our algorithms will suggest you the best recipes according to your available ingredients, preferences, and more.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.4', 'Smart Algorithms') : 'Smart Algorithms'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.5', 'Fresh Content') : 'Fresh Content'}  
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.6', 'Personalized') : 'Personalized'}
        </span>
      </div>
    </div>,
    <div key="desc-3" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('botAndRecipes.headers.3', 'Beautiful Recipe Cards') : 'Beautiful Recipe Cards'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.6', 'It is said that food enters first through the eyes, so we made sure to make our recipe cards as beautiful as they are tasty. They are designed to be easy to understand, use, and follow.') : 'It is said that food enters first through the eyes, so we made sure to make our recipe cards as beautiful as they are tasty. They are designed to be easy to understand, use, and follow.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.7', 'In case you&apos;re not familiar with an ingredient or quantity unit, you can just jump into our integrated chatbot, and it will give you all the assistance you need.') : 'In case you&apos;re not familiar with an ingredient or quantity unit, you can just jump into our integrated chatbot, and it will give you all the assistance you need.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.7', 'Visual Design') : 'Visual Design'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.8', 'Easy to Follow') : 'Easy to Follow'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.9', 'Integrated Help') : 'Integrated Help'}
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('botAndRecipes.headers.4', 'Step-by-Step Guidance') : 'Step-by-Step Guidance'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.8', 'Follow detailed, easy-to-understand cooking steps with visual guidance and helpful tips.') : 'Follow detailed, easy-to-understand cooking steps with visual guidance and helpful tips.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.9', 'Each step is carefully crafted to ensure your cooking success, with timing, temperature, and technique guidance.') : 'Each step is carefully crafted to ensure your cooking success, with timing, temperature, and technique guidance.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.10', 'Visual Guidance') : 'Visual Guidance'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.11', 'Cooking Tips') : 'Cooking Tips'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.12', 'Success Guaranteed') : 'Success Guaranteed'}
        </span>
      </div>
    </div>,
    <div key="desc-5" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('botAndRecipes.headers.5', 'Smart Substitutions') : 'Smart Substitutions'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.10', 'Missing an ingredient? No problem! Our AI suggests perfect substitutions based on what you have available.') : 'Missing an ingredient? No problem! Our AI suggests perfect substitutions based on what you have available.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.11', 'Get creative alternatives that maintain the same flavor profile and cooking properties, so your dish turns out perfectly every time.') : 'Get creative alternatives that maintain the same flavor profile and cooking properties, so your dish turns out perfectly every time.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.13', 'AI-Powered') : 'AI-Powered'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.14', 'Flavor Matching') : 'Flavor Matching'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.15', 'Flexible Cooking') : 'Flexible Cooking'}
        </span>
      </div>
    </div>,
    <div key="desc-6" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('botAndRecipes.headers.6', 'Ingredient Management') : 'Ingredient Management'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.12', 'Keep track of what you have and what you need. Get clear notifications about unavailable ingredients.') : 'Keep track of what you have and what you need. Get clear notifications about unavailable ingredients.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('botAndRecipes.descriptions.13', 'Plan your shopping list or find alternative recipes based on your current pantry contents.') : 'Plan your shopping list or find alternative recipes based on your current pantry contents.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.16', 'Pantry Tracking') : 'Pantry Tracking'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.17', 'Smart Notifications') : 'Smart Notifications'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('botAndRecipes.tags.18', 'Shopping Lists') : 'Shopping Lists'}
        </span>
      </div>
    </div>,
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
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-melodrama-medium text-[#284139] mb-4 sm:mb-6 lg:mb-8" 
                style={{ lineHeight: '1.1', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              {isReady ? t('botAndRecipes.title', 'Discover ai.Cook') : 'Discover ai.Cook'}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#284139]/70 max-w-3xl mx-auto px-2 font-melodrama-regular leading-relaxed">
              {isReady ? t('botAndRecipes.subtitle', 'Experience the future of cooking with our AI-powered assistant') : 'Experience the future of cooking with our AI-powered assistant'}
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}