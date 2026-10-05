/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TastingMenuFeature } from './components/TastingMenuFeature';
import { MenuSection } from './components/MenuSection';
import { StoryAndSpace } from './components/StoryAndSpace';
import { ProvisionsSection } from './components/ProvisionsSection';
import { PrivateDiningSection } from './components/PrivateDiningSection';
import { GuestGuideAndVisit } from './components/GuestGuideAndVisit';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [orderDrawerOpen, setOrderDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'box-3',
      name: 'Artisanal Hearth Bread & Butter Collection',
      price: 34,
      type: 'Artisanal Provision',
      quantity: 1,
    },
  ]);

  const handleAddToCart = (newItem: { id: string; name: string; price: number; type: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4efe8] flex flex-col font-sans selection:bg-[#c49758]/30 selection:text-white">
      {/* Primary Top Bar */}
      <Navbar
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenCart={() => setOrderDrawerOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setReservationModalOpen(true)}
          onExploreMenu={() => {
            const element = document.getElementById('tasting');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Autumn Tasting Degustation (7 Chapters) */}
        <TastingMenuFeature
          onOpenReservation={() => setReservationModalOpen(true)}
        />

        {/* A La Carte Menu Selection */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* The Hearth Craft, Architectural Sanctuary & Accolades */}
        <StoryAndSpace />

        {/* Curated Provisions & At-Home Culinary Boxes */}
        <ProvisionsSection onAddToCart={handleAddToCart} />

        {/* Private Vault Dining & Event Buyouts */}
        <PrivateDiningSection />

        {/* Location, Etiquette & Guest Visit FAQ */}
        <GuestGuideAndVisit />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal Engine */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Culinary Order & Provisions Drawer */}
      <OrderDrawer
        isOpen={orderDrawerOpen}
        onClose={() => setOrderDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
