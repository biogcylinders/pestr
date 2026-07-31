import { cities } from "@/data/cities";

interface CitySelectorProps {
  currentCitySlug: string;
  onSelectCity?: (citySlug: string) => void;
}

export function CitySelector({ currentCitySlug, onSelectCity }: CitySelectorProps) {
  return (
    <section className="my-6 rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 backdrop-blur-sm shadow-sm transition-all">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              Select Operating Location
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Viewing protocols tailored for regional pest pressures & local FSSAI compliance.
          </p>
        </div>

        {/* City Pills List as interactive Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {cities.map((c) => {
            const isActive = c.slug.toLowerCase() === currentCitySlug.toLowerCase();
            return (
              <button
                key={c.slug}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectCity) onSelectCity(c.slug);
                }}
                className={`relative inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background shadow-xs font-semibold ring-1 ring-foreground"
                    : "border border-border/60 bg-background/80 text-muted-foreground hover:border-foreground/30 hover:bg-accent hover:text-foreground"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}