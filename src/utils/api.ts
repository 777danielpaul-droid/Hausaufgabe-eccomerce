import type { Product } from "@/types/product";

const BASE = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${BASE}/products/categories`);
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json();
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${BASE}/products/category/${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json();
}

export async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`${BASE}/products/${id}`);
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json();
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function categoryLabel(category: string): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
