import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { Service } from "@/lib/site";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.name} — Monarch's Mega Ventures` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.name} — Monarch's` },
          { property: "og:description", content: loaderData.service.description },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-luxe py-32 text-center">
      <h1 className="font-display text-4xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary link-underline">View all services</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="container-luxe py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
    </div>
  ),
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((s) => s.slug === slug)!;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] -mt-20 overflow-hidden">
        <img src={IMAGES[service.image]} alt={service.name} className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-primary mb-4">{service.accent}</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]">
            {service.name}.
          </h1>
          <p className="mt-6 text-lg text-foreground/85 max-w-2xl">{service.short}</p>
        </div>
      </section>

      <section className="container-luxe py-24 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl md:text-4xl mb-6">An obsession with the craft.</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {service.bullets.map((b) => (
              <div key={b} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="lg:sticky lg:top-32 self-start p-8 rounded-2xl border border-primary/40 bg-card">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Get started</div>
          <h3 className="font-display text-2xl mb-4">Book {service.name}</h3>
          <p className="text-sm text-muted-foreground mb-6">Reserve a slot, request a quote or schedule a consultation.</p>
          <Link
            to="/booking"
            search={{ service: service.slug }}
            className="w-full inline-flex justify-center items-center gap-3 px-6 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] shadow-gold"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </aside>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="container-luxe py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl mb-12">Transparent tiers.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl border bg-card card-hover ${
                  i === 1 ? "border-primary shadow-gold" : "border-border"
                }`}
              >
                {i === 1 && (
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Most chosen</div>
                )}
                <h3 className="font-display text-2xl mb-2">{tier.name}</h3>
                <div className="text-gradient-gold font-display text-4xl mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/85">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  search={{ service: service.slug }}
                  className="block text-center px-6 py-3 border border-primary/40 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-primary/10 transition-colors"
                >
                  Choose {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Other Houses</div>
        <h2 className="font-display text-3xl md:text-4xl mb-10">Continue exploring.</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border block"
            >
              <img src={IMAGES[s.image]} alt={s.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="font-display text-2xl">{s.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mt-2 inline-flex items-center gap-2">
                  Discover <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
