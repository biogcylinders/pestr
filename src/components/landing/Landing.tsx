import { useMemo, useState, type ReactNode } from "react";
import {
  ShieldCheck,
  FileText,
  Beaker,
  BadgeCheck,
  ArrowRight,
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
} from "lucide-react";

const WA_NUMBER = "9648116960";
const WA_LINK = `https://wa.me/91${WA_NUMBER}?text=${encodeURIComponent("Hi, I'd like a pest-control quote for my property.")}`;

function WhatsAppButton({ children = "Chat on WhatsApp", variant = "primary", className = "" }: { children?: ReactNode; variant?: "primary" | "ghost" | "accent"; className?: string }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-forest-deep",
    accent: "bg-brass text-primary-foreground hover:brightness-95",
    ghost: "border border-border text-foreground hover:border-brass hover:text-primary",
  }[variant];
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${variants} ${className}`}>
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, sub, children }: { id?: string; eyebrow?: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-brass">{eyebrow}</div>}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
        {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <span className="text-base">Sentinel</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#why" className="hover:text-foreground">Why us</a>
          <a href="#chemicals" className="hover:text-foreground">Chemicals</a>
          <a href="#docs" className="hover:text-foreground">Docs</a>
          <a href="#guarantee" className="hover:text-foreground">Guarantee</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </div>
        <WhatsAppButton variant="primary" className="px-4 py-2 text-xs">WhatsApp us</WhatsAppButton>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
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
            Pest control that <span className="text-brass">shows its work.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Simple, honest pest management for kitchens, hotels and restaurants — with every chemical disclosed, every visit documented, and a written 30-day guarantee.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton variant="primary" className="px-6 py-3 text-base">Get a quote on WhatsApp</WhatsAppButton>
            <a href="#docs" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-brass">
              <Download className="h-4 w-4" /> Sample report
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> FSSAI-aligned</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> Food-safe chemistry</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> 30-day guarantee</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brass" /> 24-hr response</span>
          </div>
        </div>

        {/* Right: simple UI mock card, no image */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <FileText className="h-4 w-4 text-brass" /> Visit report · #142
            </div>
            <span className="rounded-full bg-brass/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brass">Compliant</span>
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

/* ---------- Why choose us ---------- */
function WhyUs() {
  const items = [
    { icon: <Beaker />, title: "Full chemical transparency", body: "Every active ingredient we use — disclosed by name, dosage and safety data. No hidden mixes." },
    { icon: <FileText />, title: "Docs after every visit", body: "Printable service reports and monthly dossiers, ready to hand to an FSSAI auditor." },
    { icon: <BadgeCheck />, title: "30-day written guarantee", body: "See a pest within 30 days of a visit? We come back within 24 hours. No charge, no excuses." },
    { icon: <ChefHat />, title: "Food-safe by default", body: "Protocols designed with chefs and food-safety officers — not warehouses or offices." },
    { icon: <Users />, title: "Same technician, every time", body: "One lead tech per property. They know your kitchen, so nothing gets missed." },
    { icon: <Clock3 />, title: "Off-hours visits", body: "We work around your service — early mornings, late nights, banquet gaps. Guests never notice." },
  ];
  return (
    <Section id="why" eyebrow="Why choose us" title="Six reasons hotels switch to Sentinel." sub="Straightforward pest control built for hospitality — no jargon, no surprises.">
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

/* ---------- Chemicals ---------- */
function Chemicals() {
  const items = [
    { name: "Alphacypermethrin", cls: "Pyrethroid", use: "Perimeter barrier · back-of-house", residual: "Low", food: "Non-food-contact zones only" },
    { name: "Deltamethrin", cls: "Pyrethroid", use: "Void treatment · quick knockdown", residual: "Low", food: "WHO food-safety approved" },
    { name: "Imidacloprid Gel", cls: "Neonicotinoid", use: "Cockroach control · targeted", residual: "Sealed matrix", food: "Zero airborne exposure" },
    { name: "Boric Acid", cls: "Inorganic", use: "Long-term crawling insect control", residual: "Very low", food: "Storage areas · sealed placement" },
  ];
  return (
    <Section id="chemicals" eyebrow="Chemical transparency" title="You'll always know what we spray." sub="Every chemical we use, listed openly. Safety data sheets handed over before any treatment starts.">
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

/* ---------- Documentation ---------- */
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
    <Section id="docs" eyebrow="Documentation" title="Every visit comes with paperwork.">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            You get a printable service report after every visit and a full compliance dossier every quarter — formatted for FSSAI, HACCP and hotel-chain audits. Nothing extra to prepare when the auditor walks in.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Signed service report per visit", "Monthly summary with photos", "Quarterly audit-ready PDF", "Chemistry & SDS library included"].map((l) => (
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
            <span className="flex items-center gap-2 font-sans text-sm font-semibold text-foreground"><FileText className="h-4 w-4 text-brass" /> Sample visit report</span>
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

/* ---------- Guarantee ---------- */
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
              <a href={`tel:+91${WA_NUMBER}`} className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-5 py-3 text-sm hover:border-brass">
                <Phone className="h-4 w-4" /> +91 {WA_NUMBER}
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

/* ---------- Comparison ---------- */
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
              <th className="bg-primary px-5 py-4 font-medium text-primary-foreground">Sentinel</th>
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

/* ---------- Process ---------- */
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

/* ---------- Industries ---------- */
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

/* ---------- Pricing ---------- */
function Pricing() {
  const tiers = [
    { name: "Starter", price: "₹32k", tag: "Up to 80 keys", features: ["Monthly visits", "Quarterly dossier", "One outlet included", "Chemical disclosure"] },
    { name: "Growth", price: "₹58k", tag: "Up to 200 keys", features: ["Weekly visits", "Monthly + quarterly dossier", "All F&B outlets", "Dedicated lead technician", "24-hr sighting response"], popular: true },
    { name: "Scale", price: "Custom", tag: "200+ keys · multi-property", features: ["Resident technician option", "Live dashboard", "Bespoke kitchen protocols", "Annual executive review"] },
  ];
  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple monthly plans." sub="Indicative pricing — the final number comes after a free site walk.">
      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`flex h-full flex-col rounded-2xl border p-6 ${t.popular ? "border-brass bg-card shadow-sm" : "border-border bg-card"}`}>
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium uppercase tracking-wider text-brass">{t.tag}</div>
              {t.popular && <span className="rounded-full bg-brass px-2 py-0.5 text-[10px] font-medium text-primary-foreground">Popular</span>}
            </div>
            <div className="mt-3 text-xl font-semibold">{t.name}</div>
            <div className="mt-2 text-4xl font-semibold text-foreground">
              {t.price}<span className="ml-1 text-sm font-normal text-muted-foreground">/mo</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />{f}</li>
              ))}
            </ul>
            <WhatsAppButton variant={t.popular ? "accent" : "primary"} className="mt-8 w-full">Get started</WhatsAppButton>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "How is Sentinel different from a national pest-control brand?", a: "We only serve hospitality — kitchens, F&B outlets and audit cycles. Everything is designed for that, not for warehouses or offices." },
    { q: "Do you disclose every chemical?", a: "Yes. A signed Safety Data Sheet is handed to your duty manager before any treatment. The full library is in our chemicals section." },
    { q: "What if we see a pest between visits?", a: "Message us on WhatsApp. A lead technician is on-site within 24 hours — at no cost, as part of the 30-day guarantee." },
    { q: "Will you fit into our FSSAI documentation?", a: "That's the default. Every property gets a quarterly dossier formatted for FSSAI, HACCP and internal audits." },
    { q: "Are your technicians food-safety trained?", a: "Yes, with annual refresher certification. We share certificates with your compliance team on request." },
    { q: "What's the minimum contract length?", a: "12 months. Shorter engagements don't give us enough baseline data to stand behind the guarantee." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {items.map((it, i) => {
          const isOpen = i === open;
          return (
            <div key={it.q}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left hover:bg-muted/50">
                <span className="text-base font-medium">{it.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">{it.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-2xl border border-border bg-muted/40 px-8 py-14 text-center md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready when you are.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Book a free site walk. We'll come, look, and send you a written protocol within 72 hours.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton variant="primary" className="px-6 py-3 text-base">WhatsApp {WA_NUMBER}</WhatsAppButton>
          <a href={`tel:+91${WA_NUMBER}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-brass">
            <Phone className="h-4 w-4" /> Call us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </span>
          Sentinel
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp {WA_NUMBER}</a>
          <a href="#docs" className="hover:text-foreground">Sample report</a>
          <a href="#chemicals" className="hover:text-foreground">Chemistry</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <span>© {new Date().getFullYear()} Sentinel</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp button ---------- */
