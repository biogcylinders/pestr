import React, { useEffect, useMemo, useRef, useState } from "react";
import { cities, CityConfig } from "@/data/cities";
import { useIsMobile } from "@/hooks/use-mobile";

interface CitySelectorProps {
  currentCitySlug: string;
  onSelectCity?: (citySlug: string) => void;
}

export function CitySelector({ currentCitySlug, onSelectCity }: CitySelectorProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentCity = useMemo(
    () => cities.find((c) => c.slug.toLowerCase() === currentCitySlug.toLowerCase()) ?? null,
    [currentCitySlug]
  );

  const [rawInput, setRawInput] = useState<string>(currentCity?.name ?? "");
  const [query, setQuery] = useState<string>(currentCity?.name ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    setRawInput(currentCity?.name ?? "");
    setQuery(currentCity?.name ?? "");
  }, [currentCity]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cities;
    return cities.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (e.target instanceof Node && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
        setHighlighted(-1);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function selectCity(city: CityConfig) {
    setQuery(city.name);
    setRawInput(city.name);
    setIsOpen(false);
    setHighlighted(-1);
    onSelectCity?.(city.slug);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIsOpen(true);
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (isOpen && highlighted >= 0 && highlighted < filtered.length) {
        e.preventDefault();
        selectCity(filtered[highlighted]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setHighlighted(-1);
    }
  }

  return (
    <section
      ref={rootRef}
      className="my-6 rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 backdrop-blur-sm shadow-sm transition-all"
    >
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

        {/* Accessible combobox */}
        <div className="relative w-full lg:w-1/2">
          {isMobile ? (
            <select
              className="w-full rounded-lg border border-border/60 bg-background/80 px-3 py-2 text-sm text-foreground"
              value={currentCity?.slug ?? ""}
              onChange={(e) => onSelectCity?.(e.target.value)}
            >
              {cities.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          ) : (
            <>
              <label htmlFor="city-combobox" className="sr-only">
                Choose city
              </label>
            <input
              id="city-combobox"
              ref={inputRef}
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="city-listbox"
              aria-autocomplete="list"
              aria-activedescendant={
                highlighted >= 0 && filtered[highlighted]
                  ? `city-option-${filtered[highlighted].slug}`
                  : undefined
              }
              className="w-full rounded-lg border border-border/60 bg-background/80 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/30"
              placeholder="Type or choose a city"
              value={rawInput}
              onChange={(e) => {
                const v = e.target.value;
                setRawInput(v);
                setLoading(true);
                setIsOpen(true);
                setHighlighted(0);
                if (debounceRef.current) window.clearTimeout(debounceRef.current);
                debounceRef.current = window.setTimeout(() => {
                  setQuery(v);
                  setLoading(false);
                }, 250);
              }}
              onKeyDown={onKeyDown}
              onFocus={() => setIsOpen(true)}
            />

          {loading && (
            <div className="absolute right-3 top-3 h-3 w-3 animate-pulse rounded-full bg-foreground/40" />
          )}

          {isOpen && (
            <ul
              id="city-listbox"
              role="listbox"
              className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-border/60 bg-background/90 py-1 text-sm shadow-lg"
            >
              {filtered.map((c, idx) => {
                const isActive = idx === highlighted;
                return (
                  <li
                    id={`city-option-${c.slug}`}
                    key={c.slug}
                    role="option"
                    aria-selected={isActive}
                    className={`cursor-pointer px-3 py-2 ${
                      isActive ? "bg-foreground/10 text-foreground" : "text-muted-foreground"
                    }`}
                    onMouseEnter={() => setHighlighted(idx)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectCity(c)}
                  >
                    {c.name}
                  </li>
                );
              })}
            </ul>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}