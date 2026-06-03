import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY, CATEGORIES, type GalleryCategory, type GalleryImage } from "@/lib/gallery";

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

const PAGE_SIZE = 9;

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  const toggleSelected = (item: GalleryImage) => {
    const key = `${item.category}:${item.title}`;
    setSelectedItems((current) =>
      current.includes(key) ? current.filter((value) => value !== key) : [...current, key]
    );
  };

  const isSelected = (item: GalleryImage) => selectedItems.includes(`${item.category}:${item.title}`);
  const selectedCount = selectedItems.length;
  const selectedService = selectedCount
    ? (selectedItems[0].split(":")[0] as GalleryCategory)
    : filter === "all"
    ? "furniture"
    : filter;

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
        <p className="mt-4 text-sm text-muted-foreground">
          Tap an image to enlarge it. Use the “Select” button at the top-right to pick items for booking.
        </p>

        <div className="mt-6 text-sm text-muted-foreground">
          Tap a photo to view it, or use the button in the top-right corner of each card to select items for booking.
        </div>

        {selectedCount > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
              {selectedCount} selected item{selectedCount > 1 ? "s" : ""}
            </span>
            <button
              type="button"
              onClick={() => setSelectedItems([])}
              className="px-4 py-2 rounded-full border border-border text-xs uppercase tracking-[0.25em] hover:border-primary/40"
            >
              Clear selection
            </button>
            <a
              href={`/booking?service=${selectedService}&selected=${encodeURIComponent(selectedItems.join("|"))}`}
              className="px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] shadow-gold"
            >
              Book selected
            </a>
          </div>
        )}
      </section>

      <section className="container-luxe pb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((it, i) => (
          <figure
            key={it.src + i}
            onClick={() => setLightbox(it.src)}
            className={`mb-6 group relative overflow-hidden rounded-2xl border border-border ${
              isSelected(it) ? "ring-2 ring-primary" : ""
            }`}
          >
            <img
              src={it.src}
              alt={it.title}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className={`w-full object-cover transition-transform duration-[1500ms] will-change-transform group-hover:scale-110 ${
                it.ratio === "tall" ? "aspect-[3/4]" : it.ratio === "square" ? "aspect-square" : "aspect-[4/3]"
              }`}
            />
            <div className="absolute inset-0 p-4 z-20 pointer-events-none">
              <div className="absolute top-4 right-4 pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelected(it);
                  }}
                  aria-pressed={isSelected(it)}
                  className={`inline-flex min-w-[96px] items-center justify-center rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.25em] shadow-lg transition ${
                    isSelected(it)
                      ? "bg-primary text-primary-foreground border-transparent"
                      : "bg-background/95 text-foreground border-border hover:bg-primary/10"
                  }`}
                >
                  {isSelected(it) ? "Selected" : "Select"}
                </button>
              </div>
            </div>
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
