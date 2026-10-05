import React, { useState } from 'react';
import { Users, Wine, Calendar, Check, Send } from 'lucide-react';

export const PrivateDiningSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestCount: '12',
    date: '',
    space: 'The Sommelier’s Vault (Up to 14)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;
    setSubmitted(true);
  };

  return (
    <section id="private-dining" className="py-24 bg-[#0e1012] border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Private Rooms Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c49758] font-medium">
              <span>Celebrations & Buyouts</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Intimate Spaces</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] font-light leading-tight">
              Private Gastronomy & Sommelier Vaults
            </h2>

            <p className="text-sm sm:text-base text-[#b8b0a4] font-light leading-relaxed">
              Whether hosting a milestone celebration, executive dinner, or intimate matrimonial gathering,
              Aurelia offers dedicated private quarters paired with bespoke multi-course menus crafted
              in collaboration with Chef Elena Vance and Master Sommelier Marcus Wright.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="p-4 bg-[#141618] border border-white/5 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-[#f4efe8]">
                    The Sommelier’s Vault
                  </h4>
                  <span className="text-xs font-mono text-[#c49758]">8–14 Guests</span>
                </div>
                <p className="text-xs text-[#8f887d]">
                  Subterranean candlelit sanctuary surrounded by rare Grand Cru vintages. Includes dedicated sommelier service.
                </p>
              </div>

              <div className="p-4 bg-[#141618] border border-white/5 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-[#f4efe8]">
                    The Hearth Salon & Pergola
                  </h4>
                  <span className="text-xs font-mono text-[#c49758]">16–32 Guests</span>
                </div>
                <p className="text-xs text-[#8f887d]">
                  Semi-private glass pavilion overlooking our heritage olive tree courtyard with direct sightlines into the flame kitchen.
                </p>
              </div>

              <div className="p-4 bg-[#141618] border border-white/5 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-[#f4efe8]">
                    Full Sanctuary Buyout
                  </h4>
                  <span className="text-xs font-mono text-[#c49758]">Up to 64 Seated</span>
                </div>
                <p className="text-xs text-[#8f887d]">
                  Exclusive evening access to the entire restaurant, lounge, and courtyard garden with personalized menu cards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Private Event Inquiry Form */}
          <div className="lg:col-span-6 bg-[#141618] border border-white/10 rounded-lg p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#c49758]/20 text-[#c49758] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#f4efe8]">
                  Inquiry Received with Distinction
                </h3>
                <p className="text-xs sm:text-sm text-[#a8a196] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our Private Events Concierge, Victoria Laurent, will review date availability for {formData.space} on {formData.date} and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#c49758] border border-[#c49758]/40 hover:bg-[#c49758]/10 rounded"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-[#f4efe8] mb-1">
                    Request Private Dining
                  </h3>
                  <p className="text-xs text-[#8f887d]">
                    Please provide your tentative event specifications below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Katherine Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="katherine@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (310) 555-0192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Guest Count
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    >
                      <option value="6-8">6–8 Guests</option>
                      <option value="9-14">9–14 Guests</option>
                      <option value="15-25">15–25 Guests</option>
                      <option value="26-40">26–40 Guests</option>
                      <option value="41-64">41–64 Guests (Full Buyout)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                    Preferred Space
                  </label>
                  <select
                    value={formData.space}
                    onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                    className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                  >
                    <option value="The Sommelier’s Vault (Up to 14)">The Sommelier’s Vault (Up to 14 Guests)</option>
                    <option value="The Hearth Salon & Pergola (16–32)">The Hearth Salon & Pergola (16–32 Guests)</option>
                    <option value="Full Restaurant Buyout (Up to 64)">Full Restaurant Buyout (Up to 64 Seated)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                    Occasion & Dining Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the occasion (e.g., anniversary, executive wine dinner, brand launch), dietary considerations, or preferred wine focus..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-sm text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c0d0e] bg-[#c49758] hover:bg-[#d4a86b] rounded transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Private Dining Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
