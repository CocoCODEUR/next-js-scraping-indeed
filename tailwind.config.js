/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AppGreen: "#327361",
        AppOrange: "#D98014",
        AppYellow: "#D9A25F",
        AppWhite: "#F2F2F2",
        AppBlack: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
