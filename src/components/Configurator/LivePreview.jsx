import React, { useState } from 'react';
import { Eye, RotateCw } from 'lucide-react';
import { PAPER_STYLES, INK_COLORS, RIBBON_COLORS, HANDWRITING_STYLES } from '../../data/products';

export default function LivePreview({ config }) {
  const [zoom, setZoom] = useState(false);
  const [cardFolded, setCardFolded] = useState(true);

  const selectedPaper = PAPER_STYLES.find((p) => p.id === config.paperStyle) || PAPER_STYLES[0];
  const selectedInk = INK_COLORS.find((i) => i.id === config.inkColor) || INK_COLORS[0];
  const selectedRibbon = RIBBON_COLORS.find((r) => r.id === config.ribbonColor) || RIBBON_COLORS[0];
  const selectedWriting = HANDWRITING_STYLES.find((w) => w.id === config.writingStyle) || HANDWRITING_STYLES[0];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:p-8 bg-[#F4F8F3] rounded-2xl border border-[#E2EBE0] relative overflow-hidden min-h-[540px] lg:min-h-[640px] shadow-xs">
      
      {/* Top Preview Bar Controls */}
      <div className="w-full flex items-center justify-between mb-4 z-10 px-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7C947B]" />
          <span className="font-sans-ui text-xs font-bold text-[#5C685D] uppercase tracking-wider">
            Anteprima dal Vivo • {config.productType === 'bookmark' ? 'Segnalibro' : 'Biglietto d\'Auguri'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {config.productType === 'card' && (
            <button
              onClick={() => setCardFolded(!cardFolded)}
              className="text-xs font-sans-ui font-semibold text-[#4A5D4E] bg-white hover:bg-[#E5ECE2] px-3 py-1.5 rounded-full border border-[#D1DEC9] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{cardFolded ? 'Apri Copertina' : 'Chiudi Biglietto'}</span>
            </button>
          )}
          <button
            onClick={() => setZoom(!zoom)}
            className="text-xs font-sans-ui font-semibold text-[#4A5D4E] bg-white hover:bg-[#E5ECE2] px-3 py-1.5 rounded-full border border-[#D1DEC9] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{zoom ? 'Ripristina' : 'Ingrandisci'}</span>
          </button>
        </div>
      </div>

      {/* CANVAS CONTAINER */}
      <div className={`transition-all duration-300 transform ${zoom ? 'scale-110 md:scale-125 my-8' : 'scale-100'} z-10 flex items-center justify-center`}>

        {/* ----------------- SEGNALIBRO (BOOKMARK) PREVIEW ----------------- */}
        {config.productType === 'bookmark' && (
          <div className="relative flex flex-col items-center">
            
            {/* RIBBON LOOP AT TOP FOR BOOKMARKS */}
            <div className="relative -mb-3 z-20 flex flex-col items-center">
              {/* Grommet Metal Ring */}
              <div className="w-4 h-4 rounded-full border border-[#A89985] bg-[#EBE6DA] shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2D342E]" />
              </div>
              {/* Ribbon Color Strip */}
              <div 
                className="w-2 h-14 sm:h-16 shadow-xs rounded-b-sm transition-colors duration-300"
                style={{ backgroundColor: selectedRibbon.hex }}
              >
                <div className="w-full h-full bg-linear-to-b from-transparent to-black/15" />
              </div>
            </div>

            {/* Bookmark Body */}
            <div
              className={`w-[170px] sm:w-[200px] md:w-[220px] min-h-[360px] sm:min-h-[420px] p-6 flex flex-col justify-between relative transition-all duration-300 bg-white rounded-xl ${selectedPaper.borderClass}`}
              style={{
                boxShadow: '0 10px 30px -8px rgba(45, 52, 46, 0.12), 0 2px 6px rgba(45, 52, 46, 0.04)'
              }}
            >
              {/* Header Title */}
              <div className="w-full text-center pb-2 border-b border-dashed border-[#D1DEC9]">
                <span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#738274] font-bold">
                  {config.recipient ? `Per ${config.recipient}` : 'Inkantata'}
                </span>
              </div>

              {/* Main Custom Message in Calligraphy Font */}
              <div className="my-auto py-6 text-center flex flex-col items-center justify-center min-h-[140px]">
                <p
                  className={`leading-relaxed whitespace-pre-wrap transition-all duration-200 text-2xl sm:text-3xl ${selectedWriting.fontClass}`}
                  style={{ color: selectedInk.hex }}
                >
                  {config.message || 'Scrivi qui il tuo messaggio...'}
                </p>
              </div>

              {/* Bottom Specs */}
              <div className="w-full text-center pt-2 border-t border-dashed border-[#D1DEC9]">
                <span className="text-[9px] font-sans-ui text-[#A3B3A0] uppercase tracking-widest">
                  Inchiostro {selectedInk.name}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- BIGLIETTO D'AUGURI (CARD) PREVIEW ----------------- */}
        {config.productType === 'card' && (
          <div
            className={`w-[250px] sm:w-[300px] md:w-[340px] min-h-[340px] sm:min-h-[400px] p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 bg-white rounded-2xl ${selectedPaper.borderClass}`}
            style={{
              boxShadow: '0 12px 35px -8px rgba(45, 52, 46, 0.12), 0 2px 6px rgba(45, 52, 46, 0.04)'
            }}
          >
            {/* Card Crease */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D1DEC9] to-transparent pointer-events-none" />

            {cardFolded ? (
              /* FOLDED CARD COVER */
              <div className="w-full h-full flex flex-col justify-between my-auto py-2">
                <div className="text-center pt-1">
                  <span className="text-[10px] font-sans-ui uppercase tracking-widest text-[#738274] font-bold">
                    {config.recipient ? `PER ${config.recipient.toUpperCase()}` : 'BIGLIETTO D\'AUGURI'}
                  </span>
                </div>

                <div className="py-8 text-center flex flex-col items-center">
                  <p
                    className={`leading-relaxed whitespace-pre-wrap transition-all duration-200 text-3xl sm:text-4xl ${selectedWriting.fontClass}`}
                    style={{ color: selectedInk.hex }}
                  >
                    {config.message || 'I migliori auguri di cuore.'}
                  </p>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[9px] font-sans-ui text-[#A3B3A0] uppercase tracking-widest">
                    Inkantata • Fatto a mano
                  </span>
                </div>
              </div>
            ) : (
              /* INSIDE SPREAD */
              <div className="w-full h-full flex flex-col justify-between my-auto py-2">
                <div className="text-left border-b border-dashed border-[#D1DEC9] pb-2">
                  <span className="text-xs font-sans-ui text-[#738274] font-semibold">
                    Carissimo/a {config.recipient || 'Amico/a'},
                  </span>
                </div>

                <div className="py-6 text-center">
                  <p
                    className={`leading-relaxed whitespace-pre-wrap text-2xl sm:text-3xl ${selectedWriting.fontClass}`}
                    style={{ color: selectedInk.hex }}
                  >
                    {config.message || 'Scrivi il tuo messaggio personalizzato...'}
                  </p>
                </div>

                <div className="text-right pt-2 border-t border-dashed border-[#D1DEC9]">
                  <span className={`text-xl ${selectedWriting.fontClass}`} style={{ color: selectedInk.hex }}>
                    Con affetto, Inkantata
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Spec summary pill */}
      <div className="mt-6 z-10 flex flex-wrap items-center justify-center gap-2 text-xs font-sans-ui text-[#5C685D] bg-white px-4 py-2 rounded-full border border-[#D1DEC9]">
        <span>Carta: <strong className="text-[#2D342E]">{selectedPaper.name}</strong></span>
        <span>•</span>
        <span>Inchiostro: <strong className="text-[#2D342E]">{selectedInk.name}</strong></span>
        {config.productType === 'bookmark' && (
          <>
            <span>•</span>
            <span>Nastro: <strong className="text-[#2D342E]">{selectedRibbon.name}</strong></span>
          </>
        )}
      </div>
    </div>
  );
}
