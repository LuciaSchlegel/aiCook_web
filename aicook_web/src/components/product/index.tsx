"use client"
import { FadeInMotion } from "../animations/motion";
import SwiperComponent from "../swiper";

export default function Product() {
    const slides = [
        <img
            src="/mockups/adding.png"
            alt="Add Ingredient Screen"
            className="max-w-[160px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
        />,
        <img
            src="/mockups/adding_det.png"
            alt="Add Ingredient Details Screen"
            className="max-w-[140px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
        />,
        <img
            src="/mockups/cupboard.png"
            alt="Cupboard Screen"
            className="max-w-[140px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
        />
    ];
    const descriptions = [
        <>
            <h2 className="text-xl font-bold mb-2 text-[#284139]">Agregar Ingrediente</h2>
            <p className="text-[#284139]">Pantalla para añadir nuevos ingredientes a tu despensa de manera rápida y sencilla.</p>
        </>,
        <>
            <h2 className="text-xl font-bold mb-2 text-[#284139]">Detalles del Ingrediente</h2>
            <p className="text-[#284139]">Visualiza y edita la información detallada de cada ingrediente, incluyendo cantidad y fecha de caducidad.</p>
        </>,
        <>
            <h2 className="text-xl font-bold mb-2 text-[#284139]">Tu Despensa</h2>
            <p className="text-[#284139]">Consulta todos los ingredientes disponibles en tu despensa y gestiona tu inventario fácilmente.</p>
        </>
    ];
    return (
        <FadeInMotion>
        <div className="flex flex-col md:flex-row h-screen w-full justify-center items-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-full h-1/2 md:h-full gap-4 md:gap-6 px-2 md:px-6 py-4 md:py-0">
                <SwiperComponent slides={slides} descriptions={descriptions} />
            </div>
        </div>
        </FadeInMotion>
    )
}