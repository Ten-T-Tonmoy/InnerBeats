// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e3e3fa",
        footer: "#313133",
        secondary: "#10b2e3",
      },

      fontFamily: {
        yellowtail: ['"Yellowtail"', "cursive"],
        dancing: ['"Dancing Script"', "cursive"],
        great: ['"Great Vibes"', "cursive"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
