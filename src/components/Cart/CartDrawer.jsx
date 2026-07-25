import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shipping,
    grandTotal,
    discountCode,
    applyDiscount
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Slide-out Sheet Drawer */}
      <aside className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white border-l border-[#E2EBE0] shadow-2xl flex flex-col justify-between animate-slide-in">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E5ECE2] flex items-center justify-between bg-[#FAFDF9]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#4A5D4E]" />
            <h2 className="font-sans-ui text-lg font-bold text-[#2D342E]">
              Il tuo Carrello ({cart.reduce((c, i) => c + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#738274] hover:text-[#2D342E] hover:bg-[#F2F7F1] rounded-full transition-colors cursor-pointer"
            aria-label="Chiudi Carrello"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#E5ECE2]">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#F4F8F3] flex items-center justify-center mx-auto text-[#7C947B]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="font-sans-ui font-bold text-base text-[#2D342E]">
                Il tuo carrello è vuoto.
              </p>
              <p className="font-sans-ui text-xs text-[#5C685D]">
                Personalizza un segnalibro o un biglietto per iniziare.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                {/* Mini Preview Box */}
                <div className="w-16 h-20 bg-[#F4F8F3] border border-[#E2EBE0] rounded-xl shrink-0 flex items-center justify-center p-2 text-center relative overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[10px] font-sans-ui text-[#2D342E] leading-tight">
                      <span className="font-bold text-[#4A5D4E] uppercase">
                        {item.productType === 'bookmark' ? 'Segnalibro' : 'Biglietto'}
                      </span>
                      <span className="truncate w-12 text-[#738274] mt-1">{item.inkName}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-sans-ui text-sm font-bold text-[#2D342E]">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#A3B3A0] hover:text-[#8F3A3A] p-0.5 transition-colors cursor-pointer"
                        title="Rimuovi"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {item.isCustom ? (
                      <div className="text-xs font-sans-ui text-[#5C685D] mt-1 space-y-0.5 leading-snug">
                        <div>Carta: <strong className="text-[#2D342E]">{item.paperName}</strong></div>
                        <div>Inchiostro: <strong className="text-[#2D342E]">{item.inkName}</strong></div>
                        {item.ribbonName && (
                          <div>Nastro: <strong className="text-[#2D342E]">{item.ribbonName}</strong></div>
                        )}
                        {item.message && (
                          <div className="truncate text-[#7C947B] font-handwriting-caveat text-base">"{item.message}"</div>
                        )}
                      </div>
                    ) : (
                      <div className="text-xs font-sans-ui text-[#738274] mt-1">
                        Prodotto Pronto
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#D1DEC9] rounded-full bg-[#FAFDF9]">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2.5 py-0.5 text-xs text-[#2D342E] hover:bg-[#E5ECE2] rounded-l-full cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-sans-ui font-bold text-xs text-[#2D342E]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2.5 py-0.5 text-xs text-[#2D342E] hover:bg-[#E5ECE2] rounded-r-full cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-sans-ui text-sm font-extrabold text-[#2D342E]">
                      €{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Calculations */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#E5ECE2] bg-[#FAFDF9] space-y-4">
            
            {/* Promo Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Codice Sconto (es. SCONTO10)"
                className="flex-1 input-minimal-it text-xs font-sans-ui text-[#2D342E]"
              />
              <button
                onClick={() => {
                  applyDiscount(inputCode);
                  setInputCode('');
                }}
                className="px-4 py-1.5 bg-[#E5ECE2] hover:bg-[#4A5D4E] hover:text-white text-[#2D342E] text-xs font-sans-ui font-bold rounded-full transition-colors cursor-pointer"
              >
                Applica
              </button>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs font-sans-ui text-[#5C685D]">
              <div className="flex justify-between">
                <span>Subtotale</span>
                <span className="font-bold text-[#2D342E]">€{subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#7C947B]">
                  <span>Sconto (10%)</span>
                  <span className="font-bold">-€{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Spedizione</span>
                <span className="font-bold text-[#2D342E]">
                  {shipping === 0 ? 'GRATUITA' : `€${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E2EBE0] flex justify-between font-sans-ui text-base text-[#2D342E] font-extrabold">
                <span>Totale</span>
                <span>€{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full py-3.5 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-sm font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Procedi al Cassa Sicura</span>
              <ArrowRight className="w-4 h-4 text-[#E6D8B8]" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] font-sans-ui text-[#738274]">
              <ShieldCheck className="w-4 h-4 text-[#7C947B]" />
              <span>Confezione artigianale inclusa in ogni ordine</span>
            </div>
          </div>
        )}
      </aside>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal onClose={() => setShowCheckout(false)} />
      )}
    </>
  );
}
