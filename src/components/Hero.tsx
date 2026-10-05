import React from 'react';
import { Sparkles, ArrowDown, Calendar, Flame } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_culinary_hearth_1791195889704.jpg"
          alt="Aurelia open woodfire hearth kitchen with glowing embers and copper cookware"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in filter brightness-[0.75] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/65 to-[#0c0d0e]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c0d0e]/40 to-[#0c0d0e]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        {/* Anti-Slop: Clean Unboxed Metadata with Typographic Separators */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4a86b] mb-6 font-medium">
          <span>Two Michelin Stars 2026</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Arts District, Los Angeles</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Woodfire & Botanical</span>
        </div>

        {/* Balanced Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#f4efe8] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
          Where primal flame meets botanical refinement.
        </h1>

        {/* Subtitle with measure discipline */}
        <p className="text-base sm:text-lg text-[#c5beb3] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          An intimate dining pilgrimage governed by ancient almond wood embers,
          line-caught Pacific marine harvests, and biodynamic California terroirs
          under Executive Chef Elena Vance.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c0d0e] bg-[#c49758] hover:bg-[#d4a86b] rounded transition-all duration-200 shadow-lg shadow-[#c49758]/15 flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Reservation</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#f4efe8] border border-white/20 hover:border-[#c49758] hover:bg-white/5 rounded transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Flame className="w-3.5 h-3.5 text-[#c49758]" />
            <span>Autumn Tasting Degustation</span>
          </button>
        </div>

        {/* Quiet Editorial Accolades & Details Bar */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8f887d] mb-1 font-mono">
              Michelin Guide
            </div>
            <div className="text-sm font-serif text-[#f4efe8]">
              Two Stars 2025 & 2026
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8f887d] mb-1 font-mono">
              Service Format
            </div>
            <div className="text-sm font-serif text-[#f4efe8]">
              7-Course Degustation & A La Carte
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8f887d] mb-1 font-mono">
              Sommelier Cellar
            </div>
            <div className="text-sm font-serif text-[#f4efe8]">
              1,800 Curated Bins
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8f887d] mb-1 font-mono">
              Dining Location
            </div>
            <div className="text-sm font-serif text-[#f4efe8]">
              428 Vignes St, Suite 100
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a
          href="#menu"
          aria-label="Scroll to menu section"
          className="text-[#8f887d] hover:text-[#c49758] transition-colors p-2"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
