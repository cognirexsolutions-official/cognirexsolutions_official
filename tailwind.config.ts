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
        background: "#FFFFFF",
        foreground: "#1F1B2E",
        brand: {
          bg: "#F8F7FC",
          violet: {
            DEFAULT: "#5B21B6",
            secondary: "#6D28D9",
            dark: "#4C1D95",
            light: "#EDE9FE",
            subtle: "#F5F3FF",
          },
          // Backward-compatible alias for existing styles
          purple: {
            DEFAULT: "#5B21B6",
            hover: "#6D28D9",
            light: "#EDE9FE",
            subtle: "#F5F3FF",
          },
          amber: {
            DEFAULT: "#F59E0B",
            hover: "#D97706",
            light: "#FBBF24",
          },
          yellow: {
            DEFAULT: "#F59E0B",
            hover: "#D97706",
            active: "#B45309",
          },
          charcoal: "#1F1B2E",
          text: "#1F1B2E",
          muted: "#64748B",
          subtle: "#94A3B8",
          white: "#FFFFFF",
          border: "#E2E8F0",
          dark: "#0F172A",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(15, 23, 42, 0.04)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 14px 34px -4px rgba(91, 33, 182, 0.12)",
        dropdown: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
