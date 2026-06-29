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
        // Paleta de marca — verde + azul marino del logo (la "W")
        ink: "#1E1A4D", // azul marino: texto principal y secciones oscuras
        cream: "#F4F7F4", // fondo claro, neutro frío
        paper: "#FFFFFF",
        // Tokens conservados por compatibilidad; remapeados a los 2 colores de marca:
        walnut: "#25A23D", // VERDE de marca (acción principal, enlaces, acentos)
        forest: "#1E8C36", // verde más profundo (WhatsApp / ayuda / "fácil")
        honey: "#1E1A4D", // azul marino (acento secundario)
        clay: "#1E1A4D", // azul marino (acento)
        sand: "#E2E8E2", // bordes / superficies suaves
        stone: "#586159", // texto secundario
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
        soft: "0 1px 2px rgba(30,26,77,0.05), 0 8px 24px rgba(30,26,77,0.07)",
        lift: "0 2px 4px rgba(30,26,77,0.06), 0 18px 40px rgba(30,26,77,0.12)",
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
