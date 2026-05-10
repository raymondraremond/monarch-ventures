import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Monarch's Mega Resources — Lagos, Nigeria" },
      { name: "description", content: "Reach Monarch's Mega Resources Nigeria Limited. Lagos office, WhatsApp, email, and contact form." },
      { property: "og:title", content: "Contact — Monarch's" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete the required fields.");
      return;
    }
    console.log("Contact:", form);
    toast.success("Message sent. We'll respond within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="container-luxe pt-12 pb-16">
        <SectionHeading
          eyebrow="Contact"
          title={<>Begin a <span className="text-gradient-gold italic">conversation</span>.</>}
          description="Whether it's a single piece or a multi-year contract — our concierge is ready."
        />
      </section>

      <section className="container-luxe pb-24 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-6">
          {[
            { Icon: MapPin, label: SITE.headquarters.label, value: SITE.headquarters.value, href: `https://maps.google.com/?q=${encodeURIComponent(SITE.headquarters.value)}` },
            ...SITE.branches.map((b) => ({
              Icon: MapPin,
              label: b.label,
              value: b.value,
              href: `https://maps.google.com/?q=${encodeURIComponent(b.value)}`,
            })),
            { Icon: Phone, label: "Call", value: SITE.phone, href: `tel:${SITE.phone}` },
            { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { Icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: `https://wa.me/${SITE.whatsapp}` },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card card-hover"
            >
              <div className="grid place-items-center w-12 h-12 rounded-full bg-gradient-gold text-primary-foreground shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-1">{label}</div>
                <div className="text-foreground/90 break-words">{value}</div>
              </div>
            </a>
          ))}

          <div className="rounded-2xl overflow-hidden border border-border aspect-[16/10]">
            <iframe
              title="Office map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.headquarters.value)}&output=embed`}
              className="w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8 md:p-12 space-y-6 self-start">
          <h2 className="font-display text-3xl">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name *" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
            <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
          </div>
          <Field label="Subject" value={form.subject} onChange={(v) => setForm((f) => ({ ...f, subject: v }))} />
          <label className="block">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 block">Message *</span>
            <textarea
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={6}
              className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] shadow-gold"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 block">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm"
      />
    </label>
  );
}
