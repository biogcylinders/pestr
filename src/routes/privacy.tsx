import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pestr" },
      { name: "description", content: "How Pestr collects, uses and protects your information." },
      { property: "og:title", content: "Privacy Policy — Pestr" },
      { property: "og:description", content: "How Pestr collects, uses and protects your customer and service data." },
      { property: "og:url", content: "https://pestr.in/privacy" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "Privacy Policy — Pestr" },
      { name: "twitter:description", content: "How Pestr collects, uses and protects your customer and service data." },
    ],
    links: [{ rel: "canonical", href: "https://pestr.in/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-semibold">Pestr</Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 27 July 2026</p>

        <div className="prose mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. What we collect</h2>
            <p className="mt-2">
              When you contact Pestr via WhatsApp, phone or our website, we collect the details you share with us —
              typically your name, property name, contact number and the reason for your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. How we use it</h2>
            <p className="mt-2">
              We use your information only to respond to your enquiry, schedule visits, deliver service reports and
              maintain compliance documentation. We do not sell your data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Service records</h2>
            <p className="mt-2">
              Visit reports, chemical logs and audit dossiers are retained for the duration of your contract plus
              three years, in line with standard FSSAI and HACCP recordkeeping expectations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Third parties</h2>
            <p className="mt-2">
              We share information only with our technicians assigned to your property and, where required, with
              auditors or regulators you have authorised.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Your choices</h2>
            <p className="mt-2">
              You can request a copy of your data, correct it, or ask us to delete it at any time by messaging us on
              WhatsApp at +91 9648116960.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Contact</h2>
            <p className="mt-2">
              Questions about this policy? WhatsApp us at +91 9648116960 and we'll get back to you the same day.
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pestr
      </footer>
    </div>
  );
}