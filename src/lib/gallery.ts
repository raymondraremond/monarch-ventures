// Real photographs sourced from Wikimedia Commons (CC-licensed) and local assets.
// Curated per Monarch's division — no AI-generated imagery, no off-topic stock.
import fisheryPond from "@/assets/hero-fishery.jpg";
import fisheryLiveCatfish from "@/assets/gallery/fishery-live-catfish-pond.jpg";
import fisheryFeedingPond from "@/assets/gallery/fishery-feeding-catfish-pond.jpg";
import fisheryAquaculturePonds from "@/assets/gallery/fishery-aquaculture-ponds.jpg";
import fisheryPondMonitoring from "@/assets/gallery/fishery-pond-monitoring.jpg";

import furniture1 from "@/assets/gallery/furniture-1.jpg";
import furniture2 from "@/assets/gallery/furniture-2.jpg";
import furniture3 from "@/assets/gallery/furniture-3.jpg";
import furniture4 from "@/assets/gallery/furniture-4.jpg";
import furniture5 from "@/assets/gallery/furniture-5.jpg";
import furniture6 from "@/assets/gallery/furniture-6.jpg";

import piggery1 from "@/assets/gallery/piggery-1.jpg";
import piggery2 from "@/assets/gallery/piggery-2.jpg";
import piggery3 from "@/assets/gallery/piggery-3.jpg";
import piggery4 from "@/assets/gallery/piggery-4.jpg";
import piggery5 from "@/assets/gallery/piggery-5.jpg";

import laundry1 from "@/assets/gallery/laundry-1.jpg";
import laundry2 from "@/assets/gallery/laundry-2.jpg";
import laundry3 from "@/assets/gallery/laundry-3.jpg";
import laundry4 from "@/assets/gallery/laundry-4.jpg";
import laundry5 from "@/assets/gallery/laundry-5.jpg";

export type GalleryCategory = "furniture" | "fishery" | "piggery" | "laundry";

export interface GalleryImage {
  src: string;
  title: string;
  category: GalleryCategory;
  ratio?: "tall" | "short" | "square";
}

export const GALLERY: GalleryImage[] = [
  // ── Furniture ───────────────────────────────────────────────
  { src: furniture1, title: "Living Room Sofa Set", category: "furniture", ratio: "short" },
  { src: furniture2, title: "Modern Bedroom Interior", category: "furniture", ratio: "tall" },
  { src: furniture3, title: "Dining Room Table", category: "furniture", ratio: "short" },
  { src: furniture4, title: "Bedroom Wardrobe", category: "furniture", ratio: "tall" },
  { src: furniture5, title: "Leather Armchair", category: "furniture", ratio: "square" },
  { src: furniture6, title: "Custom Bookshelf", category: "furniture", ratio: "tall" },

  // ── Fishery ─────────────────────────────────────────────────
  { src: fisheryPond, title: "Live Catfish Pond", category: "fishery", ratio: "short" },
  { src: fisheryLiveCatfish, title: "Catfish Pond Harvest", category: "fishery", ratio: "tall" },
  { src: fisheryFeedingPond, title: "Pond Feeding Activity", category: "fishery", ratio: "short" },
  { src: fisheryAquaculturePonds, title: "Aquaculture Pond System", category: "fishery", ratio: "tall" },
  { src: fisheryPondMonitoring, title: "Fish Growth Monitoring", category: "fishery", ratio: "short" },

  // ── Piggery ─────────────────────────────────────────────────
  { src: piggery1, title: "Pig Farm Operations", category: "piggery", ratio: "short" },
  { src: piggery2, title: "Sow with Piglets", category: "piggery", ratio: "tall" },
  { src: piggery3, title: "Healthy Stock", category: "piggery", ratio: "short" },
  { src: piggery4, title: "Modern Pen Layout", category: "piggery", ratio: "tall" },
  { src: piggery5, title: "Young Piglets", category: "piggery", ratio: "square" },

  // ── Laundry ─────────────────────────────────────────────────
  { src: laundry1, title: "Laundry Service Floor", category: "laundry", ratio: "short" },
  { src: laundry2, title: "Industrial Washing Machines", category: "laundry", ratio: "tall" },
  { src: laundry3, title: "Pressing & Ironing", category: "laundry", ratio: "short" },
  { src: laundry4, title: "Folded & Ready", category: "laundry", ratio: "square" },
  { src: laundry5, title: "Drying Operations", category: "laundry", ratio: "tall" },
];

export const CATEGORIES: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "furniture", label: "Furniture" },
  { key: "fishery", label: "Fishery" },
  { key: "piggery", label: "Piggery" },
  { key: "laundry", label: "Laundry" },
];
