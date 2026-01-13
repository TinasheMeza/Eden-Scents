"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual submission
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-sand/30 rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-warm-gray mb-4">
            Stay Connected
          </h2>
          <p className="text-warm-gray/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            fragrance insights.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 rounded border border-sand bg-ivory text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-soft-gold"
              />
              <button
                type="submit"
                className="bg-soft-gold text-warm-gray px-8 py-4 rounded font-medium hover:bg-soft-gold/90 transition-colors whitespace-nowrap"
              >
                {submitted ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-soft-gold"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
