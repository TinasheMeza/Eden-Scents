"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b-2 border-sand/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.h1
              className="text-2xl font-serif text-warm-gray hover:text-soft-gold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Eden Scents
            </motion.h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-soft-gold border-b-2 border-soft-gold"
                  : "text-warm-gray hover:text-soft-gold"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors ${
                pathname === "/products"
                  ? "text-soft-gold border-b-2 border-soft-gold"
                  : "text-warm-gray hover:text-soft-gold"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/checkout"
              className={`text-sm font-medium transition-colors ${
                pathname === "/checkout"
                  ? "text-soft-gold border-b-2 border-soft-gold"
                  : "text-warm-gray hover:text-soft-gold"
              }`}
            >
              Checkout
            </Link>
          </div>

          {/* Cart Icon */}
          <Link href="/checkout" className="relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <svg
                className="w-6 h-6 text-warm-gray hover:text-soft-gold transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-soft-gold text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
