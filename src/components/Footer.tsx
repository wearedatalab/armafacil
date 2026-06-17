"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";

export function Footer() {
  const { dict } = useLang();

  return (
    <footer className="mt-24 border-t border-sand bg-paper">
      <div className="edge grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm font-display text-xl leading-snug text-ink">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h2 className="kicker">{dict.footer.nav}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-stone hover:text-ink">
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/tutoriales" className="text-stone hover:text-ink">
                {dict.nav.tutorials}
              </Link>
            </li>
            <li>
              <Link href="/preguntas" className="text-stone hover:text-ink">
                {dict.nav.faq}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="kicker">{dict.footer.contact}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink(`Hola ${SITE.brand}!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-stone hover:text-ink">
                {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <p className="kicker mb-2">{dict.footer.langLabel}</p>
            <LangToggle />
          </div>
        </div>
      </div>

      <div className="border-t border-sand">
        <div className="edge flex flex-col items-center justify-between gap-2 py-5 text-xs text-stone sm:flex-row">
          <p>
            © {SITE.year} {SITE.brand}. {dict.footer.rights}
          </p>
          <p className="font-mono uppercase tracking-wider">Hecho con cuidado · Made with care</p>
        </div>
      </div>
    </footer>
  );
}
