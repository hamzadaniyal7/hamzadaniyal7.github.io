import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        sage: {
          50: "#f3f6f1",
          100: "#e3ebde",
          200: "#c8d6c0",
          300: "#a4b89a",
          400: "#7a8a70",
          500: "#5c6b54",
          600: "#475441",
          700: "#3a4537",
          800: "#30382e",
          900: "#272d26",
          950: "#141812",
        },
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          subtle: "rgb(var(--bg-subtle) / <alpha-value>)",
          muted: "rgb(var(--bg-muted) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          strong: "rgb(var(--border-strong) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(92,107,84,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(92,107,84,0.08) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(164,184,154,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(164,184,154,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(122,138,112,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(122,138,112,0.4)",
        "glow-strong": "0 0 80px -10px rgba(92,107,84,0.55)",
        soft: "0 4px 30px rgba(0,0,0,0.04)",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-up": "fade-up 0.7s ease-out",
        "blob-1": "blob 18s ease-in-out infinite",
        "blob-2": "blob 22s ease-in-out infinite reverse",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
