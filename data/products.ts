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
  // CANDLES (10)
  {
    id: "candle-1",
    name: "Amber Sanctuary",
    category: "candles",
    price: 68,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    price: 65,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    price: 68,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    price: 62,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    price: 75,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    price: 65,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    price: 70,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    name: "Coastal Thyme",
    category: "candles",
    price: 62,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
    description:
      "Sea salt, wild thyme, and driftwood evoke a coastal breeze. Fresh, mineral, and effortlessly calming.",
    scentNotes: {
      top: "Sea Salt",
      heart: "Wild Thyme",
      base: "Driftwood",
    },
    burnTime: "60-70 hours",
    size: "8oz",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "candle-9",
    name: "Rose Dusk",
    category: "candles",
    price: 68,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
    id: "candle-10",
    name: "Moon Milk",
    category: "candles",
    price: 65,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop",
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
  // FRAGRANCES (20)
  {
    id: "fragrance-1",
    name: "Eden No.01",
    category: "fragrances",
    price: 145,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 150,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 155,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 145,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 160,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 148,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 152,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 158,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
    price: 145,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
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
  {
    id: "fragrance-10",
    name: "Eden No.10",
    category: "fragrances",
    price: 150,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Juniper and cardamom open to a heart of iris, finished with vetiver. Crisp, sophisticated, and modern.",
    scentNotes: {
      top: "Juniper, Cardamom",
      heart: "Iris",
      base: "Vetiver",
    },
    size: "50ml",
    scentFamily: "Woody",
    inStock: true,
  },
  {
    id: "fragrance-11",
    name: "Eden No.11",
    category: "fragrances",
    price: 155,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Mandarin and sea salt create a bright, oceanic opening, deepened by driftwood and ambergris. Fresh and sophisticated.",
    scentNotes: {
      top: "Mandarin, Sea Salt",
      heart: "Driftwood",
      base: "Ambergris",
    },
    size: "50ml",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "fragrance-12",
    name: "Eden No.12",
    category: "fragrances",
    price: 148,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Gardenia and tuberose create a lush, creamy floral heart, softened by sandalwood. Romantic and opulent.",
    scentNotes: {
      top: "Gardenia",
      heart: "Tuberose",
      base: "Sandalwood",
    },
    size: "50ml",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "fragrance-13",
    name: "Eden No.13",
    category: "fragrances",
    price: 160,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Leather and saffron open to a heart of rose, finished with oud and amber. Bold, luxurious, and unforgettable.",
    scentNotes: {
      top: "Leather, Saffron",
      heart: "Rose",
      base: "Oud, Amber",
    },
    size: "50ml",
    scentFamily: "Amber",
    limitedBatch: true,
    inStock: true,
  },
  {
    id: "fragrance-14",
    name: "Eden No.14",
    category: "fragrances",
    price: 145,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Lemon verbena and basil create a zesty, herbal opening, grounded by white cedar. Clean, energizing, and natural.",
    scentNotes: {
      top: "Lemon Verbena, Basil",
      heart: "White Cedar",
      base: "Musk",
    },
    size: "50ml",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "fragrance-15",
    name: "Eden No.15",
    category: "fragrances",
    price: 152,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Lilac and hyacinth bloom alongside violet leaves, finished with soft woods. A nostalgic, springtime fragrance.",
    scentNotes: {
      top: "Lilac",
      heart: "Hyacinth, Violet Leaves",
      base: "Soft Woods",
    },
    size: "50ml",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "fragrance-16",
    name: "Eden No.16",
    category: "fragrances",
    price: 158,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Birch and pine needles open to a heart of fir balsam, finished with oakmoss. A walk through an evergreen forest.",
    scentNotes: {
      top: "Birch, Pine Needles",
      heart: "Fir Balsam",
      base: "Oakmoss",
    },
    size: "50ml",
    scentFamily: "Woody",
    inStock: true,
  },
  {
    id: "fragrance-17",
    name: "Eden No.17",
    category: "fragrances",
    price: 150,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Coconut and tiare flower create a tropical, creamy opening, deepened by vanilla and tonka. Summery and sensual.",
    scentNotes: {
      top: "Coconut, Tiare Flower",
      heart: "Vanilla",
      base: "Tonka",
    },
    size: "50ml",
    scentFamily: "Amber",
    inStock: true,
  },
  {
    id: "fragrance-18",
    name: "Eden No.18",
    category: "fragrances",
    price: 145,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Cucumber and melon open to a heart of water lily, finished with aquatic notes. Cool, refreshing, and modern.",
    scentNotes: {
      top: "Cucumber, Melon",
      heart: "Water Lily",
      base: "Aquatic Notes",
    },
    size: "50ml",
    scentFamily: "Fresh",
    inStock: true,
  },
  {
    id: "fragrance-19",
    name: "Eden No.19",
    category: "fragrances",
    price: 155,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Magnolia and jasmine sambac create a rich, heady floral heart, grounded by benzoin. Elegant and timeless.",
    scentNotes: {
      top: "Magnolia",
      heart: "Jasmine Sambac",
      base: "Benzoin",
    },
    size: "50ml",
    scentFamily: "Floral",
    inStock: true,
  },
  {
    id: "fragrance-20",
    name: "Eden No.20",
    category: "fragrances",
    price: 162,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    description:
      "Myrrh and frankincense open to a heart of labdanum, finished with dark amber. Sacred, meditative, and profound.",
    scentNotes: {
      top: "Myrrh, Frankincense",
      heart: "Labdanum",
      base: "Dark Amber",
    },
    size: "50ml",
    scentFamily: "Amber",
    limitedBatch: true,
    inStock: true,
  },
];
