import React from "react";

declare global {
  namespace React {
    interface ImportMetaEnv {
      readonly VITE_API_URL: string;
    }
  }
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export type CartItem = Product & { qty: number };
