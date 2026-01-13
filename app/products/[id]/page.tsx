import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import type { Metadata } from "next";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Eden Scents",
    };
  }

  return {
    title: `${product.name} | Eden Scents`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Eden Scents`,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
