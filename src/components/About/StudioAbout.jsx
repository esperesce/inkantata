import React from 'react';
import { Feather, Heart, Sparkles, Compass, ShieldCheck, RefreshCw } from 'lucide-react';

export default function StudioAbout({ onLaunchCustomizer }) {
  return (
    <section className="py-12 md:py-20 px-4 max-w-6xl mx-auto space-y-16">
      {/* Hero Banner */}
      <div className="bg-[#FCFBF7] border border-[#E2DDD3] p-8 md:p-14 rounded-xs shadow-sm paper-deckle relative overflow-hidden">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2ECE1] border border-[#DCD6C8] rounded-full text-xs font-courier text-[#666056] uppercase tracking-widest">
            <Feather className="w-3.5 h-3.5 text-[#8F5855]" />
            <span>Tactile Analog Craft</span>
          </div>
          <h2 className="font-typewriter text-3xl sm:text-4xl md:text-5xl text-[#2C2926] font-bold leading-tight">
            Preserving the Quiet Art of Written Words
          </h2>
          <p className="font-courier text-sm md:text-base text-[#554F47] leading-relaxed">
            In an era of fleeting digital messages, Inkantata is born from a desire for tangible weight, natural textures, and the enduring beauty of handcrafted paper.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onLaunchCustomizer}
              className="px-6 py-3 bg-[#2C2926] hover:bg-[#8F5855] text-white font-typewriter text-xs font-bold rounded-xs transition-colors shadow-md"
            >
              Configure Custom Piece →
            </button>
          </div>
        </div>

        {/* Decorative Watermark Pen Background */}
        <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none translate-x-12 translate-y-12">
          <Feather className="w-96 h-96 text-[#2C2926]" />
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#FCFBF7] border border-[#E2DDD3] rounded-xs space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F5EFEE] text-[#8F5855] flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="font-typewriter text-lg font-bold text-[#2C2926]">
            100% Recycled Cotton Rag
          </h3>
          <p className="font-courier text-xs text-[#666056] leading-relaxed">
            Sourced from garment offcuts, pressed using traditional water baths and hand-torn deckle edges for zero-waste craftsmanship.
          </p>
        </div>

        <div className="p-6 bg-[#FCFBF7] border border-[#E2DDD3] rounded-xs space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F5EFEE] text-[#8F5855] flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="font-typewriter text-lg font-bold text-[#2C2926]">
            Botanical & Mineral Inks
          </h3>
          <p className="font-courier text-xs text-[#666056] leading-relaxed">
            Our warm sepia and charcoal inks are mixed in small batches using natural walnut hulls, ground oak galls, and indigo leaves.
          </p>
        </div>

        <div className="p-6 bg-[#FCFBF7] border border-[#E2DDD3] rounded-xs space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F5EFEE] text-[#8F5855] flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="font-typewriter text-lg font-bold text-[#2C2926]">
            Hand-Poured Wax Seals
          </h3>
          <p className="font-courier text-xs text-[#666056] leading-relaxed">
            Every piece is stamped with genuine flexible beeswax resin, preserving your sentiment for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}
