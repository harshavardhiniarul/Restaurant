import React from 'react';
import { TEAM_MEMBERS, TESTIMONIALS } from '../data/restaurantData';
import { Flame, Compass, Sparkles, Quote } from 'lucide-react';

export const StoryAndSpace: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#0e1012] border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Story Layout: Split Screen with Interior Architectural Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c49758] font-medium">
              <span>Philosophy & Space</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Arts District</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] font-light leading-tight">
              An architecture shaped by fire, stone, and silence.
            </h2>

            <p className="text-sm sm:text-base text-[#b8b0a4] font-light leading-relaxed">
              Nestled inside a restored 1924 industrial timber warehouse in the Downtown Arts District,
              Aurelia was designed around a central open hearth built with reclaimed volcanic stone and
              surrounded by hand-finished French white oak.
            </p>

            <p className="text-sm sm:text-base text-[#b8b0a4] font-light leading-relaxed">
              Here, cooking is stripped of theatrical distraction. We rely on three natural hardwoods—Central
              Valley almond wood for sweet aromatic smoke, white oak for relentless blistering heat, and binchotan
              for pure ember searing.
            </p>

            {/* Editorial Numbering Pillars */}
            <div className="pt-6 border-t border-white/10 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-[#c49758] mb-1">
                  01. Primal Heat Gradients
                </div>
                <p className="text-xs sm:text-sm text-[#8f887d] font-light">
                  From 1,200°F ember roasting down to 140°F gentle aromatic smoking suspended three feet above the hearth rack.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-[#c49758] mb-1">
                  02. Coastal Foraging & Living Soils
                </div>
                <p className="text-xs sm:text-sm text-[#8f887d] font-light">
                  Partnering with twelve certified regenerative California family farms within a 120-mile radius.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-[#c49758] mb-1">
                  03. The Biodynamic Cellar
                </div>
                <p className="text-xs sm:text-sm text-[#8f887d] font-light">
                  A subterranean vault housing low-intervention growers, rare natural bottles, and iconic historic vintages.
                </p>
              </div>
            </div>
          </div>

          {/* Architectural Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/restaurant_interior_dining_1791195930241.jpg"
                alt="Aurelia intimate dining room with linen tablecloths, crystal glassware and garden views"
                className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0c0d0e]/80 backdrop-blur-md rounded border border-white/10 text-xs">
                <span className="font-serif italic text-[#f4efe8] text-sm block mb-1">
                  The Main Dining Salon & Courtyard Pergola
                </span>
                <span className="text-[#8f887d]">
                  Seating for 48 guests · Architect: Studio Vignes · Lighting: Pierre Chareau Replicas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Leadership Team */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#c49758] font-mono mb-2">
              Culinary Guardians
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#f4efe8] font-light">
              Crafted by Disciplined Hands
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-[#141618] border border-white/5 rounded-lg space-y-3 hover:border-white/15 transition-all"
              >
                <div>
                  <h4 className="text-lg font-serif text-[#f4efe8]">
                    {member.name}
                  </h4>
                  <div className="text-xs uppercase tracking-wider text-[#c49758] mt-0.5">
                    {member.role}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#9e968a] font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Attributable Testimonials & Critical Accolades */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#c49758] font-mono mb-2">
              Critical Acclaim
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#f4efe8] font-light">
              Voices of the Gastronomic World
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#141618]/60 border-l border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="w-5 h-5 text-[#c49758]/50" />
                  <p className="text-sm font-serif italic text-[#dfdad2] leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 text-xs">
                  <div className="font-semibold text-[#f4efe8]">{item.source}</div>
                  <div className="text-[#8f887d]">{item.critic} · {item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
