import React, { useState } from 'react';
import { Feather, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenPrivacy }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#2D342E] text-[#F4F8F3] pt-16 pb-12 border-t border-[#3B4C3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[#3B4C3E]">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans-ui text-2xl text-[#F4F8F3] font-bold">
                Inkantata
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C947B]" />
            </div>
            <p className="font-sans-ui text-xs text-[#B3C4AB] leading-relaxed">
              Cartoleria artigianale, segnalibri personalizzati e biglietti d'auguri dipinti a mano con acquerelli.
            </p>
            <div className="text-[11px] font-sans-ui text-[#A3B3A0]">
              Laboratorio Artigianale • Made in Italy
            </div>
          </div>

          {/* Col 2: Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="font-sans-ui text-sm font-bold text-[#F4F8F3] uppercase tracking-wider">
              Navigazione & Legale
            </h4>
            <ul className="space-y-2 font-sans-ui text-xs text-[#B3C4AB]">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">
                  Homepage
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('configurator')} className="hover:text-white transition-colors cursor-pointer">
                  Configuratore Prodotto
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-white transition-colors cursor-pointer">
                  Collezione Pronta
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('custom')} className="hover:text-white transition-colors cursor-pointer">
                  Progetti Su Misura
                </button>
              </li>
              <li className="pt-1 border-t border-[#3B4C3E]">
                <button onClick={onOpenPrivacy} className="hover:text-[#E6D8B8] transition-colors cursor-pointer flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C947B]" />
                  <span>Privacy & Cookie Policy (GDPR)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-sans-ui text-sm font-bold text-[#F4F8F3] uppercase tracking-wider">
              Newsletter Artigianale
            </h4>
            <p className="font-sans-ui text-xs text-[#B3C4AB] leading-relaxed">
              Iscriviti per ricevere aggiornamenti sulle nuove collezioni e codici sconto esclusivi.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#3B4C3E] text-[#E6D8B8] font-sans-ui text-xs rounded-lg border border-[#4A5D4E]">
                ✓ Iscrizione confermata! Benvenuto in Inkantata.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="La tua email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#202722] border border-[#3B4C3E] focus:border-[#7C947B] focus:outline-hidden px-3.5 py-2 text-xs font-sans-ui text-[#F4F8F3] rounded-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#7C947B] hover:bg-[#687E67] text-white font-sans-ui text-xs font-bold rounded-full transition-colors shrink-0 cursor-pointer"
                >
                  Iscriviti
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans-ui text-xs text-[#A3B3A0]">
          <div>
            © {new Date().getFullYear()} Inkantata. Tutti i diritti riservati.
          </div>
          <div className="flex items-center gap-1 text-[#7C947B]">
            <span>Fatto a mano con cura ed passione</span>
            <Feather className="w-3.5 h-3.5 inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}
