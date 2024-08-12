/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    colors: {
      PrimaryColor: "#060606",
      SecondaryColor: "#1a1a1a",
      colorWhite: "#ffffff",
      hoverColor: "#ff9601",
      colorSelect: "#303030",
      ringSelect: "#66afe9",
      blOpacity: "rgba(0, 0, 0, 0.6)",
    },
    backgroundImage: {
      "custom-gradient": "linear-gradient(to right, #c43126, #eec334)",
      "custom-playbtn-gradient":
        "linear-gradient(to right, rgba(196, 49, 38, 0.5), rgba(238, 195, 52, 0.5))",
    },
    extend: {
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(3)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "play-scale-in": "scaleIn 0.20s ease-out forwards",
        "play-scale-out": "scaleOut 0.5s ease-in forwards", // If you have a reverse animation
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.3xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
