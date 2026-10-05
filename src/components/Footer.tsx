import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#08090a] border-t border-white/10 pt-16 pb-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-2xl font-serif tracking-[0.2em] uppercase text-[#f4efe8] block">
              Aurelia
            </span>
            <p className="text-xs text-[#8f887d] max-w-sm leading-relaxed font-light">
              Contemporary woodfire gastronomy and botanical harvests in the Downtown Los Angeles Arts District. Two Michelin Stars.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#c49758]">
              {RESTAURANT_INFO.accolades}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#a8a196]">
              Exploration
            </div>
            <ul className="space-y-2 text-[#8f887d]">
              <li>
                <a href="#menu" className="hover:text-[#f4efe8] transition-colors">
                  A La Carte Menu
                </a>
              </li>
              <li>
                <a href="#tasting" className="hover:text-[#f4efe8] transition-colors">
                  Autumn Degustation
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#f4efe8] transition-colors">
                  Craft & Philosophy
                </a>
              </li>
              <li>
                <a href="#provisions" className="hover:text-[#f4efe8] transition-colors">
                  Pantry Provisions
                </a>
              </li>
              <li>
                <a href="#private-dining" className="hover:text-[#f4efe8] transition-colors">
                  The Sommelier Vault
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Coordinates */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#a8a196]">
              Sanctuary
            </div>
            <div className="text-[#8f887d] space-y-1 font-light leading-relaxed">
              <p className="text-[#f4efe8]">{RESTAURANT_INFO.address.street}</p>
              <p>{RESTAURANT_INFO.address.neighborhood}</p>
              <p>{RESTAURANT_INFO.address.city}</p>
              <p className="pt-2 text-[#c49758]">{RESTAURANT_INFO.phone}</p>
              <p>{RESTAURANT_INFO.email}</p>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#a8a196]">
              Seasonal Solstice Bulletin
            </div>
            <p className="text-[#8f887d] text-xs font-light">
              Receive advance notice when quarterly tasting reservations and rare cellar allocation releases unlock.
            </p>
            {subscribed ? (
              <div className="p-3 bg-white/5 border border-[#c49758]/30 rounded text-[#c49758] flex items-center gap-2 text-xs">
                <Check className="w-4 h-4" />
                <span>Enrolled for Solstice bulletins</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#141618] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none flex-1"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-3 py-2 bg-[#c49758] text-[#0c0d0e] rounded hover:bg-[#d4a86b] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom row: Quiet copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[#69645c] text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} Aurelia Restaurant Group LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#visit" className="hover:text-[#a8a196]">Guest Etiquette</a>
            <span>·</span>
            <a href="#visit" className="hover:text-[#a8a196]">Corkage Policy</a>
            <span>·</span>
            <a href="#visit" className="hover:text-[#a8a196]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
