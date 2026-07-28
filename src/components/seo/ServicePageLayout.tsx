import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import Logo from "@/components/ui/logo";
import { ShieldCheck, FileText, Sparkles, MessageCircle, Phone } from "lucide-react";
import { getWhatsAppLink, TEL_LINK, WA_FORMATTED, COMPANY_NAME, SITE_URL } from "@/lib/constants";

type ServicePageLayoutProps = {
  heroTitle: string;
  heroText: string;
  bullets: string[];
  proofPoints: Array<{ title: string; text: string }>;
  serviceAreas: string[];
  relatedLinks: Array<{ to: string; label: string }>;
  extraContent?: ReactNode;
};

function NavLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to as any}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:font-semibold"
    >
      {children}
    </Link>
  );
}

export default function ServicePageLayout({
  heroTitle,
  heroText,
  bullets,
  proofPoints,
  serviceAreas,
  relatedLinks,
  extraContent,
}: ServicePageLayoutProps) {
  const waLink = getWhatsAppLink("Hi, I'd like to book a site inspection for my property.");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: COMPANY_NAME,
            url: SITE_URL,
          }),
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 h-14">
          <Link to="/" className="flex items-center" aria-label="Pestr Home">
            <Logo />
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Get a Quote
          </a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-grow mx-auto w-full max-w-5xl px-6 py-12 space-y-12">

        {/* Hero — title + text only, no CTA */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass">Pestr</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">{heroTitle}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{heroText}</p>
        </section>

        {/* Bullets */}
        {bullets.length > 0 && (
          <aside className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-base font-semibold text-foreground mb-4">
              <ShieldCheck className="h-5 w-5 text-brass" />
              Why hospitality teams choose Pestr
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 shrink-0 text-brass" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Proof Points */}
        {proofPoints.length > 0 && (
          <section className="grid gap-4 md:grid-cols-2">
            {proofPoints.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <FileText className="h-5 w-5 text-brass" />
                  {item.title}
                </div>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </section>
        )}

        {/* Extra Content from the page */}
        {extraContent}

        {/* Service Areas */}
        {serviceAreas.length > 0 && (
          <section className="rounded-xl border border-border bg-muted/30 p-5">
            <h2 className="text-sm font-semibold text-foreground mb-3">Properties we serve</h2>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                  {area}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Book CTA — always last, compact */}
        <section className="rounded-xl border border-brass/30 bg-brass/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-foreground">Ready to protect your property?</h2>
            <p className="mt-1 text-xs text-muted-foreground">Book a complimentary site inspection — we respond within 24 hours.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
            </a>
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-xs font-semibold text-foreground hover:border-brass"
            >
              <Phone className="h-3.5 w-3.5 text-brass" /> {WA_FORMATTED}
            </a>
          </div>
        </section>

        {/* Related Pages */}
        {relatedLinks.length > 0 && (
          <nav aria-label="Related pages" className="flex flex-wrap gap-2 border-t border-border pt-6">
            <span className="text-xs text-muted-foreground self-center mr-2">More:</span>
            {relatedLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                className="rounded-full border border-border px-3.5 py-1 text-xs text-muted-foreground hover:border-brass hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-5xl px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <span>© {new Date().getFullYear()} Pestr</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
