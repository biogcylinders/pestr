import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Pestr" },
      { name: "description", content: "Terms and conditions for using Pestr's pest control services and platform." },
    ],
    links: [{ rel: "canonical", href: "https://pestr.in/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <ServicePageLayout
      heroTitle="Terms & Conditions"
      heroText="These terms govern your use of Pestr's services and platform. Please read them carefully."
      bullets={["Service agreement", "Liability and limitations", "Privacy and data handling"]}
      proofPoints={[{ title: "Scope", text: "These terms apply to all services we provide unless explicitly superseded by a written contract." }]}
      serviceAreas={["Terms", "Policies"]}
      relatedLinks={[{ to: "/privacy", label: "Privacy" }]}
    />
  );
}
