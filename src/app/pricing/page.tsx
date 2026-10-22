export default function PricingPage() {
  const plans = [
    {
      title: "Starter Business",
      pages: "1 - 4 Pages",
      price: "AED 499",
      desc: "Ideal for startups and small businesses with best website needs.",
      features: [
        "✓ 1 to 4 Custom Pages",
        "✓ Domain & Hosting",
        "✓ Fast Next.js & Tailwind Build",
        "✓ Responsive Mobile Layout",
        "✓ On-Page SEO & Meta Tags",
        "✓ Contact Form Integration",
        "✓ Speed & Performance Optimization",
      ],
      popular: false,
    },
    {
      title: "Growth Business",
      pages: "1 - 10 Pages",
      price: "AED 999",
      desc: "Perfect for established small businesses needing a clean web presence.",
      features: [
        "✓ 1 to 10 Custom Pages",
        "✓ Domain & Hosting",
        "✓ Fast Next.js & Tailwind Build",
        "✓ Next.js App Router Architecture",
        "✓ Responsive Mobile Layout",
        "✓ On-Page SEO & Meta Tags",
        "✓ Speed & Performance Optimization",
      ],
      popular: false,
    },
    {
      title: "Pro Business",
      pages: "1 - 15 Pages",
      price: "AED 1499",
      desc: "Our most popular package for scaling companies and agencies.",
      features: [
        "✓ 1 to 15 Custom Pages",
        "✓ Domain & Hosting",
        "✓ Advanced GSAP Scroll Animations",
        "✓ High-End Glassmorphism UI Design",
        "✓ Full SEO Audit & Meta Setup",
        "✓ On-Page SEO & Meta Tags",
        "✓ Speed & Performance Optimization",
      ],
      popular: true,
    },
     {
      title: "E-Commerce Platform",
      pages: "Full Store Setup",
      price: "AED 2999",
      desc: "High-converting online store with seamless payment integration.",
      features: [
        "✓ Product Catalog & Category Pages",
        "✓ Stripe / Payment Gateway Integration",
        "✓ Cart & Checkout Flow Optimization",
        "✓ Order & Inventory Management",
        "✓ High-Speed Mobile Checkout",
        "✓ Full SEO Audit & Meta Setup",
        "✓ Domain & Hosting",
      ],
      popular: false,
    },
{
      title: "Mobile Application",
      pages: "iOS & Android",
      price: "AED 2999",
      desc: "High-performance native or cross-platform mobile apps built for seamless user experience.",
      features: [
        "✓ iOS & Android Cross-Platform Build",
        "✓ Custom UI/UX Mobile Interface",
        "✓ User Authentication & Profile Management",
        "✓ Push Notifications & Real-Time Data",
        "✓ API & Payment Gateway Integration",
        "✓ Apple App Store & Google Play Deployment",
        "✓ 1 Month Free Maintenance & Support",
      ],
      popular: false,
    },
    {
      title: "App + Web Bundle",
      pages: "Web + Mobile App",
      price: "AED 5999",
      desc: "Full digital ecosystem: custom web app + iOS and Android app.",
      features: [
         "✓ Product Catalog & Category Pages",
           "✓ Stripe / Payment Gateway Integration",
        "✓ Multi-page Next.js Web Portal",
        "✓ Cross-Platform Mobile App (iOS & Android)",
        "✓ Shared Backend & Auth System",
        "✓ Real-time Database & Push Notifications",
        "✓ App Store & Play Store Deployment",
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1424] text-slate-100 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-[#4ade80]">
            Pricing Plans
          </h1>
          
        </div>

        {/* 6 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-slate-900/90 border border-[#4ade80]/60 shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:border-[#4ade80]"
                  : "bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4ade80] text-slate-950 font-extrabold text-xs uppercase px-4 py-1 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                  Most Popular
                </div>
              )}

              <div>
                {/* Title & Page Tag */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{plan.title}</h3>
                  <span className="text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-full">
                    {plan.pages}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{plan.desc}</p>

                {/* Price */}
                <div className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-slate-100 to-[#4ade80]">
                  {plan.price}
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-slate-300 text-sm mb-8">
                  {plan.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-[#4ade80] font-bold">✓</span>
                      <span>{feat.replace("✓ ", "")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button (WhatsApp Direct Link) */}
<a
  href={`https://wa.me/971502541388?text=${encodeURIComponent(
    `Hi AISHAAS! I am interested in the "${plan.title}" package (${plan.price}). Please share more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full py-3.5 rounded-full font-bold text-sm text-center block transition-all duration-300 ${
    plan.popular
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
  );
}