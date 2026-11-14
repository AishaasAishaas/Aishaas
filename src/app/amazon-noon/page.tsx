import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon & Noon Seller & Vendor Central Management UAE | AISHAAS",
  description: "End-to-end marketplace management in the UAE. Expert Amazon.ae & Noon seller registration, SEO product listings, FBA/FBN setup, and Vendor Central PO handling starting at AED 499/month.",
  keywords: [
    "Amazon seller management UAE",
    "Noon account management Dubai",
    "Amazon Vendor Central agency UAE",
    "FBA setup Dubai",
    "Amazon.ae optimization"
  ],
  openGraph: {
    title: "Amazon & Noon Marketplace Management Services UAE | AISHAAS",
    description: "Scale your e-commerce business on Amazon.ae and Noon with dedicated account managers.",
    url: "https://yourdomain.com/marketplace-services", // Update with your actual domain
    siteName: "AISHAAS",
    type: "website",
  },
};

export default function MarketplaceServicesPage() {
  const services = [
    {
      title: "Amazon Seller Central Handling",
      tag: "Amazon Seller Central",
      price: "AED 499/Month",
      desc: "Complete Amazon seller registration, KYC verification, and tax setup to get your store live fast.",
      features: [
        "Amazon.ae Seller Registration",
        "Unlimited Products Listing & Category Mapping",
        "Product Image & Content Optimization",
        "Marketing & Campaign Setup",
        "Order Management & Customer Support",
        "Shipping & Return Settings Configuration",
        "FBA Shipment Creation & Tracking",
        "Brand Registry & Trademark Guidance",
        "Storefront Setup",
        "Dedicated Account Manager & Support",
      ],
      popular: false,
    },
    {
      title: "Noon Seller Central Handling",
      tag: "Noon Seller Central",
      price: "AED 499/Month",
      desc: "Complete Noon seller registration, KYC verification, and tax setup to get your store live fast.",
      features: [
        "Noon Seller Registration",
        "Unlimited Products Listing & Category Mapping",
        "Product Image & Content Optimization",
        "Marketing & Campaign Setup",
        "Order Management & Customer Support",
        "Shipping & Return Settings Configuration",
        "FBA Shipment Creation & Tracking",
        "Brand Registry & Trademark Guidance",
        "Storefront Setup",
        "Dedicated Account Manager & Support",
      ],
      popular: false,
    },
    {
      title: "Amazon & Noon Seller Central",
      tag: "Dual Marketplace",
      price: "AED 999/Month",
      desc: "Complete Amazon and Noon seller registration, and tax setup to get your stores live simultaneously.",
      features: [
        "Amazon.ae & Noon Seller Registration",
        "Unlimited Products Listing & Category Mapping",
        "Product Image & Content Optimization",
        "Marketing & Campaign Setup",
        "Order Management & Customer Support",
        "Shipping & Return Settings Configuration",
        "FBA & FBN Shipment Creation & Tracking",
        "Brand Registry & Trademark Guidance",
        "Storefront Setup",
        "Dedicated Account Manager & Support",
      ],
      popular: true,
    },
    {
      title: "Vendor Central Growth (250 SKUs)",
      tag: "Amazon Vendor Central",
      price: "AED 1499/Month",
      desc: "Complete Amazon vendor central management for growing product catalogs.",
      features: [
        "Amazon Vendor Management",
        "250 Products Listing & Category Mapping",
        "Product Image & Content Optimization",
        "Order Management & Customer Support",
        "Born To Run/Vendor-Initiated PO Creations",
        "PO Acceptance & Shipment Creation",
        "Appointment Scheduling & Delivery Tracking",
        "Invoice Creation & Payment Reconciliation",
        "Dispute Resolution & Account Health Management",
        "Marketing & Campaign Setup",
        "Dedicated Account Manager & Support",
      ],
      popular: false,
    },
    {
      title: "Vendor Central Scale (500 SKUs)",
      tag: "Amazon Vendor Central",
      price: "AED 1999/Month",
      desc: "Advanced Amazon vendor central management for scaling brands.",
      features: [
        "Amazon Vendor Management",
        "500 Products Listing & Category Mapping",
        "Product Image & Content Optimization",
        "Order Management & Customer Support",
        "Born To Run/Vendor-Initiated PO Creations",
        "PO Acceptance & Shipment Creation",
        "Appointment Scheduling & Delivery Tracking",
        "Invoice Creation & Payment Reconciliation",
        "Dispute Resolution & Account Health Management",
        "Marketing & Campaign Setup",
        "Dedicated Account Manager & Support",
      ],
      popular: false,
    },
    {
      title: "Vendor Central Enterprise (Unlimited)",
      tag: "Amazon Vendor Central",
      price: "AED 2999/Month",
      desc: "Comprehensive enterprise-tier Amazon vendor central management with unlimited catalog support.",
      features: [
        "Amazon Vendor Management",
        "Unlimited Products Listing & Category Mapping",
        "Product Image & Content Optimization",
        "Order Management & Customer Support",
        "Born To Run/Vendor-Initiated PO Creations",
        "PO Acceptance & Shipment Creation",
        "Appointment Scheduling & Delivery Tracking",
        "Invoice Creation & Payment Reconciliation",
        "Dispute Resolution & Account Health Management",
        "Marketing & Campaign Setup",
        "Dedicated Account Manager & Support",
      ],
      popular: false,
    },
  ];

  // JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": service.title,
      "description": service.desc,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "AED",
        "price": service.price.replace(/[^0-9]/g, ""),
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
      },
    })),
  };

  return (
    <>
      {/* Inject Structured Data into Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0d1424] text-slate-100 pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-[#4ade80]">
              Amazon, Noon Seller & Vendor Central Management
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              End-to-end marketplace management in the UAE — from seller & Vendor Account setup and SEO product listings to daily PO handling and FBA/FBN/ASN growth.
            </p>
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  service.popular
                    ? "bg-slate-900/90 border border-[#4ade80]/60 shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:border-[#4ade80]"
                    : "bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Most Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4ade80] text-slate-950 font-extrabold text-xs uppercase px-4 py-1 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Title & Service Tag */}
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-100">{service.title}</h3>
                    <span className="shrink-0 text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.desc}</p>

                  {/* Price */}
                  <div className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-slate-100 to-[#4ade80]">
                    {service.price}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-slate-300 text-sm mb-8">
                    {service.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <span className="text-[#4ade80] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button (WhatsApp Direct Link) */}
                <a
                  href={`https://wa.me/971507258514?text=${encodeURIComponent(
                    `Hi AISHAAS! I am interested in your "${service.title}" service (${service.price}) for Amazon/Noon. Please share more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full font-bold text-sm text-center block transition-all duration-300 ${
                    service.popular
                      ? "bg-[#4ade80] text-slate-950 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                      : "bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  Get Started
                </a>

                {/* Card Bottom Accent Line */}
                <div className="w-full h-1 bg-slate-800/80 rounded-full mt-6 overflow-hidden">
                  <div className="w-0 h-full bg-gradient-to-r from-[#a855f7] to-[#4ade80] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}