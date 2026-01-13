"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop"
              alt="Hand-poured candle"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-warm-gray mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-warm-gray/80 leading-relaxed">
              <p>
                Eden Scents was born from a simple belief: that scent has the power
                to transform spaces and elevate moments. We craft each candle and
                fragrance with intention, using only the finest ingredients sourced
                with care.
              </p>
              <p>
                Every product is hand-poured in small batches, ensuring quality and
                attention to detail. Our fragrances are designed to be layered,
                mixed, and personalized—because your scent should be as unique as
                you are.
              </p>
              <p>
                We believe in slow luxury: products that last, scents that evolve,
                and rituals that matter. Welcome to Eden Scents, where every
                fragrance tells a story.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
