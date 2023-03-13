/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      colors: {
        accent: {
          DEFAULT: "#4d72ee",
          dark: "#6586f1",
        },
      },
    },
  },
  plugins: [],
};
