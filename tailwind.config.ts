import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        parchment: "var(--color-parchment)",
        accent: "var(--color-accent)",
        section: "var(--color-section)",
        charcoal: "var(--color-charcoal)",
        surface: "var(--color-surface)",
        brand: {
          teal: "#1A6B7C",
          amber: "#1A6B7C",
          ink: "#0D1E28",
          sand: "#D8C6A4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 17, 17, 0.08)",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
