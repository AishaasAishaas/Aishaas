import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';

// 1. Export standard Next.js Metadata (Server Component required)
export const metadata: Metadata = {
  title: 'AISHAAS | High-Performance Next.js & Web Engineering Agency',
  description: 'Custom Next.js web development, sub-second loading speeds, Core Web Vitals optimization, and high-converting modern UI/UX design.',
  openGraph: {
    title: 'AISHAAS | High-Performance Next.js & Web Engineering Agency',
    description: 'Custom Next.js web development with sub-second loading speeds and 100 Lighthouse performance.',
    url: 'https://aishaas.com',
    siteName: 'AISHAAS',
    type: 'website',
  },
  alternates: {
    canonical: 'https://aishaas.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b101d] text-slate-100 selection:bg-[#4ade80] selection:text-slate-950 overflow-x-hidden">
      
      {/* 2. Structured Data / Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "AISHAAS",
            "telephone": "+971507258514",
            "url": "https://aishaas.com",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE"
            },
            "description": "Blazing-fast Next.js development, custom website design, Core Web Vitals & SEO optimization."
          })
        }}
      />

      {/* Components */}
      <Navbar />
      <Hero />

      {/* SECTION 1: Services Overview */}
      <section id="services" className="py-24 bg-[#0d1424]/60 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4ade80] mb-3 block">
              Our Core Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
              Crafted for High Performance & Conversions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Next.js Development',
                desc: 'Blazing-fast Server-Side Rendering (SSR) and Static Site Generation (SSG) for maximum performance.',
              },
              {
                icon: '🎨',
                title: 'Custom Website Design',
                desc: 'Modern, high-converting UI/UX layouts tailored to elevate your business visual identity.',
              },
              {
                icon: '🚀',
                title: 'Core Web Vitals & SEO',
                desc: 'Optimized speed scores (100 Lighthouse) to dominate search engine rankings.',
              },
              {
                icon: '🛠️',
                title: 'Full-Stack Integration',
                desc: 'Seamless API integrations, CMS connectivity, and custom backend feature implementation.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#4ade80] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Choose AISHAAS */}
      <section className="py-24 bg-[#0b101d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a855f7] block">
                The AISHAAS Advantage
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
                Why Top Brands Partner With Us
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We don't just build websites; we build scalable digital infrastructure that drives real sales and engagement.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  'Custom-coded solutions with zero bloated templates',
                  'Sub-second page loading speed for superior conversion rates',
                  'Fully responsive across desktop, tablet, and mobile',
                  'Dedicated ongoing technical support and maintenance',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#4ade80]/20 text-[#4ade80] flex items-center justify-center font-bold text-xs mt-1" aria-hidden="true">✓</span>
                    <span className="text-slate-300 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0d1424] border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-[#a855f7] text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                100% Quality Driven
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Ready to Upgrade Your Web Presence?</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Transform your online brand with our custom Next.js engineering. Schedule a direct consultation with our lead developers today.
              </p>
              <a
                href="tel:+971507258514"
                aria-label="Call AISHAAS directly at +971 50 725 8514"
                className="inline-flex items-center justify-center w-full bg-[#4ade80] hover:bg-[#34d399] text-slate-950 font-bold px-6 py-4 rounded-xl shadow-lg transition-all text-center"
              >
                Call Directly: +971-507258514
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Modern Tech Stack */}
      <section className="py-20 bg-[#0d1424]/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Powered By World-Class Cutting-Edge Technologies
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            {['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Vercel'].map((tech, i) => (
              <span key={i} className="text-xl sm:text-2xl font-black text-slate-300 hover:text-[#4ade80] transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Development Process */}
      <section className="py-28 bg-[#0b101d] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/10 via-transparent to-[#4ade80]/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4ade80] mb-3 block">Seamless Workflow</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">How We Build Your Project</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Wireframing', desc: 'Analyzing business goals and mapping user experience layouts.' },
              { step: '02', title: 'UI/UX Design', desc: 'Crafting modern, high-fidelity visual graphic concepts.' },
              { step: '03', title: 'Next.js Engineering', desc: 'Writing clean, fast, and secure frontend & backend code.' },
              { step: '04', title: 'Testing & Launch', desc: 'Performance audits, SEO setup, and live deployment.' },
            ].map((proc, i) => (
              <div 
                key={i} 
                className="group relative bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#4ade80]/50 hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-indigo-400 group-hover:scale-110 transition-transform duration-300 origin-left">
                      {proc.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#4ade80] opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_10px_#4ade80] transition-all" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-[#4ade80] transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{proc.desc}</p>
                </div>

                <div className="w-full h-1 bg-slate-800/80 rounded-full mt-8 overflow-hidden" aria-hidden="true">
                  <div className="w-0 h-full bg-gradient-to-r from-[#a855f7] to-[#4ade80] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Featured Work */}
      <section className="py-28 bg-[#0d1424]/80 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a855f7] mb-3 block">Featured Work</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">High Performance Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'E-Commerce Platform', category: 'Next.js + Tailwind', score: '99/100', icon: '⚡' },
              { title: 'SaaS Dashboard App', category: 'React + TypeScript', score: '100/100', icon: '🚀' },
              { title: 'Corporate Portal', category: 'Next.js SSR', score: '98/100', icon: '💎' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative bg-slate-900/80 border border-slate-800/80 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#a855f7]/50 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] flex flex-col justify-between"
              >
                <div className="h-52 bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 flex items-center justify-center border-b border-slate-800/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" aria-hidden="true" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-[#a855f7]/30 group-hover:border-[#a855f7]/60" aria-hidden="true">
                    {item.icon}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-[#a855f7] tracking-wider uppercase">{item.category}</span>
                    <span className="text-xs font-bold bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                      {item.score} Speed
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-[#4ade80] transition-all">
                    {item.title}
                  </h3>

                  <a 
                    href="#contact" 
                    aria-label={`View project details for ${item.title}`}
                    className="text-sm font-semibold text-slate-300 group-hover:text-[#4ade80] transition-colors inline-flex items-center space-x-2"
                  >
                    <span>View Project Details</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="w-full h-1 bg-slate-800/80 overflow-hidden" aria-hidden="true">
                  <div className="w-0 h-full bg-gradient-to-r from-[#a855f7] via-violet-400 to-[#4ade80] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: About Us */}
      <section id="about" className="py-24 bg-[#0d1424]/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a855f7] block">About AISHAAS</span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
                Dedicated Web Engineering Studio
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                At AISHAAS, we bridge the gap between creative visual design and robust web performance. Specialized in modern React and Next.js technology stack, we build digital assets that stand out.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                  <p className="text-3xl font-black text-[#4ade80]">100%</p>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Client Satisfaction Rate</p>
                </div>
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                  <p className="text-3xl font-black text-[#a855f7]">24/7</p>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Direct Developer Access</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <p className="text-slate-300 font-mono text-sm leading-relaxed mb-6">
                “Our vision is simple: create fast, beautiful websites that help business owners win online.”
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300" aria-hidden="true">
                  A
                </div>
                <div>
                  <p className="font-bold text-slate-100">AISHAAS Team</p>
                  <p className="text-xs text-slate-400">Next.js Development Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Testimonials */}
      <section className="py-28 bg-[#0b101d] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/10 via-transparent to-[#4ade80]/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4ade80] mb-3 block">Client Feedback</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">What Our Partners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', role: 'Startup Founder', quote: 'AISHAAS delivered our Next.js application in record time. Our page speed score jumped to 100 instantly!' },
              { name: 'David K.', role: 'E-commerce Owner', quote: 'The visual styling and mobile layout are unmatched. Our conversions increased noticeably after launch.' },
              { name: 'Ahmed H.', role: 'Agency Director', quote: 'Extremely professional team with top-tier Next.js expertise. Highly recommended for web development.' },
            ].map((t, i) => (
              <div 
                key={i} 
                className="group relative bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#4ade80]/50 hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)] flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#4ade80]/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1 text-[#4ade80]" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, starIndex) => (
                        <span key={starIndex} className="text-sm" aria-hidden="true">★</span>
                      ))}
                    </div>
                    <span className="text-3xl font-serif text-slate-700 group-hover:text-[#a855f7] transition-colors duration-300" aria-hidden="true">
                      “
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8 relative z-10">
                    “{t.quote}”
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/80">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-[#4ade80] p-0.5 flex items-center justify-center font-bold text-slate-950 text-xs shadow-md" aria-hidden="true">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-slate-100 group-hover:text-[#4ade80] transition-colors">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-100 text-sm group-hover:text-[#4ade80] transition-colors">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>

                <div className="w-full h-1 bg-slate-800/80 rounded-full mt-6 overflow-hidden" aria-hidden="true">
                  <div className="w-0 h-full bg-gradient-to-r from-[#a855f7] to-[#4ade80] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}