"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-warm-gray/70 text-lg">No products found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Link href={`/products/${product.id}`} className="group block">
            <div className="bg-sand/30 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.limitedBatch && (
                  <div className="absolute top-3 right-3 bg-soft-gold text-white text-xs px-2 py-1 rounded">
                    Limited Batch
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif text-warm-gray group-hover:text-soft-gold transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs text-warm-gray/60 uppercase bg-sand/50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-warm-gray/70 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-serif text-soft-gold">
                    ${product.price}
                  </p>
                  <span className="text-sm text-warm-gray/60 hover:text-soft-gold transition-colors">
                    Quick View →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
