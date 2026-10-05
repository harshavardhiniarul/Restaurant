import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Phone, Mail, Car, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';

export const GuestGuideAndVisit: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the dress code at Aurelia?',
      a: 'We embrace "Smart Casual and Relaxed Elegance." Collared shirts, tailored jackets, and refined footwear are encouraged. We kindly request guests refrain from athletic apparel, gym sneakers, tank tops, and beach attire.'
    },
    {
      q: 'How far in advance are reservations released?',
      a: 'Reservations open on the 1st of each month at 9:00 AM PST for the following calendar month (e.g., November reservations open on October 1st). Our 8-seat Chef’s Counter releases on a 30-day rolling basis.'
    },
    {
      q: 'What is your corkage and cellar policy?',
      a: 'Guests may bring up to two 750ml bottles per party of wines not represented on our 1,800-bin list. Corkage is $75 per bottle, and is gladly waived for each bottle of comparable value ordered from our reserve cellar.'
    },
    {
      q: 'Can dietary restrictions and allergies be accommodated?',
      a: 'Yes. With 48 hours advance notice, our culinary team seamlessly customizes our 7-course degustation for pescatarian, vegetarian, gluten-free, and shellfish-free guests. Due to the fundamental role of aromatic dashi and alliums in our foundational reductions, severe allium allergies may require custom consultation.'
    },
    {
      q: 'Where do I park upon arrival?',
      a: 'We provide complimentary curbside valet parking directly at our private porte-cochère on 428 Vignes Street, beginning 30 minutes prior to evening service.'
    }
  ];

  return (
    <section id="visit" className="py-24 bg-[#0c0d0e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c49758] mb-3 font-medium">
            <span>Location & Guest Etiquette</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Arts District</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] font-light mb-4">
            Visiting Aurelia
          </h2>
          <p className="text-sm sm:text-base text-[#a8a196] font-light leading-relaxed">
            Everything you need for an effortless arrival and memorable evening in Downtown Los Angeles.
          </p>
        </div>

        {/* 3-Column Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Hours */}
          <div className="p-6 sm:p-8 bg-[#141618] border border-white/5 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-[#c49758] text-xs font-mono uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Hours of Service</span>
            </div>
            <div className="space-y-3 pt-2 text-xs divide-y divide-white/5">
              {RESTAURANT_INFO.hours.map((h, idx) => (
                <div key={idx} className="pt-2 first:pt-0">
                  <div className="font-semibold text-[#f4efe8] mb-0.5">{h.days}</div>
                  <div className="text-[#8f887d]">
                    Dinner: <span className="text-[#c5beb3]">{h.dinner}</span>
                  </div>
                  {h.lunch !== 'Closed' && (
                    <div className="text-[#8f887d]">
                      Lunch: <span className="text-[#c5beb3]">{h.lunch}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Address & Parking */}
          <div className="p-6 sm:p-8 bg-[#141618] border border-white/5 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-[#c49758] text-xs font-mono uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Address & Porte-Cochère</span>
            </div>
            <div className="space-y-3 pt-2 text-xs">
              <div className="text-sm font-serif text-[#f4efe8]">
                {RESTAURANT_INFO.address.street}
              </div>
              <div className="text-[#a8a196]">
                {RESTAURANT_INFO.address.neighborhood}
                <br />
                {RESTAURANT_INFO.address.city}
              </div>
              <div className="pt-3 border-t border-white/5 text-[#8f887d] leading-relaxed">
                <Car className="w-3.5 h-3.5 text-[#c49758] inline mr-1" />
                {RESTAURANT_INFO.address.valet}
              </div>
            </div>
          </div>

          {/* Card 3: Concierge & Policies */}
          <div className="p-6 sm:p-8 bg-[#141618] border border-white/5 rounded-lg space-y-4">
            <div className="flex items-center gap-2 text-[#c49758] text-xs font-mono uppercase tracking-wider">
              <Phone className="w-4 h-4" />
              <span>Direct Concierge</span>
            </div>
            <div className="space-y-3 pt-2 text-xs">
              <div>
                <span className="text-[#8f887d] block">Telephone</span>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-sm font-mono text-[#f4efe8] hover:text-[#c49758]">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-[#8f887d] block">Electronic Mail</span>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-sm text-[#f4efe8] hover:text-[#c49758]">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
              <div className="pt-3 border-t border-white/5 text-[#8f887d]">
                <strong className="text-[#a8a196] block mb-0.5">Corkage:</strong>
                {RESTAURANT_INFO.policies.corkage}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-[#f4efe8] font-light">
              Frequently Inquired Details
            </h3>
          </div>

          <div className="divide-y divide-white/5 border-t border-b border-white/5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-sm sm:text-base font-serif text-[#f4efe8] hover:text-[#c49758] transition-colors py-1"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 text-[#8f887d]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-2 text-xs sm:text-sm text-[#a8a196] font-light leading-relaxed pr-8 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
