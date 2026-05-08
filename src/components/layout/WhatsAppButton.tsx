import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Monarch's Mega Resources, I'd like to enquire about your services."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
    </a>
  );
}
