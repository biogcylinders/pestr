import React from "react";
import newLogoUrl from "@/assets/newlogo.png?url";

export default function Logo({ className = "" }: { className?: string }) {
  return <img src={newLogoUrl} alt="Pestr" className={`h-12 w-auto md:h-16 ${className}`} />;
}
