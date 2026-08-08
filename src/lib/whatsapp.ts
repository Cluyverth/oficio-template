import { site } from "../config/site";

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida.
 * Ex.: https://wa.me/5511999999999?text=Ol%C3%A1%21...
 */
export function waLink(
  message: string = site.whatsappMessage,
  phone: string = site.phone,
): string {
  const url = new URL(`https://wa.me/${phone}`);
  if (message) url.searchParams.set("text", message);
  return url.toString();
}

/** Link de ligação telefônica (fallback para quem não usa WhatsApp) */
export function telLink(phone: string = site.phone): string {
  return `tel:+${phone}`;
}
