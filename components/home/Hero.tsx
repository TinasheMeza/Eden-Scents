"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1920&h=1080&fit=crop"
          alt="Luxury candles"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 to-ivory" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-serif text-warm-gray mb-6"
        >
          Elevated Candles & Fragrances
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-warm-gray/80 mb-8 max-w-2xl mx-auto"
        >
          for Intentional Living
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/products?category=candles"
            className="bg-soft-gold text-warm-gray px-8 py-4 rounded font-medium hover:bg-soft-gold/90 transition-colors text-lg"
          >
            Shop Candles
          </Link>
          <Link
            href="/products?category=fragrances"
            className="bg-warm-gray text-ivory px-8 py-4 rounded font-medium hover:bg-warm-gray/90 transition-colors text-lg"
          >
            Explore Fragrances
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
