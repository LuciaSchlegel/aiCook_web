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
                    <div className="flex flex-col justify-center items-center w-full md:w-2/4 h-1/2 md:h-full">
                        <div
                            className="w-full h-full flex items-center justify-center md:block bg-right"
                            style={{
                                backgroundImage: "url('/images/landing_text.svg')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                marginBottom: '10em',
                            }}
                        />
                    </div>
                    {/* Columna derecha: Mockups */}
                    <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/3 h-1/2 md:h-full gap-4 md:gap-6 px-2 md:px-6 py-4 md:py-0">
                        <img
                            src="/mockups/first.png"
                            alt="First Screen"
                            className="max-w-[160px] sm:max-w-[220px] md:max-w-[300px] w-full h-auto drop-shadow-xl"
                        />
                        <img
                            src="/mockups/signup.png"
                            alt="Signup Screen"
                            className="max-w-[140px] sm:max-w-[180px] md:max-w-[260px] w-full h-auto drop-shadow-xl"
                        />
                    </div>
                </div>
            </FadeInMotion>
        </div>
    )
}