import React, { useState } from 'react';
import { Check, ShoppingBag, Layers, Palette, Type, Feather, Sparkles } from 'lucide-react';
import { PRODUCT_TYPES, PAPER_STYLES, INK_COLORS, RIBBON_COLORS, HANDWRITING_STYLES } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ControlPanel({ config, setConfig }) {
  const { addToCart } = useCart();
  const [addedAnimation, setAddedAnimation] = useState(false);

  const selectedProduct = PRODUCT_TYPES.find((p) => p.id === config.productType) || PRODUCT_TYPES[0];
  const selectedPaper = PAPER_STYLES.find((p) => p.id === config.paperStyle) || PAPER_STYLES[0];
  const selectedInk = INK_COLORS.find((i) => i.id === config.inkColor) || INK_COLORS[0];
  const selectedRibbon = RIBBON_COLORS.find((r) => r.id === config.ribbonColor) || RIBBON_COLORS[0];
  const selectedWriting = HANDWRITING_STYLES.find((w) => w.id === config.writingStyle) || HANDWRITING_STYLES[0];

  const currentTotalPrice = selectedProduct.basePrice + (selectedPaper.price || 0);

  const sampleMessages = [
    "Leggere è volare senza ali.",
    "Tanti auguri di cuore!",
    "Per una persona speciale.",
    "Con affetto e amicizia."
  ];

  const handleAddToCart = () => {
    const configuredItem = {
      isCustom: true,
      name: config.productType === 'bookmark' ? 'Segnalibro Personalizzato' : 'Biglietto d\'Auguri Personalizzato',
      productType: config.productType,
      paperStyle: config.paperStyle,
      paperName: selectedPaper.name,
      inkColor: selectedInk.hex,
      inkName: selectedInk.name,
      ribbonColor: config.productType === 'bookmark' ? selectedRibbon.hex : null,
      ribbonName: config.productType === 'bookmark' ? selectedRibbon.name : null,
      writingStyle: config.writingStyle,
      writingName: selectedWriting.name,
      message: config.message || 'Messaggio Personalizzato',
      recipient: config.recipient || '',
      price: currentTotalPrice,
      quantity: 1
    };

    addToCart(configuredItem);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2EBE0] shadow-xs">
      
      {/* Configurator Header */}
      <div className="border-b border-[#E5ECE2] pb-4 flex items-center justify-between">
        <div>
          <h2 className="font-sans-ui text-xl font-bold text-[#2D342E]">
            Configuratore Prodotto
          </h2>
          <p className="text-xs font-sans-ui text-[#738274]">
            Personalizza ogni dettaglio in tempo reale
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-sans-ui uppercase text-[#738274] font-semibold block">Prezzo</span>
          <span className="font-sans-ui text-2xl text-[#4A5D4E] font-extrabold">
            €{currentTotalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* STEP 1: Tipologia Prodotto */}
      <div className="space-y-2">
        <label className="text-xs font-sans-ui uppercase font-bold tracking-wider text-[#4A5D4E] flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-[#7C947B]" />
          <span>1. Seleziona Prodotto</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCT_TYPES.map((type) => {
            const isSelected = config.productType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setConfig((prev) => ({ ...prev, productType: type.id }))}
                className={`p-3.5 text-left border rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#4A5D4E] bg-[#F2F7F1] text-[#2D342E] shadow-xs'
                    : 'border-[#E2EBE0] bg-white text-[#5C685D] hover:border-[#B3C4AB]'
                }`}
              >
                <span className="font-sans-ui text-sm font-bold block">{type.name}</span>
                <span className="text-xs font-sans-ui text-[#738274] mt-0.5 block">€{type.basePrice.toFixed(2)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Tipo di Carta & Acquerello */}
      <div className="space-y-2">
        <label className="text-xs font-sans-ui uppercase font-bold tracking-wider text-[#4A5D4E] flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#7C947B]" />
          <span>2. Sfondo Acquerello & Carta</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PAPER_STYLES.map((paper) => {
            const isSelected = config.paperStyle === paper.id;
            return (
              <button
                key={paper.id}
                type="button"
                onClick={() => setConfig((prev) => ({ ...prev, paperStyle: paper.id }))}
                className={`p-3 text-left border rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#4A5D4E] bg-[#F2F7F1] text-[#2D342E]'
                    : 'border-[#E2EBE0] bg-[#FAFDF9] hover:border-[#B3C4AB] text-[#5C685D]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans-ui text-xs font-bold">{paper.name}</span>
                  {paper.price > 0 && (
                    <span className="text-[10px] font-sans-ui text-[#4A5D4E] font-bold">
                      +€{paper.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-sans-ui text-[#738274] mt-1 leading-snug">
                  {paper.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 3: STRICTLY RESTRICTED INK COLORS (NERO O ORO) */}
      <div className="space-y-2">
        <label className="text-xs font-sans-ui uppercase font-bold tracking-wider text-[#4A5D4E] flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-[#7C947B]" />
          <span>3. Colore Inchiostro (Solo Nero o Oro)</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {INK_COLORS.map((ink) => {
            const isSelected = config.inkColor === ink.id;
            return (
              <button
                key={ink.id}
                type="button"
                onClick={() => setConfig((prev) => ({ ...prev, inkColor: ink.id }))}
                className={`p-3 border rounded-xl transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'border-[#4A5D4E] bg-[#F2F7F1] text-[#2D342E]'
                    : 'border-[#E2EBE0] bg-white hover:border-[#B3C4AB] text-[#5C685D]'
                }`}
              >
                <div
                  className="w-7 h-7 rounded-full border border-black/10 shadow-xs flex items-center justify-center shrink-0"
                  style={{ backgroundColor: ink.hex }}
                >
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
                <div className="text-left">
                  <span className="font-sans-ui text-xs font-bold block">{ink.name}</span>
                  <span className="text-[10px] font-sans-ui text-[#738274]">{ink.description}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 4: RIBBON COLOR SELECTION (SPECIFICALLY FOR BOOKMARKS ONLY) */}
      {config.productType === 'bookmark' && (
        <div className="space-y-2 pt-1 animate-fade-in">
          <label className="text-xs font-sans-ui uppercase font-bold tracking-wider text-[#4A5D4E] flex items-center gap-1.5">
            <Feather className="w-4 h-4 text-[#7C947B]" />
            <span>4. Colore Nastro (Per Segnalibro)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {RIBBON_COLORS.map((ribbon) => {
              const isSelected = config.ribbonColor === ribbon.id;
              return (
                <button
                  key={ribbon.id}
                  type="button"
                  onClick={() => setConfig((prev) => ({ ...prev, ribbonColor: ribbon.id }))}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-sans-ui rounded-full border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#4A5D4E] bg-[#F2F7F1] text-[#2D342E] font-bold'
                      : 'border-[#E2EBE0] text-[#5C685D] hover:border-[#B3C4AB]'
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: ribbon.hex }}
                  />
                  <span>{ribbon.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 5: Stile di Scrittura Calligrafica */}
      <div className="space-y-2">
        <label className="text-xs font-sans-ui uppercase font-bold tracking-wider text-[#4A5D4E] flex items-center gap-1.5">
          <Type className="w-4 h-4 text-[#7C947B]" />
          <span>Stile Calligrafia</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {HANDWRITING_STYLES.map((style) => {
            const isSelected = config.writingStyle === style.id;
            return (
              <button
                key={style.id}
                type="button"
                onClick={() => setConfig((prev) => ({ ...prev, writingStyle: style.id }))}
                className={`p-3 text-left border rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#4A5D4E] bg-[#F2F7F1] text-[#2D342E]'
                    : 'border-[#E2EBE0] bg-white text-[#5C685D] hover:border-[#B3C4AB]'
                }`}
              >
                <span className={`text-xl block ${style.fontClass}`}>
                  {style.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 6: Messaggio Personalizzato */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-sans-ui uppercase font-bold tracking-wider text-[#4A5D4E]">
            Messaggio Personalizzato
          </label>
          <span className="text-[10px] font-sans-ui text-[#738274]">
            {config.message.length} / 120 caratteri
          </span>
        </div>

        {/* Preset Prompt Suggestion Buttons */}
        <div className="flex flex-wrap gap-1.5 mb-1">
          {sampleMessages.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setConfig((prev) => ({ ...prev, message: sample }))}
              className="text-[11px] font-sans-ui text-[#5C685D] hover:text-[#2D342E] bg-[#F2F7F1] hover:bg-[#E5ECE2] px-2.5 py-1 rounded-full transition-colors truncate max-w-[200px]"
            >
              "{sample}"
            </button>
          ))}
        </div>

        <textarea
          rows={3}
          maxLength={120}
          value={config.message}
          onChange={(e) => setConfig((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Scrivi qui il tuo messaggio per l'anteprima..."
          className="w-full p-3 bg-[#FAFDF9] border border-[#E2EBE0] focus:border-[#4A5D4E] focus:outline-hidden text-sm font-sans-ui text-[#2D342E] rounded-xl resize-none"
        />

        <div className="pt-1">
          <label className="text-xs font-sans-ui text-[#738274] block mb-1">
            Nome Destinatario (Opzionale):
          </label>
          <input
            type="text"
            value={config.recipient}
            onChange={(e) => setConfig((prev) => ({ ...prev, recipient: e.target.value }))}
            placeholder="es. Giulia"
            className="w-full input-minimal-it text-xs font-sans-ui text-[#2D342E]"
          />
        </div>
      </div>

      {/* Add To Cart CTA */}
      <div className="pt-4 border-t border-[#E5ECE2] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-sans-ui text-[#738274] text-center sm:text-left">
          Lavorato a mano in Italia • Spedizione rapida
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full sm:w-auto px-7 py-3.5 rounded-full font-sans-ui text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
            addedAnimation
              ? 'bg-[#3B4C3E] text-white'
              : 'bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white active:scale-98'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-4 h-4 text-white animate-bounce" />
              <span>Aggiunto al Carrello!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-[#E6D8B8]" />
              <span>Aggiungi al Carrello (€{currentTotalPrice.toFixed(2)})</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
