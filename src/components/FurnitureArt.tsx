import type { Accent } from "@/lib/content";

/**
 * Ilustración tipo "plano" para cada mueble (sin imágenes externas).
 * Estilo de blueprint cálido, coherente con el tema educativo/técnico.
 */

// Acentos de marca: verde y azul marino (los muebles alternan entre ambos).
const ACCENT_HEX: Record<Accent, { bg: string; line: string }> = {
  walnut: { bg: "#E3F1E6", line: "#1E8C36" }, // verde
  forest: { bg: "#E3F1E6", line: "#1E8C36" }, // verde
  honey: { bg: "#E5E4F0", line: "#2A2568" }, // azul marino
  clay: { bg: "#E5E4F0", line: "#2A2568" }, // azul marino
};

function Shape({ slug }: { slug: string }) {
  switch (slug) {
    case "closet-nordico":
      return (
        <g>
          <rect x="26" y="20" width="68" height="80" rx="2" />
          <line x1="60" y1="20" x2="60" y2="100" />
          <line x1="43" y1="52" x2="43" y2="68" />
          <line x1="77" y1="52" x2="77" y2="68" />
          <rect x="30" y="78" width="26" height="18" />
          <rect x="64" y="78" width="26" height="18" />
          <line x1="26" y1="100" x2="20" y2="108" />
          <line x1="94" y1="100" x2="100" y2="108" />
        </g>
      );
    case "cama-tarima":
      return (
        <g>
          <rect x="18" y="40" width="84" height="44" rx="2" />
          <rect x="22" y="26" width="76" height="16" rx="2" />
          <line x1="34" y1="46" x2="34" y2="78" />
          <line x1="48" y1="46" x2="48" y2="78" />
          <line x1="62" y1="46" x2="62" y2="78" />
          <line x1="76" y1="46" x2="76" y2="78" />
          <line x1="90" y1="46" x2="90" y2="78" />
          <line x1="22" y1="84" x2="22" y2="96" />
          <line x1="98" y1="84" x2="98" y2="96" />
        </g>
      );
    case "escritorio-l":
      return (
        <g>
          <path d="M20 44 H100 V60 H56 V96 H20 Z" />
          <line x1="24" y1="60" x2="24" y2="96" />
          <line x1="52" y1="60" x2="52" y2="96" />
          <line x1="92" y1="60" x2="92" y2="80" />
          <line x1="68" y1="60" x2="68" y2="80" />
          <rect x="60" y="48" width="34" height="8" />
        </g>
      );
    case "biblioteca-5":
      return (
        <g>
          <rect x="34" y="14" width="52" height="92" rx="2" />
          <line x1="34" y1="32" x2="86" y2="32" />
          <line x1="34" y1="50" x2="86" y2="50" />
          <line x1="34" y1="68" x2="86" y2="68" />
          <line x1="34" y1="86" x2="86" y2="86" />
          <line x1="44" y1="18" x2="44" y2="28" />
          <line x1="50" y1="36" x2="50" y2="46" />
          <line x1="70" y1="54" x2="70" y2="64" />
        </g>
      );
    case "mesa-comedor":
      return (
        <g>
          <rect x="18" y="40" width="84" height="12" rx="2" />
          <line x1="26" y1="52" x2="26" y2="92" />
          <line x1="94" y1="52" x2="94" y2="92" />
          <line x1="26" y1="62" x2="94" y2="62" />
          <ellipse cx="60" cy="34" rx="18" ry="5" />
        </g>
      );
    case "comoda-6":
      return (
        <g>
          <rect x="28" y="24" width="64" height="76" rx="2" />
          <line x1="60" y1="24" x2="60" y2="76" />
          <line x1="28" y1="42" x2="92" y2="42" />
          <line x1="28" y1="60" x2="92" y2="60" />
          <line x1="28" y1="76" x2="92" y2="76" />
          <circle cx="44" cy="33" r="2" />
          <circle cx="76" cy="33" r="2" />
          <circle cx="44" cy="51" r="2" />
          <circle cx="76" cy="51" r="2" />
          <line x1="28" y1="100" x2="22" y2="108" />
          <line x1="92" y1="100" x2="98" y2="108" />
        </g>
      );
    default:
      return <rect x="28" y="28" width="64" height="64" rx="2" />;
  }
}

export function FurnitureArt({
  slug,
  accent,
  className = "",
}: {
  slug: string;
  accent: Accent;
  className?: string;
}) {
  const c = ACCENT_HEX[accent];
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="120" height="120" fill={c.bg} />
      {/* retícula de plano */}
      <g stroke={c.line} strokeOpacity="0.12" strokeWidth="0.5">
        {[12, 24, 36, 48, 60, 72, 84, 96, 108].map((n) => (
          <line key={`v${n}`} x1={n} y1="0" x2={n} y2="120" />
        ))}
        {[12, 24, 36, 48, 60, 72, 84, 96, 108].map((n) => (
          <line key={`h${n}`} x1="0" y1={n} x2="120" y2={n} />
        ))}
      </g>
      <g
        fill="none"
        stroke={c.line}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Shape slug={slug} />
      </g>
    </svg>
  );
}
