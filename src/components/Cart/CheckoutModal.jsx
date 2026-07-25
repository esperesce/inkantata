import React, { useState } from 'react';
import { X, Lock, Sparkles, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';

export default function CheckoutModal({ onClose }) {
  const { cart, grandTotal, subtotal, shipping, discountAmount, clearCart, setIsCartOpen } = useCart();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [shippingInfo, setShippingInfo] = useState({
    fullName: 'Giulia Bianchi',
    email: 'giulia.bianchi@email.it',
    address: 'Via Dante Alighieri 14',
    city: 'Milano',
    postalCode: '20121',
    country: 'Italia'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '4242 •••• •••• 4242',
    expDate: '12 / 28',
    cvc: '891',
    nameOnCard: 'Giulia Bianchi'
  });

  const [orderId] = useState(() => `INK-IT-${Math.floor(10000 + Math.random() * 90000)}`);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#7C947B', '#D8A798', '#C5A059', '#4A5D4E']
      });
    }, 1500);
  };

  const handleFinish = () => {
    clearCart();
    setIsCartOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-[#E2EBE0] max-w-xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        {step !== 3 && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#738274] hover:text-[#2D342E] hover:bg-[#F2F7F1] rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Header Steps */}
        {step !== 3 && (
          <div className="mb-6 border-b border-[#E5ECE2] pb-4">
            <div className="flex items-center gap-2 text-xs font-sans-ui uppercase tracking-wider text-[#7C947B] font-bold mb-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Pagamento Sicuro • Passaggio {step} di 2</span>
            </div>
            <h2 className="font-sans-ui text-xl font-bold text-[#2D342E]">
              {step === 1 ? 'Indirizzo di Spedizione' : 'Metodo di Pagamento'}
            </h2>
          </div>
        )}

        {/* STEP 1: SHIPPING */}
        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            className="space-y-4"
          >
            <div className="space-y-1">
              <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Nome e Cognome</label>
              <input
                type="text"
                required
                value={shippingInfo.fullName}
                onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Email (per la conferma d'ordine)</label>
              <input
                type="email"
                required
                value={shippingInfo.email}
                onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Indirizzo e Numero Civico</label>
              <input
                type="text"
                required
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Città</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">CAP</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.postalCode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5ECE2] flex items-center justify-between">
              <span className="font-sans-ui text-base font-extrabold text-[#2D342E]">
                Totale: €{grandTotal.toFixed(2)}
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-xs font-bold rounded-full transition-colors cursor-pointer"
              >
                Vai al Pagamento →
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PAYMENT */}
        {step === 2 && (
          <form onSubmit={handlePayOrder} className="space-y-4">
            <div className="p-3 bg-[#F4F8F3] border border-[#E2EBE0] rounded-xl text-xs font-sans-ui text-[#5C685D] space-y-0.5 mb-2">
              <div>Spedizione a: <strong>{shippingInfo.fullName}</strong></div>
              <div>{shippingInfo.address}, {shippingInfo.city} ({shippingInfo.postalCode})</div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Intestatario Carta</label>
              <input
                type="text"
                required
                value={paymentInfo.nameOnCard}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, nameOnCard: e.target.value })}
                className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Numero Carta</label>
              <input
                type="text"
                required
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">Scadenza</label>
                <input
                  type="text"
                  required
                  value={paymentInfo.expDate}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, expDate: e.target.value })}
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-sans-ui uppercase font-bold text-[#738274]">CVV / CVC</label>
                <input
                  type="text"
                  required
                  value={paymentInfo.cvc}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, cvc: e.target.value })}
                  className="w-full input-minimal-it text-sm font-sans-ui text-[#2D342E]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5ECE2] flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-sans-ui font-bold text-[#738274] hover:text-[#2D342E] cursor-pointer"
              >
                ← Indietro
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="px-6 py-3 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-xs font-bold rounded-full transition-colors flex items-center gap-2 shadow-md cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Elaborazione...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Paga €{grandTotal.toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER CONFIRMATION */}
        {step === 3 && (
          <div className="py-6 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#7C947B] text-white flex items-center justify-center mx-auto shadow-lg">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-sans-ui font-bold text-[#7C947B] uppercase tracking-wider block mb-1">
                Ordine Confermato con Successo!
              </span>
              <h2 className="font-sans-ui text-2xl font-extrabold text-[#2D342E]">
                Grazie per il tuo ordine!
              </h2>
              <p className="font-sans-ui text-xs text-[#5C685D] mt-1">
                Codice Ordine: <strong className="text-[#4A5D4E]">{orderId}</strong>
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="p-5 bg-[#FAFDF9] border border-[#E2EBE0] rounded-xl text-left font-sans-ui text-xs text-[#5C685D] space-y-3">
              <div className="border-b border-dashed border-[#D1DEC9] pb-2 flex justify-between font-bold text-[#2D342E]">
                <span>RIEPILOGO RICEVUTA</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>

              <div className="space-y-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="truncate max-w-[240px]">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="font-bold">€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-[#D1DEC9] pt-2 space-y-1">
                <div className="flex justify-between">
                  <span>Subtotale:</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Spedizione:</span>
                  <span>{shipping === 0 ? 'GRATUITA' : `€${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#2D342E] pt-1">
                  <span>Totale Pagato:</span>
                  <span>€{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#738274] text-center italic">
                Una mail di conferma è stata inviata a {shippingInfo.email}.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#E5ECE2] hover:bg-[#D1DEC9] text-[#2D342E] font-sans-ui font-bold text-xs rounded-full flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Stampa Ricevuta</span>
              </button>

              <button
                onClick={handleFinish}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui font-bold text-xs rounded-full cursor-pointer"
              >
                Torna alla Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
