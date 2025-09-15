import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CookingBackgroundAnimation from '@/components/animations/CookingBackgroundAnimation';

export const metadata = {
  title: 'ai.Cook',
  description: 'Your personal AI-powered cooking assistant',
  icons: {
    icon: '/favicon.svg',
  },  
  keywords: ['ai.Cook', 'AI', 'Cooking', 'Recipes', 'Personalized Recipes', 'Nutritional Goals'],
  authors: [{ name: 'Lucia Schlegel', url: 'https://github.com/LuciaSchlegel' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {/* Background grain image global */}
        {/* <div
          style={{ backgroundImage: "url('/images/back.svg')", pointerEvents: 'none', opacity: 0.2 }}
          className="fixed inset-0 z-0 bg-center w-screen h-screen"
          aria-hidden="true"
        /> */}
        <CookingBackgroundAnimation />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}