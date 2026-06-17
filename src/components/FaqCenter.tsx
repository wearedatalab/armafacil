"use client";

import { useMemo, useState } from "react";
import { GENERAL_FAQS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { FaqItem } from "./FaqItem";
import { SearchIcon, WhatsAppIcon } from "./Icons";

export function FaqCenter() {
  const { dict, t, lang } = useLang();
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GENERAL_FAQS;
    return GENERAL_FAQS.map((g) => ({
      ...g,
      items: g.items.filter(
        (it) => t(it.q).toLowerCase().includes(q) || t(it.a).toLowerCase().includes(q)
      ),
    })).filter((g) => g.items.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, lang]);

  return (
    <div className="edge py-12 lg:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{dict.faq.kicker}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.06] tracking-tightest text-ink sm:text-5xl">
          {dict.faq.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">{dict.faq.subtitle}</p>
      </header>

      <div className="relative mt-8 max-w-md">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.faq.searchPh}
          aria-label={dict.faq.searchPh}
          className="w-full rounded-full border border-sand bg-paper py-3 pl-12 pr-4 text-sm text-ink placeholder:text-stone focus:border-walnut"
        />
      </div>

      {groups.length === 0 ? (
        <p className="mt-16 text-center text-stone">{dict.faq.empty}</p>
      ) : (
        <div className="mt-10 space-y-12">
          {groups.map((g) => (
            <section key={t(g.topic)}>
              <h2 className="mb-4 font-display text-xl font-semibold text-walnut">
                {t(g.topic)}
              </h2>
              <div className="space-y-3">
                {g.items.map((it, i) => (
                  <FaqItem key={i} faq={it} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Aún con dudas */}
      <section className="mt-16">
        <div className="card flex flex-col items-start gap-5 bg-walnut/[0.06] p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">{dict.faq.stillTitle}</h2>
            <p className="mt-1.5 max-w-lg text-sm text-stone">{dict.faq.stillBody}</p>
          </div>
          <a
            href={whatsappLink(`Hola ${SITE.brand}, tengo una pregunta sobre un armado.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-honey"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {dict.faq.stillCta}
          </a>
        </div>
      </section>
    </div>
  );
}
