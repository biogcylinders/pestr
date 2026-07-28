import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink, TEL_LINK, WA_FORMATTED } from "@/lib/constants";
import { CheckCircle2, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Hotel, ChefHat, Building2, Bug, Rat } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pest Control For Hospitality | Pestr" },
      { name: "description", content: "Pest management for hotels, restaurants, commercial kitchens, and cloud kitchens. Food-safe, audit-ready, 30-day guarantee." },
    ],
    links: [{ rel: "canonical", href: "https://pestr.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const serviceList = [
  {
    id: "hotel",
    title: "Hotel & Resort Pest Control",
    icon: Hotel,
    description: "Discrete, zero-disruption pest management for guest rooms, dining halls, and back-of-house storage.",
    features: [
      "Off-peak night & early morning treatments",
      "Odorless, food-safe gel applications",
      "Guest-facing area protection protocol",
      "Quarterly FSSAI audit file preparation",
    ],
    link: "/hotel-pest-control",
  },
  {
    id: "restaurant",
    title: "Restaurant & Cafe Protection",
    icon: ChefHat,
    description: "Targeted pest barrier protection for dining rooms, bars, and food prep areas.",
    features: [
      "Zero airborne chemical exposure in kitchen",
      "Fly control & drain treatment protocols",
      "Signed visit report for hygiene inspections",
      "24-hour emergency outbreak response",
    ],
    link: "/restaurant-pest-control",
  },
  {
    id: "kitchen",
    title: "Commercial Kitchen Control",
    icon: Building2,
    description: "Specialized grease-trap, drain, and equipment void pest control for heavy-duty food production.",
    features: [
      "HACCP & FSSAI compliant formulations",
      "Bait station mapping & void sealing",
      "Full Safety Data Sheet (SDS) dossier",
      "Monthly inspection with photo documentation",
    ],
    link: "/commercial-kitchen-pest-control",
  },
  {
    id: "cockroach",
    title: "Cockroach Eradication",
    icon: Bug,
    description: "Gel baiting and growth regulator treatments that eliminate cockroach nests without closing your kitchen.",
    features: [
      "Imidacloprid 2.15% targeted gel matrix",
      "Zero downtime — kitchen stays operational",
      "Eliminates German & American cockroaches",
      "30-day written retreat guarantee",
    ],
    link: "/cockroach-control",
  },
  {
    id: "rodent",
    title: "Rodent Prevention",
    icon: Rat,
    description: "Tamper-resistant bait stations, tracking, and perimeter sealing to keep rats & mice out permanently.",
    features: [
      "Tamper-proof lockable bait stations",
      "Entry point identification & gap sealing",
      "Non-toxic trapping for food zones",
      "Weekly monitoring during high activity",
    ],
    link: "/rodent-control",
  },
];

function ServicesContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = serviceList.filter((s) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "hospitality") return s.id === "hotel" || s.id === "restaurant";
    if (selectedCategory === "kitchen") return s.id === "kitchen";
    if (selectedCategory === "pests") return s.id === "cockroach" || s.id === "rodent";
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: "All Services" },
          { id: "hospitality", label: "Hotels & Dining" },
          { id: "kitchen", label: "Commercial Kitchens" },
          { id: "pests", label: "Pest Specific" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === tab.id
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-brass hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-brass/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brass/10 text-brass group-hover:bg-brass group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{service.title}</h3>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground mb-4">{service.description}</p>

              <ul className="space-y-1.5 text-xs text-muted-foreground mb-5 border-t border-border pt-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={service.link as any}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-brass hover:underline"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Small book CTA — at the bottom */}
      <div className="rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-muted-foreground">Need a custom multi-service plan for your property?</p>
        <a
          href={getWhatsAppLink("Hi Pestr! I'd like a custom service plan for my property.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 shrink-0"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Request Custom Plan
        </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <ServicePageLayout
      heroTitle="Pest Management Built for Hospitality"
      heroText="Targeted treatment plans for hotels, restaurants, commercial kitchens, and cloud kitchens — engineered around food-safety and audit compliance."
      bullets={["Food-safe formulations", "Zero operational downtime", "FSSAI & HACCP ready docs", "30-day retreat guarantee"]}
      proofPoints={[
        { title: "Chemical Transparency", text: "Every active ingredient is disclosed before application, with Safety Data Sheets handed to your duty manager." },
        { title: "Audit-Ready Logs", text: "Signed digital visit reports delivered after every visit — ready for health inspections." },
      ]}
      serviceAreas={["Hotels & Resorts", "Fine Dining & Cafes", "Commercial Kitchens", "Cloud Kitchens", "Banquets"]}
      relatedLinks={[
        { to: "/hotel-pest-control", label: "Hotel Pest Control" },
        { to: "/restaurant-pest-control", label: "Restaurant Pest Control" },
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Book Inspection" },
      ]}
      extraContent={<ServicesContent />}
    />
  );
}
