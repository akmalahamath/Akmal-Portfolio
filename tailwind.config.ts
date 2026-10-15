import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#020B14",
        "background-darker": "#01070D",
        "background-card": "#04131F",
        "navy-depth": "#061A2B",
        cyan: {
          glow: "#00F0FF",
          accent: "#00E5FF",
          soft: "#38BDF8",
          dark: "#005577",
        },
        purple: {
          subtle: "#8B5CF6",
          glow: "#A855F7",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.03)",
          "bg-hover": "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(0, 240, 255, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin-reverse 35s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 9s ease-in-out 3s infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "orbit-fast": "orbit 12s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 35px -5px rgba(0, 240, 255, 0.3)",
        "cyan-glow-lg": "0 0 60px -10px rgba(0, 240, 255, 0.45)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-card-hover": "0 14px 40px 0 rgba(0, 240, 255, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
