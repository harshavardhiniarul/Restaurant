import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Check, ArrowRight } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: string;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [fulfilmentType, setFulfilmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [pickupTime, setPickupTime] = useState<string>('Today at 6:30 PM');
  const [gratuityPercent, setGratuityPercent] = useState<number>(20);
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gratuity = (subtotal * gratuityPercent) / 100;
  const tax = subtotal * 0.095; // 9.5% LA county dining tax
  const total = subtotal + gratuity + tax;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    const orderNum = 'AUR-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedOrderId(orderNum);
    onClearCart();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-[#0c0d0e]/80 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-[#141618] border-l border-white/10 shadow-2xl flex flex-col justify-between">
            {/* Drawer Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0c0d0e]/40">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#c49758]" />
                <h2 className="font-serif text-xl text-[#f4efe8]">
                  Culinary Bag
                </h2>
                <span className="text-xs font-mono text-[#8f887d]">
                  ({items.reduce((s, i) => s + i.quantity, 0)} items)
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-[#8f887d] hover:text-[#f4efe8] rounded transition-colors"
                aria-label="Close bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="p-6 overflow-y-auto flex-1 divide-y divide-white/5">
              {items.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 text-[#8f887d] flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-serif text-[#f4efe8]">
                    Your bag is presently empty
                  </div>
                  <p className="text-xs text-[#8f887d] max-w-xs mx-auto">
                    Explore our woodfire provisions, sourdough collections, or a la carte specialties.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider text-[#8f887d] font-mono">
                        {item.type}
                      </div>
                      <h4 className="text-sm font-serif text-[#f4efe8] truncate">
                        {item.name}
                      </h4>
                      <div className="text-xs font-mono text-[#c49758] tabular-nums mt-0.5">
                        ${item.price} each
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#0c0d0e] border border-white/10 rounded">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1.5 text-[#8f887d] hover:text-[#f4efe8]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono text-[#f4efe8] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1.5 text-[#8f887d] hover:text-[#f4efe8]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#8f887d] hover:text-red-400"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Subtotal & Checkout Section */}
            {items.length > 0 && (
              <div className="p-6 bg-[#0c0d0e] border-t border-white/10 space-y-4">
                {/* Fulfilment Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#141618] rounded border border-white/5 text-xs">
                  <button
                    onClick={() => setFulfilmentType('pickup')}
                    className={`py-1.5 rounded uppercase tracking-wider font-medium transition-colors ${
                      fulfilmentType === 'pickup'
                        ? 'bg-[#c49758] text-[#0c0d0e]'
                        : 'text-[#8f887d] hover:text-[#f4efe8]'
                    }`}
                  >
                    Hearthside Pickup
                  </button>
                  <button
                    onClick={() => setFulfilmentType('delivery')}
                    className={`py-1.5 rounded uppercase tracking-wider font-medium transition-colors ${
                      fulfilmentType === 'delivery'
                        ? 'bg-[#c49758] text-[#0c0d0e]'
                        : 'text-[#8f887d] hover:text-[#f4efe8]'
                    }`}
                  >
                    Courier Delivery
                  </button>
                </div>

                {/* Pickup Window */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8f887d]">Ready Window:</span>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="bg-[#141618] border border-white/10 text-xs text-[#f4efe8] rounded px-2 py-1"
                  >
                    <option value="Today at 5:30 PM">Today at 5:30 PM</option>
                    <option value="Today at 6:30 PM">Today at 6:30 PM</option>
                    <option value="Today at 7:30 PM">Today at 7:30 PM</option>
                    <option value="Tomorrow at 1:00 PM">Tomorrow at 1:00 PM</option>
                  </select>
                </div>

                {/* Gratuity Selector */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-[#8f887d]">
                    <span>Kitchen & Service Gratuity:</span>
                    <span className="text-[#c49758] font-mono tabular-nums">
                      ${gratuity.toFixed(2)}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-xs">
                    {[15, 18, 20, 25].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setGratuityPercent(pct)}
                        className={`py-1 rounded border text-[11px] font-mono transition-colors ${
                          gratuityPercent === pct
                            ? 'border-[#c49758] bg-[#c49758]/20 text-[#f4efe8]'
                            : 'border-white/5 bg-[#141618] text-[#8f887d]'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation breakdown */}
                <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                  <div className="flex justify-between text-[#8f887d]">
                    <span>Subtotal:</span>
                    <span className="font-mono text-[#f4efe8] tabular-nums">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#8f887d]">
                    <span>Sales & Dining Tax (9.5%):</span>
                    <span className="font-mono text-[#f4efe8] tabular-nums">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold pt-1 border-t border-white/10">
                    <span className="text-[#f4efe8]">Total Balance:</span>
                    <span className="font-mono text-[#c49758] tabular-nums text-base">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full py-3 text-xs font-semibold uppercase tracking-[0.16em] bg-[#c49758] text-[#0c0d0e] hover:bg-[#d4a86b] rounded transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Proceed to Finalize Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c0d0e]/85 backdrop-blur-md">
          <div className="bg-[#141618] border border-white/10 rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            {confirmedOrderId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#c49758]/20 text-[#c49758] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono text-[#c49758]">
                  Order Number #{confirmedOrderId} Confirmed
                </div>
                <h3 className="text-2xl font-serif text-[#f4efe8]">
                  Packaging in Progress
                </h3>
                <p className="text-xs text-[#a8a196] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{customerName}</strong>. Our kitchen is preparing your selection for {pickupTime.toLowerCase()}. An SMS confirmation will alert you upon readiness.
                </p>
                <div className="p-4 bg-[#0c0d0e] rounded border border-white/5 text-xs text-left space-y-1">
                  <div className="text-[#8f887d]">Pick-up Location:</div>
                  <div className="font-serif text-[#f4efe8]">
                    Aurelia Curbside Valet · 428 Vignes St, Suite 100
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowCheckoutModal(false);
                    setConfirmedOrderId(null);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c49758] text-[#0c0d0e] rounded hover:bg-[#d4a86b]"
                >
                  Return to Sanctuary
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-xl font-serif text-[#f4efe8]">
                    Complete Hearth Order
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowCheckoutModal(false)}
                    className="text-[#8f887d] hover:text-[#f4efe8]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Recipient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Montgomery"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (213) 555-0199"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                    />
                  </div>

                  {fulfilmentType === 'delivery' && (
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#a8a196] mb-1">
                        Delivery Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Street, Suite / Unit, City, Postal Code"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full bg-[#0c0d0e] border border-white/10 rounded px-3 py-2 text-xs text-[#f4efe8] focus:border-[#c49758] focus:outline-none"
                      />
                    </div>
                  )}

                  <div className="p-3 bg-[#0c0d0e] rounded border border-white/5 text-xs flex justify-between items-center">
                    <div>
                      <span className="text-[#8f887d] block">{fulfilmentType === 'pickup' ? 'Ready Window' : 'Delivery Window'}</span>
                      <span className="text-[#f4efe8] font-medium">{pickupTime}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#8f887d] block">Total Charge</span>
                      <span className="font-mono text-sm text-[#c49758] tabular-nums font-semibold">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowCheckoutModal(false)}
                    className="text-xs uppercase tracking-wider text-[#8f887d] hover:text-[#f4efe8]"
                  >
                    Modify
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] bg-[#c49758] text-[#0c0d0e] hover:bg-[#d4a86b] rounded transition-all active:scale-[0.98]"
                  >
                    Confirm & Transmit Order
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
