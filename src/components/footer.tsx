'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0b101d] border-t border-slate-800/80 text-slate-400 text-sm relative overflow-hidden pt-16 pb-12">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-tr from-purple-600/10 to-[#4ade80]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 font-sans">
                AISHAAS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Crafting ultra-fast, modern Next.js applications and high-performance digital experiences tailored for growing businesses.
            </p>
            
            {/* Clickable Email Link */}
            <div className="pt-2">
              <a
                href="mailto:hello@aishaas.com"
                className="text-slate-300 hover:text-[#4ade80] font-medium transition-colors text-sm hover:underline inline-block"
              >
                hello@aishaas.com
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex items-center space-x-3">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/profile.php?id=61594949567856"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-2.5 py-1 text-[10px] font-semibold text-slate-100 bg-slate-900 border border-blue-500/30 rounded-md shadow-lg pointer-events-none translate-y-1 group-hover:translate-y-0">
                  Facebook
                </span>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/aishaas105/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-2.5 py-1 text-[10px] font-semibold text-slate-100 bg-slate-900 border border-pink-500/30 rounded-md shadow-lg pointer-events-none translate-y-1 group-hover:translate-y-0">
                  Instagram
                </span>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/971502541388?text=Hello%20AISHAAS,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#4ade80]/50 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(74,222,128,0.35)]"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-2.5 py-1 text-[10px] font-semibold text-slate-100 bg-slate-900 border border-[#4ade80]/30 rounded-md shadow-lg pointer-events-none translate-y-1 group-hover:translate-y-0">
                  WhatsApp
                </span>
              </a>

              {/* Call Now Icon */}
              <a
                href="tel:+971502541388"
                aria-label="Call Now"
                className="group relative p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 px-2.5 py-1 text-[10px] font-semibold text-slate-100 bg-slate-900 border border-violet-500/30 rounded-md shadow-lg pointer-events-none translate-y-1 group-hover:translate-y-0 whitespace-nowrap">
                  Call Now
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-slate-200 font-semibold uppercase tracking-wider text-xs">Find More</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-slate-200 font-semibold uppercase tracking-wider text-xs">Services</h3>
            <ul className="space-y-2.5">
              <li className="text-slate-300">Next.js Business Website</li>
              <li className="text-slate-300">E-Commerce Website</li>
              <li className="text-slate-300">Mobile Applications</li>
              <li className="text-slate-300">Custom Development</li>
            </ul>
          </div>

        </div>

 {/* Bottom Bar */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
  <p>© {currentYear} AISHAAS. All rights reserved.</p>
  
  <div className="flex items-center space-x-6">
    <Link href="/legal?tab=privacy" className="hover:text-slate-300 transition-colors">
      Privacy Policy
    </Link>
    <Link href="/legal?tab=terms" className="hover:text-slate-300 transition-colors">
      Terms of Service
    </Link>
    <Link href="/legal?tab=refund" className="hover:text-slate-300 transition-colors">
      Refund Policy
    </Link>
  </div>
</div>
      </div>
    </footer>
  );
}