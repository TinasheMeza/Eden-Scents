import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Eden Scents",
  description: "Complete your order for luxury candles and fine fragrances.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
