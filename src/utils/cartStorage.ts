import type { CartItem, Product } from "@/types/product";
const KEY = "cart";

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem(KEY, JSON.stringify(cart));
}

export function loadCart(): CartItem[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}
