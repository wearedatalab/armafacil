"use client";

import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(`Hola ${SITE.brand}, necesito ayuda con un armado.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-forest text-cream shadow-lift transition-transform hover:scale-105 hover:bg-ink"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
