import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem, Product } from "@/types/product";
import { loadCart, saveCart } from "@/utils/cartStorage";

type CartContextValue = {
  cart: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => loadCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addItem = (product: Product) =>
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

  const removeItem = (id: number) =>
    setCart(prev => prev.filter(i => i.id !== id));

  const updateQty = (id: number, qty: number) =>
    setCart(prev =>
      qty <= 0
        ? prev.filter(i => i.id !== id)
        : prev.map(i => (i.id === id ? { ...i, qty } : i))
    );

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
