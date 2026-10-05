import React, { useState } from 'react';
import { CULINARY_PROVISIONS, CulinaryProvisionItem } from '../data/restaurantData';
import { Package, Check, ShoppingBag, Gift } from 'lucide-react';

interface ProvisionsProps {
  onAddToCart: (item: { id: string; name: string; price: number; type: string }) => void;
}

export const ProvisionsSection: React.FC<ProvisionsProps> = ({ onAddToCart }) => {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAdd = (item: CulinaryProvisionItem) => {
    onAddToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      type: 'Artisanal Provision',
    });
    setAddedItem(item.name);
    setTimeout(() => setAddedItem(null), 2400);
  };

  return (
    <section id="provisions" className="py-24 bg-[#0c0d0e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c49758] mb-3 font-medium">
            <span>At-Home Degustation & Pantry</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Hand-Packaged Daily</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] font-light mb-4">
            Curated Hearth Provisions
          </h2>
          <p className="text-sm sm:text-base text-[#a8a196] font-light leading-relaxed">
            Bring the warmth of our hearth into your home. Vacuum-sealed finishes, sommelier reserve duos, and our renowned 48-hour sourdough bread collections.
          </p>
        </div>

        {/* Provisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CULINARY_PROVISIONS.map((item) => (
            <div
              key={item.id}
              className="bg-[#141618] border border-white/5 hover:border-white/15 transition-all duration-300 rounded-lg p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#8f887d] block mb-1">
                      {item.serves}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#f4efe8] group-hover:text-[#c49758] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <div className="font-mono text-xl text-[#c49758] tabular-nums font-medium whitespace-nowrap">
                    ${item.price}
                  </div>
                </div>

                <div className="text-xs text-[#c49758] italic mb-4">
                  {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-[#b5ada1] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Box Contents list */}
                <div className="p-4 bg-[#0c0d0e] rounded border border-white/5 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#a8a196] mb-2 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#c49758]" />
                    <span>Vault Inclusions</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#8f887d]">
                    {item.includes.map((incl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#c49758] text-[10px] mt-0.5">✦</span>
                        <span>{incl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#80796f]">
                  Same-day pickup or evening courier delivery
                </span>
                <button
                  onClick={() => handleAdd(item)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#c49758] text-[#0c0d0e] hover:bg-[#d4a86b] rounded transition-all duration-200 flex items-center gap-1.5 active:scale-95 whitespace-nowrap"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
