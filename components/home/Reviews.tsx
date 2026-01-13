"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Amber Sanctuary is absolutely divine. The scent fills my entire home and lasts for hours. Worth every penny!",
    product: "Amber Sanctuary",
  },
  {
    name: "James L.",
    rating: 5,
    text: "Eden No.03 is my new signature scent. The vetiver and cedar combination is perfect—sophisticated and timeless.",
    product: "Eden No.03",
  },
  {
    name: "Emma K.",
    rating: 5,
    text: "I've tried many luxury candles, but Eden Scents truly stands out. The quality is exceptional, and the scents are beautifully balanced.",
    product: "Cedar & Sage Ritual",
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "The fragrances are incredibly well-crafted. Each one tells a story. Eden No.05 is dark and mysterious—exactly what I was looking for.",
    product: "Eden No.05",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-warm-gray mb-4">
            What Our Customers Say
          </h2>
          <p className="text-warm-gray/70 text-lg">
            Join thousands of satisfied customers who have made Eden Scents part of their daily
            rituals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-sand/30 rounded-3xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-soft-gold text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-warm-gray/80 mb-4 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-sand pt-4">
                <p className="font-medium text-warm-gray">{review.name}</p>
                <p className="text-sm text-warm-gray/60">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
