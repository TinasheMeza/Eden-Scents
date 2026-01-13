"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"cart" | "shipping" | "payment" | "success">("cart");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "South Africa",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 1800 ? 0 : 180; // Free shipping over R1800
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    // UI only - simulate order placement
    clearCart();
    setStep("success");
  };

  if (cart.length === 0 && step === "cart") {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif text-warm-gray mb-4">Your Cart is Empty</h1>
          <p className="text-warm-gray/70 mb-8">Start shopping to add items to your cart.</p>
          <Link
            href="/products"
            className="inline-block bg-soft-gold text-warm-gray px-8 py-4 rounded-2xl font-medium hover:bg-soft-gold/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg"
          >
            Shop Products
          </Link>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-muted-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl font-serif text-warm-gray mb-4">Order Confirmed!</h1>
          <p className="text-warm-gray/70 mb-8">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <Link
            href="/products"
            className="inline-block bg-soft-gold text-warm-gray px-8 py-4 rounded-2xl font-medium hover:bg-soft-gold/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {["Cart", "Shipping", "Payment"].map((label, index) => {
              const stepIndex = ["cart", "shipping", "payment"].indexOf(step);
              const isActive = index <= stepIndex;
              const isCurrent = index === stepIndex;
              return (
                <div key={label} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-medium shadow-md ${
                      isActive
                        ? "bg-soft-gold text-warm-gray"
                        : "bg-sand text-warm-gray/50"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      isCurrent ? "text-warm-gray font-medium" : "text-warm-gray/50"
                    }`}
                  >
                    {label}
                  </span>
                  {index < 2 && (
                    <div
                      className={`w-16 h-1 mx-4 ${
                        isActive ? "bg-soft-gold" : "bg-sand"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "cart" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-sand/30 rounded-3xl p-8 space-y-6 shadow-luxury"
              >
                <h2 className="text-2xl font-serif text-warm-gray mb-6">Shopping Cart</h2>
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 pb-6 border-b border-sand last:border-0"
                  >
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-sand/50 flex-shrink-0 shadow-md">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-warm-gray mb-1">{item.product.name}</h3>
                      <p className="text-sm text-warm-gray/60 mb-2">
                        {item.product.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-10 h-10 rounded-2xl border-2 border-sand flex items-center justify-center hover:border-soft-gold hover:bg-soft-gold/5 transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            −
                          </button>
                          <span className="w-10 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-10 h-10 rounded-2xl border-2 border-sand flex items-center justify-center hover:border-soft-gold hover:bg-soft-gold/5 transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-serif text-soft-gold text-lg">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-sm text-warm-gray/60 hover:text-warm-gray mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setStep("shipping")}
                  className="w-full bg-soft-gold text-warm-gray py-4 rounded-2xl font-medium hover:bg-soft-gold/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg"
                >
                  Proceed to Shipping
                </button>
              </motion.div>
            )}

            {step === "shipping" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-sand/30 rounded-3xl p-8 shadow-luxury"
              >
                <h2 className="text-2xl font-serif text-warm-gray mb-6">Shipping Information</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep("payment");
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-warm-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-gray mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">
                        ZIP
                      </label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep("cart")}
                      className="flex-1 border border-sand text-warm-gray py-3 rounded font-medium hover:bg-sand/50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-soft-gold text-warm-gray py-3 rounded font-medium hover:bg-soft-gold/90 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === "payment" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-sand/30 rounded-3xl p-8 shadow-luxury"
              >
                <h2 className="text-2xl font-serif text-warm-gray mb-6">Payment Information</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handlePlaceOrder();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-warm-gray mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, cardNumber: e.target.value })
                      }
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-gray mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={formData.cardName}
                      onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">
                        Expiry
                      </label>
                      <input
                        type="text"
                        value={formData.expiry}
                        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-gray mb-2">CVV</label>
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 rounded-2xl border-2 border-sand bg-ivory text-warm-gray focus:outline-none focus:border-soft-gold focus:shadow-lg transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep("shipping")}
                      className="flex-1 border-2 border-sand text-warm-gray py-3 rounded-2xl font-medium hover:bg-sand/50 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-soft-gold text-warm-gray py-3 rounded-2xl font-medium hover:bg-soft-gold/90 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-sand/30 rounded-3xl p-6 shadow-luxury">
              <h3 className="text-xl font-serif text-warm-gray mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-warm-gray/70">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="text-warm-gray font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-sand pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-warm-gray/70">Subtotal</span>
                  <span className="text-warm-gray font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray/70">Shipping</span>
                  <span className="text-warm-gray font-medium">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray/70">VAT (15%)</span>
                  <span className="text-warm-gray font-medium">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-serif pt-2 border-t border-sand">
                  <span className="text-warm-gray">Total</span>
                  <span className="text-soft-gold">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
