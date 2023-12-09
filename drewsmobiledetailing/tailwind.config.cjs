/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat",
    },
    extend: {
      colors: {
        primary: "#00b8ff",
        primaryText: "#6DAFFE",
        Solitude: "#EDF6FF",
        gray: "#4B4B4C",
      },
      animation: {
        slide: "slide 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%,100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-120%)" },
        },
      },
      backgroundImage: {
        "hero-background": "url('./assets/heroBackground.avif')",
        "sky-background": "url('./assets/sky.avif')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
