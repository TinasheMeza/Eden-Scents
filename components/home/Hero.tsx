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
          src="https://images.unsplash.com/photo-1606800054160-8b5e8b8b8b8b?w=1920&h=1080&fit=crop&q=80"
          alt="Luxury candles and fragrances"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/75 to-ivory" />
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
            className="bg-soft-gold text-warm-gray px-8 py-4 rounded-2xl font-medium hover:bg-soft-gold/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg text-lg"
          >
            Shop Candles
          </Link>
          <Link
            href="/products?category=fragrances"
            className="bg-warm-gray text-ivory px-8 py-4 rounded-2xl font-medium hover:bg-warm-gray/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg text-lg"
          >
            Explore Fragrances
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
