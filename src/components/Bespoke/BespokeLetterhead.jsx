import React, { useState } from 'react';
import { Mail, Check, Send, Sparkles, Feather, Calendar, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BespokeLetterhead() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'wedding-stationery',
    budget: '$300 - $600',
    timeline: 'Within 4 Weeks',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#8F5855', '#4B5E4A', '#5E4B3C', '#D8A798']
      });
    }, 1200);
  };

  return (
    <section className="py-10 md:py-16 px-4 max-w-4xl mx-auto">
      {/* Intro Heading */}
      <div className="text-center mb-10 max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2ECE1] border border-[#DCD6C8] rounded-full text-xs font-courier text-[#666056] uppercase tracking-widest">
          <Feather className="w-3.5 h-3.5 text-[#8F5855]" />
          <span>Exclusive Commissions</span>
        </div>
        <h1 className="font-typewriter text-3xl sm:text-4xl md:text-5xl text-[#2C2926] font-bold tracking-tight">
          Bespoke Commission Letter
        </h1>
        <p className="font-courier text-xs sm:text-sm text-[#666056] leading-relaxed">
          From custom wedding suites and gilded bookmark runs to unique calligraphic letterhead, share your vision with our master paper artisan.
        </p>
      </div>

      {/* DIGITAL LETTERHEAD CONTAINER */}
      <div className="relative bg-[#FCFBF7] border border-[#E2DDD3] p-8 sm:p-12 md:p-16 rounded-xs shadow-xl paper-deckle">
        
        {/* Letterhead Header Emblem */}
        <div className="border-b-2 border-double border-[#D5CEBF] pb-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="font-typewriter text-2xl font-bold text-[#2C2926]">
              INKANTATA STUDIO
            </h2>
            <p className="text-[11px] font-courier text-[#7A7369] tracking-widest uppercase">
              Bespoke Stationery & Calligraphy Atelier
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8F5855] text-[#FAF9F5] shadow-md flex items-center justify-center border-2 border-[#734340]">
              <span className="font-display text-lg font-bold">IS</span>
            </div>
            <div className="text-right text-[10px] font-courier text-[#8C8375] hidden sm:block">
              <div>REF: COMM-{Math.floor(Math.random() * 9000) + 1000}</div>
              <div>DATE: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        {submitted ? (
          /* SUCCESS STATE */
          <div className="py-12 px-4 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#4B5E4A] text-white rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-[#E2DDD3]">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-typewriter text-2xl font-bold text-[#2C2926]">
                Letter Received with Care
              </h3>
              <p className="font-courier text-sm text-[#554F47] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your bespoke request has been delivered directly to our lead artisan studio. We will respond with a preliminary digital proof and quote within 24 to 48 hours.
              </p>
            </div>

            <div className="p-4 bg-[#F5F2EA] rounded-xs border border-[#E0D9CB] max-w-md mx-auto text-left font-courier text-xs text-[#554F47] space-y-1">
              <div><strong>Client Email:</strong> {formData.email}</div>
              <div><strong>Commission Category:</strong> {formData.projectType.replace('-', ' ').toUpperCase()}</div>
              <div><strong>Estimated Budget:</strong> {formData.budget}</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  projectType: 'wedding-stationery',
                  budget: '$300 - $600',
                  timeline: 'Within 4 Weeks',
                  description: ''
                });
              }}
              className="px-6 py-2.5 bg-[#2C2926] text-white font-courier text-xs uppercase tracking-widest rounded-xs hover:bg-[#8F5855] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          /* COMMISSION FORM */
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-xs font-courier uppercase tracking-widest text-[#7A7369]">
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Genevieve Thorne"
                  className="w-full input-minimal text-sm font-courier text-[#2C2926]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-courier uppercase tracking-widest text-[#7A7369]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. genevieve@artisan.com"
                  className="w-full input-minimal text-sm font-courier text-[#2C2926]"
                />
              </div>
            </div>

            {/* Row 2: Category & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-courier uppercase tracking-widest text-[#7A7369]">
                  Commission Category
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full input-minimal text-xs font-courier text-[#2C2926] bg-transparent cursor-pointer"
                >
                  <option value="wedding-stationery">Wedding Invitation Suite</option>
                  <option value="custom-bookmarks">Bulk Custom Bookmarks</option>
                  <option value="personal-letterhead">Monogram Letterhead</option>
                  <option value="corporate-gifting">Artisanal Corporate Gifting</option>
                  <option value="other">Other Unique Paper Craft</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-courier uppercase tracking-widest text-[#7A7369]">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full input-minimal text-xs font-courier text-[#2C2926] bg-transparent cursor-pointer"
                >
                  <option value="$150 - $300">$150 - $300</option>
                  <option value="$300 - $600">$300 - $600</option>
                  <option value="$600 - $1,200">$600 - $1,200</option>
                  <option value="$1,200+">$1,200+</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-courier uppercase tracking-widest text-[#7A7369]">
                  Desired Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full input-minimal text-xs font-courier text-[#2C2926] bg-transparent cursor-pointer"
                >
                  <option value="Flexible">Flexible / No Rush</option>
                  <option value="Within 2 Weeks">Within 2 Weeks (Rush)</option>
                  <option value="Within 4 Weeks">Within 4 Weeks</option>
                  <option value="2-3 Months">2-3 Months</option>
                </select>
              </div>
            </div>

            {/* Row 3: Description textarea styled with ruled line letterhead background */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-courier uppercase tracking-widest text-[#7A7369] flex items-center justify-between">
                <span>Project Description & Vision *</span>
                <span className="text-[10px] text-[#A89985]">Include quantity, colors & motifs</span>
              </label>
              <div className="relative">
                <textarea
                  rows={6}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your custom commission in detail. Mention paper preferences (deckle edge, cotton rag), ink colors, custom calligraphy text, foil accents, or wax seal monograms..."
                  className="w-full p-4 bg-[#FAF9F5] border border-[#DCD6C8] focus:border-[#2C2926] focus:outline-hidden text-sm font-courier text-[#2C2926] leading-relaxed rounded-xs shadow-inner resize-y"
                  style={{
                    backgroundImage: 'linear-gradient(transparent 27px, #EBE6DA 28px)',
                    backgroundSize: '100% 28px',
                    lineHeight: '28px'
                  }}
                />
              </div>
            </div>

            {/* Submit Button with micro-interaction */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8E4DA]">
              <div className="text-[11px] font-courier text-[#8C8375]">
                🔒 Your inquiry is handled with strict artisan privacy.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#2C2926] hover:bg-[#8F5855] text-[#FAF9F5] font-typewriter text-sm font-bold rounded-xs transition-all flex items-center justify-center gap-3 shadow-md disabled:opacity-50 group cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sealing Letter...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-[#D8A798]" />
                    <span>Dispatch Bespoke Letter</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

        {/* Letterhead Footer Notice */}
        <div className="mt-10 pt-4 border-t border-dashed border-[#D5CEBF] text-center">
          <p className="text-[10px] font-courier text-[#A89985] uppercase tracking-widest">
            Inkantata Artisanal Workshop • Handcrafted with love in our paper mill studio
          </p>
        </div>
      </div>
    </section>
  );
}
