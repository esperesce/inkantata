import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: 'demo-1',
      isCustom: true,
      name: 'Segnalibro Personalizzato',
      productType: 'bookmark',
      paperStyle: 'acquerello-sage',
      paperName: 'Acquerello Salvia',
      inkColor: '#1A1A1A',
      inkName: 'Nero',
      ribbonColor: '#7C947B',
      ribbonName: 'Verde Salvia',
      writingStyle: 'caveat',
      writingName: 'Corsivo Naturale',
      message: 'Leggere è volare senza ali.',
      recipient: 'Per Giulia',
      price: 12.00,
      quantity: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
    };
    setCart((prev) => [itemWithId, ...prev]);
    showToast(`"${newItem.name || 'Prodotto'}" aggiunto al carrello!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Articolo rimosso dal carrello.');
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const applyDiscount = (code) => {
    if (code.trim().toUpperCase() === 'ARTISAN10' || code.trim().toUpperCase() === 'SCONTO10') {
      setDiscount(0.10);
      setDiscountCode(code.toUpperCase());
      showToast('Sconto del 10% applicato!');
      return true;
    } else {
      showToast('Codice non valido. Prova "SCONTO10".');
      return false;
    }
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setDiscountCode('');
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 3.90;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);
  const totalItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyDiscount,
        discount,
        discountCode,
        subtotal,
        discountAmount,
        shipping,
        grandTotal,
        totalItemCount,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
