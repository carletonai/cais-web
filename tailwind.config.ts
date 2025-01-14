import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        smoothGlow: {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.15" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        smoothGlow: "smoothGlow 4s ease-in-out infinite",
      },
      transitionDelay: {
        "0": "0ms",
        "300": "300ms",
        "500": "500ms",
        "700": "700ms",
        "900": "900ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
