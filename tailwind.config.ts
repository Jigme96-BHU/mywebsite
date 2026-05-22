import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#1e4637",
          mid: "#2c5f4a",
          light: "#e8f0ec",
        },
        amber: {
          DEFAULT: "#f5a623",
          light: "#fff4e0",
        },
        cream: "#faf8f3",
        ink: {
          DEFAULT: "#1a1a18",
          soft: "#4a4a44",
          muted: "#8a8a80",
        },
      },
      borderRadius: {
        xl: "12px",
        "2xl": "20px",
      },
      keyframes: {
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "none" },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease",
      },
    },
  },
  plugins: [],
};
export default config;
