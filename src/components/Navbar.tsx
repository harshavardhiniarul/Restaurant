import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenCart,
  cartItemCount,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0c0d0e]/90 via-[#0c0d0e]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (Single Text Element) */}
            <a
              href="#"
              className="text-2xl sm:text-3xl font-serif tracking-[0.2em] font-normal text-[#f4efe8] hover:text-[#c49758] transition-colors uppercase whitespace-nowrap"
            >
              Aurelia
            </a>

            {/* Zone 2: 4-6 Clean Text Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.16em] font-medium text-[#c5beb3]">
              <a
                href="#menu"
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c49758] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                Menu
              </a>
              <a
                href="#tasting"
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c49758] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                Tasting
              </a>
              <a
                href="#story"
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c49758] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                Philosophy
              </a>
              <a
                href="#provisions"
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c49758] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                Provisions
              </a>
              <a
                href="#private-dining"
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c49758] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                Private Dining
              </a>
              <a
                href="#visit"
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c49758] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                Visit
              </a>
            </nav>

            {/* Zone 3: 1-2 Primary Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCart}
                aria-label="View culinary bag"
                className="relative p-2.5 rounded text-[#f4efe8] hover:text-[#c49758] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c49758]"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c49758] text-[#0c0d0e] font-bold text-[10px] flex items-center justify-center tabular-nums">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#0c0d0e] bg-[#c49758] hover:bg-[#d4a86b] rounded transition-all duration-200 shadow-sm whitespace-nowrap active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 text-[#f4efe8] hover:text-[#c49758] focus-visible:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0c0d0e]/98 backdrop-blur-xl flex flex-col justify-between p-6">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-2xl font-serif tracking-[0.2em] uppercase text-[#f4efe8]">
              Aurelia
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#c5beb3] hover:text-[#f4efe8]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 text-base uppercase tracking-[0.2em] font-light">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f4efe8] hover:text-[#c49758] transition-colors flex items-center justify-between"
            >
              <span>A La Carte Menu</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#tasting"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f4efe8] hover:text-[#c49758] transition-colors flex items-center justify-between"
            >
              <span>Tasting Degustation</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f4efe8] hover:text-[#c49758] transition-colors flex items-center justify-between"
            >
              <span>The Craft & Philosophy</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#provisions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f4efe8] hover:text-[#c49758] transition-colors flex items-center justify-between"
            >
              <span>Artisanal Provisions</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#private-dining"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f4efe8] hover:text-[#c49758] transition-colors flex items-center justify-between"
            >
              <span>Private Vault Dining</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f4efe8] hover:text-[#c49758] transition-colors flex items-center justify-between"
            >
              <span>Hours & Location</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] bg-[#c49758] text-[#0c0d0e] rounded"
            >
              Reserve a Table
            </button>
            <div className="text-center text-xs text-[#8f887d] pt-2">
              <span>Downtown Arts District · Los Angeles</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
