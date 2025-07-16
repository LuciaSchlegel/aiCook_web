"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
    <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center gap-8 lg:gap-12">
      {/* Carousel Container */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full mockup-swiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div 
                className={`flex items-center justify-center transition-all duration-500 ease-out ${
                  activeIndex === idx 
                    ? 'scale-100 opacity-100' 
                    : 'scale-95 opacity-70'
                }`}
              >
                <div className="relative group">
                  {slide}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description Container */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col items-start justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20 min-h-[200px] lg:min-h-[240px] w-full transition-all duration-500 ease-out">
          <div className="transition-all duration-300 ease-out">
            {descriptions[activeIndex]}
          </div>
          
          {/* Progress indicator */}
          <div className="flex space-x-2 mt-6">
            {descriptions.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'bg-[#284139] w-8' 
                    : 'bg-[#284139]/30 w-4'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mockup-swiper {
          --swiper-navigation-color: #284139;
          --swiper-pagination-color: #284139;
          --swiper-navigation-size: 20px;
        }
        
        .mockup-swiper .swiper-button-next,
        .mockup-swiper .swiper-button-prev {
          background: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .mockup-swiper .swiper-button-next:hover,
        .mockup-swiper .swiper-button-prev:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .mockup-swiper .swiper-pagination-bullet {
          background: rgba(40, 65, 57, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .mockup-swiper .swiper-pagination-bullet-active {
          background: #284139;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}