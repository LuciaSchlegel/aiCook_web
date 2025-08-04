import Image from "next/image";
import { FadeInMotion } from "../animations/motion";

export default function LandingPage() {
  return (
    <div className="h-screen w-full bg-[#E8E4D9]">
      <FadeInMotion>
        <div className="flex flex-col md:flex-row h-screen w-full bg-[#E8E4D9]">
          {/* Columna izquierda: Texto */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-3/5 md:h-full px-4 md:px-0 relative">
            <div className="text-center relative z-20" style={{ padding: '0 10%' }}>
              <h1 
                className="font-light tracking-wide text-[#284139] leading-tight mb-4"
                style={{
                  fontFamily: 'Casta',
                  fontSize: 'clamp(2rem, 8vw, 5rem)',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.02em',
                }}
              >
                get to know ai, one recipe at a time
              </h1>
              
              <p 
                className="font-light tracking-wider text-[#284139]"
                style={{
                  fontFamily: 'Casta',
                  fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.05em',
                }}
              >
                coming this fall
              </p>
            </div>

            {/* Background con burbujas orgánicas - Manteniendo proporciones originales */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Burbuja 1 - Círculo grande */}
              <div className="absolute top-2/5 left-1/5 w-70 h-70 bg-gradient-to-r from-orange-300/40 to-amber-300/40 rounded-full blur-xl"></div>
              {/* Burbuja 2 - Elipse */}
              <div className="absolute bottom-2/5 right-1/3 w-48 h-48 bg-gradient-to-r from-yellow-300/30 to-orange-200/30 rounded-full blur-lg"></div>
              {/* Burbuja 3 - Forma irregular */}
              <div className="absolute top-1/3 right-1/3 w-36 h-28 bg-gradient-to-br from-amber-200/50 to-orange-200/30 rounded-[50%_20%_80%_30%] blur-md"></div>
              {/* Burbuja 4 - Pequeña */}
              <div className="absolute bottom-1/2 left-2/5 w-20 h-20 bg-gradient-to-r from-yellow-200/40 to-orange-200/30 rounded-full blur-lg"></div>
              {/* Burbuja 5 - Extra */}
              <div className="absolute top-2/5 left-1/2 w-16 h-16 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-md"></div>
              {/* Burbuja 6 - Verde acuoso */}
              <div className="absolute top-1/4 right-1/5 w-38 h-48 bg-gradient-to-r from-teal-200/40 to-cyan-200/40 rounded-full blur-lg"></div>
              {/* Burbuja 7 - Azul acuoso */}
              <div className="absolute bottom-1/3 left-1/2 w-24 h-28 bg-gradient-to-r from-blue-300/30 to-cyan-200/30 rounded-full blur-md"></div>
              {/* Forma orgánica 8 - Gota */}
              <div className="absolute top-1/3 left-2/5 w-32 h-40 bg-gradient-to-r from-emerald-200/35 to-teal-100/35 rounded-[50%_50%_50%_50%_/_60%_40%_60%_40%] blur-lg"></div>
              {/* Forma orgánica 9 - Ameba */}
              <div className="absolute bottom-2/4 right-1/4 w-36 h-32 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-md"></div>
            </div>
          </div>

          {/* Columna derecha: Mockups - Manteniendo proporciones originales */}
          <div className="flex flex-row md:flex-row items-center justify-center w-full md:w-1/2 h-2/5 md:h-full gap-4 md:gap-6 px-6 md:px-6 py-4 md:py-0">
            <div className="relative">
              <Image
                src="/mockups/first.png"
                alt="First Screen"
                className="max-w-[240px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] w-full h-auto drop-shadow-xl"
                width={320}
                height={640}
                priority
              />
            </div>
            <div className="relative hidden sm:block">
              <Image
                src="/mockups/signup.png"
                alt="Signup Screen"
                className="max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[280px] w-full h-auto drop-shadow-xl"
                width={240}
                height={480}
              />
            </div>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
}