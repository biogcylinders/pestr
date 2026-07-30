import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import Logo from "@/components/ui/logo";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppLink, COMPANY_NAME, SITE_URL } from "@/lib/constants";

type ServicePageLayoutProps = {
  heroTitle: string;
  heroText: string;
  bullets?: string[];
  proofPoints?: Array<{ title: string; text: string }>;
  serviceAreas?: string[];
  relatedLinks?: Array<{ to: string; label: string }>;
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
  extraContent,
}: ServicePageLayoutProps) {
  const waLink = getWhatsAppLink("Hi, I'd like to book a site inspection for my property.");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
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
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
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
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-2xs"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Get a Quote
          </a>
        </nav>
      </header>

      {/* Hero Banner Header */}
      <section className="border-b border-border/60 bg-muted/20 py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            COMMERCIAL PEST SOLUTIONS
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-3xl">
            {heroText}
          </p>
        </div>
      </section>

      {/* Main Card Grid Area */}
      <main className="flex-grow mx-auto w-full max-w-6xl px-6 py-8 md:py-10">
        {extraContent}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-auto">
        <div className="mx-auto max-w-6xl px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <span>© {new Date().getFullYear()} Pestr</span>
          </div>
        </div>
      </footer>
    </div>
  );
}