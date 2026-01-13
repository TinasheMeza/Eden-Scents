"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { products, ProductCategory, ScentFamily } from "@/data/products";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProductCategory) || "all";
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(
    initialCategory
  );
  const [selectedScentFamily, setSelectedScentFamily] = useState<ScentFamily | "all">(
    "all"
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedScentFamily !== "all") {
      filtered = filtered.filter((p) => p.scentFamily === selectedScentFamily);
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    return filtered;
  }, [selectedCategory, selectedScentFamily, priceRange]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-warm-gray mb-4">
            Shop All Products
          </h1>
          <p className="text-warm-gray/70 text-lg">
            Discover our complete collection of luxury candles and fine fragrances.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedScentFamily={selectedScentFamily}
              setSelectedScentFamily={setSelectedScentFamily}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-warm-gray/70">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
