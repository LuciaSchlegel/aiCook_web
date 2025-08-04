"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion";
import SwiperComponent from "../swiper";

export default function Product() {
  const slides = [
    <Image
      key="adding"
      src="/mockups/adding.png"
      alt="Add Ingredient Screen"
      className="w-full h-auto drop-shadow-xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
    />,
    <Image
      key="adding-det"
      src="/mockups/adding_det.png"
      alt="Add Ingredient Details Screen"
      className="w-full h-auto drop-shadow-xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
    />,
    <Image
      key="cupboard"
      src="/mockups/cupboard.png"
      alt="Cupboard Screen"
      className="w-full h-auto drop-shadow-xl max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
    />
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#284139]">Add Ingredient</h2>
      <p className="text-sm sm:text-base md:text-lg text-[#284139] leading-relaxed">
        Add new ingredients to your pantry quickly and easily.
      </p>
    </div>,
    <div key="desc-2" className="space-y-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#284139]">Ingredient Details</h2>
      <p className="text-sm sm:text-base md:text-lg text-[#284139] leading-relaxed">
        View and edit the detailed information of each ingredient, including quantity and expiration date.
      </p>
    </div>,
    <div key="desc-3" className="space-y-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#284139]">Your Pantry</h2>
      <p className="text-sm sm:text-base md:text-lg text-[#284139] leading-relaxed">
        View all ingredients available in your pantry and manage your inventory easily.
      </p>
    </div>
  ];

  return (
    <div className="flex flex-col justify-center min-h-screen w-full py-8 sm:py-12 lg:py-16">
      <FadeInMotion>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwiperComponent slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}