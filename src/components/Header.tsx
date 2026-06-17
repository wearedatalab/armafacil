"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { WhatsAppIcon } from "./Icons";

export function Header() {
  const { dict } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/tutoriales", label: dict.nav.tutorials },
    { href: "/preguntas", label: dict.nav.faq },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/70 bg-cream/95">
      <div className="edge flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={SITE.brand} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-paper text-ink shadow-soft"
                  : "text-stone hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle className="hidden sm:inline-flex" />
          <a
            href={whatsappLink(`Hola ${SITE.brand}, necesito ayuda con un armado.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-ink md:inline-flex md:items-center md:gap-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {dict.nav.help}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-sand bg-paper md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-sand bg-cream md:hidden">
          <nav className="edge flex flex-col gap-1 py-3" aria-label="Móvil">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(l.href) ? "bg-paper text-ink shadow-soft" : "text-stone"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 px-1">
              <LangToggle />
              <a
                href={whatsappLink(`Hola ${SITE.brand}, necesito ayuda con un armado.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {dict.nav.help}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
