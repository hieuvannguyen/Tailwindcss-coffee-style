/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          100: "#eee4dc",
          200: "#ddcaba",
          300: "#ccaf98",
          400: "#bb9576",
          500: "#aa7b54",
          600: "#886243",
          700: "#664932",
          800: "#443121",
          900: "#221810",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown .4s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
