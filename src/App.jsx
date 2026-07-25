import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroHome from './components/Home/HeroHome';
import LivePreview from './components/Configurator/LivePreview';
import ControlPanel from './components/Configurator/ControlPanel';
import ProductCatalog from './components/Catalog/ProductCatalog';
import CartDrawer from './components/Cart/CartDrawer';
import Toast from './components/UI/Toast';
import Footer from './components/Footer';
import { Feather, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'configurator' | 'catalog'

  // Configurator state
  const [config, setConfig] = useState({
    productType: 'bookmark', // 'bookmark' | 'card'
    paperStyle: 'acquerello-sage',
    inkColor: 'nero', // strictly 'nero' or 'oro'
    ribbonColor: 'verde-salvia', // for bookmarks
    writingStyle: 'caveat',
    message: 'Leggere è volare senza ali.',
    recipient: 'Giulia'
  });

  const handleStartCustomizer = (type = 'bookmark') => {
    setConfig((prev) => ({ ...prev, productType: type }));
    setActiveTab('configurator');
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFDF9] text-[#2D342E] selection:bg-[#E2EBE0] selection:text-[#1B241C] font-sans-ui bg-natural-paper">
        
        {/* Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1">
          
          {/* VIEW 1: CLEAN WELCOMING HOMEPAGE */}
          {activeTab === 'home' && (
            <HeroHome onStartCustomizer={handleStartCustomizer} />
          )}

          {/* VIEW 2: MECHANICAL & FUNCTIONAL CONFIGURATOR */}
          {activeTab === 'configurator' && (
            <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto space-y-8 animate-fade-in">
              
              {/* Studio Configurator Banner */}
              <div className="text-center space-y-2 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2F7F1] border border-[#D1DEC9] rounded-full text-xs font-sans-ui text-[#4A5D4E] font-semibold">
                  <Feather className="w-4 h-4 text-[#7C947B]" />
                  <span>Configuratore Strumentale</span>
                </div>
                <h1 className="font-sans-ui text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D342E] tracking-tight">
                  Personalizza il tuo Prodotto
                </h1>
                <p className="font-sans-ui text-sm text-[#5C685D] leading-relaxed">
                  Scegli il tipo di prodotto, l'inchiostro (Nero o Oro), il nastro e scrivi il tuo messaggio in corsivo.
                </p>
              </div>

              {/* SPLIT SCREEN CONFIGURATOR LAYOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Panel: Live Preview Canvas */}
                <div className="lg:col-span-6 xl:col-span-6 lg:sticky lg:top-28">
                  <LivePreview config={config} setConfig={setConfig} />
                </div>

                {/* Right Panel: Controls Form */}
                <div className="lg:col-span-6 xl:col-span-6">
                  <ControlPanel config={config} setConfig={setConfig} />
                </div>

              </div>

            </div>
          )}

          {/* VIEW 3: SIGNATURE CATALOG COLLECTION */}
          {activeTab === 'catalog' && (
            <ProductCatalog onLaunchCustomizer={() => setActiveTab('configurator')} />
          )}

        </main>

        {/* Slide-out Cart Drawer Sheet */}
        <CartDrawer />

        {/* Global Toast Banner */}
        <Toast />

        {/* Studio Footer */}
        <Footer setActiveTab={setActiveTab} />

      </div>
    </CartProvider>
  );
}
