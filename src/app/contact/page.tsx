'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/contact'; // Adjust path if your actions folder is located elsewhere

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$1k - $3k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
      });

      if (res.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Web Development',
          budget: '$1k - $3k',
          message: '',
        });
      } else {
        setErrorMessage(res.error || 'Failed to send message.');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1424] text-slate-100 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-[#4ade80]">
            Let's Build Something Great
          </h1>
          <p className="text-slate-400 text-lg">
            Have a project in mind or need a high-performance Next.js website? Reach out and let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-slate-100">Contact Information</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fill out the form, email us, or call us directly. We respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              {/* Email Block */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                <a
                  href="mailto:hello@aishaas.com"
                  className="text-sm font-medium text-[#4ade80] hover:underline hover:text-[#22c55e] transition-colors duration-200 inline-block"
                >
                  hello@aishaas.com
                </a>
              </div>

              {/* Call Now Block */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</p>
                <a
                  href="tel:+971502541388"
                  className="text-sm font-medium text-[#4ade80] hover:underline hover:text-[#22c55e] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>+971 50 254 1388</span>
                </a>
              </div>

              {/* Availability Status Block */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Availability</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                  <p className="text-sm text-slate-300">Accepting new projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-3 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#4ade80]/20 text-[#4ade80] rounded-full flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. We have received your inquiry and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-sm font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                    >
                      <option value="Web Development">Business Website</option>
                      <option value="UI/UX Design">E-Commerce Website</option>
                      <option value="GSAP Animations">Mobile Application</option>
                      <option value="Full Project">Full Custom Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project goals, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-[#4ade80] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-[#4ade80] text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}