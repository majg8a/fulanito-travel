const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        tourist: {
          "0%": {},
          "50%": {
            transform: "translate(0,0%)",
          },
          "75%": {
            transform: "translate(20vw,-100%) rotate(180deg)",
          },
          "100%": { transform: "translate(calc(50vw - 25%), 0% )" },
        },
        plane: {
          "0%": {
            transform: "translate(-100%,-40%)",
          },
          "50%": {
            transform: "translate(-50%,-40%)",
          },
          "75%": {
            transform: "translateY(-150%)",
          },
          "100%": { transform: "translate(300%, -150% )" },
        },
        place: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },

        fulanito: {
          "0%": { opacity: 0 },
          "75%": {
            transform: "translateY(-100vh) rotate(180deg)",
            opacity: 0,
          },
          "100%": { transform: "rotate(30deg)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
