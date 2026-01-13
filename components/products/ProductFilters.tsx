"use client";

import { ProductCategory, ScentFamily } from "@/data/products";

interface ProductFiltersProps {
  selectedCategory: ProductCategory | "all";
  setSelectedCategory: (category: ProductCategory | "all") => void;
  selectedScentFamily: ScentFamily | "all";
  setSelectedScentFamily: (family: ScentFamily | "all") => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  selectedScentFamily,
  setSelectedScentFamily,
  priceRange,
  setPriceRange,
}: ProductFiltersProps) {
  return (
    <div className="bg-sand/30 rounded-lg p-6 space-y-6 sticky top-24">
      <h3 className="text-xl font-serif text-warm-gray mb-4">Filters</h3>

      {/* Category Filter */}
      <div>
        <h4 className="font-medium text-warm-gray mb-3">Category</h4>
        <div className="space-y-2">
          {(["all", "candles", "fragrances"] as const).map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer text-warm-gray/80 hover:text-warm-gray"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="w-4 h-4 text-soft-gold focus:ring-soft-gold"
              />
              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Scent Family Filter */}
      <div>
        <h4 className="font-medium text-warm-gray mb-3">Scent Family</h4>
        <div className="space-y-2">
          {(["all", "Woody", "Floral", "Fresh", "Amber"] as const).map((family) => (
            <label
              key={family}
              className="flex items-center gap-2 cursor-pointer text-warm-gray/80 hover:text-warm-gray"
            >
              <input
                type="radio"
                name="scentFamily"
                value={family}
                checked={selectedScentFamily === family}
                onChange={() => setSelectedScentFamily(family)}
                className="w-4 h-4 text-soft-gold focus:ring-soft-gold"
              />
              <span>{family}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-medium text-warm-gray mb-3">Price Range</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="0"
              max="200"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className="w-20 px-3 py-2 rounded border border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold"
            />
            <span className="text-warm-gray/70">to</span>
            <input
              type="number"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-20 px-3 py-2 rounded border border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold"
            />
          </div>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
