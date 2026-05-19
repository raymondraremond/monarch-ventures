import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Award, Sparkles, Users, Truck } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monarch's Mega Ventures — Luxury Furniture, Fishery, Piggery & Laundry in Akwa Ibom" },
      { name: "description", content: "Premium Nigerian conglomerate offering bespoke furniture, modern aquaculture, ethical piggery and hotel-grade laundry services." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <Stats />
      <Why />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SERVICES.length), 5500);
    return () => clearInterval(t);
  }, []);
  const active = SERVICES[idx];

  return (
    <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
      {SERVICES.map((s, i) => (
        <div
          key={s.slug}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={IMAGES[s.image]}
            alt={s.name}
            className="absolute inset-0 w-full h-full object-cover kenburns"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </div>
      ))}

      <div className="relative z-10 h-full container-luxe flex flex-col justify-end pb-20 lg:pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">{active.accent}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1] reveal reveal-delay-1">
            Excellence
            <br />
            in <span className="text-gradient-gold italic">every</span> endeavour.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed reveal reveal-delay-2">
            {SITE.legal} — a Nigerian house of premium services spanning {" "}
            <span className="text-primary">{active.name.toLowerCase()}</span>, and beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal reveal-delay-3">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] font-medium shadow-gold hover:shadow-elegant transition-all duration-500 hover:-translate-y-0.5"
            >
              Book a Service
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 text-foreground rounded-full text-xs uppercase tracking-[0.3em] hover:bg-primary/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="mt-14 flex gap-2">
          {SERVICES.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => setIdx(i)}
              aria-label={`Show ${s.name}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === idx ? "w-16 bg-primary" : "w-8 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { Icon: Award, label: "Award-winning craftsmanship" },
    { Icon: Sparkles, label: "Premium quality, always" },
    { Icon: Users, label: "1,200+ happy clients" },
    { Icon: Truck, label: "Nationwide delivery" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="container-luxe py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm text-foreground/80">
            <Icon className="w-5 h-5 text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="container-luxe py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <SectionHeading
          eyebrow="Our Houses"
          title={<>Four divisions. <span className="text-gradient-gold italic">One standard</span> of excellence.</>}
        />
        <Link to="/services" className="link-underline text-sm uppercase tracking-[0.25em] text-primary self-start md:self-end">
          View all services →
        </Link>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className={`group relative overflow-hidden rounded-2xl border border-border card-hover bg-card aspect-[4/3] reveal reveal-delay-${(i % 4) + 1}`}
          >
            <img
              src={IMAGES[s.image]}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                0{i + 1} — {s.accent}
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-3">{s.name}</h3>
              <p className="text-foreground/75 max-w-md">{s.short}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                Discover <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "12+", l: "Years of excellence" },
    { v: "1,200+", l: "Clients served" },
    { v: "36", l: "States covered" },
    { v: "98%", l: "Client retention" },
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="container-luxe py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-gradient-gold">{s.v}</div>
            <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { title: "Heritage of craft", body: "A decade-plus of refined craftsmanship across furniture, food and care." },
    { title: "Integrated services", body: "One trusted partner for premium products and services across four sectors." },
    { title: "Quality without compromise", body: "Materials, processes and people held to a single uncompromising standard." },
    { title: "Rooted in Akwa Ibom", body: "Built by Nigerians for the most demanding clients across Akwa Ibom and beyond." },
  ];
  return (
    <section className="container-luxe py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-start">
      <div className="lg:sticky lg:top-32">
        <SectionHeading
          eyebrow="Why Monarch's"
          title={<>The new standard of <span className="text-gradient-gold italic">Akwa Ibom luxury</span>.</>}
          description="We exist to prove that world-class can be home-grown. Every division operates with the same obsession: an immaculate experience, end to end."
        />
        <Link
          to="/about"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 border border-primary/40 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-primary/10 transition-colors"
        >
          Our Story <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`p-8 rounded-2xl border border-border bg-card card-hover reveal reveal-delay-${(i % 4) + 1}`}
          >
            <div className="font-display text-3xl text-gradient-gold mb-4">0{i + 1}</div>
            <h4 className="font-display text-xl mb-3">{it.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    { quote: "Monarch's transformed our boutique hotel laundry. Immaculate finishes, never a missed pickup.", name: "Adaeze O.", role: "GM, Uyo Boutique Hotels" },
    { quote: "The custom furniture for our penthouse is genuinely world-class. Worth every Naira.", name: "Tunde A.", role: "Architect, Uyo" },
    { quote: "Our restaurants now run on Monarch's fish supply. Fresh, on-time, traceable.", name: "Chiamaka N.", role: "Founder, Sage Eket" },
  ];
  return (
    <section className="container-luxe py-24 md:py-32">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>Trusted by <span className="text-gradient-gold italic">discerning</span> clients.</>}
        align="center"
      />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {list.map((t, i) => (
          <figure
            key={i}
            className={`p-8 md:p-10 rounded-2xl border border-border bg-card relative card-hover reveal reveal-delay-${i + 1}`}
          >
            <div className="font-display text-7xl text-primary/30 leading-none">"</div>
            <blockquote className="-mt-6 text-foreground/90 leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <div className="font-display">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-luxe">
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/30 p-12 md:p-20 text-center"
        style={{ background: "var(--gradient-radial-gold), oklch(0.16 0.008 60)" }}
      >
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img src={IMAGES["texture-gold"]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative">
          <SectionHeading
            eyebrow="Ready to begin"
            title={<>Let's craft something <span className="text-gradient-gold italic">remarkable</span>.</>}
            description="Speak with our team to scope your project — furniture, fish, pork or premium laundry."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em] shadow-gold">
              Book Now
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-primary/40 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-primary/10">
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
