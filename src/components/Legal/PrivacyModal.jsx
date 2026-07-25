import React from 'react';
import { X, ShieldCheck, Lock, Cookie, FileText } from 'lucide-react';

export default function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-[#E2EBE0] max-w-2xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative animate-fade-in max-h-[85vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#738274] hover:text-[#2D342E] hover:bg-[#F2F7F1] rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-[#E5ECE2] pb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F4F8F3] text-[#4A5D4E] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-sans-ui text-xl font-extrabold text-[#2D342E]">
              Informativa sulla Privacy & Cookie (GDPR UE 2016/679)
            </h2>
            <p className="font-courier text-xs text-[#738274]">
              Inkantata Cartoleria Artigianale • Ultimo aggiornamento: 2026
            </p>
          </div>
        </div>

        {/* Legal Text Body */}
        <div className="font-sans-ui text-xs text-[#5C685D] space-y-4 leading-relaxed">
          
          <section className="space-y-1">
            <h3 className="font-bold text-sm text-[#2D342E] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#7C947B]" />
              <span>1. Titolare del Trattamento dei Dati</span>
            </h3>
            <p>
              Il Titolare del trattamento è <strong>Inkantata Studio Artigianale</strong>. I dati personali raccolti tramite il sito web (nome, email, indirizzo di spedizione) vengono trattati nel rispetto della normativa GDPR UE 2016/679 esclusivamente per l'evasione degli ordini e la risposta alle richieste su misura.
            </p>
          </section>

          <section className="space-y-1">
            <h3 className="font-bold text-sm text-[#2D342E] flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#7C947B]" />
              <span>2. Tipologia di Dati Raccolti e Finalità</span>
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong>Dati di Spedizione e Fatturazione:</strong> Nome, cognome, indirizzo ed email utilizzati per la consegna dei prodotti e l'invio della ricevuta.</li>
              <li><strong>Richieste Su Misura:</strong> Dati forniti volontariamente nel modulo di contatto per preventivi di partecipazioni o bomboniere.</li>
              <li><strong>Dati di Pagamento:</strong> Trattati tramite gateway sicuri e cifrati SSL (Stripe / PayPal). Nessun dato bancario viene salvato sui nostri server.</li>
            </ul>
          </section>

          <section className="space-y-1">
            <h3 className="font-bold text-sm text-[#2D342E] flex items-center gap-1.5">
              <Cookie className="w-4 h-4 text-[#7C947B]" />
              <span>3. Tipologia di Cookie Utilizzati</span>
            </h3>
            <p>
              Il sito utilizza <strong>Cookie Tecnici di Sessione</strong> necessari per memorizzare gli articoli nel carrello e il consenso ai cookie stesso. Non vengono utilizzati cookie di profilazione di terze parti senza il consenso esplicito dell'utente.
            </p>
          </section>

          <section className="space-y-1">
            <h3 className="font-bold text-sm text-[#2D342E]">
              4. Diritti dell'Interessato (Art. 15-22 GDPR)
            </h3>
            <p>
              L'utente ha il diritto in qualsiasi momento di richiedere l'accesso, la rettifica, la cancellazione o la portabilità dei propri dati personali scrivendo direttamente al nostro supporto clienti.
            </p>
          </section>

        </div>

        {/* Footer Close */}
        <div className="pt-4 border-t border-[#E5ECE2] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-xs font-bold rounded-full cursor-pointer"
          >
            Ho Capito e Accetto
          </button>
        </div>

      </div>
    </div>
  );
}
