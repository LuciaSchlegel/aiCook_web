/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        background: "#284139",
        orange: "#BB6830",
        button: "#111A19",
        mutedGreen: "#809076",
        lightYellow: "#F8D794",
        mutedWhite: "#E8E4D9",
      },
      fontFamily: {
        casta: ['Casta', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}