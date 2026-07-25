import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="bg-[#2C2926] text-[#FAF9F5] px-4 py-3 rounded-xs border border-[#8F5855] shadow-2xl flex items-center gap-3 max-w-sm">
        <div className="w-7 h-7 rounded-full bg-[#8F5855] text-white flex items-center justify-center shrink-0">
          <Check className="w-4 h-4" />
        </div>
        <span className="font-courier text-xs text-[#FAF9F5] leading-snug">
          {toastMessage}
        </span>
      </div>
    </div>
  );
}
