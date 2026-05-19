// Real photographs sourced from Wikimedia Commons (CC-licensed) and local assets.
// Curated per Monarch's division — no AI-generated imagery, no off-topic stock, no duplicates.
import fisheryPond from "@/assets/hero-fishery.jpg";
import fisheryLiveCatfish from "@/assets/gallery/fishery-live-catfish-pond.jpg";
import fisheryFeedingPond from "@/assets/gallery/fishery-feeding-catfish-pond.jpg";
import fisheryAquaculturePonds from "@/assets/gallery/fishery-aquaculture-ponds.jpg";
import fisheryPondMonitoring from "@/assets/gallery/fishery-pond-monitoring.jpg";

import furniture1 from "@/assets/gallery/furniture-1.jpg";
import furniture2 from "@/assets/gallery/furniture-2.jpg";
import furniture3 from "@/assets/gallery/furniture-3.jpg";
import furniture5 from "@/assets/gallery/furniture-5.jpg";

import piggery1 from "@/assets/gallery/piggery-1.jpg";
import piggery2 from "@/assets/gallery/piggery-2.jpg";
import piggery3 from "@/assets/gallery/piggery-3.jpg";
import piggery5 from "@/assets/gallery/piggery-5.jpg";

import laundry1 from "@/assets/gallery/laundry-1.jpg";
import laundry2 from "@/assets/gallery/laundry-2.jpg";
import laundry4 from "@/assets/gallery/laundry-4.jpg";

export type GalleryCategory = "furniture" | "fishery" | "piggery" | "laundry";

export interface GalleryImage {
  src: string;
  title: string;
  category: GalleryCategory;
  ratio?: "tall" | "short" | "square";
}

export const GALLERY: GalleryImage[] = [
  // ── Furniture ───────────────────────────────────────────────
  { src: furniture1, title: "Leather Sofa Living Room", category: "furniture", ratio: "short" },
  { src: furniture2, title: "Modern Bedroom Suite", category: "furniture", ratio: "tall" },
  { src: furniture3, title: "Dining Room Setting", category: "furniture", ratio: "short" },
  { src: furniture5, title: "Heritage Armchair", category: "furniture", ratio: "tall" },

  // ── Fishery ─────────────────────────────────────────────────
  { src: fisheryPond, title: "Live Catfish Pond", category: "fishery", ratio: "short" },
  { src: fisheryLiveCatfish, title: "Catfish Pond Harvest", category: "fishery", ratio: "tall" },
  { src: fisheryFeedingPond, title: "Pond Feeding Activity", category: "fishery", ratio: "short" },
  { src: fisheryAquaculturePonds, title: "Aquaculture Pond System", category: "fishery", ratio: "square" },
  { src: fisheryPondMonitoring, title: "Fish Growth Monitoring", category: "fishery", ratio: "tall" },

  // ── Piggery ─────────────────────────────────────────────────
  { src: piggery1, title: "Pig Farm Operations", category: "piggery", ratio: "short" },
  { src: piggery2, title: "Sow with Piglet", category: "piggery", ratio: "tall" },
  { src: piggery3, title: "Resting Stock in Pen", category: "piggery", ratio: "short" },
  { src: piggery5, title: "Young Piglet at Dusk", category: "piggery", ratio: "tall" },

  // ── Laundry ─────────────────────────────────────────────────
  { src: laundry1, title: "Laundry Service Floor", category: "laundry", ratio: "short" },
  { src: laundry2, title: "Industrial Drum Detail", category: "laundry", ratio: "square" },
  { src: laundry4, title: "Commercial Wash Bay", category: "laundry", ratio: "tall" },
];

export const CATEGORIES: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "furniture", label: "Furniture" },
  { key: "fishery", label: "Fishery" },
  { key: "piggery", label: "Piggery" },
  { key: "laundry", label: "Laundry" },
];
