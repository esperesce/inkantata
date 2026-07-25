import React, { useState } from 'react';
import { ShoppingBag, Feather, Menu, X, BookOpen, Home, Sliders } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ activeTab, setActiveTab }) {
  const { totalItemCount, setIsCartOpen, grandTotal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'configurator', label: 'Configuratore', icon: Sliders },
    { id: 'catalog', label: 'Collezione', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAFDF9]/90 backdrop-blur-md border-b border-[#E5ECE2] transition-all">
      {/* Announcement Bar */}
      <div className="bg-[#4A5D4E] text-[#F4F8F3] text-xs font-sans-ui tracking-wide py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Feather className="w-3.5 h-3.5 text-[#D8A798]" />
        <span>Spedizione Gratuita per ordini superiori a 35€ in tutta Italia</span>
        <span className="hidden md:inline text-[#B3C4AB]">|</span>
        <span className="hidden md:inline font-semibold text-[#E6D8B8]">Codice Sconto 10%: SCONTO10</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2D342E] hover:text-[#4A5D4E] transition-colors"
            aria-label="Apri Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Studio Brand Logo */}
          <div className="flex flex-col items-center md:items-start cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="flex items-center gap-2">
              <span className="font-sans-ui text-2xl md:text-3xl font-extrabold tracking-tight text-[#2D342E]">
                Inkantata
              </span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7C947B]" />
            </div>
            <span className="text-[10px] tracking-widest font-sans-ui text-[#738274] uppercase font-semibold">
              Cartoleria Artigianale
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-sans-ui font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#4A5D4E] font-bold'
                      : 'text-[#5C685D] hover:text-[#2D342E]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#4A5D4E]' : 'text-[#A3B3A0]'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#4A5D4E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="group flex items-center gap-3 px-4 py-2 border border-[#D1DEC9] hover:border-[#4A5D4E] bg-white text-[#2D342E] transition-all rounded-full shadow-xs"
          >
            <div className="relative">
              <ShoppingBag className="w-4.5 h-4.5 text-[#2D342E] group-hover:scale-110 transition-transform" />
              {totalItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#7C947B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItemCount}
                </span>
              )}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] font-sans-ui uppercase text-[#738274] font-semibold">Carrello</span>
              <span className="text-xs font-sans-ui font-extrabold text-[#2D342E]">
                €{grandTotal.toFixed(2)}
              </span>
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5ECE2] bg-[#FAFDF9] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-sans-ui rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#E5ECE2] text-[#4A5D4E] font-bold'
                    : 'text-[#5C685D] hover:bg-[#F2F7F1]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#4A5D4E]' : 'text-[#A3B3A0]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
