export type ProductCategory = "candles" | "fragrances";
export type ScentFamily = "Woody" | "Floral" | "Fresh" | "Amber";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  scentNotes?: {
    top?: string;
    heart?: string;
    base?: string;
  };
  burnTime?: string; // for candles
  size?: string; // e.g., "8oz", "50ml"
  scentFamily: ScentFamily;
  limitedBatch?: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  // CANDLES (9) - More variety
  {
    id: "candle-1",
    name: "Amber Sanctuary",
    category: "candles",
    price: 1250,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80",
    description:
      "A warm, enveloping sanctuary of amber and vanilla resin, deepened with smoked woods. Perfect for evening rituals and moments of deep reflection.",
    scentNotes: {
      top: "Vanilla Resin",
      heart: "Amber",
      base: "Smoked Woods",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Amber",
    limitedBatch: true,
    inStock: true,
  },
  {
    id: "candle-2",
    name: "Cedar & Sage Ritual",
    category: "candles",
    price: 1195,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=800&fit=crop&q=80",
    description:
      "Dry cedarwood meets wild sage in a cleansing ritual blend, softened by subtle musk. Ideal for meditation and space clearing.",
    scentNotes: {
      top: "Wild Sage",
      heart: "Dry Cedarwood",
      base: "Soft Musk",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Woody",
    inStock: true,
  },
  {
    id: "candle-3",
    name: "Fig Noir",
    category: "candles",
    price: 1250,
    image: "https://images.unsplash.com/photo-1606800054160-8b5e8b8b8b8b?w=800&h=800&fit=crop&q=80",
    description:
      "Rich black fig and tonka bean create a sophisticated, slightly spicy fragrance that lingers beautifully. A modern classic.",
    scentNotes: {
      top: "Black Fig",
      heart: "Tonka Bean",
      base: "Subtle Spice",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Woody",
    inStock: true,
  },
  {
    id: "candle-4",
    name: "Linen Dawn",
    category: "candles",
    price: 1145,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80",
    description:
      "Fresh linen, bright bergamot, and delicate white tea create an airy, uplifting morning atmosphere. Clean and invigorating.",
    scentNotes: {
      top: "Bergamot",
      heart: "Fresh Linen",
      base: "White Tea",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "candle-5",
    name: "Velvet Oud",
    category: "candles",
    price: 1380,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80",
    description:
      "Luxurious oud, incense smoke, and amber balsam create an opulent, mysterious fragrance. For those who appreciate depth and complexity.",
    scentNotes: {
      top: "Incense Smoke",
      heart: "Oud",
      base: "Amber Balsam",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Amber",
    limitedBatch: true,
    inStock: true,
  },
  {
    id: "candle-6",
    name: "Garden Stillness",
    category: "candles",
    price: 1195,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=800&fit=crop&q=80",
    description:
      "Jasmine and neroli bloom alongside green leaves in a serene garden composition. Peaceful and naturally elegant.",
    scentNotes: {
      top: "Neroli",
      heart: "Jasmine",
      base: "Green Leaves",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "candle-7",
    name: "Sandalwood Ember",
    category: "candles",
    price: 1290,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80",
    description:
      "Creamy sandalwood warmed by clove and amber creates a cozy, meditative atmosphere. Perfect for winter evenings.",
    scentNotes: {
      top: "Clove",
      heart: "Creamy Sandalwood",
      base: "Amber",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Woody",
    inStock: true,
  },
  {
    id: "candle-8",
    name: "Rose Dusk",
    category: "candles",
    price: 1250,
    image: "https://images.unsplash.com/photo-1606800054160-8b5e8b8b8b8b?w=800&h=800&fit=crop&q=80",
    description:
      "Turkish rose, pink pepper, and patchouli create a romantic, slightly earthy fragrance. Elegant and timeless.",
    scentNotes: {
      top: "Pink Pepper",
      heart: "Turkish Rose",
      base: "Patchouli",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "candle-9",
    name: "Moon Milk",
    category: "candles",
    price: 1195,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=800&fit=crop&q=80",
    description:
      "Almond, vanilla orchid, and soft woods create a dreamy, comforting fragrance. Perfect for bedtime rituals.",
    scentNotes: {
      top: "Almond",
      heart: "Vanilla Orchid",
      base: "Soft Woods",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Amber",
    inStock: true,
  },
  // FRAGRANCES (9) - More variety
  {
    id: "fragrance-1",
    name: "Eden No.01",
    category: "fragrances",
    price: 2680,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop&q=80",
    description:
      "A luminous opening of bergamot leads to a heart of jasmine, grounded by amberwood. Fresh yet warm, perfect for everyday elegance.",
    scentNotes: {
      top: "Bergamot",
      heart: "Jasmine",
      base: "Amberwood",
    },
    size: "50ml",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "fragrance-2",
    name: "Eden No.02",
    category: "fragrances",
    price: 2780,
    image: "https://images.unsplash.com/photo-1595425970377-c97037cfb3c5?w=800&h=800&fit=crop&q=80",
    description:
      "Pink pepper sparks against rose absolute, softened by suede. A modern floral with an edge of sophistication.",
    scentNotes: {
      top: "Pink Pepper",
      heart: "Rose Absolute",
      base: "Suede",
    },
    size: "50ml",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "fragrance-3",
    name: "Eden No.03",
    category: "fragrances",
    price: 2870,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop&q=80",
    description:
      "Vetiver and cedar create a dry, woody foundation, warmed by dry amber. Masculine yet refined, unisex appeal.",
    scentNotes: {
      top: "Vetiver",
      heart: "Cedar",
      base: "Dry Amber",
    },
    size: "50ml",
    scentFamily: "Woody",
    inStock: true,
  },
  {
    id: "fragrance-4",
    name: "Eden No.04",
    category: "fragrances",
    price: 2680,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop&q=80",
    description:
      "Neroli and orange blossom bloom into white musk. A clean, radiant fragrance that feels like sunshine on skin.",
    scentNotes: {
      top: "Neroli",
      heart: "Orange Blossom",
      base: "White Musk",
    },
    size: "50ml",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "fragrance-5",
    name: "Eden No.05",
    category: "fragrances",
    price: 2960,
    image: "https://images.unsplash.com/photo-1595425970377-c97037cfb3c5?w=800&h=800&fit=crop&q=80",
    description:
      "Blackcurrant and incense open into warm woods. Dark, mysterious, and deeply sensual. A signature scent for the bold.",
    scentNotes: {
      top: "Blackcurrant",
      heart: "Incense",
      base: "Warm Woods",
    },
    size: "50ml",
    scentFamily: "Amber",
    limitedBatch: true,
    inStock: true,
  },
  {
    id: "fragrance-6",
    name: "Eden No.06",
    category: "fragrances",
    price: 2740,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop&q=80",
    description:
      "Lavender and chamomile blend with soft vanilla. A calming, therapeutic fragrance perfect for moments of rest.",
    scentNotes: {
      top: "Lavender",
      heart: "Chamomile",
      base: "Soft Vanilla",
    },
    size: "50ml",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "fragrance-7",
    name: "Eden No.07",
    category: "fragrances",
    price: 2810,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop&q=80",
    description:
      "Grapefruit and mint open to a heart of white flowers, grounded by clean musk. Energizing and effortlessly chic.",
    scentNotes: {
      top: "Grapefruit, Mint",
      heart: "White Flowers",
      base: "Clean Musk",
    },
    size: "50ml",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "fragrance-8",
    name: "Eden No.08",
    category: "fragrances",
    price: 2920,
    image: "https://images.unsplash.com/photo-1595425970377-c97037cfb3c5?w=800&h=800&fit=crop&q=80",
    description:
      "Tobacco leaf and honey create a rich, warm opening, deepened by oud and patchouli. Luxurious and intoxicating.",
    scentNotes: {
      top: "Tobacco Leaf, Honey",
      heart: "Oud",
      base: "Patchouli",
    },
    size: "50ml",
    scentFamily: "Amber",
    limitedBatch: true,
    inStock: true,
  },
  {
    id: "fragrance-9",
    name: "Eden No.09",
    category: "fragrances",
    price: 2680,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop&q=80",
    description:
      "Peony and freesia bloom alongside green tea. A delicate, feminine fragrance that feels like a spring garden.",
    scentNotes: {
      top: "Peony",
      heart: "Freesia",
      base: "Green Tea",
    },
    size: "50ml",
    scentFamily: "Floral",
    inStock: true,
  },
];
