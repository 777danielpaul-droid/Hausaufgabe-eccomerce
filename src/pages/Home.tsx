import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { fetchProducts, fetchCategories, categoryLabel } from "@/utils/api";
import type { Product } from "@/types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { cart, addItem, removeItem, updateQty } = useCart();

  useEffect(() => {
    Promise.all([
      fetchProducts().then(setProducts),
      fetchCategories().then(setCategories),
    ]).finally(() => setLoading(false));
  }, []);

  const qtyFor = (id: number) =>
    cart.find(i => i.id === id)?.qty ?? 0;

  return (
    <div>
      <section className="mb-10">
        <h1 className="text-2xl font-bold mb-4">Kategorien</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/category/${encodeURIComponent(cat)}`}
              className="btn btn-outline btn-block justify-start"
            >
              {categoryLabel(cat)}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Alle Produkte</h1>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton h-64 w-full rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                inCartQty={qtyFor(product.id)}
                onAddToCart={addItem}
                onRemove={removeItem}
                onIncrement={id => updateQty(id, qtyFor(id) + 1)}
                onDecrement={id => updateQty(id, qtyFor(id) - 1)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
