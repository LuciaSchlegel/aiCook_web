"use client"
import { FadeInMotion } from "../animations/motion"
import SwiperComponent from "../swiper";

export default function BotAndRecipes() {
    const slides = [
        <img
            src="/mockups/ai_bot.png"
            alt="AI Bot Screen"
            className="max-w-[160px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
        />,
        <img
            src="/mockups/recipes.png"
            alt="Recipes Screen"
            className="max-w-[140px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
        />,
        <img
            src="/mockups/recipe_card.png"
            alt="Recipe Card Screen"
            className="max-w-[140px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
        />
    ];
    const descriptions = [
        <>
            <h2 className="text-xl font-bold mb-2 text-[#284139]">AI Bot</h2>
            <p className="text-[#284139]">Interactúa con nuestro bot inteligente para obtener recomendaciones de recetas personalizadas según tus ingredientes.</p>
        </>,
        <>
            <h2 className="text-xl font-bold mb-2 text-[#284139]">Recetas</h2>
            <p className="text-[#284139]">Explora una variedad de recetas sugeridas y encuentra inspiración para tus próximas comidas.</p>
        </>,
        <>
            <h2 className="text-xl font-bold mb-2 text-[#284139]">Tarjeta de Receta</h2>
            <p className="text-[#284139]">Consulta los detalles de cada receta, incluyendo ingredientes, pasos y consejos útiles.</p>
        </>
    ];
    return (
        <div className="flex flex-col md:flex-row h-screen w-full justify-center items-center bg-[#E8E4D9]"
            style={{
                backgroundImage: "url('/images/dusty.svg')",
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <FadeInMotion>
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-full h-1/2 md:h-full gap-4 md:gap-6 px-2 md:px-6 py-4 md:py-0 min-h-[400px]">
                    <SwiperComponent slides={slides} descriptions={descriptions} />
                </div>
            </FadeInMotion>
        </div>
    )
}