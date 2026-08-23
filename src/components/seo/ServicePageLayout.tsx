import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import Logo from "@/components/ui/logo";
import { MessageCircle, ShieldCheck, Check } from "lucide-react";
import { getWhatsAppLink, COMPANY_NAME, SITE_URL } from "@/lib/constants";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import CityLinks, { RelatedServices } from "@/components/seo/ServiceLinks";
import SiteFooter from "@/components/layout/SiteFooter";

type ServicePageLayoutProps = {
  heroTitle: string;
  heroText: string;
  bullets?: string[];
  proofPoints?: Array<{ title: string; text: string }>;
  serviceAreas?: string[];
  relatedLinks?: Array<{ to: string; label: string }>;
  extraContent?: ReactNode;
  breadcrumbs?: Array<{ name: string; url: string }>;
  serviceSlug?: string;
  citySlug?: string;
};

function NavLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to as "/"}
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
  extraContent,
  breadcrumbs,
  serviceSlug,
  citySlug,
}: ServicePageLayoutProps) {
  const waLink = getWhatsAppLink("Hi, I'd like to book a site inspection for my property.");

  const visualBreadcrumbs = breadcrumbs?.map((crumb, index) => ({
    name: crumb.name,
    url: index < (breadcrumbs.length - 1) ? crumb.url : undefined,
  }));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: heroTitle,
            description: heroText,
            provider: {
              "@type": "Organization",
              name: COMPANY_NAME,
              url: SITE_URL,
            },
          }),
        }}
      />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: crumb.url,
              })),
            }),
          }}
        />
      )}

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

      <section className="border-b border-border/60 bg-muted/20 py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-3">
          {visualBreadcrumbs && visualBreadcrumbs.length > 0 && (
            <PageBreadcrumbs items={visualBreadcrumbs} />
          )}
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
          {bullets && bullets.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <main className="flex-grow mx-auto w-full max-w-6xl px-6 py-8 md:py-10 space-y-10">
        {proofPoints && proofPoints.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {proofPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-2">
                <h3 className="text-sm font-bold text-foreground">{point.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        )}

        {serviceAreas && serviceAreas.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        {extraContent}

        {serviceSlug && !citySlug && (
          <CityLinks serviceSlug={serviceSlug} />
        )}

        {serviceSlug && (
          <RelatedServices
            currentSlug={serviceSlug}
            citySlug={citySlug}
            heading={citySlug ? `Related Services in ${citySlug}` : "Related Services"}
          />
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
