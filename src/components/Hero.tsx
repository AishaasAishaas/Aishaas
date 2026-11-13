'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

// Dynamically import the Three.js Canvas component with SSR disabled
const Hero3DCanvas = dynamic(() => import('./Hero3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center bg-transparent">
      <div className="w-24 h-24 rounded-full bg-[#4ade80]/10 animate-pulse blur-md" />
    </div>
  ),
});

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. GSAP Entrance Animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });

      tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.3)
        .fromTo(headlineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
        .fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7');
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0b101d] text-white">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#4ade80]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* Status Badge */}
            <div ref={badgeRef} className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 backdrop-blur-md rounded-full px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide shadow-lg opacity-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-ping" />
              <span className="text-slate-300">High Performance Web Solutions</span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] opacity-0">
              <span className="block text-slate-100">Next.js</span>
              <span className="inline-block my-2 bg-gradient-to-r from-[#4ade80] to-emerald-400 text-slate-950 px-5 py-1.5 rounded-2xl shadow-[0_0_30px_rgba(74,222,128,0.3)] transform -rotate-1">
                Development
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider uppercase mt-2">
                EXPERT
              </span>
            </h1>

            {/* Description */}
            <p ref={descRef} className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0">
              At <strong className="text-slate-200 font-semibold">AISHAAS</strong>, we build ultra-fast, modern React & Next.js applications and websites with sleek UI design and peak SEO optimization.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0">
              {/* Start Project Button now triggers phone call */}
              <a
                href="tel:+971507258514"
                className="w-full sm:w-auto text-center bg-[#4ade80] hover:bg-[#34d399] text-slate-950 font-bold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(74,222,128,0.35)] hover:shadow-[0_0_35px_rgba(74,222,128,0.5)] transition-all transform hover:-translate-y-0.5 text-base sm:text-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Start Project Now</span>
              </a>
              
              {/* Phone Secondary Button */}
              <a
                href="tel:+971507258514"
                className="w-full sm:w-auto text-center border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md text-slate-200 font-semibold px-6 py-4 rounded-full transition-all flex items-center justify-center space-x-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-[#4ade80]/20 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+971 50 254 1388</span>
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Three.js 3D Crystal Core Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}