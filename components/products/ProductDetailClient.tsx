"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.size || "default");
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-sand/30 shadow-luxury-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-3xl"
              priority
            />
            {product.limitedBatch && (
              <div className="absolute top-4 left-4 bg-soft-gold text-white px-4 py-2 rounded-full shadow-lg">
                Limited Batch
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm text-warm-gray/60 uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-warm-gray mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-serif text-soft-gold mb-6">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-warm-gray/80 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Scent Notes */}
            {product.scentNotes && (
              <div className="border-t border-sand pt-6">
                <h3 className="font-serif text-xl text-warm-gray mb-4">Scent Notes</h3>
                <div className="space-y-2">
                  {product.scentNotes.top && (
                    <div>
                      <span className="font-medium text-warm-gray">Top:</span>{" "}
                      <span className="text-warm-gray/70">{product.scentNotes.top}</span>
                    </div>
                  )}
                  {product.scentNotes.heart && (
                    <div>
                      <span className="font-medium text-warm-gray">Heart:</span>{" "}
                      <span className="text-warm-gray/70">{product.scentNotes.heart}</span>
                    </div>
                  )}
                  {product.scentNotes.base && (
                    <div>
                      <span className="font-medium text-warm-gray">Base:</span>{" "}
                      <span className="text-warm-gray/70">{product.scentNotes.base}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Burn Time (for candles) */}
            {product.burnTime && (
              <div className="border-t border-sand pt-6">
                <p className="text-warm-gray/70">
                  <span className="font-medium text-warm-gray">Burn Time:</span>{" "}
                  {product.burnTime}
                </p>
              </div>
            )}

            {/* Size Options */}
            {product.size && (
              <div className="border-t border-sand pt-6">
                <h3 className="font-medium text-warm-gray mb-3">Size</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSize(product.size || "default")}
                    className={`px-6 py-3 rounded-2xl border-2 ${
                      size === product.size
                        ? "border-soft-gold bg-soft-gold/10 text-soft-gold shadow-lg"
                        : "border-sand text-warm-gray hover:border-soft-gold hover:shadow-md"
                    } transition-all duration-300`}
                  >
                    {product.size}
                  </button>
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="border-t border-sand pt-6">
              <h3 className="font-medium text-warm-gray mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-2xl border-2 border-sand flex items-center justify-center hover:border-soft-gold hover:bg-soft-gold/5 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  −
                </button>
                <span className="text-xl font-medium text-warm-gray w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-2xl border-2 border-sand flex items-center justify-center hover:border-soft-gold hover:bg-soft-gold/5 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full py-5 rounded-2xl font-medium text-lg transition-all duration-300 shadow-luxury hover:shadow-luxury-lg ${
                added
                  ? "bg-muted-green text-white"
                  : "bg-soft-gold text-warm-gray hover:bg-soft-gold/90"
              }`}
            >
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-sand">
              <div className="flex items-center gap-2 text-sm text-warm-gray/70">
                <span>🌿</span>
                <span>Eco-friendly</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-gray/70">
                <span>👋</span>
                <span>Hand-poured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-gray/70">
                <span>💎</span>
                <span>Premium Oils</span>
              </div>
            </div>

            {/* Delivery & Returns */}
            <div className="border-t border-sand pt-6 space-y-2 text-sm text-warm-gray/70 bg-sand/20 rounded-2xl p-4">
              <p>
                <span className="font-medium text-warm-gray">Free shipping</span> on orders
                over R1,800
              </p>
              <p>
                <span className="font-medium text-warm-gray">30-day returns</span> - No
                questions asked
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
