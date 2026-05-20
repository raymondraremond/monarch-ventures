import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Check, Calendar as CalendarIcon } from "lucide-react";
import { SERVICES, SITE, type ServiceSlug } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { toast } from "sonner";

const searchSchema = z.object({
  service: z.enum(["furniture", "fishery", "piggery", "laundry"]).optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Service — Monarch's Mega Ventures" },
      { name: "description", content: "Book furniture, fishery, piggery, or laundry services online. Quick form, instant confirmation." },
      { property: "og:title", content: "Book Now — Monarch's" },
    ],
  }),
  component: BookingPage,
});

type FormState = {
  service: ServiceSlug;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  address: string;
  quantity: string;
  notes: string;
};

function BookingPage() {
  const search = Route.useSearch();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    service: (search.service as ServiceSlug) || "furniture",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    address: "",
    quantity: "1",
    notes: "",
  });

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const activeService = SERVICES.find((s) => s.slug === form.service)!;

  const buildWhatsAppUrl = () => {
    const lines = [
      `*New Booking — ${SITE.name}*`,
      ``,
      `*Service:* ${activeService.name}`,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      `*Date:* ${form.date}`,
      `*Time:* ${form.time || "Any"}`,
      `*Quantity / Size:* ${form.quantity || "—"}`,
      `*Address:* ${form.address || "—"}`,
      form.notes ? `*Notes:* ${form.notes}` : null,
    ].filter(Boolean).join("\n");
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines)}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date) {
      toast.error("Please complete the required fields.");
      return;
    }
    console.log("Booking:", form);
    setSubmitted(true);
    toast.success("Booking received — opening WhatsApp to send details.");
    // Auto-open WhatsApp with prefilled booking details
    if (typeof window !== "undefined") {
      window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
    }
  };

  if (submitted) {
    return (
      <section className="container-luxe py-32 max-w-2xl text-center">
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-gold grid place-items-center mb-8 shadow-gold">
          <Check className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Booking confirmed.</h1>
        <p className="text-muted-foreground">
          Thank you, <span className="text-foreground">{form.name}</span>. Our team will reach you on{" "}
          <span className="text-primary">{form.phone}</span> within 24 hours to finalise your{" "}
          <span className="text-primary">{activeService.name}</span> booking for {form.date}.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          If WhatsApp didn't open automatically, tap the button below to send your booking details.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-8 py-4 rounded-full text-xs uppercase tracking-[0.3em] text-white shadow-elegant"
            style={{ backgroundColor: "#25D366" }}
          >
            Send to WhatsApp
          </a>
          <a
            href="/"
            className="inline-flex px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] shadow-gold"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container-luxe pt-12 pb-12">
        <div className="text-xs uppercase tracking-[0.35em] text-primary mb-4">Booking</div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
          Reserve your <span className="text-gradient-gold italic">Monarch's</span> service.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl">
          Three simple steps. Our concierge confirms within 24 hours.
        </p>
      </section>

      <section className="container-luxe pb-24 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8 md:p-12">
          {/* Stepper */}
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center gap-3 flex-1">
                <div
                  className={`grid place-items-center w-9 h-9 rounded-full text-xs font-medium transition-colors ${
                    step >= n ? "bg-gradient-gold text-primary-foreground" : "border border-border text-muted-foreground"
                  }`}
                >
                  {n}
                </div>
                {n < 3 && <div className={`flex-1 h-px ${step > n ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-8 reveal">
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 block">
                  Choose your service
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const active = form.service === s.slug;
                    return (
                      <button
                        type="button"
                        key={s.slug}
                        onClick={() => set("service", s.slug)}
                        className={`text-left p-5 rounded-xl border transition-all ${
                          active ? "border-primary bg-primary/5 shadow-gold" : "border-border hover:border-primary/40"
                        }`}
                      >
                        <div className="font-display text-lg">{s.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{s.short}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em]"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 reveal">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name *" value={form.name} onChange={(v) => set("name", v)} />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => set("email", v)} />
                <Field label="Phone *" type="tel" value={form.phone} onChange={(v) => set("phone", v)} />
                <Field label="Quantity / size" value={form.quantity} onChange={(v) => set("quantity", v)} />
                <Field label="Preferred date *" type="date" value={form.date} onChange={(v) => set("date", v)} icon={<CalendarIcon className="w-4 h-4" />} />
                <Field label="Preferred time" type="time" value={form.time} onChange={(v) => set("time", v)} />
              </div>
              <Field label="Delivery / service address" value={form.address} onChange={(v) => set("address", v)} />
              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-border rounded-full text-xs uppercase tracking-[0.3em]">Back</button>
                <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em]">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 reveal">
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3 block">
                  Special requests
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  rows={5}
                  placeholder="Tell us anything that helps us serve you perfectly…"
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                />
              </div>

              <div className="rounded-xl border border-border bg-background/50 p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Summary</div>
                <dl className="grid sm:grid-cols-2 gap-3 text-sm">
                  <SummaryRow label="Service" value={activeService.name} />
                  <SummaryRow label="Name" value={form.name || "—"} />
                  <SummaryRow label="Date" value={form.date || "—"} />
                  <SummaryRow label="Time" value={form.time || "Any"} />
                  <SummaryRow label="Phone" value={form.phone || "—"} />
                  <SummaryRow label="Quantity" value={form.quantity || "—"} />
                </dl>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-border rounded-full text-xs uppercase tracking-[0.3em]">Back</button>
                <button type="submit" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] shadow-gold">
                  Confirm Booking <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </form>

        <aside className="rounded-2xl border border-border overflow-hidden sticky top-32">
          <div className="relative aspect-[4/3]">
            <img src={IMAGES[activeService.image]} alt={activeService.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">{activeService.accent}</div>
            <h3 className="font-display text-2xl mb-3">{activeService.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{activeService.short}</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 flex items-center gap-2">
        {icon} {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm"
      />
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
      <dd className="text-foreground mt-1">{value}</dd>
    </div>
  );
}
