import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Monarch's Mega Resources — Our Story, Vision & Team" },
      { name: "description", content: "Discover the story, vision and values behind Monarch's Mega Resources Nigeria Limited — a Nigerian house of premium services." },
      { property: "og:title", content: "About Monarch's Mega Resources" },
      { property: "og:description", content: "A Nigerian house of premium services. Discover our story, vision and team." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] -mt-20 overflow-hidden">
        <img src={IMAGES["hero-furniture"]} alt="" className="absolute inset-0 w-full h-full object-cover kenburns" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-primary mb-4">About Us</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl">
            A Nigerian house of <span className="text-gradient-gold italic">premium</span> services.
          </h1>
        </div>
      </section>

      <section className="container-luxe py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow="Our Story" title={<>Born in Lagos. Built for excellence.</>} />
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              {SITE.legal} began with a simple belief: world-class quality should not be imported. From a single furniture workshop in Lagos, Monarch's grew into a house of four disciplined divisions — furniture, fishery, piggery and laundry — each obsessing over the same standard.
            </p>
            <p>
              Today, our pieces sit in penthouses across Ikoyi, our fish supplies the city's finest kitchens, our pork feeds restaurant groups nationwide, and our laundry keeps boutique hotels immaculate.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
          <img src={IMAGES["hero-laundry"]} alt="Atelier" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="container-luxe py-24 grid md:grid-cols-3 gap-10">
          {[
            { t: "Vision", b: "To be Africa's most trusted house of premium services — proving home-grown can mean world-class." },
            { t: "Mission", b: "Deliver immaculate experiences across furniture, food and care — with discipline, taste and integrity." },
            { t: "Values", b: "Craft. Integrity. Service. Sustainability. The four pillars behind every Monarch's promise." },
          ].map((v, i) => (
            <div key={v.t} className={`reveal reveal-delay-${i + 1}`}>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">0{i + 1}</div>
              <h3 className="font-display text-3xl mb-4">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-24">
        <SectionHeading eyebrow="Leadership" title={<>The minds behind <span className="text-gradient-gold italic">Monarch's</span>.</>} align="center" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "Adewale Monarch", r: "Founder & CEO" },
            { n: "Ngozi Eze", r: "Head of Design — Furniture" },
            { n: "Ifeanyi Okafor", r: "Director — Aquaculture & Piggery" },
            { n: "Folake Bello", r: "Director — Laundry & Hospitality" },
          ].map((p, i) => (
            <div key={p.n} className={`p-8 rounded-2xl border border-border bg-card text-center card-hover reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-gold grid place-items-center font-display text-3xl text-primary-foreground mb-5">
                {p.n.split(" ").map((s) => s[0]).join("")}
              </div>
              <div className="font-display text-lg">{p.n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.r}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="rounded-3xl border border-primary/30 p-12 md:p-16 bg-card/40 text-center">
          <h3 className="font-display text-3xl md:text-4xl">Work with a partner that holds your standard.</h3>
          <Link to="/contact" className="mt-8 inline-flex px-8 py-4 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.3em]">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
