module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        merri: ["Merriweather", "system-ui", "serif"],
        mulish: ["Mulish", "system-ui", "serif"],
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