function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brass px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:brightness-95"
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

/* eslint-disable @typescript-eslint/no-unused-vars */
const _unused_useMemo = useMemo;

/* ---------- Small primitives ---------- */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        filter: shown ? "blur(0)" : "blur(6px)",
        transition: `opacity 900ms cubic-bezier(.2,.8,.2,1) ${delay}ms, transform 900ms cubic-bezier(.2,.8,.2,1) ${delay}ms, filter 900ms cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "", duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function RippleButton({
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "brass";
  className?: string;
  onClick?: () => void;
}) {
  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--rx", `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty("--ry", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  const base =
    "ripple-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-forest-deep hover:shadow-lift",
    brass: "bg-brass text-primary-foreground hover:brightness-110 hover:shadow-lift",
    ghost: "text-foreground hover:text-primary border border-border hover:border-brass bg-transparent",
  }[variant];
  return (
    <button onMouseMove={handleMove} onClick={onClick} className={`${base} ${variants} ${className}`}>
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brass">
      <span className="h-px w-8 bg-brass" />
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-16 text-brass">
      <span className="h-px flex-1 bg-border" />
      <Sparkles className="h-4 w-4" />
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-xl">
          <ShieldCheck className="h-5 w-5 text-brass" />
          <span className="tracking-tight">Sentinel</span>
          <span className="text-xs text-muted-foreground">/ Hospitality</span>
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {["Why Sentinel", "Process", "Pricing", "Guarantee", "FAQ"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-foreground/70 transition-colors hover:text-primary">
              {l}
            </a>
          ))}
        </div>
        <RippleButton variant="primary" className="px-5 py-2 text-xs">
          Request Assessment
        </RippleButton>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 40% at 80% 20%, oklch(0.82 0.06 82 / 0.35), transparent 60%), radial-gradient(50% 40% at 10% 90%, oklch(0.32 0.045 155 / 0.15), transparent 60%)" }} />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <SectionLabel>Est. 2011 · India&#39;s hospitality sector</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Discreet protection for<br />
              <span className="italic text-brass">the properties</span> that<br />
              cannot be seen failing.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Food-safe, audit-ready pest management built exclusively for luxury hotels,
              restaurants and banquets. Full chemical transparency, monthly documentation,
              and a written 30-day guarantee.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <RippleButton variant="primary" className="px-8 py-4 text-base">
                Request Site Assessment <ArrowRight className="h-4 w-4" />
              </RippleButton>
              <RippleButton variant="ghost" className="px-8 py-4 text-base">
                View Sample Report
              </RippleButton>
            </div>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 text-xs">
              {[
                { icon: <FileCheck2 className="h-4 w-4" />, label: "FSSAI Aligned" },
                { icon: <Leaf className="h-4 w-4" />, label: "Food-Safe Protocol" },
                { icon: <BadgeCheck className="h-4 w-4" />, label: "30-Day Guarantee" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-start gap-2 border-l border-brass/40 pl-4">
                  <span className="text-brass">{b.icon}</span>
                  <span className="uppercase tracking-widest text-foreground/70">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brass/20 via-transparent to-forest/20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.5rem] shadow-lift ring-1 ring-border">
              <img src={heroImg} alt="Editorial illustration of luxury kitchen, hotel corridor and compliance documents" width={1280} height={1280} className="h-full w-full object-cover" />
            </div>
            {/* floating UI panels */}
            <div className="absolute -left-6 top-10 hidden animate-fade-up rounded-2xl bg-ivory/95 p-4 shadow-editorial ring-1 ring-border backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-forest text-primary-foreground"><Activity className="h-4 w-4" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Compliance Score</div>
                  <div className="font-display text-xl">98<span className="text-sm text-brass">/100</span></div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-16 hidden animate-fade-up rounded-2xl bg-ivory/95 p-4 shadow-editorial ring-1 ring-border backdrop-blur md:block" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-brass text-primary-foreground"><CalendarCheck className="h-4 w-4" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Next Visit</div>
                  <div className="font-display text-sm">Tue · 07:30 AM</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Trusted strip ---------- */

function TrustStrip() {
  const names = ["The Leela", "ITC Hospitality", "Oberoi Group", "Taj Palaces", "Marriott", "Hyatt Regency"];
  return (
    <div className="border-y border-border bg-ivory/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="font-display text-sm normal-case tracking-normal italic text-brass">Trusted across 240+ properties —</span>
        {names.map((n) => (
          <span key={n} className="opacity-70">{n}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Why Hotels Switch ---------- */

function WhySwitch() {
  const items = [
    { icon: <Beaker />, title: "Transparent chemistry", body: "Every active ingredient disclosed by name, class and residual profile — before it is applied." },
    { icon: <ChefHat />, title: "Kitchen-first protocols", body: "Bait, gel and monitoring choices approved by executive chefs and food safety officers." },
    { icon: <ScrollText />, title: "Audit-ready records", body: "Monthly compliance dossiers delivered as printable PDFs and searchable dashboards." },
    { icon: <Clock3 />, title: "Off-hours service windows", body: "Discreet visits scheduled around banquets, service and guest movement." },
    { icon: <Hotel />, title: "One team per property", body: "The same lead technician for the length of the contract. No rotating strangers." },
    { icon: <BadgeCheck />, title: "Written 30-day guarantee", body: "If a sighting is reported within 30 days of any visit, we return within 24 hours at no cost." },
  ];
  return (
    <section id="why-sentinel" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <SectionLabel>Why hotels switch to us</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">The pest-control category was never built for hospitality.</h2>
        <p className="mt-4 text-muted-foreground">We rebuilt it — around chefs, GMs, food safety officers, and the guest experience.</p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 60}>
            <div className="group h-full bg-ivory p-8 transition-colors duration-500 hover:bg-cream">
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-full bg-forest/5 text-forest-deep transition-all group-hover:bg-brass group-hover:text-primary-foreground">
                <span className="[&>svg]:h-5 [&>svg]:w-5">{it.icon}</span>
              </div>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Comparison table ---------- */

function Comparison() {
  const rows: [string, boolean | "partial", boolean | "partial", boolean][] = [
    ["Chemical Transparency", false, "partial", true],
    ["Detailed Service Reports", "partial", true, true],
    ["Food-safe Protocol", "partial", "partial", true],
    ["30-day Guarantee", false, false, true],
    ["Hospitality Focus", false, false, true],
    ["Custom Kitchen Plan", false, "partial", true],
    ["Audit Documentation", false, "partial", true],
    ["Complete Treatment History", false, "partial", true],
    ["Scheduled Visits with Lead Tech", false, false, true],
  ];
  const cell = (v: boolean | "partial") => {
    if (v === true) return <Check className="mx-auto h-5 w-5 text-brass" strokeWidth={2.5} />;
    if (v === "partial") return <Minus className="mx-auto h-5 w-5 text-muted-foreground" />;
    return <X className="mx-auto h-5 w-5 text-destructive/60" />;
  };
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Us vs traditional vendors</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">The differences that show up during an audit.</h2>
      </div>
      <Reveal>
        <div className="overflow-hidden rounded-2xl bg-ivory shadow-editorial ring-1 ring-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
                <th className="px-6 py-5 text-left font-medium">Capability</th>
                <th className="px-6 py-5 font-medium">Local Vendor</th>
                <th className="px-6 py-5 font-medium">National Generalist</th>
                <th className="bg-forest-deep px-6 py-5 font-medium text-primary-foreground">
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brass" /> Sentinel</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c], i) => (
                <tr key={label as string} className={`group border-b border-border/60 transition-colors last:border-0 hover:bg-cream ${i % 2 ? "" : ""}`}>
                  <td className="px-6 py-5 font-medium">{label}</td>
                  <td className="px-6 py-5 text-center">{cell(a)}</td>
                  <td className="px-6 py-5 text-center">{cell(b)}</td>
                  <td className="bg-forest-deep/5 px-6 py-5 text-center transition-colors group-hover:bg-brass/10">{cell(c)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Process Timeline ---------- */

function ProcessTimeline() {
  const steps = [
    { t: "Day 0", title: "Site assessment", body: "A lead technician walks every kitchen, storage, back-of-house corridor and rooftop. No sales pitch — just a diagnostic." },
    { t: "Day 3", title: "Custom protocol drafted", body: "Chemistry, bait placement, monitoring stations and visit cadence documented and approved by your food safety officer." },
    { t: "Day 7", title: "Baseline treatment", body: "Off-hours initial treatment with full chemical disclosure sheet handed to the duty manager." },
    { t: "Ongoing", title: "Monthly service visits", body: "Same technician, same time window, printed report before departure, digital dossier by end of day." },
    { t: "Quarterly", title: "Compliance dossier", body: "Full quarter of records compiled into an audit-ready PDF, delivered to the GM and food safety officer." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <SectionLabel>The process</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">A rhythm your property can rely on.</h2>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brass to-transparent md:left-1/2" />
        <div className="space-y-16">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`${i % 2 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"} pl-12`}>
                  <div className="text-xs uppercase tracking-[0.3em] text-brass">{s.t}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <div className="absolute left-4 top-1 md:left-1/2 md:-translate-x-1/2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-forest-deep text-primary-foreground ring-4 ring-cream">
                    <span className="text-[10px]">{i + 1}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Chemical transparency cards ---------- */

function Chemistry() {
  const items = [
    { name: "Alphacypermethrin", class: "Pyrethroid", use: "Perimeter barrier — back-of-house", residual: "Low", food: "Non-food-contact zones only" },
    { name: "Deltamethrin", class: "Pyrethroid", use: "Void treatment · quick knockdown", residual: "Low", food: "Approved under WHO food-safety guidelines" },
    { name: "Imidacloprid Gel", class: "Neonicotinoid", use: "Cockroach control · targeted crevice application", residual: "Long-lasting sealed matrix", food: "Sealed gel · zero airborne exposure" },
    { name: "Boric Acid", class: "Inorganic", use: "Long-term crawling insect control", residual: "Very low", food: "Storage areas only · sealed placement" },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Chemical transparency</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Nothing enters your property without a card.</h2>
        <p className="mt-4 text-muted-foreground">Every active ingredient we use is documented, classified and disclosed — hover to expand.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((c, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={c.name} delay={i * 60}>
              <div
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
                tabIndex={0}
                className={`group relative flex h-full flex-col rounded-2xl bg-ivory p-6 shadow-editorial ring-1 ring-border transition-all duration-500 card-lift ${isOpen ? "ring-brass" : ""}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <Beaker className="h-5 w-5 text-brass" />
                  <span className="rounded-full bg-forest/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest-deep">{c.class}</span>
                </div>
                <div className="font-display text-xl">{c.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Residual · {c.residual}</div>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                      <div><span className="text-foreground">Use — </span>{c.use}</div>
                      <div><span className="text-foreground">Food safety — </span>{c.food}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Compliance Timeline / Audit mistakes ---------- */

function AuditMistakes() {
  const mistakes = [
    { title: "Undocumented chemical use", body: "Auditors will ask for the SDS. If your vendor cannot produce one on the spot, that is a finding." },
    { title: "Missed monthly visits", body: "A single gap in the visit calendar is enough to compromise an FSSAI or hotel-chain audit." },
    { title: "Generic reports without site markers", body: "A report that could apply to any property proves nothing about yours." },
    { title: "Untrained on-property technicians", body: "The person walking your kitchen must have documented food-safety training." },
  ];
  return (
    <section className="bg-forest-deep py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brass">
            <span className="h-px w-8 bg-brass" /> Common audit mistakes
          </div>
          <h2 className="mt-4 font-display text-4xl text-primary-foreground md:text-5xl">The four findings that fail hospitality audits.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {mistakes.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="group flex gap-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 backdrop-blur transition-all hover:border-brass/50 hover:bg-primary-foreground/[0.07]">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass/50 font-display text-brass">{i + 1}</div>
                <div>
                  <h3 className="font-display text-xl text-primary-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / After Service Flow ---------- */

function BeforeAfter() {
  const rows = [
    { label: "Sighting response time", before: "48–72 hrs", after: "Under 24 hrs" },
    { label: "Reports per year", before: "0–2 (on request)", after: "12 monthly + 4 quarterly" },
    { label: "Chemical disclosure", before: "Ingredient list on request", after: "Signed SDS per treatment" },
    { label: "Technicians assigned", before: "Rotating pool", after: "One lead technician" },
    { label: "Audit findings", before: "3–7 per cycle", after: "Zero on documentation" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Before / After</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">What changes in the first ninety days.</h2>
      </div>
      <div className="grid gap-4 rounded-2xl bg-ivory p-4 shadow-editorial ring-1 ring-border">
        <div className="hidden grid-cols-3 gap-4 border-b border-border px-4 pb-3 text-xs uppercase tracking-widest text-muted-foreground md:grid">
          <span>Metric</span>
          <span>Before Sentinel</span>
          <span className="text-brass">After Sentinel</span>
        </div>
        {rows.map((r, i) => (
          <Reveal key={r.label} delay={i * 40}>
            <div className="grid gap-2 rounded-xl p-4 transition-colors hover:bg-cream md:grid-cols-3 md:items-center md:gap-4">
              <div className="font-medium">{r.label}</div>
              <div className="text-sm text-muted-foreground line-through decoration-destructive/40">{r.before}</div>
              <div className="flex items-center gap-2 font-display text-lg text-forest-deep">
                <Check className="h-4 w-4 text-brass" /> {r.after}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Risk Reduction Statistics ---------- */

function Stats() {
  const stats = [
    { end: 98, suffix: "%", label: "Audit pass rate" },
    { end: 240, suffix: "+", label: "Properties protected" },
    { end: 24, suffix: " hr", label: "Sighting response" },
    { end: 0, suffix: "", label: "Documentation findings", note: "in 2024" },
  ];
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="border-l border-brass/40 pl-5">
              <div className="font-display text-5xl text-forest-deep md:text-6xl">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}{s.note ? ` · ${s.note}` : ""}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Inspection Checklist ---------- */

function Checklist() {
  const items = [
    "Main kitchen — line stations, walk-ins, dry storage",
    "Banquet kitchens and holding areas",
    "F&B outlets — bars, pastry, room-service pantries",
    "Refuse holding rooms and back-of-house corridors",
    "Rooftop, terraces and cooling towers",
    "Loading bay and receiving zones",
    "Guest floors — corridor voids and pantries",
    "Exterior rodent stations and drainage covers",
  ];
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl shadow-lift ring-1 ring-border">
          <img src={kitchenImg} alt="Editorial illustration of luxury commercial kitchen" width={800} height={600} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </Reveal>
      <div>
        <SectionLabel>Inspection checklist</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Every square meter, every visit.</h2>
        <p className="mt-4 text-muted-foreground">Our standard walk covers the eight zones auditors ask about first.</p>
        <ul className="mt-8 divide-y divide-border rounded-2xl bg-ivory shadow-editorial ring-1 ring-border">
          {items.map((it, i) => (
            <Reveal key={it} delay={i * 30}>
              <li className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-cream">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-forest/5 text-forest-deep transition-colors group-hover:bg-brass group-hover:text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm">{it}</span>
                <span className="ml-auto text-xs uppercase tracking-widest text-muted-foreground">Zone {i + 1}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Monthly Visit Calendar ---------- */

function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const visits = new Set([4, 11, 18, 25]);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Monthly visit calendar</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Predictable, printable, protected.</h2>
      </div>
      <Reveal>
        <div className="rounded-2xl bg-ivory p-8 shadow-editorial ring-1 ring-border">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">March 2026</div>
              <div className="font-display text-2xl">Weekly Sentinel Visits</div>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brass" /> Scheduled visit</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-border" /> Off-day</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="text-center text-[10px] uppercase tracking-widest text-muted-foreground">{d}</div>
            ))}
            {days.map((d) => {
              const visit = visits.has(d);
              return (
                <div key={d} className={`group aspect-square rounded-lg border p-2 transition-all duration-300 ${visit ? "border-brass bg-brass/10 hover:bg-brass hover:text-primary-foreground" : "border-border bg-cream/50 hover:border-forest/30"}`}>
                  <div className="flex h-full flex-col justify-between">
                    <span className="font-display text-sm">{d}</span>
                    {visit && <Bell className="h-3 w-3 text-brass group-hover:text-primary-foreground" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Documentation Preview ---------- */

function DocPreview() {
  const lines = [
    "Property · The Leela Palace, Chanakyapuri",
    "Visit · #142 · 14 March 2026 · 07:12 AM",
    "Lead Technician · Rajesh K. (ID SNT-0421)",
    "Zones inspected · 08 of 08",
    "Active ingredients used · Imidacloprid Gel (2.15%)",
    "Sightings reported · 0",
    "Bait stations replaced · 4",
    "Guest impact · None",
    "Signed off · Chef Anand · 08:04 AM",
  ];
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <SectionLabel>Documentation preview</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">The paper trail that clears audits.</h2>
        <p className="mt-4 text-muted-foreground">A sample monthly visit report — the same format handed to your food safety officer.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <RippleButton variant="primary">Download Sample Report</RippleButton>
          <RippleButton variant="ghost">Request full quarterly dossier</RippleButton>
        </div>
      </div>
      <Reveal>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-brass/20 blur-2xl" />
          <div className="rounded-2xl bg-ivory p-8 shadow-lift ring-1 ring-border font-mono text-xs">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2 text-brass">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-display text-base normal-case tracking-normal not-italic text-foreground">Sentinel Service Report</span>
              </div>
              <span className="rounded-full bg-forest/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest-deep">Compliant</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              {lines.map((l) => {
                const [k, v] = l.split(" · ").length > 1 ? [l.split(" · ")[0], l.split(" · ").slice(1).join(" · ")] : [l, ""];
                return (
                  <div key={l} className="grid grid-cols-[130px_1fr] gap-4">
                    <span className="uppercase tracking-widest text-[10px] text-brass">{k}</span>
                    <span className="text-foreground">{v}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Guarantee — wax seal ---------- */

function Guarantee() {
  return (
    <section id="guarantee" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 rounded-3xl bg-gradient-forest p-12 text-primary-foreground shadow-lift md:grid-cols-[1fr_auto] md:items-center md:p-16">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brass">
            <span className="h-px w-8 bg-brass" /> The Sentinel Guarantee
          </div>
          <h2 className="mt-4 font-display text-4xl text-primary-foreground md:text-5xl">
            Zero sightings for thirty days<br />
            — or we return, no invoice.
          </h2>
          <p className="mt-6 max-w-xl text-primary-foreground/70">
            If a single verified pest sighting is reported within thirty days of any scheduled visit,
            a Sentinel lead technician will be on-property within 24 hours. No callout fee, no
            renegotiation, no explanations required.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <RippleButton variant="brass">Read the guarantee</RippleButton>
            <RippleButton variant="ghost" className="border-primary-foreground/20 text-primary-foreground hover:border-brass">
              Talk to a specialist
            </RippleButton>
          </div>
        </div>
        <div className="mx-auto">
          <div className="group relative h-56 w-56">
            <div className="absolute inset-0 rounded-full bg-brass shadow-[0_20px_60px_-20px_rgba(184,149,90,0.6)] transition-transform duration-700 ease-out group-hover:rotate-[8deg]">
              <div className="absolute inset-3 rounded-full border-2 border-dashed border-primary-foreground/30" />
              <div className="absolute inset-6 rounded-full border border-primary-foreground/40" />
              <div className="absolute inset-0 grid place-items-center text-center text-primary-foreground">
                <div>
                  <ShieldCheck className="mx-auto h-10 w-10" />
                  <div className="mt-2 font-display text-lg leading-tight italic">Sealed<br />Promise</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.3em]">30 days · 24 hr response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries served ---------- */

function Industries() {
  const items = [
    { img: hotelImg, name: "Luxury Hotels", body: "5-star and boutique properties across guest floors, F&B and back-of-house." },
    { img: restaurantImg, name: "Fine Dining", body: "Chef-driven restaurants, chains and stand-alone destination outlets." },
    { img: banquetImg, name: "Banquets & Events", body: "Convention halls, wedding banquets and outdoor pavilions." },
    { img: kitchenImg, name: "Cloud Kitchens", body: "Multi-brand kitchen facilities and central production units." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Industries served</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Built for properties where standards are the product.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 60}>
            <div className="group card-lift overflow-hidden rounded-2xl bg-ivory shadow-editorial ring-1 ring-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.name} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="font-display text-xl">{it.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Pricing calculator ---------- */

function Slider({ label, value, min, max, step = 1, onChange, unit }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void; unit?: string }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
        <span className="font-display text-2xl text-forest-deep">
          {value}
          {unit && <span className="ml-1 text-xs text-brass">{unit}</span>}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-brass"
        style={{
          background: `linear-gradient(to right, oklch(0.68 0.1 78) 0%, oklch(0.68 0.1 78) ${((value - min) / (max - min)) * 100}%, oklch(0.88 0.02 85) ${((value - min) / (max - min)) * 100}%, oklch(0.88 0.02 85) 100%)`,
        }}
      />
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${value ? "border-brass bg-brass/5" : "border-border bg-cream/50 hover:border-forest/30"}`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span className={`grid h-5 w-9 place-items-center rounded-full transition-colors ${value ? "bg-brass" : "bg-border"}`}>
        <span className={`h-4 w-4 rounded-full bg-ivory shadow transition-transform ${value ? "translate-x-2" : "-translate-x-2"}`} />
      </span>
    </button>
  );
}

function PricingCalculator() {
  const [rooms, setRooms] = useState(120);
  const [kitchen, setKitchen] = useState(3);
  const [banquet, setBanquet] = useState(true);
  const [restaurant, setRestaurant] = useState(true);
  const [stations, setStations] = useState(6);

  const monthly = useMemo(() => {
    const base = 18000;
    const roomsCost = rooms * 22;
    const kitchenCost = kitchen * 4500;
    const banquetCost = banquet ? 6500 : 0;
    const restaurantCost = restaurant ? 4200 : 0;
    const stationsCost = stations * 320;
    return Math.round(base + roomsCost + kitchenCost + banquetCost + restaurantCost + stationsCost);
  }, [rooms, kitchen, banquet, restaurant, stations]);

  const quarterly = Math.round(monthly * 3 * 0.95);
  const annualSavings = Math.round(monthly * 12 * 0.12);
  const pkg = rooms >= 200 ? "Palace" : rooms >= 100 ? "Grand" : "Boutique";

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Estimate calculator</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Price the protection your property needs.</h2>
        <p className="mt-4 text-muted-foreground">An indicative monthly estimate. Final pricing is confirmed after a physical site assessment.</p>
      </div>
      <div className="grid gap-8 rounded-3xl bg-ivory p-6 shadow-lift ring-1 ring-border md:p-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-8">
          <Slider label="Number of hotel rooms" value={rooms} min={20} max={500} step={10} onChange={setRooms} unit="keys" />
          <Slider label="Kitchen production size" value={kitchen} min={1} max={8} onChange={setKitchen} unit="stations" />
          <Slider label="Exterior rodent stations" value={stations} min={0} max={20} onChange={setStations} unit="units" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Toggle label="Restaurant outlet" value={restaurant} onChange={setRestaurant} />
            <Toggle label="Banquet hall" value={banquet} onChange={setBanquet} />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-forest p-8 text-primary-foreground">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brass/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-brass">Estimated monthly</div>
            <div className="mt-2 font-display text-6xl">
              ₹<CountUp end={monthly} duration={800} />
            </div>
            <div className="mt-1 text-sm text-primary-foreground/70">excluding taxes · 12-month agreement</div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-primary-foreground/10 pt-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Quarterly</div>
                <div className="mt-1 font-display text-2xl">₹{quarterly.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Annual saving</div>
                <div className="mt-1 font-display text-2xl text-brass">₹{annualSavings.toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-brass/40 bg-primary-foreground/5 px-4 py-3">
              <BadgeCheck className="h-5 w-5 text-brass" />
              <div className="text-sm">
                Recommended package · <span className="font-display text-brass">{pkg}</span>
              </div>
            </div>

            <RippleButton variant="brass" className="mt-8 w-full py-4">
              Request Final Site Assessment <ArrowRight className="h-4 w-4" />
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing cards ---------- */

function PricingCards() {
  const tiers = [
    { name: "Boutique", price: "₹32k", tag: "Up to 80 keys", features: ["Monthly visits", "Quarterly dossier", "One outlet included", "Standard chemistry"] },
    { name: "Grand", price: "₹58k", tag: "Up to 200 keys", features: ["Weekly visits", "Monthly + quarterly dossier", "All F&B outlets", "Full chemical transparency", "Dedicated lead technician"], popular: true },
    { name: "Palace", price: "Custom", tag: "200+ keys · multi-property", features: ["On-site resident technician", "Real-time dashboard", "24 hr sighting response", "Bespoke kitchen protocols", "Annual executive review"] },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <SectionLabel>Service packages</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Three packages, one standard.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className={`card-lift relative flex h-full flex-col rounded-2xl p-8 ring-1 transition-colors ${t.popular ? "bg-gradient-forest text-primary-foreground ring-brass" : "bg-ivory ring-border"}`}>
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brass px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">Most chosen</div>
              )}
              <div className={`text-xs uppercase tracking-[0.25em] ${t.popular ? "text-brass" : "text-brass"}`}>{t.tag}</div>
              <div className={`mt-3 font-display text-3xl ${t.popular ? "text-primary-foreground" : ""}`}>{t.name}</div>
              <div className={`mt-4 font-display text-5xl ${t.popular ? "text-primary-foreground" : "text-forest-deep"}`}>
                {t.price}<span className={`ml-1 text-sm ${t.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <ul className={`mt-8 space-y-3 text-sm ${t.popular ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <RippleButton variant={t.popular ? "brass" : "primary"} className="mt-10 w-full">
                Choose {t.name}
              </RippleButton>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  const quotes = [
    { q: "The first vendor whose reports we could hand directly to an auditor without editing.", who: "Aparna R.", role: "F&B Director · Luxury Chain, New Delhi" },
    { q: "One lead technician, four years, zero sightings. That is the entire review.", who: "Chef Vikram S.", role: "Executive Chef · Boutique Hotel, Goa" },
    { q: "The chemical transparency card is what convinced our food safety board.", who: "Meera D.", role: "Compliance Head · Palace Property, Jaipur" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, [quotes.length]);
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Client voices</SectionLabel>
        <div className="relative mt-10 min-h-[220px]">
          {quotes.map((quote, idx) => (
            <div
              key={quote.q}
              className="absolute inset-0 transition-all duration-700"
              style={{
                opacity: i === idx ? 1 : 0,
                transform: i === idx ? "translateY(0)" : "translateY(20px)",
                pointerEvents: i === idx ? "auto" : "none",
              }}
            >
              <Quote className="mx-auto h-8 w-8 text-brass" />
              <blockquote className="mt-6 font-display text-3xl italic leading-snug md:text-4xl">
                &ldquo;{quote.q}&rdquo;
              </blockquote>
              <div className="mt-8 text-sm">
                <div className="font-medium">{quote.who}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{quote.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-brass" : "w-2 bg-border"}`} aria-label={`Testimonial ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const items = [
    { q: "How is Sentinel different from a national pest-control brand?", a: "We work exclusively with hospitality properties. Every protocol, chemistry choice and reporting format is designed for kitchens, F&B outlets and audit cycles — not warehouses or offices." },
    { q: "Do you disclose every chemical you use?", a: "Yes. A signed Safety Data Sheet is handed to the duty manager before any active ingredient is applied on-property. The full ingredient library lives in our chemistry section." },
    { q: "What happens if there is a sighting between visits?", a: "A lead technician is dispatched within 24 hours at no additional cost, as part of our 30-day written guarantee." },
    { q: "Can we get you into our FSSAI documentation cycle?", a: "That is the default. Every property receives a quarterly dossier formatted specifically for FSSAI, HACCP and internal chain audits." },
    { q: "Are your technicians food-safety certified?", a: "Every on-property technician holds documented food-safety training, refreshed annually. Certificates are shared with your compliance team on request." },
    { q: "What is the minimum contract length?", a: "12 months. Shorter engagements do not allow us to establish the monitoring baseline needed for a real guarantee." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-14">
        <SectionLabel>Questions we hear often</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">The answers, in advance.</h2>
      </div>
      <div className="divide-y divide-border rounded-2xl bg-ivory shadow-editorial ring-1 ring-border">
        {items.map((it, i) => {
          const isOpen = i === open;
          return (
            <div key={it.q}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-cream">
                <span className="font-display text-lg md:text-xl">{it.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-brass transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className="grid overflow-hidden px-6 transition-all duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-forest px-8 py-20 text-center text-primary-foreground shadow-lift md:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 60% at 50% 0%, oklch(0.82 0.06 82 / 0.6), transparent 70%)" }} />
        <div className="relative mx-auto max-w-2xl">
          <SectionLabel>Begin</SectionLabel>
          <h2 className="mt-6 font-display text-5xl leading-tight text-primary-foreground md:text-6xl">
            A quieter kitchen<br /><span className="italic text-brass">starts with a walk.</span>
          </h2>
          <p className="mt-6 text-primary-foreground/70">
            A Sentinel lead technician will visit your property, produce a diagnostic within 72 hours,
            and hand you a written protocol proposal. No obligation, no pressure.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <RippleButton variant="brass" className="px-8 py-4">
              Request Site Assessment <ArrowRight className="h-4 w-4" />
            </RippleButton>
            <RippleButton variant="ghost" className="border-primary-foreground/20 px-8 py-4 text-primary-foreground hover:border-brass">
              Speak to a specialist
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sticky CTA + Footer ---------- */

function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}`}>
      <div className="flex items-center gap-3 rounded-full bg-forest-deep px-3 py-2 text-primary-foreground shadow-lift ring-1 ring-brass/40">
        <span className="hidden pl-3 text-xs md:inline">Ready to raise the standard?</span>
        <RippleButton variant="brass" className="px-5 py-2 text-xs">
          Request Assessment <ArrowRight className="h-3 w-3" />
        </RippleButton>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-ivory py-12 text-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl">
            <ShieldCheck className="h-5 w-5 text-brass" /> Sentinel
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Premium pest management for the hospitality sector. Based in New Delhi. Serving 12 cities.</p>
        </div>
        {[
          { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
          { h: "Services", l: ["Hotels", "Restaurants", "Banquets", "Cloud Kitchens"] },
          { h: "Resources", l: ["Sample Report", "Chemistry Library", "FSSAI Guide", "Blog"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-widest text-brass">{c.h}</div>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {c.l.map((x) => (
                <li key={x}><a href="#" className="hover:text-primary transition-colors">{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Sentinel Hospitality Services Pvt. Ltd.</span>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Chemical policy</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Root ---------- */

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <WhySwitch />
        <Comparison />
        <ProcessTimeline />
        <Chemistry />
        <AuditMistakes />
        <BeforeAfter />
        <Stats />
        <Checklist />
        <Calendar />
        <DocPreview />
        <Guarantee />
        <Industries />
        <PricingCalculator />
        <PricingCards />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}