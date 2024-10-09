/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      colors: {
        almostWhite: "#FAFAFA",
        mediumGray: "#696969",
        almostBlack: "#141414",
      },
    },
  },
  plugins: [],
};
