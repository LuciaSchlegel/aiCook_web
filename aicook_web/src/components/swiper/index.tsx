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
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-stretch justify-center gap-6 lg:gap-12 px-4 lg:px-6 py-12 md:py-20 overflow-visible"> {/* items-stretch y py generoso para evitar cortes */}
      {/* Carousel Container */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center relative"> {/* overflow-hidden restaurado */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full elegant-swiper overflow-hidden" // overflow-hidden para que no se vean los slides vecinos
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="overflow-hidden"> {/* overflow-hidden en cada slide */}
              <div 
                className={`flex items-center justify-center transition-all duration-700 ease-out p-4 md:p-6 ${
                  activeIndex === idx 
                    ? 'scale-100 opacity-100' 
                    : 'scale-95 opacity-60'
                }`}
              >
                <div className="relative group">
                  <div className="transform transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-105 sm:group-hover:scale-102" /* Menor scale en mobile opcional */>
                    {slide}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#284139]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description Container */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col items-start justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-[#284139]/10 min-h-[180px] lg:min-h-[220px] w-full transition-all duration-500 ease-out hover:shadow-xl hover:bg-white/90">
          <div className="transition-all duration-500 ease-out">
            {descriptions[activeIndex]}
          </div>
          {/* Paginación personalizada, ahora en la card de descripción */}
          <div className="flex space-x-3 mt-6 w-full justify-start">
            {descriptions.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-500 ease-out ${
                  idx === activeIndex 
                    ? 'bg-[#284139] w-8' 
                    : 'bg-[#284139]/20 w-3 hover:bg-[#284139]/30'
                }`}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .elegant-swiper {
          --swiper-navigation-color: #284139;
          --swiper-pagination-color: #284139;
          --swiper-navigation-size: 18px;
          --swiper-pagination-bullet-size: 8px;
          --swiper-pagination-bullet-horizontal-gap: 6px;
        }
        
        .elegant-swiper .swiper-button-next,
        .elegant-swiper .swiper-button-prev {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          box-shadow: 0 2px 12px rgba(40, 65, 57, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(40, 65, 57, 0.1);
        }
        
        .elegant-swiper .swiper-button-next:after,
        .elegant-swiper .swiper-button-prev:after {
          color: #284139;
          font-weight: bold;
        }
        
        .elegant-swiper .swiper-button-next:hover,
        .elegant-swiper .swiper-button-prev:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(40, 65, 57, 0.15);
          background: rgba(255, 255, 255, 1);
        }
        
        .elegant-swiper .swiper-button-next:active,
        .elegant-swiper .swiper-button-prev:active {
          transform: scale(0.95);
        }
        
        /* Eliminamos reglas de paginación Swiper, ahora es paginación custom */
        .elegant-swiper .swiper-pagination {
          display: none;
        }
        
        @media (max-width: 768px) {
          .elegant-swiper .swiper-button-next,
          .elegant-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
            --swiper-navigation-size: 16px;
          }
          /* Ajuste responsivo: bullets más cerca y padding menor */
          .elegant-swiper .swiper-pagination {
            bottom: -28px;
          }
        }
        /* Opcional: en mobile, usar aspect-ratio para mockup más cuadrado */
        @media (max-width: 640px) {
          .elegant-swiper {
            aspect-ratio: 3/4;
          }
        }
      `}</style>
    </div>
  );
}