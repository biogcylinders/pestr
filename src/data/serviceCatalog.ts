import type { LucideIcon } from "lucide-react";
import { Bug, Rat, Building2, ChefHat, Hotel } from "lucide-react";

export type ServiceCategory = "pests" | "hospitality" | "kitchen";

export interface ServiceCatalogEntry {
  slug: string;
  title: string;
  shortDescription: string;
  hubDescription: string;
  category: ServiceCategory;
  icon: LucideIcon;
  badge: string;
  features: string[];
  relatedSlugs: string[];
}

export const serviceCatalog: ServiceCatalogEntry[] = [
  {
    slug: "cockroach-control",
    title: "Cockroach Control",
    shortDescription:
      "Odorless gel baiting with zero operational downtime for kitchen staff.",
    hubDescription:
      "Professional cockroach control for hotels, restaurants, and commercial kitchens. We use inspection-led gel baiting to eliminate German and American cockroach colonies at the source — without shutting down your kitchen or exposing food prep areas to airborne chemicals.",
    category: "pests",
    icon: Bug,
    badge: "Targeted Vector",
    features: [
      "Imidacloprid 2.15% targeted gel matrix",
      "Zero downtime — kitchen stays operational",
      "Eliminates German & American cockroaches",
      "30-day written retreat guarantee",
    ],
    relatedSlugs: [
      "rodent-control",
      "commercial-kitchen-pest-control",
      "restaurant-pest-control",
      "hotel-pest-control",
    ],
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    shortDescription:
      "Tamper-resistant baiting and physical gap exclusion for storage and prep areas.",
    hubDescription:
      "Professional rodent control for hotels, restaurants, offices, and commercial properties. Our protocol combines tamper-resistant bait stations, entry-point sealing, and ongoing monitoring to keep rats and mice out of food storage, prep areas, and guest-facing spaces.",
    category: "pests",
    icon: Rat,
    badge: "Perimeter Barrier",
    features: [
      "Tamper-proof lockable bait stations",
      "Entry point identification & gap sealing",
      "Non-toxic trapping for food zones",
      "Weekly monitoring during high activity",
    ],
    relatedSlugs: [
      "cockroach-control",
      "commercial-kitchen-pest-control",
      "hotel-pest-control",
      "restaurant-pest-control",
    ],
  },
  {
    slug: "termite-treatment",
    title: "Termite Control",
    shortDescription:
      "Soil treatment and baiting systems protecting structural integrity.",
    hubDescription:
      "Protect your property from structural damage with professional termite treatment. We offer subterranean termite soil treatment, baiting systems with monitoring stations, and pre-construction barrier options — with annual inspection plans for long-term protection.",
    category: "pests",
    icon: Bug,
    badge: "Structural",
    features: [
      "Subterranean termite soil treatment",
      "Baiting system with monitoring stations",
      "Pre-construction termite barrier options",
      "Annual inspection & maintenance plan",
    ],
    relatedSlugs: [
      "cockroach-control",
      "rodent-control",
      "mosquito-control",
      "hotel-pest-control",
    ],
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    shortDescription:
      "Targeted larvicide and adulticide for outdoor dining and patio areas.",
    hubDescription:
      "Reduce mosquito populations across outdoor dining spaces, hotel patios, and event lawns. Our targeted larvicide and adulticide treatments address breeding sites and active populations — keeping guests comfortable without disrupting service.",
    category: "pests",
    icon: Bug,
    badge: "Outdoor & Dining",
    features: [
      "Larvicide treatments for breeding sites",
      "Adulticide for active mosquito populations",
      "Outdoor patio and lawn coverage",
      "Seasonal maintenance plans available",
    ],
    relatedSlugs: [
      "cockroach-control",
      "termite-treatment",
      "hotel-pest-control",
      "restaurant-pest-control",
    ],
  },
  {
    slug: "commercial-kitchen-pest-control",
    title: "Commercial Kitchen Pest Control",
    shortDescription:
      "FSSAI and HACCP audit-compliant pest barriers for heavy cooking environments.",
    hubDescription:
      "Specialized pest control for commercial kitchens, cloud kitchens, and high-output food prep facilities. Grease-trap, drain, and equipment void treatments designed around HACCP and FSSAI compliance — with full SDS dossiers and photo-documented visit reports.",
    category: "kitchen",
    icon: Building2,
    badge: "Food Prep",
    features: [
      "HACCP & FSSAI compliant formulations",
      "Bait station mapping & void sealing",
      "Full Safety Data Sheet (SDS) dossier",
      "Monthly inspection with photo documentation",
    ],
    relatedSlugs: [
      "cockroach-control",
      "rodent-control",
      "restaurant-pest-control",
      "hotel-pest-control",
    ],
  },
  {
    slug: "hotel-pest-control",
    title: "Hotel Pest Control",
    shortDescription:
      "Discreet room and public space treatments with zero guest disturbance.",
    hubDescription:
      "Discrete, zero-disruption pest management engineered for guest rooms, dining halls, banquet spaces, and back-of-house storage. Off-peak night and early-morning treatments protect your reputation without guests ever knowing we were there.",
    category: "hospitality",
    icon: Hotel,
    badge: "Hospitality",
    features: [
      "Off-peak night & early morning treatments",
      "Odorless, food-safe gel applications",
      "Guest-facing area protection protocol",
      "Quarterly FSSAI audit file preparation",
    ],
    relatedSlugs: [
      "restaurant-pest-control",
      "commercial-kitchen-pest-control",
      "cockroach-control",
      "rodent-control",
    ],
  },
  {
    slug: "restaurant-pest-control",
    title: "Restaurant Pest Control",
    shortDescription:
      "Food-safe barrier treatments designed around active kitchen operating hours.",
    hubDescription:
      "Targeted pest barrier protection for active dining rooms, bars, and food prep areas. Fly control, drain treatment, and cockroach gel baiting protocols designed to keep your restaurant audit-ready — with signed visit reports for every hygiene inspection.",
    category: "hospitality",
    icon: ChefHat,
    badge: "Dining & Bars",
    features: [
      "Zero airborne chemical exposure in kitchen",
      "Fly control & drain treatment protocols",
      "Signed visit report for hygiene inspections",
      "24-hour emergency outbreak response",
    ],
    relatedSlugs: [
      "commercial-kitchen-pest-control",
      "cockroach-control",
      "rodent-control",
      "hotel-pest-control",
    ],
  },
];

export const footerPopularServices = serviceCatalog.slice(0, 5);

export const footerPopularLocationSlugs = [
  "delhi-ncr",
  "mumbai",
  "bangalore",
  "hyderabad",
  "varanasi",
];

export function getServiceBySlug(slug: string): ServiceCatalogEntry | undefined {
  return serviceCatalog.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): ServiceCatalogEntry[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceCatalogEntry => s !== undefined);
}

export function getServicesByCategory(category: ServiceCategory | "all"): ServiceCatalogEntry[] {
  if (category === "all") return serviceCatalog;
  return serviceCatalog.filter((s) => s.category === category);
}
