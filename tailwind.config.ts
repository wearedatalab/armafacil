import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta ArmaFácil — cálida, artesanal, de confianza
        ink: "#211B14", // texto principal
        cream: "#F7F1E7", // fondo cálido
        paper: "#FFFFFF",
        walnut: "#8A5A3B", // marca / madera nogal
        honey: "#E0913C", // acento cálido (CTAs, energía)
        forest: "#2F7D5B", // acento funcional (éxito, herramientas, "fácil")
        clay: "#C75D43", // acento de alerta cálido
        sand: "#EBE2D2", // superficies/bordes suaves
        stone: "#6F6457", // texto secundario
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        edge: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(33,27,20,0.04), 0 8px 24px rgba(33,27,20,0.06)",
        lift: "0 2px 4px rgba(33,27,20,0.05), 0 18px 40px rgba(33,27,20,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
