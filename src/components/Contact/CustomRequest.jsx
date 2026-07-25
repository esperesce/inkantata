import React, { useState } from 'react';
import { Mail, Check, Send, Sparkles, Feather, Phone, User, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CustomRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'matrimonio',
    budget: '150-300',
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
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7C947B', '#D8A798', '#C5A059', '#4A5D4E']
      });
    }, 1200);
  };

  return (
    <section className="py-10 md:py-16 px-4 max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      {/* Header Intro */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2F7F1] border border-[#D1DEC9] rounded-full text-xs font-sans-ui text-[#4A5D4E] font-semibold">
          <Feather className="w-4 h-4 text-[#7C947B]" />
          <span>Progetti Unici Su Misura</span>
        </div>
        <h1 className="font-sans-ui text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D342E] tracking-tight">
          Richiedi una Creazione Personalizzata
        </h1>
        <p className="font-sans-ui text-sm text-[#5C685D] leading-relaxed">
          Hai un'idea speciale non presente a listino? Realizziamo partecipazioni di nozze, bonbonniere, bomboniere e segnalibri in tiratura limitata per i tuoi eventi.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white border border-[#E2EBE0] p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm relative overflow-hidden">
        
        {submitted ? (
          /* SUCCESS STATE */
          <div className="py-12 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#7C947B] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-courier uppercase font-bold text-[#7C947B] tracking-wider block">
                MESSAGGIO INVIATO CON SUCCESSO
              </span>
              <h3 className="font-sans-ui text-2xl font-extrabold text-[#2D342E]">
                Grazie, {formData.name}!
              </h3>
              <p className="font-sans-ui text-sm text-[#5C685D] max-w-md mx-auto leading-relaxed">
                Abbiamo ricevuto la tua richiesta. Ti risponderemo via email entro 24-48 ore con una proposta personalizzata e un preventivo dedicato.
              </p>
            </div>

            <div className="p-4 bg-[#F4F8F3] border border-[#E2EBE0] rounded-xl max-w-md mx-auto text-left font-sans-ui text-xs text-[#5C685D] space-y-1">
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Tipo di Progetto:</strong> {formData.projectType.toUpperCase()}</div>
              <div><strong>Budget Indicativo:</strong> €{formData.budget}</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  projectType: 'matrimonio',
                  budget: '150-300',
                  description: ''
                });
              }}
              className="px-6 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-xs font-bold rounded-full transition-colors cursor-pointer"
            >
              Invia un'Altra Richiesta
            </button>
          </div>
        ) : (
          /* CONTACT FORM */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="border-b border-[#E5ECE2] pb-4 flex items-center justify-between">
              <div>
                <h3 className="font-sans-ui text-lg font-bold text-[#2D342E]">
                  Modulo di Contatto Diretto
                </h3>
                <p className="text-xs font-courier text-[#738274]">
                  Compila i dettagli per ricevere un preventivo gratuito
                </p>
              </div>
              <Sparkles className="w-5 h-5 text-[#7C947B]" />
            </div>

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-courier uppercase font-bold text-[#4A5D4E]">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="es. Marco Rossi"
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-courier uppercase font-bold text-[#4A5D4E]">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="es. marco.rossi@email.it"
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>
            </div>

            {/* Row 2: Phone, Project Type & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-courier uppercase font-bold text-[#4A5D4E]">
                  Telefono (Opzionale)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="es. +39 340 1234567"
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-courier uppercase font-bold text-[#4A5D4E]">
                  Tipo di Evento / Progetto
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full input-minimal-it text-xs font-sans-ui text-[#2D342E] bg-transparent cursor-pointer"
                >
                  <option value="matrimonio">Partecipazioni Matrimonio</option>
                  <option value="evento-aziendale">Evento Aziendale / Gadget</option>
                  <option value="bomboniere">Bomboniere & Segnaposto</option>
                  <option value="laurea">Festa di Laurea / Compleanno</option>
                  <option value="altro">Altra Creazione Su Misura</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-courier uppercase font-bold text-[#4A5D4E]">
                  Budget Indicativo (€)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full input-minimal-it text-xs font-sans-ui text-[#2D342E] bg-transparent cursor-pointer"
                >
                  <option value="50-150">€50 - €150</option>
                  <option value="150-300">€150 - €300</option>
                  <option value="300-600">€300 - €600</option>
                  <option value="600+">€600+</option>
                </select>
              </div>
            </div>

            {/* Row 3: Description Textarea */}
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-courier uppercase font-bold text-[#4A5D4E] flex items-center justify-between">
                <span>Descrizione dell'Idea *</span>
                <span className="text-[10px] text-[#738274] font-normal">Specifica quantità e preferenze di colore</span>
              </label>
              <textarea
                rows={5}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descrivi in dettaglio la tua idea: quantità desiderata, colori degli acquerelli, stile di scrittura, o eventuali testi personalizzati..."
                className="w-full p-4 bg-[#FAFDF9] border border-[#E2EBE0] focus:border-[#4A5D4E] focus:outline-hidden text-sm font-sans-ui text-[#2D342E] rounded-xl resize-y"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-[#E5ECE2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-courier text-[#738274]">
                Ti risponderemo entro 24 ore lavorative.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-sm font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#E6D8B8]" />
                    <span>Invia Richiesta Personalizzata</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
