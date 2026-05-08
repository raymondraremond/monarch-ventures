import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Furniture, Fishery, Piggery & Laundry | Monarch's" },
      { name: "description", content: "Explore our four divisions: bespoke furniture, modern fishery, ethical piggery, and hotel-grade laundry services." },
      { property: "og:title", content: "Our Services — Monarch's Mega Resources" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="container-luxe pt-16 pb-20">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Four divisions, <span className="text-gradient-gold italic">one standard</span>.</>}
          description="Whether you're outfitting a home, sourcing premium produce or maintaining hotel-grade linens — Monarch's delivers."
        />
      </section>

      <section className="container-luxe pb-24 space-y-10">
        {SERVICES.map((s, i) => (
          <div
            key={s.slug}
            className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
          >
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border block [direction:ltr]"
            >
              <img
                src={IMAGES[s.image]}
                alt={s.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
            </Link>
            <div className="[direction:ltr]">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">0{i + 1} — {s.accent}</div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">{s.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2 mb-8">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/85">
                    <span className="text-primary">◆</span> {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] shadow-gold"
              >
                Explore {s.name} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
