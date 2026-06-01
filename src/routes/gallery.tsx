import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY, CATEGORIES, type GalleryCategory } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Monarch's Projects, Farms & Ateliers" },
      { name: "description", content: "Real photographs from Monarch's furniture ateliers, fish farms, piggery facilities and laundry studios." },
      { property: "og:title", content: "Gallery — Monarch's" },
    ],
  }),
  component: GalleryPage,
});

const PAGE_SIZE = 18;

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const items = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  // Reset pagination when filter changes
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [filter]);

  const shown = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <>
      <section className="container-luxe pt-12 pb-10">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Moments from the <span className="text-gradient-gold italic">Monarch's</span> world.</>}
          description="Browse real work across our four divisions — tap a category to focus."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = filter === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] border transition-all duration-300 ${
                  active
                    ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                    : "border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="container-luxe pb-12 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {shown.map((it, i) => (
          <figure
            key={it.src + i}
            onClick={() => setLightbox(it.src)}
            className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl border border-border cursor-zoom-in animate-fade-in"
          >
            <img
              src={it.src}
              alt={it.title}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 ${
                it.ratio === "tall" ? "aspect-[3/4]" : it.ratio === "square" ? "aspect-square" : "aspect-[4/3]"
              }`}
            />
            {/* Desktop: caption on hover */}
            <figcaption className="hidden md:flex absolute inset-0 flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-onyx via-onyx/40 to-transparent">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary capitalize">{it.category}</div>
              <div className="font-display text-xl mt-1">{it.title}</div>
            </figcaption>
            {/* Mobile: caption always visible */}
            <figcaption className="md:hidden absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-onyx via-onyx/70 to-transparent">
              <div className="text-[9px] uppercase tracking-[0.3em] text-primary capitalize">{it.category}</div>
              <div className="font-display text-base mt-0.5 leading-tight">{it.title}</div>
            </figcaption>
          </figure>
        ))}
      </section>

      {hasMore && (
        <div className="container-luxe pb-24 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="px-8 py-4 rounded-full border border-primary/40 text-xs uppercase tracking-[0.3em] text-foreground hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all duration-300"
          >
            Load more ({items.length - visible} remaining)
          </button>
        </div>
      )}

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 w-12 h-12 grid place-items-center rounded-full border border-white/20 text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-elegant animate-scale-in"
          />
        </div>
      )}
    </>
  );
}
