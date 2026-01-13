"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";

export default function FeaturedCollections() {
  const candles = products.filter((p) => p.category === "candles").slice(0, 3);
  const fragrances = products.filter((p) => p.category === "fragrances").slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-warm-gray mb-4">
            Featured Collections
          </h2>
          <p className="text-warm-gray/70 text-lg max-w-2xl mx-auto">
            Discover our signature candles and fine fragrances, each crafted with
            intention and premium ingredients.
          </p>
        </motion.div>

        {/* Signature Candles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-serif text-warm-gray">Signature Candles</h3>
            <Link
              href="/products?category=candles"
              className="text-soft-gold hover:underline font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {candles.map((candle) => (
              <Link
                key={candle.id}
                href={`/products/${candle.id}`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-sand/30 rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={candle.image}
                      alt={candle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-warm-gray mb-2">
                      {candle.name}
                    </h4>
                    <p className="text-warm-gray/70 mb-4">{candle.description}</p>
                    <p className="text-2xl font-serif text-soft-gold">
                      ${candle.price}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Eau de Parfum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-serif text-warm-gray">Eau de Parfum</h3>
            <Link
              href="/products?category=fragrances"
              className="text-soft-gold hover:underline font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fragrances.map((fragrance) => (
              <Link
                key={fragrance.id}
                href={`/products/${fragrance.id}`}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-sand/30 rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={fragrance.image}
                      alt={fragrance.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-warm-gray mb-2">
                      {fragrance.name}
                    </h4>
                    <p className="text-warm-gray/70 mb-4">{fragrance.description}</p>
                    <p className="text-2xl font-serif text-soft-gold">
                      ${fragrance.price}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
