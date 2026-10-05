import React, { useState } from 'react';
import { TASTING_MENU } from '../data/restaurantData';
import { Wine, Sparkles, Clock, Check } from 'lucide-react';

interface TastingMenuProps {
  onOpenReservation: () => void;
}

export const TastingMenuFeature: React.FC<TastingMenuProps> = ({ onOpenReservation }) => {
  const [showPairings, setShowPairings] = useState(true);

  return (
    <section id="tasting" className="py-24 bg-[#0e1012] border-t border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c49758] mb-3 font-medium">
            <span>Autumn & Winter 2026</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>$265 per guest</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] font-light mb-4">
            The Woodfire Degustation
          </h2>
          <p className="text-sm sm:text-base text-[#a8a196] font-light leading-relaxed">
            Seven chapters conceived around hearth temperatures, ember-roasted botanicals,
            and cold Pacific depths. Designed for the entire table.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowPairings(!showPairings)}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase rounded transition-colors flex items-center gap-2 border ${
                showPairings
                  ? 'bg-[#c49758]/10 text-[#d4a86b] border-[#c49758]/40'
                  : 'bg-transparent text-[#8f887d] border-white/10 hover:border-white/20'
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>{showPairings ? 'Hide Reserve Pairings' : 'Show Sommelier Wine Pairings (+$165)'}</span>
            </button>
          </div>
        </div>

        {/* Tasting Courses List - Clean Editorial Style */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {TASTING_MENU.map((course) => (
            <div
              key={course.courseNumber}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-white/[0.015] transition-colors px-3 sm:px-4 -mx-3 sm:-mx-4 rounded"
            >
              {/* Course Num & Phase */}
              <div className="md:col-span-3">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#8f887d]">
                  Course 0{course.courseNumber}
                </span>
                <div className="text-xs font-serif italic text-[#c49758] mt-1">
                  {course.courseName}
                </div>
              </div>

              {/* Course Title & Details */}
              <div className="md:col-span-9">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#f4efe8] tracking-wide font-normal group-hover:text-[#c49758] transition-colors">
                    {course.dishName}
                  </h3>
                </div>

                <p className="text-sm text-[#b8b0a4] font-light leading-relaxed mb-3">
                  {course.description}
                </p>

                {/* Provenance note */}
                <div className="text-xs text-[#80796f] italic mb-3">
                  Provenance: {course.origin}
                </div>

                {/* Sommelier Wine Pairing */}
                {showPairings && (
                  <div className="bg-[#141618] border-l-2 border-[#c49758] p-3 text-xs rounded-r">
                    <div className="flex items-center gap-1.5 text-[#c49758] font-medium uppercase tracking-[0.14em] mb-1">
                      <Wine className="w-3 h-3" />
                      <span>Sommelier Reserve Pairing</span>
                    </div>
                    <div className="text-[#e2ded6] font-serif text-sm">
                      {course.winePairing}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Degustation Footer Note & Reservation CTA */}
        <div className="mt-12 p-6 sm:p-8 bg-[#141618] border border-white/5 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-serif text-[#f4efe8]">
              Dietary Adaptations & Cellar Inquiries
            </div>
            <p className="text-xs text-[#8f887d] max-w-xl">
              We enthusiastically accommodate pescatarian, gluten-free, and plant-forward dietary needs with 48 hours notice.
              Estimated dining duration is 2 hours and 30 minutes.
            </p>
          </div>

          <button
            onClick={onOpenReservation}
            className="w-full md:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c0d0e] bg-[#c49758] hover:bg-[#d4a86b] rounded transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
          >
            Reserve Degustation Table
          </button>
        </div>
      </div>
    </section>
  );
};
