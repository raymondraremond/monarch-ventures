import { createFileRoute } from "@tanstack/react-router";
import { IMAGES } from "@/lib/images";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Monarch's Projects, Farms & Ateliers" },
      { name: "description", content: "A visual journey through Monarch's furniture projects, fish farms, piggery and laundry ateliers." },
      { property: "og:title", content: "Gallery — Monarch's" },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: "hero-furniture", title: "Lekki Penthouse Lounge", tag: "Furniture", h: "tall" },
  { src: "hero-fishery", title: "Sunrise Aquaculture", tag: "Fishery", h: "short" },
  { src: "hero-laundry", title: "Hospitality Linens", tag: "Laundry", h: "short" },
  { src: "hero-piggery", title: "Modern Breeding Facility", tag: "Piggery", h: "tall" },
  { src: "hero-furniture", title: "Atelier No. 7", tag: "Furniture", h: "short" },
  { src: "hero-fishery", title: "Catfish Harvest", tag: "Fishery", h: "tall" },
  { src: "hero-laundry", title: "Marble & Gold", tag: "Laundry", h: "tall" },
  { src: "hero-piggery", title: "Ethical Pork", tag: "Piggery", h: "short" },
] as const;

function GalleryPage() {
  return (
    <>
      <section className="container-luxe pt-12 pb-16">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Moments from the <span className="text-gradient-gold italic">Monarch's</span> world.</>}
          description="Selected projects across our four divisions — from atelier-built furniture to sunrise harvests."
        />
      </section>

      <section className="container-luxe pb-24 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {items.map((it, i) => (
          <figure
            key={i}
            className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={IMAGES[it.src]}
              alt={it.title}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 ${
                it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-onyx via-onyx/40 to-transparent">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{it.tag}</div>
              <div className="font-display text-xl mt-1">{it.title}</div>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
