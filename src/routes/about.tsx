import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink } from "@/lib/constants";
import { Building2, ShieldCheck, Award, FileText, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pestr — Hospitality-Focused Pest Control" },
      { name: "description", content: "Pestr specializes exclusively in pest management for hotels, restaurants, and commercial kitchens across India." },
    ],
    links: [{ rel: "canonical", href: "https://www.pestr.in/about" }],
  }),
  component: AboutPage,
});

function AboutContent() {
  const stats = [
    { value: "240+", label: "Properties Protected" },
    { value: "100%", label: "Audit Compliance Rate" },
    { value: "<24 hrs", label: "Emergency Response" },
    { value: "30 Days", label: "Retreat Guarantee" },
  ];

  const pillars = [
    {
      title: "Exclusively Hospitality",
      icon: Building2,
      description: "We don't serve offices or warehouses. 100% of our protocols are designed for kitchens, dining areas, and hotel back-of-house operations.",
    },
    {
      title: "Full Chemical Disclosure",
      icon: ShieldCheck,
      description: "Before any treatment, a signed Safety Data Sheet is handed to your duty manager. You always know exactly what's being used and where.",
    },
    {
      title: "Food-Safety Certified Team",
      icon: Award,
      description: "All technicians hold annual food-safety certifications. We share credentials with your compliance team on request.",
    },
    {
      title: "Audit-Ready Reporting",
      icon: FileText,
      description: "Signed digital reports after every visit, with quarterly FSSAI & HACCP dossiers formatted for health inspections.",
    },
  ];

  const steps = [
    { step: "01", title: "Diagnostic Site Audit", desc: "We map pest risk zones and entry points without disrupting kitchen operations." },
    { step: "02", title: "Custom Protocol Written", desc: "A written treatment plan details food-safe chemistry, bait placements, and visit frequency." },
    { step: "03", title: "Off-Peak Treatment", desc: "Executed during early morning or late night gaps — zero airborne exposure." },
    { step: "04", title: "Signed Visit Report", desc: "Before leaving, the technician hands a signed report and updates your compliance binder." },
  ];

  return (
    <div className="space-y-10">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brass">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Why Pestr */}
      <div>
        <h2 className="text-base font-semibold text-foreground mb-4">Why Pestr is different</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-brass/10 text-brass">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* How it works */}
      <div className="rounded-xl border border-border bg-muted/20 p-5">
        <h2 className="text-base font-semibold text-foreground mb-4">Our 4-step process</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((st) => (
            <div key={st.step} className="rounded-lg border border-border bg-background p-4">
              <span className="text-xs font-bold text-brass">Step {st.step}</span>
              <h3 className="mt-1 text-sm font-semibold text-foreground">{st.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Small book CTA — bottom */}
      <div className="rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-muted-foreground">Want to see how we work at your property?</p>
        <div className="flex gap-3 shrink-0">
          <a
            href={getWhatsAppLink("Hi Pestr! I'd like to schedule a complimentary site walk.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Book Site Walk
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground hover:border-brass"
          >
            Contact Us <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <ServicePageLayout
      heroTitle="Built Exclusively for Hospitality Pest Control"
      heroText="We focus on hotels, restaurants, and commercial kitchens — combining food-safe chemistry, signed visit logs, and a written 30-day guarantee."
      bullets={["100% hospitality focused", "Food-safety certified team", "Audit-ready reporting", "30-day written guarantee"]}
      proofPoints={[
        { title: "Designed for Kitchens", text: "Protocols and chemistry built to satisfy FSSAI health department audits with zero kitchen disruption." },
        { title: "Dedicated Technicians", text: "Your property is assigned a primary technician who knows your layout and treatment history." },
      ]}
      serviceAreas={["Hotels & Resorts", "Restaurants", "Cloud Kitchens", "Banquets"]}
      relatedLinks={[
        { to: "/services", label: "Services" },
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Contact" },
      ]}
      extraContent={<AboutContent />}
    />
  );
}
