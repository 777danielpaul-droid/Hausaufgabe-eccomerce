import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { fetchProductsByCategory, categoryLabel } from "@/utils/api";
import type { Product } from "@/types/product";

export default function Category() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { cart, addItem, removeItem, updateQty } = useCart();

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    fetchProductsByCategory(decodeURIComponent(category))
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        {category ? categoryLabel(decodeURIComponent(category)) : "Kategorie"}
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton h-64 w-full rounded-xl"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              inCartQty={cart.find(i => i.id === product.id)?.qty ?? 0}
              onAddToCart={addItem}
              onRemove={removeItem}
              onIncrement={id => updateQty(id, (cart.find(i => i.id === id)?.qty ?? 0) + 1)}
              onDecrement={id => updateQty(id, (cart.find(i => i.id === id)?.qty ?? 0) - 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
