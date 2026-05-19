export const SITE = {
  name: "Monarch's Mega Ventures",
  shortName: "Monarch's",
  legal: "Monarch's Mega Ventures Nigeria Limited",
  ceo: "Mordecai Saturday Enoidem",
  tagline: "Excellence in Every Endeavour",
  description:
    "A premium Nigerian conglomerate delivering luxury furniture, world-class fishery, modern piggery and elite laundry services.",
  phone: "+234 803 307 3957",
  whatsapp: "2348033073957",
  email: "mordecaienoidem033@gmail.com",
  address:
    "#1 Etok Enoidem Street, Utu Ikot Eboro, Etim Ekpo LGA, Akwa Ibom State",
  headquarters: {
    label: "Headquarters",
    value:
      "#1 Etok Enoidem Street, Utu Ikot Eboro, Etim Ekpo LGA, Akwa Ibom State",
  },
  branches: [
    {
      label: "Eket Branch I",
      value:
        "Uyo–Etinan Road, Okon, opposite Gas Filling Station, Eket, Akwa Ibom State",
    },
    {
      label: "Eket Branch II",
      value:
        "Ikot Udoma / Ikot Ibiok Road, beside Excellent Secondary School, Eket, Akwa Ibom State",
    },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
};

export type Service = {
  slug: "furniture" | "fishery" | "piggery" | "laundry";
  name: string;
  short: string;
  description: string;
  image: "hero-furniture" | "hero-fishery" | "hero-piggery" | "hero-laundry";
  accent: string;
  bullets: string[];
  tiers: { name: string; price: string; features: string[] }[];
};

export const SERVICES: Service[] = [
  {
    slug: "furniture",
    name: "Furniture",
    short: "Bespoke luxury furniture for refined homes & offices.",
    description:
      "Hand-crafted bespoke furniture marrying African craftsmanship with contemporary design. From statement sofas to executive workspaces, every piece is built to outlast trends.",
    image: "hero-furniture",
    accent: "Bespoke craftsmanship",
    bullets: [
      "Custom design consultation",
      "Premium hardwood & imported upholstery",
      "Residential, hospitality & corporate fit-outs",
      "Nationwide delivery & installation",
    ],
    tiers: [
      { name: "Essential", price: "₦450,000", features: ["1 statement piece", "Standard finish", "Akwa Ibom delivery"] },
      { name: "Signature", price: "₦1,250,000", features: ["Full room set", "Premium fabrics", "White-glove install"] },
      { name: "Atelier", price: "Bespoke", features: ["End-to-end interior", "Imported materials", "Lifetime care"] },
    ],
  },
  {
    slug: "fishery",
    name: "Fishery",
    short: "Sustainable aquaculture and premium fresh catch.",
    description:
      "A modern aquaculture operation supplying premium catfish, tilapia and processed fish to homes, restaurants and exporters across Nigeria — with full traceability.",
    image: "hero-fishery",
    accent: "Farm to table",
    bullets: [
      "Live, fresh & smoked fish",
      "Wholesale & retail packages",
      "Aquaculture consulting & setup",
      "Cold-chain delivery",
    ],
    tiers: [
      { name: "Household", price: "₦18,000 / 5kg", features: ["Fresh catfish", "Vacuum sealed", "Same-day delivery"] },
      { name: "Restaurant", price: "₦150,000 / 50kg", features: ["Custom cuts", "Weekly schedule", "Cold-chain"] },
      { name: "Wholesale", price: "Custom", features: ["1 ton+ orders", "Export grade", "Documentation"] },
    ],
  },
  {
    slug: "piggery",
    name: "Piggery",
    short: "Modern pig farming & ethically raised pork.",
    description:
      "World-class breeding, modern housing and clean-feed standards produce healthy, premium pork and breeding stock for farmers and processors nationwide.",
    image: "hero-piggery",
    accent: "Ethically raised",
    bullets: [
      "Live weaners & breeding stock",
      "Premium fresh pork cuts",
      "Farm management consulting",
      "Bulk B2B supply",
    ],
    tiers: [
      { name: "Weaner", price: "₦35,000", features: ["8–10 weeks", "Vaccinated", "Health certificate"] },
      { name: "Breeder", price: "₦180,000", features: ["Proven genetics", "Records included", "Delivery option"] },
      { name: "Bulk Pork", price: "₦3,200 / kg", features: ["Fresh cuts", "Cold-chain", "Restaurant friendly"] },
    ],
  },
  {
    slug: "laundry",
    name: "Laundry Services",
    short: "Hotel-grade laundry, dry cleaning & pickup.",
    description:
      "From a single suit to an entire hotel — our atelier-grade laundry delivers immaculate finishes with eco-conscious processes and seamless pickup & delivery.",
    image: "hero-laundry",
    accent: "Pickup & delivery",
    bullets: [
      "Residential & commercial",
      "Dry cleaning & ironing",
      "Hotel & hospitality contracts",
      "Same-day express service",
    ],
    tiers: [
      { name: "Essentials", price: "₦8,500 / bag", features: ["Up to 10 items", "48hr turnaround", "Free pickup"] },
      { name: "Executive", price: "₦22,000 / month", features: ["Weekly service", "Dry cleaning incl.", "Priority"] },
      { name: "Hospitality", price: "Custom", features: ["Hotel contracts", "Daily collection", "On-site account mgr"] },
    ],
  },
];

export type ServiceSlug = Service["slug"];
