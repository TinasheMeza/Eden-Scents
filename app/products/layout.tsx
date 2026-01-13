import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products | Eden Scents",
  description:
    "Browse our complete collection of luxury candles and fine fragrances. Filter by category, scent family, and price range.",
  openGraph: {
    title: "Shop All Products | Eden Scents",
    description:
      "Browse our complete collection of luxury candles and fine fragrances.",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
