import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#27A844",
          "green-deep": "#147331",
          "green-forest": "#0F5127",
          "green-light": "#EAF6EA",
          "green-muted": "#6E9D72",
          charcoal: "#171917",
          "soft-black": "#0D0F0D",
          white: "#FFFFFF",
          "off-white": "#F8FAF5",
          gold: "#D4A63C",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-serif)", "DM Serif Display", "Playfair Display", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "Inter", "system-ui", "sans-serif"],
        devanagari: ["var(--font-noto-devanagari)", "Noto Sans Devanagari", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        badge: "6px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(23, 25, 23, 0.05)",
        card: "0 4px 20px -2px rgba(23, 25, 23, 0.08)",
        hover: "0 10px 25px -4px rgba(39, 168, 68, 0.15)",
        header: "0 2px 15px rgba(13, 15, 13, 0.06)",
        modal: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.35s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
