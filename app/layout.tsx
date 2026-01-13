import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eden Scents | Luxury Candles & Fine Fragrances",
  description:
    "Elevated candles and fragrances for intentional living. Hand-poured candles and artisanal eau de parfum crafted with premium oils.",
  keywords: "luxury candles, fine fragrances, eau de parfum, artisan candles, premium scents",
  openGraph: {
    title: "Eden Scents | Luxury Candles & Fine Fragrances",
    description:
      "Elevated candles and fragrances for intentional living. Hand-poured candles and artisanal eau de parfum crafted with premium oils.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Scents | Luxury Candles & Fine Fragrances",
    description:
      "Elevated candles and fragrances for intentional living. Hand-poured candles and artisanal eau de parfum crafted with premium oils.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
