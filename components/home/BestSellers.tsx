"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function BestSellers() {
  // Get a mix of best sellers (first 6 products)
  const bestSellers = products.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-warm-gray mb-4">
            Best Sellers
          </h2>
          <p className="text-warm-gray/70 text-lg">
            Our most beloved scents, chosen by our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`} className="group block">
                <div className="relative aspect-square mb-4 rounded-3xl overflow-hidden bg-sand/30 shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                  {product.limitedBatch && (
                    <div className="absolute top-2 right-2 bg-soft-gold text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                      Limited
                    </div>
                  )}
                </div>
                <h4 className="font-serif text-warm-gray mb-1 text-sm md:text-base">
                  {product.name}
                </h4>
                <p className="text-soft-gold font-medium text-sm md:text-base">
                  {formatPrice(product.price)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-block bg-warm-gray text-ivory px-8 py-4 rounded-2xl font-medium hover:bg-warm-gray/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg"
          >
            Shop All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
