'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-5xl bg-[#0d1424]/70 backdrop-blur-xl border border-slate-800/80 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 py-2.5 sm:px-6 transition-all duration-300 hover:border-slate-700/80">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Image */}
          <Link href="/" className="group flex items-center pl-2">
            <div className="relative w-40 h-10 sm:w-56 sm:h-12 overflow-visible transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo2.png"
                alt="AISHAAS Logo"
                fill
                className="object-contain scale-250 sm:scale-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center bg-slate-900/60 border border-slate-800/60 rounded-full px-2 py-1 space-x-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-200 hover:text-slate-100 hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[#4ade80] rounded-full shadow-[0_0_15px_rgba(74,222,128,0.4)] -z-10" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center pr-1">
  <a
    href="tel:+971507258514"
    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-bold text-slate-100 rounded-full group bg-gradient-to-br from-purple-600 via-violet-500 to-[#4ade80] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
  >
    <span className="relative px-5 py-2 transition-all ease-in duration-200 bg-slate-950/90 rounded-full group-hover:bg-opacity-0">
      Let's Talk
    </span>
  </a>
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-lg bg-slate-800/50"
              aria-label="Toggle Navigation"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 pb-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsOpen(false);
                }}
                className="block text-slate-200 hover:text-[#4ade80] hover:bg-slate-800/40 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#4ade80] text-slate-950 font-bold px-4 py-2.5 rounded-full shadow-md text-sm"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}