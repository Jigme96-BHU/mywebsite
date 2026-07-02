import type { Config } from "tailwindcss";

// ─── Groundwork design tokens ────────────────────────────
// ink     — green-cast near-black (type, dark sections)
// paper   — warm off-white (page ground)
// survey  — fluoro flagging-tape orange, the single accent.
//           Graphic marks + display type only; AA on ink,
//           never body text on paper.
// All muted/hairline values derive from ink|paper alphas.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12130F",
        paper: "#EDEAE3",
        survey: "#FF4D00",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "inout-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      screens: {
        pointer: { raw: "(pointer: fine)" },
      },
    },
  },
  plugins: [],
};
export default config;
