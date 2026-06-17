/**
 * Configuración global de la marca.
 * Cambia estos valores para adaptarlo a tu empresa real.
 */
export const SITE = {
  brand: "ArmaFácil",
  // Teléfono en formato internacional, sin "+" ni espacios (para enlaces de WhatsApp).
  whatsapp: "573000000000",
  email: "hola@armafacil.co",
  // Año para el pie de página.
  year: 2026,
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
