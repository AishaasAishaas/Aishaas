import React from "react";

export default function AIServicesOverviewPage() {
  const coreServices = [
    {
      title: "E-Commerce AI Chatbots",
      tagline: "Conversational AI",
      desc: "Deploy intelligent Ai Chatbot on your website to automate sales and customer support 24/7.",
      icon: "💬",
      features: [
        "Ai Chatbot (Work 24/7 Handle Sales and Customer Services)",
        "Multi-language Support (Arabic & English and More)",
        "Suitable for E-Commerce Websites, Retail, and Service Businesses",
        "Support Shopify, WooCommerce, Wix, and Custom Websites",
      ],
    },
    {
      title: "Full-Stack AI Web Apps",
      tagline: "Next.js AI Platforms",
      desc: "Turn your AI idea into a commercial SaaS product with Next.js App Router, payment processing, user authentication, and high-speed UI.",
      icon: "💻",
      features: [
        "Next.js & Tailwind CSS Architecture",
        "Stripe Subscription & Token Billing",
        "User Auth & Dashboard UI",
        "High-Performance API Pipelines",
      ],
    },
    {
      title: "AI Strategy & MVP Development",
      tagline: "Consultation & Prototyping",
      desc: "Validate your AI product concept fast with an executive tech consultation and a 5-day functional MVP built for investors.",
      icon: "🚀",
      features: [
        "Tech Architecture Roadmap",
        "Rapid 5-Day Functional MVP",
        "Token & Infrastructure Cost Strategy",
        "Scalability Blueprint",
      ],
    },
  ];

  // Pricing plans specifically tailored for AI services
  const aiPricingPlans = [
{
      title: "AI Agent For E-Commerce",
      pages: "24/7 Support Ai Agent",
      price: "AED 149/Month",
      desc: "Custom-trained AI chatbot integrated into your store or website to handle customer inquiries & sales.",
      // Added badge/highlight description below the main description
      suitability: "✨ Perfect for Retail, Online Stores, & Service Businesses",
      features: [
        "✓ 24/7 Automated Sales & Support",
        "✓ Multi-Language (Arabic & English & More)",
        "✓ Shopify, WooCommerce, Wix & Custom Integration",
        "✓ Knowledge Base Setup (FAQs & Docs)",
                "✓ Custom Brand Styling & Widget Matching",
        "✓ Conversation Analytics & Insights",
        "✓ 1 Month Free Maintenance & Updates",
      ],
      popular: false,
    },
    {
      title: "AI Booking Agent",
      pages: "24/7 Appointments",
      price: "AED 199/Month",
      desc: "Intelligent AI booking agent integrated into your website to handle appointment scheduling, client questions, and calendar sync.",
      suitability: "✨ Perfect for Clinics, Salons, Consultants, & Service Providers",
      features: [
        "✓ 24/7 Automated Appointment Scheduling",
        "✓ Multi-Language (Arabic & English & More)",
        "✓ Google Calendar, Outlook & CRM Integration",
        "✓ Smart Rescheduling & Automated Reminders",
        "✓ Knowledge Base Setup (FAQs & Docs)",
        "✓ Custom Brand Styling & Widget Matching",
        "✓ Conversation Analytics & Insights",
        "✓ 1 Month Free Maintenance & Updates",
      ],
      popular: true, // Set to true if you want to highlight it, or false
    },
   {
      title: "Custom AI Agent",
      pages: "Autonomous Workflows",
      price: "AED 299/Month",
      desc: "Bespoke autonomous AI agent trained on your proprietary data to execute multi-step tasks, research, and advanced internal operations.",
      suitability: "✨ Perfect for Enterprises, Agencies, & Growing Startups",
      features: [
        "✓ Autonomous Multi-Step Task Execution",
        "✓ Multi-Language (Arabic & English & More)",
        "✓ Custom API & Internal Database Integration",
        "✓ Vector Database & Long-Term Memory Setup",
        "✓ Custom Brand Styling & Widget Matching",
        "✓ Custom Brand Styling & Widget Matching",
        "✓ Advanced Conversation Analytics & Logs",
        "✓ 1 Month Free Maintenance & Updates",
      ],
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your business workflows, pinpoint AI automation opportunities, and select the right tech stack.",
    },
    {
      step: "02",
      title: "Data & Model Setup",
      desc: "We clean your data, configure vector databases, train knowledge bases, or set up API pipelines.",
    },
    {
      step: "03",
      title: "Full-Stack Build",
      desc: "We engineer high-speed Next.js interfaces, craft robust backend APIs, and integrate seamless AI agent workflows.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      desc: "We perform fine-tuning, security audits, performance testing, and launch your solution live to the cloud.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1424] text-slate-100 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
    

       
        {/* AI Pricing Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-[#4ade80]">
              AI Service Pricing Plans
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Transparent investment options to integrate intelligent AI solutions into your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiPricingPlans.map((plan, index) => (
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
                    <span className="text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-full shrink-0 ml-2">
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
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-[#4ade80] font-bold mt-0.5">✓</span>
                        <span>{feat.replace("✓ ", "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button (WhatsApp Direct Link) */}
                <a
                  href={`https://wa.me/971507258514?text=${encodeURIComponent(
                    `Hi AISHAAS! I am interested in the AI package "${plan.title}" (${plan.price}). Please share more details.`
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

        {/* Development Process Section */}
        <div className="bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8 sm:p-12 mb-20 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-slate-100 mb-4">
              How We Build Your AI Solution
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A streamlined, battle-tested engineering pipeline to get your AI system production-ready fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#4ade80] mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-slate-100 mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden text-center bg-gradient-to-r from-purple-900/40 via-slate-900 to-emerald-950/40 border border-purple-500/30">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 text-slate-100">
            Ready to Automate & Scale with AI?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Tell us about your project requirements, and we will build a custom AI demo or blueprint for your business.
          </p>
          <a
            href={`https://wa.me/971507258514?text=${encodeURIComponent(
              "Hi AISHAAS! I want to start an AI project. Let's connect!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-[#4ade80] text-slate-950 font-extrabold text-sm hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] transition-all duration-300"
          >
            Start Your AI Project
          </a>
        </div>
      </div>
    </main>
  );
}