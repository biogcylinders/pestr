import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import Logo from "@/components/ui/logo";
import {
  ShieldCheck,
  FileText,
  Beaker,
  BadgeCheck,
  Check,
  X,
  Minus,
  ChevronDown,
  MessageCircle,
  Clock3,
  Users,
  Building2,
  ChefHat,
  Hotel,
  Sparkles,
  Download,
  Phone,
  Bug,
  Rat,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppLink, TEL_LINK, WA_FORMATTED, WA_NUMBER } from "@/lib/constants";

const WA_LINK = getWhatsAppLink();

function WhatsAppButton({
  children = "Chat on WhatsApp",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: "primary" | "ghost" | "accent";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    accent: "bg-brass text-primary-foreground hover:brightness-95",
    ghost: "border border-border text-foreground hover:border-brass hover:text-primary",
  }[variant];
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-widest text-brass">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14 md:h-16">
        <Link to="/" className="flex items-center font-semibold" aria-label="Pestr Home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <WhatsAppButton variant="primary" className="px-4 py-2 text-xs">
          WhatsApp us
        </WhatsAppButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            Now serving 240+ properties across India
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Trusted pest control for <span className="text-brass">hotels, restaurants and kitchens.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            We protect guest experience, food safety and compliance with clear treatment plans, documented visits and a written 30-day guarantee for hospitality properties.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton variant="primary" className="px-6 py-3 text-base">
              Book a free site inspection
            </WhatsAppButton>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-brass"
            >
              <Download className="h-4 w-4" /> View sample report
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> FSSAI-aligned</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> Food-safe chemistry</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> 30-day guarantee</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> 24-hr response</span>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <FileText className="h-4 w-4 text-brass" /> Visit report · #142
            </div>
            <span className="rounded-full bg-brass/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brass">
              Compliant
            </span>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["Property", "Grand Kitchen, Delhi"],
              ["Technician", "Rajesh K."],
              ["Zones checked", "8 / 8"],
              ["Chemical used", "Imidacloprid gel 2.15%"],
              ["Sightings", "0"],
              ["Signed off by", "Chef Anand · 08:04 AM"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-dashed border-border pb-2 last:border-0">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-medium text-foreground">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
            You get one of these after every visit — printable and audit-ready.
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: <Beaker />, title: "Complete treatment transparency", body: "Know exactly what was used, where it was applied, and why." },
    { icon: <FileText />, title: "Service reports after every visit", body: "Signed service reports with treatment history and audit-ready documentation." },
    { icon: <BadgeCheck />, title: "30-day written guarantee", body: "If pest activity returns within 30 days, we'll retreat the affected area at no additional cost." },
    { icon: <ChefHat />, title: "Food-safe treatment protocols", body: "Treatment methods designed for kitchens, restaurants and hospitality spaces." },
    { icon: <Users />, title: "Dedicated technician", body: "One dedicated technician familiar with your property and treatment history." },
    { icon: <Clock3 />, title: "Flexible scheduling", body: "Early mornings, late evenings or between operations—without disrupting guests." },
  ];
  return (
    <Section id="why" eyebrow="Everything You'll Get With Pestr" title="Everything included with every service visit." sub="Every property receives the same transparent, documented service—every visit.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brass/60">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-brass/10 text-brass [&>svg]:h-4 [&>svg]:w-4">{it.icon}</div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* Added Section: Contextual Internal Links for Core Services */
function CoreServices() {
  const services = [
    {
      title: "Hotel & Resort Pest Control",
      desc: "Discreet room & public space treatments guaranteed for zero guest disturbance.",
      icon: <Hotel className="h-5 w-5 text-brass" />,
      link: "/services",
    },
    {
      title: "Restaurant & Cafe Defense",
      desc: "Food-safe barrier treatments designed around active kitchen operating hours.",
      icon: <ChefHat className="h-5 w-5 text-brass" />,
      link: "/services",
    },
    {
      title: "Commercial Kitchen Control",
      desc: "FSSAI & HACCP audit-compliant pest barriers for heavy cooking environments.",
      icon: <Building2 className="h-5 w-5 text-brass" />,
      link: "/services",
    },
    {
      title: "Cockroach Eradication",
      desc: "Odorless matrix gel baiting with zero operational downtime for kitchen staff.",
      icon: <Bug className="h-5 w-5 text-brass" />,
      link: "/services",
    },
    {
      title: "Rodent Control Protocol",
      desc: "Tamper-resistant baiting and physical gap exclusion for storage & prep areas.",
      icon: <Rat className="h-5 w-5 text-brass" />,
      link: "/services",
    },
  ];

  return (
    <Section
      id="services-overview"
      eyebrow="Specialized Solutions"
      title="Targeted protocols for every hospitality space."
      sub="Purpose-built pest management designed for strict food-safety standards and guest-first environments."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.title}
            to={s.link}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-brass/80 shadow-sm"
          >
            <div>
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brass/10">
                {s.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-brass transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-brass">
              Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Chemicals() {
  const items = [
    { name: "Alphacypermethrin", cls: "Pyrethroid", use: "Perimeter barrier · back-of-house", residual: "Low", food: "Non-food-contact zones only" },
    { name: "Deltamethrin", cls: "Pyrethroid", use: "Void treatment · quick knockdown", residual: "Low", food: "WHO food-safety approved" },
    { name: "Imidacloprid Gel", cls: "Neonicotinoid", use: "Cockroach control · targeted", residual: "Sealed matrix", food: "Zero airborne exposure" },
    { name: "Boric Acid", cls: "Inorganic", use: "Long-term crawling insect control", residual: "Very low", food: "Storage areas · sealed placement" },
  ];
  return (
    <Section
      id="chemicals"
      eyebrow="Chemical transparency"
      title="Every treatment is fully documented."
      sub="Every treatment includes the products used, application areas, dosage information and corresponding safety documentation."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((c) => (
          <div key={c.name} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <Beaker className="h-4 w-4 text-brass" />
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{c.cls}</span>
            </div>
            <div className="mt-4 text-base font-semibold text-foreground">{c.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">Residual · {c.residual}</div>
            <div className="mt-4 space-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
              <div><span className="text-foreground">Use — </span>{c.use}</div>
              <div><span className="text-foreground">Food safety — </span>{c.food}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Docs() {
  const lines: [string, string][] = [
    ["Property", "The Grand Palace, Delhi"],
    ["Visit", "#142 · 14 March 2026"],
    ["Lead technician", "Rajesh K. (SNT-0421)"],
    ["Zones inspected", "08 of 08"],
    ["Active ingredients", "Imidacloprid Gel 2.15%"],
    ["Sightings reported", "0"],
    ["Bait stations replaced", "4"],
    ["Signed off by", "Chef Anand · 08:04 AM"],
  ];
  return (
    <Section id="docs" eyebrow="Documentation" title="Documentation after every visit.">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Receive signed service reports after every visit, along with quarterly compliance documentation for audits and internal records.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Signed service report per visit",
              "Monthly summary with photos",
              "Quarterly audit-ready PDF",
              "Chemistry & SDS library included",
            ].map((l) => (
              <li key={l} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" /> {l}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton>Ask for a sample report</WhatsAppButton>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-muted/40 p-5 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="flex items-center gap-2 font-sans text-sm font-semibold text-foreground">
              <FileText className="h-4 w-4 text-brass" /> Sample visit report
            </span>
            <span className="rounded-full bg-brass/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brass">Compliant</span>
          </div>
          <div className="mt-4 space-y-2 text-muted-foreground">
            {lines.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[130px_1fr] gap-3">
                <span className="uppercase tracking-wider text-[10px] text-brass">{k}</span>
                <span className="text-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Guarantee() {
  return (
    <section id="guarantee" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-border bg-primary p-10 text-primary-foreground md:p-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-xs uppercase tracking-widest">
              <BadgeCheck className="h-3.5 w-3.5" /> 30-day guarantee
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
              See a pest within 30 days? We're back in 24 hours — free.
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              It's in writing on every contract. No callout fee, no arguments, no fine print. That's the whole promise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton variant="accent">Ask about the guarantee</WhatsAppButton>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-5 py-3 text-sm hover:border-brass"
              >
                <Phone className="h-4 w-4" /> {WA_FORMATTED}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["30", "days covered"],
              ["24", "hr response"],
              ["₹0", "callout fee"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                <div className="text-3xl font-semibold">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-primary-foreground/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows: [string, boolean | "partial", boolean | "partial", boolean][] = [
    ["Chemical transparency", false, "partial", true],
    ["Service reports", "partial", true, true],
    ["Food-safe protocol", "partial", "partial", true],
    ["30-day guarantee", false, false, true],
    ["Hospitality focus", false, false, true],
    ["Custom kitchen plan", false, "partial", true],
    ["Audit documentation", false, "partial", true],
    ["Treatment history", false, "partial", true],
    ["Scheduled visits", false, false, true],
  ];
  const cell = (v: boolean | "partial") => {
    if (v === true) return <Check className="mx-auto h-4 w-4 text-brass" strokeWidth={2.5} />;
    if (v === "partial") return <Minus className="mx-auto h-4 w-4 text-muted-foreground" />;
    return <X className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  };
  return (
    <Section eyebrow="Compare" title="How we stack up.">
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-4 text-left font-medium">Feature</th>
              <th className="px-5 py-4 font-medium">Local vendor</th>
              <th className="px-5 py-4 font-medium">National generalist</th>
              <th className="bg-primary px-5 py-4 font-medium text-primary-foreground">Pestr</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b, c]) => (
              <tr key={label as string} className="border-b border-border last:border-0">
                <td className="px-5 py-3.5 font-medium">{label}</td>
                <td className="px-5 py-3.5 text-center">{cell(a)}</td>
                <td className="px-5 py-3.5 text-center">{cell(b)}</td>
                <td className="bg-primary/5 px-5 py-3.5 text-center">{cell(c)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { t: "Day 0", title: "Free site walk", body: "We visit, look at every zone and give you a diagnostic. No pitch, no obligation." },
    { t: "Day 3", title: "Custom protocol", body: "Chemistry, bait placement, visit schedule — written up and approved with your food-safety officer." },
    { t: "Day 7", title: "First treatment", body: "Done off-hours. Full chemical disclosure handed to your duty manager." },
    { t: "Monthly", title: "Scheduled visits", body: "Same technician, same window, printed report before they leave." },
  ];
  return (
    <Section eyebrow="How it works" title="Four simple steps to get started.">
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brass">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brass text-primary-foreground">{i + 1}</span>
              {s.t}
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Industries() {
  const items = [
    { icon: <Hotel />, name: "Hotels", body: "5-star, boutique and business hotels." },
    { icon: <ChefHat />, name: "Restaurants", body: "Fine dining, casual and chain outlets." },
    { icon: <Building2 />, name: "Banquets", body: "Wedding halls and convention venues." },
    { icon: <Sparkles />, name: "Cloud kitchens", body: "Multi-brand and central production units." },
  ];
  return (
    <Section eyebrow="Who we serve" title="Built for hospitality — nothing else.">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.name} className="rounded-xl border border-border bg-card p-5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-brass/10 text-brass [&>svg]:h-4 [&>svg]:w-4">{it.icon}</div>
            <div className="mt-4 text-base font-semibold">{it.name}</div>
            <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Let's build a custom plan for your property."
      sub="Pricing is customized after a complimentary site inspection."
    >
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brass">
              <Sparkles className="h-3.5 w-3.5" /> Built around your property
            </div>
            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
              No cookie-cutter packages.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Every kitchen, hotel and outlet is different. After a free site inspection we put together a plan that fits your zones, visit windows and audit calendar — with pricing that reflects only what you actually need.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Free site inspection",
                "Written protocol in 72 hours",
                "Transparent line-item pricing",
                "No lock-in surprises",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" /> {l}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton variant="primary">Build my custom plan</WhatsAppButton>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium hover:border-brass"
              >
                <Phone className="h-4 w-4" /> {WA_FORMATTED}
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-dashed border-border bg-muted/40 p-6 text-sm">
            <div className="text-xs font-medium uppercase tracking-widest text-brass">What you get</div>
            <div className="mt-4 space-y-3">
              {[
                ["Site walk", "On your schedule"],
                ["Custom protocol", "Within 72 hours"],
                ["Written quote", "Line-item, no jargon"],
                ["Guarantee", "30 days, in writing"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-dashed border-border pb-2 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    { q: "How is Pestr different from a national pest-control brand?", a: "We only serve hospitality — kitchens, F&B outlets and audit cycles. Everything is designed for that, not for warehouses or offices." },
    { q: "Do you disclose every chemical?", a: "Yes. A signed Safety Data Sheet is handed to your duty manager before any treatment. The full library is in our chemicals section." },
    { q: "What if we see a pest between visits?", a: "Message us on WhatsApp. A lead technician is on-site within 24 hours — at no cost, as part of the 30-day guarantee." },
    { q: "Will you fit into our FSSAI documentation?", a: "That's the default. Every property gets a quarterly dossier formatted for FSSAI, HACCP and internal audits." },
    { q: "Are your technicians food-safety trained?", a: "Yes, with annual refresher certification. We share certificates with your compliance team on request." },
    { q: "What's the minimum contract length?", a: "12 months. Shorter engagements don't give us enough baseline data to stand behind the guarantee." },
  ];
  const [open, setOpen] = useState<number>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {items.map((it, i) => {
          const isOpen = i === open;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-btn-${i}`;
          return (
            <div key={it.q}>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-base font-medium">{it.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-5 pb-5 pr-10 text-sm leading-relaxed text-muted-foreground"
                >
                  {it.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-2xl border border-border bg-muted/40 px-8 py-14 text-center md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Book a complimentary site inspection.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Schedule a complimentary site inspection. We'll assess your property and provide a customized treatment plan within 72 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton variant="primary" className="px-6 py-3 text-base">
            WhatsApp {WA_NUMBER}
          </WhatsAppButton>
          <a
            href={TEL_LINK}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-brass"
          >
            <Phone className="h-4 w-4" /> Call us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center font-semibold">
          <Logo />
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            WhatsApp {WA_NUMBER}
          </a>
          <a href="#docs" className="hover:text-foreground">Sample report</a>
          <a href="#chemicals" className="hover:text-foreground">Chemistry</a>
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link to="/faq" className="hover:text-foreground">FAQ</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms</Link>
          <span>© {new Date().getFullYear()} Pestr</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brass px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:brightness-95 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-4 w-4" /> WhatsApp
    </a>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <WhyUs />
        <CoreServices />
        <Chemicals />
        <Docs />
        <Guarantee />
        <Comparison />
        <Process />
        <Industries />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}