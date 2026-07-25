export const PRODUCT_TYPES = [
  {
    id: 'bookmark',
    name: 'Segnalibro Artigianale',
    subtext: 'Formato rettangolare con nastro a scelta',
    basePrice: 12.00
  },
  {
    id: 'card',
    name: 'Biglietto d\'Auguri',
    subtext: 'Formato pieghevole con busta abbinata',
    basePrice: 9.50
  }
];

export const PAPER_STYLES = [
  {
    id: 'acquerello-sage',
    name: 'Acquerello Salvia',
    description: 'Bordo sfumato ad acquerello verde salvia fatto a mano.',
    borderClass: 'watercolor-border-sage',
    accentColor: '#7C947B',
    price: 0
  },
  {
    id: 'acquerello-rose',
    name: 'Acquerello Rosa Cipria',
    description: 'Bordo sfumato ad acquerello rosa delicato.',
    borderClass: 'watercolor-border-rose',
    accentColor: '#D8A798',
    price: 0
  },
  {
    id: 'acquerello-gold',
    name: 'Acquerello Ocra e Oro',
    description: 'Bordo naturale con dettagli in foglia metallica.',
    borderClass: 'watercolor-border-gold',
    accentColor: '#C5A059',
    price: 1.50
  },
  {
    id: 'cotone-puro',
    name: 'Cotone Naturale 100%',
    description: 'Carta bianca naturale da 300g in puro cotone riciclato.',
    borderClass: 'border border-[#E2EBE0]',
    accentColor: '#A89985',
    price: 0
  }
];

// STRICT REQUIREMENT: Only TWO Ink Colors (Nero & Oro)
export const INK_COLORS = [
  { 
    id: 'nero', 
    name: 'Nero', 
    hex: '#1A1A1A', 
    description: 'Inchiostro nero intenso opaco' 
  },
  { 
    id: 'oro', 
    name: 'Oro', 
    hex: '#C5A059', 
    description: 'Inchiostro dorato metallizzato sfumato' 
  }
];

// RIBBON COLORS FOR BOOKMARKS ONLY
export const RIBBON_COLORS = [
  { id: 'verde-salvia', name: 'Verde Salvia', hex: '#7C947B' },
  { id: 'rosa-cipria', name: 'Rosa Cipria', hex: '#D8A798' },
  { id: 'naturale-juta', name: 'Naturale Juta', hex: '#A89985' },
  { id: 'rosso-borgogna', name: 'Rosso Borgogna', hex: '#8F3A3A' },
  { id: 'oro-lucido', name: 'Oro Lucido', hex: '#C5A059' }
];

// WRITING STYLES: Macchina da Scrivere vs Scrittura a Mano Corsiva
export const HANDWRITING_STYLES = [
  {
    id: 'typewriter',
    name: 'Macchina da Scrivere',
    fontClass: 'font-courier text-sm sm:text-base font-medium tracking-tight'
  },
  {
    id: 'corsivo',
    name: 'Scrittura a Mano Corsiva',
    fontClass: 'font-corsivo text-3xl sm:text-4xl leading-snug font-normal'
  }
];

export const CATALOG_PRODUCTS = [
  {
    id: 'cat-1',
    name: 'Set Segnalibri Acquerello & Salvia',
    category: 'Segnalibri',
    price: 18.00,
    tag: 'Più Venduto',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    description: 'Set di 3 segnalibri dipinti a mano con bordi sfumati salvia e nastri in seta vegetale.',
    details: ['Carta acquerello 300g', 'Dipingimento fatto a mano', 'Nastro in tinta salvia']
  },
  {
    id: 'cat-2',
    name: 'Biglietto Botanico Fatto a Mano',
    category: 'Biglietti',
    price: 8.50,
    tag: 'Artigianale',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800',
    description: 'Biglietto d\'auguri pieghevole con dettaglio flora pressata e busta in carta riciclata.',
    details: ['Carta cotone 100%', 'Busta coordinata inclusa', 'Interno bianco per dedica']
  },
  {
    id: 'cat-3',
    name: 'Segnalibro Personalizzato con Dedica',
    category: 'Segnalibri',
    price: 14.00,
    tag: 'Personalizzabile',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800',
    description: 'Segnalibro in carta cotone con frase in corsivo a tua scelta in inchiostro nero o dorato.',
    details: ['Scrittura corsiva', 'Scelta nastro', 'Confezione regalo inclusa']
  },
  {
    id: 'cat-4',
    name: 'Set 5 Biglietti Auguri Acquerello',
    category: 'Biglietti',
    price: 24.00,
    tag: 'Offerta Set',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    description: 'Confezione da 5 biglietti d\'auguri assortiti con dettagli ad acquerello e sfumature dorate.',
    details: ['5 soggetti differenti', '5 buste in carta pagliettata', 'Formato 10x15 cm']
  }
];
