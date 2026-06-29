import { SITE } from "@/lib/site";

/**
 * Marca: la "W" del logo — dos hojas verdes y un triángulo azul marino.
 * Los colores están en línea para que el logo sea exacto a la marca.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 22"
        className="h-[1.35rem] w-9"
        aria-hidden="true"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* hoja 1 (verde) */}
        <path d="M1 2 H13 V7.5 L9 20 Z" fill="#25A23D" stroke="#25A23D" strokeWidth="1.4" />
        {/* hoja 2 (verde) */}
        <path d="M13.6 2 H25.6 V7.5 L21.6 20 Z" fill="#25A23D" stroke="#25A23D" strokeWidth="1.4" />
        {/* hoja 3 (azul marino) */}
        <path d="M26.4 2 H31 L28.7 9.6 Z" fill="#1E1A4D" stroke="#1E1A4D" strokeWidth="1.4" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tightest text-ink">
        {SITE.brand}
      </span>
    </span>
  );
}
