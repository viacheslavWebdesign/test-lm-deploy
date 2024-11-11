/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-.02em",
      },
      fontSize: {
        base: ".938rem",
      },
      fontFamily: {
        sans: ["TTInterfaces", "sans-serif"],
        machina: ["Neue Machina", "sans-serif"],
      },
    },
  },
  plugins: [],
};
