import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Check } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductCatalog({ onLaunchCustomizer }) {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedItemMap, setAddedItemMap] = useState({});

  const categories = ['Tutti', 'Segnalibri', 'Biglietti'];

  const filteredProducts = activeCategory === 'Tutti'
    ? CATALOG_PRODUCTS
    : CATALOG_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    addToCart({
      isCustom: false,
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      detailsSummary: product.category
    });

    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="py-10 md:py-16 px-4 max-w-7xl mx-auto space-y-10">
      
      {/* Category Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2F7F1] border border-[#D1DEC9] rounded-full text-xs font-sans-ui text-[#4A5D4E] font-semibold">
          <Sparkles className="w-4 h-4 text-[#7C947B]" />
          <span>Pronti da Spedire</span>
        </div>
        <h1 className="font-sans-ui text-3xl sm:text-4xl md:text-5xl text-[#2D342E] font-extrabold tracking-tight">
          Collezione Pronta
        </h1>
        <p className="font-sans-ui text-sm text-[#5C685D] leading-relaxed">
          Creazioni artigianali pronte per essere spedite in 24 ore. Realizzate a mano con dettagli ad acquerello e carte pregiate.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-xs font-sans-ui font-bold rounded-full transition-all border cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#4A5D4E] text-white border-[#4A5D4E] shadow-xs'
                : 'bg-white text-[#5C685D] border-[#E2EBE0] hover:border-[#B3C4AB]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const isAdded = addedItemMap[product.id];
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white border border-[#E2EBE0] rounded-2xl overflow-hidden hover:border-[#4A5D4E] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#F4F8F3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-sans-ui font-bold uppercase text-[#4A5D4E] rounded-full border border-[#D1DEC9]">
                  {product.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-sans-ui text-[#7C947B] uppercase tracking-wider font-bold mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-sans-ui text-base text-[#2D342E] font-bold leading-snug group-hover:text-[#4A5D4E] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans-ui text-xs text-[#5C685D] mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Footer Price & Buttons */}
                <div className="pt-3 border-t border-[#E5ECE2] flex items-center justify-between">
                  <span className="font-sans-ui text-lg text-[#2D342E] font-extrabold">
                    €{product.price.toFixed(2)}
                  </span>

                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    className={`px-3.5 py-2 text-xs font-sans-ui font-bold rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                      isAdded
                        ? 'bg-[#3B4C3E] text-white border-[#3B4C3E]'
                        : 'bg-[#4A5D4E] text-white border-[#4A5D4E] hover:bg-[#3B4C3E]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Aggiunto</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-[#E6D8B8]" />
                        <span>Acquista</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E2EBE0] max-w-xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative animate-fade-in space-y-6">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-xs font-sans-ui font-bold text-[#5C685D] hover:text-[#2D342E] bg-[#F2F7F1] px-3 py-1.5 rounded-full border border-[#D1DEC9] cursor-pointer"
            >
              Chiudi ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-square bg-[#F4F8F3] rounded-xl overflow-hidden border border-[#E2EBE0]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-sans-ui text-[#7C947B] uppercase font-bold">
                  {selectedProduct.category} • {selectedProduct.tag}
                </span>
                <h3 className="font-sans-ui text-xl font-bold text-[#2D342E]">
                  {selectedProduct.name}
                </h3>
                <p className="font-sans-ui text-xs text-[#5C685D] leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="pt-4 border-t border-[#E5ECE2] flex items-center justify-between">
                  <span className="font-sans-ui text-2xl font-extrabold text-[#2D342E]">
                    €{selectedProduct.price.toFixed(2)}
                  </span>

                  <button
                    onClick={(e) => {
                      handleQuickAdd(selectedProduct, e);
                      setSelectedProduct(null);
                    }}
                    className="px-5 py-2.5 bg-[#4A5D4E] hover:bg-[#3B4C3E] text-white font-sans-ui text-xs font-bold rounded-full flex items-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#E6D8B8]" />
                    <span>Aggiungi al Carrello</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
