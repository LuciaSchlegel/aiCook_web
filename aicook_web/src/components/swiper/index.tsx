"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode, useState } from 'react';

interface SwiperComponentProps {
  slides: ReactNode[];
  descriptions: ReactNode[];
}

export default function SwiperComponent({ slides, descriptions }: SwiperComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-stretch justify-center gap-4 xs:gap-6 sm:gap-8 lg:gap-16 px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 overflow-visible">
      {/* Carousel Container */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center relative min-h-[320px] xs:min-h-[380px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#284139]/5 to-transparent rounded-3xl blur-3xl"></div>
        
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          allowTouchMove={true}
          modules={[Navigation, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full swiper-container overflow-hidden relative z-10"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="overflow-hidden">
              <div className="flex items-center justify-center p-4 md:p-6">
                <div className="relative group">
                    {slide}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description Container */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col items-start justify-center">
        <div className="relative bg-white/90 backdrop-blur-md rounded-2xl xs:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-[#284139]/10 min-h-[200px] xs:min-h-[230px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] w-full transition-all duration-500 ease-out hover:shadow-3xl hover:bg-white/95 group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#284139]/20 via-[#284139]/40 to-[#284139]/20 rounded-t-3xl"></div>
          
          <div className="relative z-10">
            {descriptions[activeIndex]}
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 w-full">
            <div className="flex space-x-2 sm:space-x-3">
              {descriptions.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                    idx === activeIndex 
                      ? 'bg-[#284139] w-10' 
                      : 'bg-[#284139]/20 w-4 hover:bg-[#284139]/40 hover:w-6'
                  }`}
                  onClick={() => {
                    // Simple pagination - just update the active index
                    setActiveIndex(idx);
                  }}
                />
              ))}
            </div>
            
            <div className="text-sm text-[#284139]/60 font-medium">
              {activeIndex + 1} / {descriptions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}