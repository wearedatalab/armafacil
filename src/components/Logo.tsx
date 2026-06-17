import { SITE } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <rect width="32" height="32" rx="8" className="fill-walnut" />
        {/* llave Allen estilizada formando una "A" */}
        <path
          d="M10 23 L16 9 L22 23"
          fill="none"
          stroke="#F7F1E7"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.6 17.5 H19.4" stroke="#E0913C" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tightest text-ink">
        {SITE.brand}
      </span>
    </span>
  );
}
