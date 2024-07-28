/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "420": "420px"
      },
      height: {
        "34": "34px"
      },
      fontFamily: {
        'nunito': ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        backdrop: "#121212",
        primary: "#1db954",
        primary2: "#1ed760",
        active: "#282828",
        link: "#b3b3b3",
        footer: "#181818",
        highlight: "#1a1a1a",
        button: "#2a2a2a",
        buttonHover: "#333333",
        lightHover: "#3E3E3E"
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}

