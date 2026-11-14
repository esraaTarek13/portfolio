import type { ContactValues } from "./validateContact";

export function buildWhatsAppUrl(
  number: string,
  { name, email, message }: ContactValues,
): string {
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
