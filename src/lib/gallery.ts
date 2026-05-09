// Real photographs sourced from Unsplash (free to use, attribution appreciated).
// Grouped per Monarch's division.
import fisheryPond from "@/assets/hero-fishery.jpg";
import fisheryLiveCatfish from "@/assets/gallery/fishery-live-catfish-pond.jpg";
import fisheryFeedingPond from "@/assets/gallery/fishery-feeding-catfish-pond.jpg";
import fisheryAquaculturePonds from "@/assets/gallery/fishery-aquaculture-ponds.jpg";
import fisheryPondMonitoring from "@/assets/gallery/fishery-pond-monitoring.jpg";

export type GalleryCategory = "furniture" | "fishery" | "piggery" | "laundry";

export interface GalleryImage {
  src: string;
  title: string;
  category: GalleryCategory;
  ratio?: "tall" | "short" | "square";
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const GALLERY: GalleryImage[] = [
  // ── Furniture ───────────────────────────────────────────────
  { src: u("photo-1555041469-a586c61ea9bc"), title: "Velvet Lounge Suite", category: "furniture", ratio: "tall" },
  { src: u("photo-1567538096630-e0c55bd6374c"), title: "Sculpted Accent Chair", category: "furniture", ratio: "short" },
  { src: u("photo-1540574163026-643ea20ade25"), title: "Heritage Dining Set", category: "furniture", ratio: "short" },
  { src: u("photo-1493663284031-b7e3aefcae8e"), title: "Master Bedroom Suite", category: "furniture", ratio: "tall" },
  { src: u("photo-1616486338812-3dadae4b4ace"), title: "Penthouse Bedroom", category: "furniture", ratio: "short" },
  { src: u("photo-1631679706909-1844bbd07221"), title: "Modern Living Concept", category: "furniture", ratio: "tall" },
  { src: u("photo-1538688525198-9b88f6f53126"), title: "Library & Study", category: "furniture", ratio: "short" },
  { src: u("photo-1592078615290-033ee584e267"), title: "Marble & Brass Console", category: "furniture", ratio: "tall" },

  // ── Fishery ─────────────────────────────────────────────────
  { src: fisheryPond, title: "Live Catfish Pond", category: "fishery", ratio: "short" },
  { src: fisheryLiveCatfish, title: "Catfish Pond Harvest", category: "fishery", ratio: "tall" },
  { src: fisheryFeedingPond, title: "Pond Feeding Activity", category: "fishery", ratio: "short" },
  { src: fisheryAquaculturePonds, title: "Aquaculture Pond System", category: "fishery", ratio: "short" },
  { src: fisheryPondMonitoring, title: "Fish Growth Monitoring", category: "fishery", ratio: "tall" },
  { src: fisheryLiveCatfish, title: "Live Stock Handling", category: "fishery", ratio: "square" },
  { src: fisheryFeedingPond, title: "Working Fish Pond", category: "fishery", ratio: "tall" },
  { src: fisheryAquaculturePonds, title: "Modern Pond Layout", category: "fishery", ratio: "short" },

  // ── Piggery ─────────────────────────────────────────────────
  { src: u("photo-1593179357196-705d7578430a"), title: "Free-Range Stock", category: "piggery", ratio: "short" },
  { src: u("photo-1605559424843-9e4c228bf1c2"), title: "Modern Pens", category: "piggery", ratio: "tall" },
  { src: u("photo-1500595046743-cd271d694d30"), title: "Healthy Sows", category: "piggery", ratio: "tall" },
  { src: u("photo-1452857297128-d9c29adba80b"), title: "Breeding Programme", category: "piggery", ratio: "short" },
  { src: u("photo-1597498815502-08f29ade8512"), title: "Pasture Reared", category: "piggery", ratio: "short" },
  { src: u("photo-1516467508483-a7212febe31a"), title: "Farm Operations", category: "piggery", ratio: "tall" },
  { src: u("photo-1570042225831-d98fa7577f1e"), title: "Ethical Pork", category: "piggery", ratio: "short" },
  { src: u("photo-1571689936114-b16146c9570a"), title: "Quality Assured", category: "piggery", ratio: "tall" },

  // ── Laundry ─────────────────────────────────────────────────
  { src: u("photo-1610557892470-55d9e80c0bce"), title: "Press & Finish", category: "laundry", ratio: "tall" },
  { src: u("photo-1582735689369-4fe89db7114c"), title: "Hospitality Linens", category: "laundry", ratio: "short" },
  { src: u("photo-1604335399105-a0c585fd81a1"), title: "Fresh Folded Stack", category: "laundry", ratio: "short" },
  { src: u("photo-1545173168-9f1947eebb7f"), title: "Industrial Wash", category: "laundry", ratio: "tall" },
  { src: u("photo-1582719471384-894fbb16e074"), title: "White Shirts", category: "laundry", ratio: "short" },
  { src: u("photo-1626806787461-102c1bfaaea1"), title: "Steam & Press", category: "laundry", ratio: "tall" },
  { src: u("photo-1517677208171-0bc6725a3e60"), title: "Dry Cleaning", category: "laundry", ratio: "short" },
  { src: u("photo-1521656693074-0ef32e80a5d5"), title: "Garment Care", category: "laundry", ratio: "tall" },
];

export const CATEGORIES: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "furniture", label: "Furniture" },
  { key: "fishery", label: "Fishery" },
  { key: "piggery", label: "Piggery" },
  { key: "laundry", label: "Laundry" },
];
