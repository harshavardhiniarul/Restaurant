import React, { useState, useMemo } from 'react';
import { MenuItem, A_LA_CARTE_MENU } from '../data/restaurantData';
import { Wine, Plus, Info, Check, Filter } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: { id: string; name: string; price: number; type: string }) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Collection' },
    { id: 'hearth', label: 'Hearth & Embers' },
    { id: 'crudo', label: 'Raw & Marine' },
    { id: 'botanical', label: 'Botanical & Earth' },
    { id: 'dessert', label: 'Dolci & Pastry' },
    { id: 'beverage', label: 'Cellar & Libations' },
  ];

  const dietaryOptions = ['all', 'Gluten-Free', 'Vegetarian', 'Pescatarian'];

  const filteredItems = useMemo(() => {
    return A_LA_CARTE_MENU.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDietary =
        selectedDietary === 'all' || item.dietary.includes(selectedDietary);
      return matchesCategory && matchesDietary;
    });
  }, [activeCategory, selectedDietary]);

  const handleAddDish = (dish: MenuItem) => {
    onAddToCart({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      type: 'A La Carte Dish',
    });
    setAddedItemNotification(dish.name);
    setTimeout(() => {
      setAddedItemNotification(null);
    }, 2400);
  };

  return (
    <section id="menu" className="py-24 bg-[#0c0d0e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c49758] mb-3 font-medium">
            <span>A La Carte Selection</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Artisanal Ingredients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] font-light mb-4">
            The Autumn Menu
          </h2>
          <p className="text-sm sm:text-base text-[#a8a196] font-light leading-relaxed">
            Every dish is cooked over almond wood and white oak binchotan, honoring the seasonal rhythms of California producers.
          </p>
        </div>

        {/* Filter Controls (Interactive Segmented Controls - Allowed per Frontend Constitution) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#141618] rounded-lg border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.12em] rounded transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#c49758] text-[#0c0d0e] shadow-sm font-semibold'
                    : 'text-[#a8a196] hover:text-[#f4efe8] hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Filter Segmented buttons */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#756f66] uppercase tracking-wider text-[11px] hidden sm:inline">
              Dietary:
            </span>
            <div className="flex items-center gap-1 p-1 bg-[#141618] rounded border border-white/5">
              {dietaryOptions.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`px-2.5 py-1 text-xs rounded transition-colors ${
                    selectedDietary === diet
                      ? 'bg-white/15 text-[#f4efe8] font-medium'
                      : 'text-[#8f887d] hover:text-[#c49758]'
                  }`}
                >
                  {diet === 'all' ? 'All' : diet}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Added Notification Toast */}
        {addedItemNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1c1f24] border border-[#c49758]/50 text-[#f4efe8] px-4 py-3 rounded shadow-2xl flex items-center gap-3 animate-fade-in text-xs">
            <Check className="w-4 h-4 text-[#c49758]" />
            <span>Added <strong>{addedItemNotification}</strong> to culinary bag</span>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#141618] border border-white/5 hover:border-white/15 transition-all duration-300 rounded-lg overflow-hidden flex flex-col justify-between group"
            >
              {/* Optional Featured Image */}
              {dish.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0d0e]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 bg-[#0c0d0e]/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono tracking-wider text-[#c49758] border border-white/10">
                    Signature Hearth
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header Row: Title & Price */}
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-xl font-serif text-[#f4efe8] tracking-wide font-normal group-hover:text-[#c49758] transition-colors">
                      {dish.name}
                    </h3>
                    <div className="font-mono text-base text-[#c49758] tabular-nums font-medium whitespace-nowrap">
                      ${dish.price}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="text-xs text-[#a8a196] italic mb-3">
                    {dish.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#b5ada1] font-light leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div>
                  {/* Provenance and Dietary - No Static Pills, Pure Typography */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <div className="text-[11px] text-[#7d776e]">
                      <span className="text-[#a8a196] font-medium">Source:</span> {dish.provenance}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 text-[11px] text-[#8f887d]">
                        {dish.dietary.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {idx < dish.dietary.length - 1 && (
                              <span aria-hidden="true" className="text-white/20">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedDishForModal(dish)}
                          className="p-1.5 text-[#8f887d] hover:text-[#f4efe8] transition-colors rounded hover:bg-white/5"
                          title="View Tasting & Pairing Notes"
                          aria-label={`View tasting notes for ${dish.name}`}
                        >
                          <Info className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleAddDish(dish)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium text-[#f4efe8] bg-white/5 hover:bg-[#c49758] hover:text-[#0c0d0e] rounded transition-all active:scale-95"
                          aria-label={`Add ${dish.name} to order`}
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add to Order</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dish Tasting Notes Modal */}
      {selectedDishForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0d0e]/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141618] border border-white/10 rounded-lg max-w-lg w-full p-6 sm:p-8 space-y-5 text-left relative shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-[#c49758] mb-1">
                  Chef’s Tasting Profile
                </div>
                <h3 className="text-2xl font-serif text-[#f4efe8]">
                  {selectedDishForModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDishForModal(null)}
                className="text-[#8f887d] hover:text-[#f4efe8] text-sm p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#c5beb3] font-light leading-relaxed">
              {selectedDishForModal.description}
            </p>

            <div className="p-4 bg-[#0c0d0e] rounded border border-white/5 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#a8a196]">
                Ingredient Lineage
              </div>
              <p className="text-xs text-[#8f887d]">
                {selectedDishForModal.provenance}
              </p>
            </div>

            {selectedDishForModal.winePairing && (
              <div className="p-4 bg-[#0c0d0e] rounded border-l-2 border-[#c49758] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#c49758]">
                  <Wine className="w-3.5 h-3.5" />
                  <span>Sommelier Pairing Recommendation</span>
                </div>
                <p className="text-sm font-serif text-[#f4efe8]">
                  {selectedDishForModal.winePairing}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="font-mono text-lg text-[#c49758] tabular-nums">
                ${selectedDishForModal.price}
              </span>
              <button
                onClick={() => {
                  handleAddDish(selectedDishForModal);
                  setSelectedDishForModal(null);
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#c49758] text-[#0c0d0e] rounded hover:bg-[#d4a86b]"
              >
                Add to Culinary Bag
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
