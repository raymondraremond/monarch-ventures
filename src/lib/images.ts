import furniture from "@/assets/hero-furniture.jpg";
import fishery from "@/assets/hero-fishery.jpg";
import piggery from "@/assets/hero-piggery.jpg";
import laundry from "@/assets/hero-laundry.jpg";
import gold from "@/assets/texture-gold.jpg";

export const IMAGES = {
  "hero-furniture": furniture,
  "hero-fishery": fishery,
  "hero-piggery": piggery,
  "hero-laundry": laundry,
  "texture-gold": gold,
} as const;

export type ImageKey = keyof typeof IMAGES;
