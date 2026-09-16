import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF3E7",
        ink: "#2E2620",
        coral: {
          DEFAULT: "#F76C5E",
          dark: "#E1543F",
        },
        leaf: {
          DEFAULT: "#4F9D69",
          dark: "#3A7B4F",
        },
        sun: "#F6C445",
        sky: "#6FB8D9",
        plum: "#8B5A8C",
      },
      fontFamily: {
        display: ["var(--font-fredoka)"],
        hand: ["var(--font-caveat)"],
        body: ["var(--font-nunito)"],
      },
      boxShadow: {
        card: "0 6px 0 rgba(46, 38, 32, 0.9)",
        pop: "0 10px 30px rgba(46, 38, 32, 0.25)",
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 43% 47% 53% 57%",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 5s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
