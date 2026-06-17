"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ChevronIcon } from "./Icons";

export function FaqItem({ faq, defaultOpen = false }: { faq: Faq; defaultOpen?: boolean }) {
  const { t } = useLang();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-base font-semibold text-ink sm:text-lg">
          {t(faq.q)}
        </span>
        <ChevronIcon
          className={`h-5 w-5 shrink-0 text-walnut transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-stone sm:text-base">
            {t(faq.a)}
          </p>
        </div>
      </div>
    </div>
  );
}
