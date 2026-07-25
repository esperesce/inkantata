import React from 'react';
import { Feather, ArrowRight, BookOpen, Sparkles, Heart } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function HeroHome({ onStartCustomizer }) {
  const { addToCart } = useCart();

  return (
    <div className="space-y-16 py-8 md:py-12 px-4 max-w-7xl mx-auto">
      
      {/* Hero Banner Container */}
      <div className="relative bg-white border border-[#E2EBE0] p-8 sm:p-12 md:p-16 rounded-2xl shadow-xs overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Soft Watercolor Accent Circles */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#E8D3CE]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D1DEC9]/40 blur-3xl pointer-events-none" />

        <div className="max-w-xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2F7F1] border border-[#D1DEC9] rounded-full text-xs font-sans-ui text-[#4A5D4E] font-semibold">
            <Feather className="w-4 h-4 text-[#7C947B]" />
            <span>Cartoleria Fatta a Mano con Acquerelli</span>
          </div>

          <h1 className="font-sans-ui text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2D342E] leading-tight tracking-tight">
            Crea il tuo ricordo <span className="text-[#7C947B] underline decoration-[#D8A798]/50 decoration-wavy">unico</span> e personalizzato.
          </h1>

          <p className="font-sans-ui text-base sm:text-lg text-[#5C685D] leading-relaxed">
            Personalizza segnalibri e biglietti d'auguri dipinti ad acquerello. Scegli il messaggio, i colori dell'inchiostro e i nastri in seta.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={() => onStartCustomizer('bookmark')}
              className="w-full sm:w-auto px-7 py-4 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui font-bold text-sm rounded-full transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
            >
              <span>Personalizza Segnalibro (€12)</span>
              <ArrowRight className="w-4 h-4 text-[#E6D8B8]" />
            </button>

            <button
              onClick={() => onStartCustomizer('card')}
              className="w-full sm:w-auto px-7 py-4 bg-[#FAFDF9] hover:bg-[#F2F7F1] text-[#2D342E] border border-[#D1DEC9] font-sans-ui font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Crea Biglietto d'Auguri (€9.50)</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Card Stack */}
        <div className="relative z-10 w-full max-w-sm shrink-0">
          <div className="bg-[#FAFDF9] p-6 rounded-2xl border border-[#D1DEC9] shadow-lg space-y-4 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-3/4 bg-white rounded-xl border border-[#E2EBE0] p-6 flex flex-col justify-between watercolor-border-sage shadow-xs relative">
              <div className="text-center text-xs font-sans-ui text-[#738274] font-semibold uppercase tracking-wider">
                Inkantata Studio
              </div>

              <div className="my-auto text-center py-4">
                <p className="font-handwriting-caveat text-3xl text-[#1A1A1A] leading-relaxed">
                  "Leggere è volare senza ali."
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-sans-ui text-[#738274] pt-2 border-t border-dashed border-[#D1DEC9]">
                <span>Inchiostro Nero</span>
                <span>•</span>
                <span>Nastro Salvia</span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-xs font-sans-ui font-bold text-[#4A5D4E]">
                Esempio di Anteprima dal Vivo
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Quick Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-[#E2EBE0] rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-full bg-[#F2F7F1] text-[#4A5D4E] flex items-center justify-center font-bold text-sm">
            ✓
          </div>
          <h3 className="font-sans-ui font-bold text-base text-[#2D342E]">
            Carte Pregiate & Cotone
          </h3>
          <p className="font-sans-ui text-xs text-[#5C685D] leading-relaxed">
            Supporti in carta cotone 300g e bordi ad acquerello realizzati a mano nel nostro laboratorio.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E2EBE0] rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-full bg-[#F2F7F1] text-[#4A5D4E] flex items-center justify-center font-bold text-sm">
            ✓
          </div>
          <h3 className="font-sans-ui font-bold text-base text-[#2D342E]">
            Scrittura in Corsivo Reale
          </h3>
          <p className="font-sans-ui text-xs text-[#5C685D] leading-relaxed">
            Il tuo testo viene renderizzato immediatamente nella calligrafia selezionata con anteprima live.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E2EBE0] rounded-xl space-y-2">
          <div className="w-8 h-8 rounded-full bg-[#F2F7F1] text-[#4A5D4E] flex items-center justify-center font-bold text-sm">
            ✓
          </div>
          <h3 className="font-sans-ui font-bold text-base text-[#2D342E]">
            Spedizione in 24-48 Ore
          </h3>
          <p className="font-sans-ui text-xs text-[#5C685D] leading-relaxed">
            Ogni ordine viene preparato e confezionato con cura. Spedizione gratuita sopra i 35€.
          </p>
        </div>
      </div>

    </div>
  );
}
