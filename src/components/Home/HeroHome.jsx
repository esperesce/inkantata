import React from 'react';
import { Feather, ArrowRight, Sparkles, BookOpen, ShoppingBag, Check } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function HeroHome({ onStartCustomizer, onNavigate }) {
  const { addToCart } = useCart();

  return (
    <div className="space-y-16 py-8 md:py-14 px-4 max-w-7xl mx-auto animate-fade-in">
      
      {/* 1. HERO MAIN BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2F7F1] border border-[#D1DEC9] rounded-full text-xs font-courier text-[#4A5D4E] font-bold">
          <Feather className="w-3.5 h-3.5 text-[#7C947B]" />
          <span>CARTOLERIA ARTIGIANALE italiana</span>
        </div>

        <h1 className="font-sans-ui text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2D342E] leading-tight tracking-tight">
          La bellezza delle parole scritte su carte pregiate.
        </h1>

        <p className="font-sans-ui text-base sm:text-lg text-[#5C685D] leading-relaxed max-w-2xl mx-auto">
          Segnalibri e biglietti d'auguri dipinti ad acquerello a mano. Personalizza la tua frase in corsivo o macchina da scrivere.
        </p>
      </div>

      {/* 2. CORE ENGINE SELECTOR CARDS (SEGNALIBRI vs BIGLIETTI) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* CARD 1: SEGNALIBRI */}
        <div 
          onClick={() => onStartCustomizer('bookmark')}
          className="group bg-white border-2 border-[#E2EBE0] hover:border-[#4A5D4E] p-8 rounded-3xl transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-[#F2F7F1] text-[#4A5D4E] font-courier text-xs font-bold px-4 py-1.5 rounded-bl-2xl border-l border-b border-[#D1DEC9]">
            DA €12.00
          </div>

          <div className="space-y-3 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F8F3] text-[#4A5D4E] flex items-center justify-center">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="font-sans-ui text-2xl font-extrabold text-[#2D342E] group-hover:text-[#4A5D4E] transition-colors">
              Segnalibri Personalizzati
            </h3>
            <p className="font-sans-ui text-sm text-[#5C685D] leading-relaxed">
              Scegli lo sfondo ad acquerello, l'inchiostro (Nero o Oro), il nastro in tinta e scrivi la tua frase preferita.
            </p>
          </div>

          {/* Mini Visual Sample Box */}
          <div className="p-4 bg-[#FAFDF9] rounded-2xl border border-[#E2EBE0] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-10 bg-[#7C947B] rounded-full shadow-xs" />
              <span className="font-corsivo text-2xl text-[#1A1A1A]">
                "Leggere è volare..."
              </span>
            </div>
            <span className="text-xs font-courier text-[#738274] font-bold">LIVE PREVIEW</span>
          </div>

          <button className="w-full py-4 bg-[#4A5D4E] group-hover:bg-[#3B4C3E] text-white font-sans-ui font-bold text-sm rounded-full transition-colors flex items-center justify-center gap-2 shadow-md">
            <span>Personalizza Segnalibro</span>
            <ArrowRight className="w-4 h-4 text-[#E6D8B8]" />
          </button>
        </div>

        {/* CARD 2: BIGLIETTI D'AUGURI */}
        <div 
          onClick={() => onStartCustomizer('card')}
          className="group bg-white border-2 border-[#E2EBE0] hover:border-[#4A5D4E] p-8 rounded-3xl transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-[#F2F7F1] text-[#4A5D4E] font-courier text-xs font-bold px-4 py-1.5 rounded-bl-2xl border-l border-b border-[#D1DEC9]">
            DA €9.50
          </div>

          <div className="space-y-3 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F8F3] text-[#4A5D4E] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-sans-ui text-2xl font-extrabold text-[#2D342E] group-hover:text-[#4A5D4E] transition-colors">
              Biglietti d'Auguri
            </h3>
            <p className="font-sans-ui text-sm text-[#5C685D] leading-relaxed">
              Biglietti pieghevoli in carta cotone con busta abbinata. Personalizza la dedica sulla copertina o all'interno.
            </p>
          </div>

          {/* Mini Visual Sample Box */}
          <div className="p-4 bg-[#FAFDF9] rounded-2xl border border-[#E2EBE0] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-[#D8A798]" />
              <span className="font-corsivo text-2xl text-[#C5A059]">
                "Tanti Auguri!"
              </span>
            </div>
            <span className="text-xs font-courier text-[#738274] font-bold">CON BUSTA</span>
          </div>

          <button className="w-full py-4 bg-[#FAFDF9] hover:bg-[#F2F7F1] text-[#2D342E] border border-[#D1DEC9] font-sans-ui font-bold text-sm rounded-full transition-colors flex items-center justify-center gap-2">
            <span>Crea Biglietto d'Auguri</span>
            <ArrowRight className="w-4 h-4 text-[#4A5D4E]" />
          </button>
        </div>

      </div>

      {/* 3. FEATURED CATALOG ITEMS */}
      <div className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5ECE2] pb-4">
          <div>
            <h2 className="font-sans-ui text-2xl font-bold text-[#2D342E]">
              Prodotti Pronti da Spedire
            </h2>
            <p className="font-courier text-xs text-[#738274]">
              Creazioni confezionate a mano disponibili in pronta consegna
            </p>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="text-xs font-sans-ui font-bold text-[#4A5D4E] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Vedi Tutti i Prodotti ({CATALOG_PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATALOG_PRODUCTS.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => onNavigate('catalog')}
              className="group bg-white border border-[#E2EBE0] rounded-2xl overflow-hidden hover:border-[#4A5D4E] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden bg-[#F4F8F3] relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-white/90 px-2.5 py-1 text-[10px] font-courier font-bold uppercase text-[#4A5D4E] rounded-full border border-[#D1DEC9]">
                  {product.tag}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-sans-ui text-sm font-bold text-[#2D342E] group-hover:text-[#4A5D4E]">
                    {product.name}
                  </h4>
                  <p className="font-sans-ui text-xs text-[#5C685D] mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#E5ECE2]">
                  <span className="font-courier text-base font-bold text-[#2D342E]">
                    €{product.price.toFixed(2)}
                  </span>
                  <span className="text-xs font-sans-ui font-bold text-[#4A5D4E]">Dettagli →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CUSTOM COMMISSION CTA BANNER */}
      <div className="bg-[#4A5D4E] text-[#F4F8F3] p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-courier uppercase tracking-widest text-[#E6D8B8] font-bold">
            PROGETTI UNICI SU MISURA
          </span>
          <h3 className="font-sans-ui text-2xl sm:text-3xl font-extrabold text-white">
            Hai bisogno di una creazione non a listino?
          </h3>
          <p className="font-sans-ui text-sm text-[#B3C4AB] max-w-xl">
            Realizziamo partecipazioni di nozze, bomboniere, gadget per eventi e tirature speciali. Contattaci per un preventivo gratuito.
          </p>
        </div>

        <button
          onClick={() => onNavigate('custom')}
          className="px-8 py-4 bg-[#E6D8B8] hover:bg-white text-[#2D342E] font-sans-ui font-bold text-sm rounded-full transition-colors shrink-0 shadow-sm cursor-pointer"
        >
          Richiedi Progetto Su Misura
        </button>
      </div>

    </div>
  );
}
