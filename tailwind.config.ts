import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
        violet: {
          DEFAULT: "var(--violet)",
          soft: "var(--violet-soft)",
          strong: "var(--violet-strong)",
        },
        lilac: "var(--lilac)",
        bone: "var(--bone)",
        muted: "var(--muted)",
        dim: "var(--dim)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle, var(--violet-glow) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(6px,-14px,0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-8px,10px,0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        scan: "scan 3.5s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
