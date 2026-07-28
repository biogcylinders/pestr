import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/seo/ServicePageLayout";
import { getWhatsAppLink, TEL_LINK, WA_FORMATTED } from "@/lib/constants";
import { MessageCircle, CheckCircle2, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pestr — Book a Free Site Inspection" },
      { name: "description", content: "Contact Pestr for a complimentary site inspection and a tailored pest-control plan for your hospitality property." },
    ],
    links: [{ rel: "canonical", href: "https://pestr.in/contact" }],
  }),
  component: ContactPage,
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "Restaurant",
    city: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi Pestr! I'd like to book a site inspection.\n\n` +
      `*Property:* ${formData.propertyName || "N/A"}\n` +
      `*Type:* ${formData.propertyType}\n` +
      `*Location:* ${formData.city || "N/A"}\n` +
      `*Phone:* ${formData.phone || "N/A"}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}` : "");

    setSubmitted(true);
    window.open(getWhatsAppLink(msg), "_blank");
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-brass/30 bg-brass/10 p-6 flex items-start gap-4">
        <CheckCircle2 className="h-6 w-6 text-brass shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-foreground">WhatsApp Opened!</h3>
          <p className="mt-1 text-sm text-muted-foreground">Your details have been pre-filled. Just send the message and we'll respond within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="mt-3 text-xs font-medium text-brass hover:underline">
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="propertyName" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Property / Business Name *
          </label>
          <input
            id="propertyName"
            type="text"
            required
            placeholder="e.g. Grand Palace Hotel / Bistro 42"
            value={formData.propertyName}
            onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brass focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="propertyType" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Property Type
          </label>
          <select
            id="propertyType"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brass focus:outline-none"
          >
            <option value="Hotel">Hotel / Resort</option>
            <option value="Restaurant">Restaurant / Cafe</option>
            <option value="Commercial Kitchen">Commercial Kitchen</option>
            <option value="Cloud Kitchen">Cloud Kitchen</option>
            <option value="Banquet Hall">Banquet / Event Venue</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            City / Location *
          </label>
          <input
            id="city"
            type="text"
            required
            placeholder="e.g. New Delhi, Mumbai, Bengaluru"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brass focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Contact Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brass focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Additional Details (Optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Pest concerns, property size, upcoming audit dates..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brass focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> Send via WhatsApp
        </button>
        <a
          href={TEL_LINK}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:border-brass"
        >
          <Phone className="h-4 w-4 text-brass" /> Call {WA_FORMATTED}
        </a>
      </div>
    </form>
  );
}

function ContactPage() {
  return (
    <ServicePageLayout
      heroTitle="Book a Complimentary Site Inspection"
      heroText="Fill out the form below and we'll open a pre-filled WhatsApp message. We respond to all hospitality enquiries within 24 hours."
      bullets={["Free site inspection", "Quote within 72 hours", "Dedicated technician assigned", "No lock-in surprises"]}
      proofPoints={[
        { title: "Fast Response", text: "We prioritise hospitality customers and respond within 24 hours for all inspection requests." },
        { title: "No Obligation", text: "The site inspection and written proposal are completely free — no commitment required." },
      ]}
      serviceAreas={["Hotels", "Restaurants", "Banquets", "Cloud Kitchens"]}
      relatedLinks={[
        { to: "/services", label: "Services" },
        { to: "/pricing", label: "Pricing" },
        { to: "/faq", label: "FAQ" },
      ]}
      extraContent={
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-base font-semibold text-foreground mb-5">Request a Site Inspection</h2>
          <ContactForm />
        </div>
      }
    />
  );
}
