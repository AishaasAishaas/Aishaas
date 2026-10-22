'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund'>('privacy');

  return (
    <main className="min-h-screen bg-[#0d1424] text-slate-200 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-[#4ade80]">
            Legal & Policy Information
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Transparent terms, privacy commitments, and refund policies for AISHAAS services.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-full backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'privacy'
                  ? 'bg-[#4ade80] text-slate-950 shadow-[0_0_15px_rgba(74,222,128,0.4)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'terms'
                  ? 'bg-[#4ade80] text-slate-950 shadow-[0_0_15px_rgba(74,222,128,0.4)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab('refund')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'refund'
                  ? 'bg-[#4ade80] text-slate-950 shadow-[0_0_15px_rgba(74,222,128,0.4)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Refund Policy
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8 leading-relaxed text-sm text-slate-300">
          
          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-2">Privacy Policy</h2>
                <p className="text-xs text-slate-500">Last updated: October 2026</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-slate-100">1. Information We Collect</h3>
                <p>
                  When you submit inquiries through our contact forms or reach out via email/WhatsApp, we collect information such as your name, email address, phone number, and project details necessary to deliver customized web development services.
                </p>

                <h3 className="text-base font-semibold text-slate-100">2. How We Use Your Information</h3>
                <p>
                  We utilize collected information solely to communicate project proposals, deliver Next.js development services, handle invoicing, and provide ongoing technical support. We do not sell, rent, or share your personal data with third parties for marketing purposes.
                </p>

                <h3 className="text-base font-semibold text-slate-100">3. Data Protection & Confidentiality</h3>
                <p>
                  All client design assets, database configurations, and proprietary source code are treated with strict confidentiality. Secure infrastructure and access controls are maintained to prevent unauthorized data access.
                </p>

                <h3 className="text-base font-semibold text-slate-100">4. Cookies & Analytics</h3>
                <p>
                  Our website utilizes basic performance cookies and telemetry metrics to optimize page load speeds, layout stability, and user experience across device types.
                </p>
              </div>
            </div>
          )}

          {/* Terms of Service */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-2">Terms of Service</h2>
                <p className="text-xs text-slate-500">Last updated: October 2026</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-slate-100">1. Service Scope & Deliverables</h3>
                <p>
                  AISHAAS provides custom web development, Next.js application construction, UI/UX design execution, and performance optimization services according to agreed project proposals and milestones.
                </p>

                <h3 className="text-base font-semibold text-slate-100">2. Client Intellectual Property</h3>
                <p>
                  Upon complete settlement of final project payments, all full rights, intellectual property, production source code, and custom graphic assets created specifically for your project transfer entirely to you.
                </p>

                <h3 className="text-base font-semibold text-slate-100">3. Payment Terms & Milestones</h3>
                <p>
                  Projects typically operate on structured deposit and completion milestones. Work begins upon deposit confirmation, and final code deployment or asset transfer occurs following final invoice clearance.
                </p>

                <h3 className="text-base font-semibold text-slate-100">4. Maintenance & Modifications</h3>
                <p>
                  Post-launch technical revisions or additional feature implementations outside original scope agreements are handled under supplementary support packages or hourly maintenance agreements.
                </p>
              </div>
            </div>
          )}

          {/* Refund Policy */}
          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-2">Refund & Cancellation Policy</h2>
                <p className="text-xs text-slate-500">Last updated: October 2026</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold text-slate-100">1. Project Deposits</h3>
                <p>
                  Initial project deposits cover allocated design scheduling, architecture setup, and preliminary engineering time. Deposits are fully refundable if project cancellation is requested prior to work commencement.
                </p>

                <h3 className="text-base font-semibold text-slate-100">2. In-Progress Cancellations</h3>
                <p>
                  If a client requests project cancellation after development work or design milestones have commenced, completed milestone payments remain non-refundable to cover expended engineering hours.
                </p>

                <h3 className="text-base font-semibold text-slate-100">3. Guaranteed Revisions & Satisfaction</h3>
                <p>
                  We conduct iterative review checkpoints during design and development phases to ensure alignment with client objectives. Revisions included in project plans ensure work matches agreed design specifications.
                </p>
              </div>
            </div>
          )}

          {/* Contact Assistance Footer inside legal card */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Have questions regarding our policies? Reach out directly.
            </p>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#4ade80] hover:underline hover:text-[#22c55e] transition-colors"
            >
              Contact Legal Support &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}