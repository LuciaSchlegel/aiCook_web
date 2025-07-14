import React from 'react';
import './globals.css';
import Header from '@/components/header/Header';

export const metadata = {
  title: 'AI Cook',
  description: 'Your personal AI-powered cooking assistant',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}