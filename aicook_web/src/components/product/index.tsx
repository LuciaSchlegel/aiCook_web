"use client"
import { FadeInMotion } from "../animations/motion";
import SwiperComponent from "../swiper";

export default function Product() {
  const slides = [
    <img
      key="adding"
      src="/mockups/adding.png"
      alt="Add Ingredient Screen"
      className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
    />,
    <img
      key="adding-det"
      src="/mockups/adding_det.png"
      alt="Add Ingredient Details Screen"
      className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
    />,
    <img
      key="cupboard"
      src="/mockups/cupboard.png"
      alt="Cupboard Screen"
      className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
    />
  ];

  const descriptions = [
    <div key="desc-1">
      <h2 className="text-xl font-bold mb-2 text-[#284139]">Add Ingredient</h2>
      <p className="text-[#284139]">Add new ingredients to your pantry quickly and easily.</p>
    </div>,
    <div key="desc-2">
      <h2 className="text-xl font-bold mb-2 text-[#284139]">Ingredient Details</h2>
      <p className="text-[#284139]">View and edit the detailed information of each ingredient, including quantity and expiration date.</p>
    </div>,
    <div key="desc-3">
      <h2 className="text-xl font-bold mb-2 text-[#284139]">Your Pantry</h2>
      <p className="text-[#284139]">View all ingredients available in your pantry and manage your inventory easily.</p>
    </div>
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full justify-center py-12 md:py-16"> {/* Quitado items-center para evitar corte del mockup */}
      <FadeInMotion>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <SwiperComponent slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  )
}