import React, { useState, useEffect } from 'react';
import { Cookie, Check, ShieldCheck, X } from 'lucide-react';

export default function CookieBanner({ onOpenPrivacy }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('inkantata_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('inkantata_cookie_consent', 'all');
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('inkantata_cookie_consent', 'necessary');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-[#E2EBE0] shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Cookie Text */}
        <div className="flex items-start gap-3.5 text-left max-w-3xl">
          <div className="w-10 h-10 rounded-full bg-[#F4F8F3] text-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-sans-ui text-sm font-bold text-[#2D342E]">
              Informativa Cookie & Privacy GDPR
            </h4>
            <p className="font-sans-ui text-xs text-[#5C685D] leading-relaxed">
              Utilizziamo cookie tecnici necessari per il funzionamento del carrello e del configuratore, oltre a cookie analitici anonimi per migliorare la tua esperienza nel nostro laboratorio artigianale.{' '}
              <button
                onClick={onOpenPrivacy}
                className="text-[#4A5D4E] underline font-semibold hover:text-[#3B4C3E] cursor-pointer"
              >
                Leggi la Privacy Policy completa
              </button>.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#FAFDF9] hover:bg-[#F2F7F1] text-[#2D342E] border border-[#D1DEC9] font-sans-ui text-xs font-bold rounded-full transition-colors cursor-pointer"
          >
            Solo Necessari
          </button>
          
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-xs font-bold rounded-full transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4 text-[#E6D8B8]" />
            <span>Accetta Tutti</span>
          </button>
        </div>

      </div>
    </div>
  );
}
