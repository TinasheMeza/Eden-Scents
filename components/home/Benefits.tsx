"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Clean Burn",
    description: "Made with natural soy wax and cotton wicks for a clean, even burn.",
    icon: "🕯️",
  },
  {
    title: "Long-Lasting Scent",
    description: "Premium fragrance oils ensure your space stays beautifully scented for hours.",
    icon: "🌸",
  },
  {
    title: "Artisan Crafted",
    description: "Each product is hand-poured in small batches with meticulous attention to detail.",
    icon: "✨",
  },
];

export default function Benefits() {
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
            Why Choose Eden Scents
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-serif text-warm-gray mb-4">
                {benefit.title}
              </h3>
              <p className="text-warm-gray/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-warm-gray/70"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-medium">Eco-friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👋</span>
            <span className="font-medium">Hand-poured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💎</span>
            <span className="font-medium">Premium Oils</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
