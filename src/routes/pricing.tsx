import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink } from "@/lib/constants";
import { Check, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pestr Hospitality Pest Control" },
      { name: "description", content: "Transparent pest control pricing for hotels, restaurants and kitchens. Free site inspection, no hidden fees." },
    ],
    links: [{ rel: "canonical", href: "https://pestr.in/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Small Outlet",
    examples: "Cafe · QSR · Small restaurant",
    features: [
      "Monthly scheduled visit",
      "Cockroach & ant treatment",
      "Signed digital visit report",
      "Email & phone support",
    ],
  },
  {
    name: "Hospitality Pro",
    examples: "Hotel · Large restaurant · Cloud kitchen",
    popular: true,
    features: [
      "Custom visit schedule",
      "Cockroach, rodent & fly protection",
      "30-day written retreat guarantee",
      "FSSAI / HACCP audit dossier",
      "Dedicated property technician",
      "24-hour emergency response",
    ],
  },
  {
    name: "Enterprise",
    examples: "Hotel chain · Banquet group · Multi-outlet brand",
    features: [
      "Multi-property management",
      "Custom visit frequency per zone",
      "Key Account Manager",
      "Quarterly executive report",
      "Priority 12-hour response",
    ],
  },
];

const alwaysIncluded = [
  "Free initial site inspection",
  "Written, line-item quote",
  "Chemical Safety Data Sheets",
  "Signed report after every visit",
  "30-day retreat guarantee",
  "Zero callout fee on re-treatments",
];

function PricingContent() {
  return (
    <div className="space-y-14">

      {/* --- TIER CARDS at top --- */}
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              tier.popular
                ? "border-brass bg-card ring-2 ring-brass"
                : "border-border bg-card"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brass px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Most Popular
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.examples}</p>
            </div>

            <ul className="flex-grow space-y-3">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span className="text-sm text-muted-foreground">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink(`Hi Pestr! I'm interested in the ${tier.name} plan. I'd like to get a quote.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                tier.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border bg-background text-foreground hover:border-brass hover:text-brass"
              }`}
            >
              <MessageCircle className="h-4 w-4" /> Get a Quote
            </a>
          </div>
        ))}
      </div>

      {/* --- Price note — brief --- */}
      <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
        <h2 className="text-lg font-bold text-foreground">Why we don't list fixed prices</h2>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Every property is different — a 10-table cafe needs a completely different plan to a 200-room hotel. After a <span className="font-semibold text-foreground">free site inspection</span>, we send a clear written quote within 72 hours. No surprises.
        </p>
      </div>

      {/* --- Always included --- */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-5">Always included — on every plan</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {alwaysIncluded.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
              <Check className="h-4 w-4 shrink-0 text-brass" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function PricingPage() {
  return (
    <ServicePageLayout
      heroTitle="Simple, Transparent Pricing"
      heroText="Customized after a free site inspection. No hidden fees, no lock-ins."
      bullets={["Free site inspection", "Quote in 72 hrs", "No hidden fees", "30-day guarantee"]}
      proofPoints={[]}
      serviceAreas={[]}
      relatedLinks={[
        { to: "/services", label: "All Services" },
        { to: "/faq", label: "FAQ" },
        { to: "/contact", label: "Book Inspection" },
      ]}
      extraContent={<PricingContent />}
    />
  );
}
