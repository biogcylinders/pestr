import { Link } from "@tanstack/react-router";
import Logo from "@/components/ui/logo";
import { footerPopularServices, footerPopularLocationSlugs } from "@/data/serviceCatalog";
import { getCityBySlug } from "@/data/cities";
import { getWhatsAppLink, WA_NUMBER } from "@/lib/constants";

const WA_LINK = getWhatsAppLink();

export default function SiteFooter() {
  const popularLocations = footerPopularLocationSlugs
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean);

  return (
    <footer className="border-t border-border bg-card py-10 text-sm mt-auto">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-xs">
              Commercial pest control for hotels, restaurants, and kitchens across India.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              Popular Services
            </h4>
            <ul className="space-y-2">
              {footerPopularServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}` as string}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              Popular Locations
            </h4>
            <ul className="space-y-2">
              {popularLocations.map((city) =>
                city ? (
                  <li key={city.slug}>
                    <Link
                      to="/pest-control/$city"
                      params={{ city: city.slug }}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              WhatsApp {WA_NUMBER}
            </a>
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
          </div>
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Pestr</span>
        </div>
      </div>
    </footer>
  );
}
