const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        gray: colors.gray,
        "gray-1000": "#121212",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": { maxWidth: "520px" },
          "@screen md": { maxWidth: "640px" },
          "@screen lg": { maxWidth: "768px" },
        },
      });
    },
  ],
};
