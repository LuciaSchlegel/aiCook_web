import { FadeInMotion } from "../animations/motion";

export default function LandingPage() {
    return (
        <div className="h-screen w-full bg-[#E8E4D9]">
            <FadeInMotion>
                <div
                    className="flex flex-col md:flex-row h-screen w-full bg-[#E8E4D9]"
                    style={{
                        backgroundImage: "url('/images/dusty.svg')",
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    {/* Columna izquierda: Texto */}
                    <div className="hidden md:flex flex-col justify-center items-center w-full md:w-2/3 h-3/5 md:h-full px-4 md:px-0">
                        <div
                            className="w-full h-full flex items-center justify-center bg-center md:bg-right"
                            style={{
                                backgroundImage: "url('/images/landing_text.svg')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    {/* Columna derecha: Mockups */}
                    <div className="flex flex-row md:flex-row items-center justify-center w-full md:w-1/3 h-full md:h-full gap-4 md:gap-6 px-6 md:px-6 py-8 md:py-0">
                        <img
                            src="/mockups/first.png"
                            alt="First Screen"
                            className="max-w-[280px] sm:max-w-[320px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
                        />
                        <img
                            src="/mockups/signup.png"
                            alt="Signup Screen"
                            className="hidden md:block max-w-[140px] sm:max-w-[180px] md:max-w-[260px] w-full h-auto drop-shadow-xl"
                        />
                    </div>
                </div>
            </FadeInMotion>
        </div>
    )
}