import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { getFeaturedCities } from "@/data/cities";
import { getRelatedServices } from "@/data/serviceCatalog";

type CityLinksProps = {
  serviceSlug: string;
  serviceTitle?: string;
};

export default function CityLinks({ serviceSlug, serviceTitle }: CityLinksProps) {
  const cities = getFeaturedCities();

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Available in
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <Link
            key={city.slug}
            to={`/${serviceSlug}/${city.slug}` as "/$service/$city"}
            params={{ service: serviceSlug, city: city.slug }}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
          >
            {city.name}
          </Link>
        ))}
      </div>
      {serviceTitle && (
        <p className="text-xs text-muted-foreground">
          Choose your city to see localized {serviceTitle.toLowerCase()} protocols and service zones.
        </p>
      )}
    </section>
  );
}

type RelatedServicesProps = {
  currentSlug: string;
  citySlug?: string;
  heading?: string;
};

export function RelatedServices({ currentSlug, citySlug, heading = "Related Services" }: RelatedServicesProps) {
  const related = getRelatedServices(currentSlug);

  if (!related.length) return null;

  return (
    <section className="space-y-4 pt-4 border-t border-border">
      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
        {heading}
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {related.map((service) => (
          <Link
            key={service.slug}
            to={
              citySlug
                ? (`/${service.slug}/${citySlug}` as "/$service/$city")
                : (`/${service.slug}` as string)
            }
            params={citySlug ? { service: service.slug, city: citySlug } : undefined}
            className="rounded-xl border border-border bg-card p-4 flex items-center justify-between text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <span className="truncate pr-2">{service.title}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
