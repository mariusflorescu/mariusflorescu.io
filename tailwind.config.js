const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./demo/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
        ibm: ["'IBM Plex Mono'", "monospace"],
      },
      colors: {
        gray: colors.neutral,
        "gray-150": "#efefef",
        "gray-1000": "#121212",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        reverseSlideUp: {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        "slide-up": "slideUp 200ms ease",
        "reverse-slide": "reverseSlideUp 200ms ease",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
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
