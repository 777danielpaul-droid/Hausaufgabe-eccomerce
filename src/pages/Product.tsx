import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { fetchProduct, formatPrice, categoryLabel } from "@/utils/api";
import type { Product } from "@/types/product";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { cart, addItem, removeItem, updateQty } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchProduct(Number(id))
      .then(setProduct)
      .catch(() => navigate("/"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading || !product) {
    return <div className="skeleton h-screen w-full"></div>;
  }

  const qtyInCart = cart.find(i => i.id === product.id)?.qty ?? 0;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain mx-auto"
      />
      <div>
        <Link
          to={`/category/${encodeURIComponent(product.category)}`}
          className="badge badge-outline mb-2"
        >
          {categoryLabel(product.category)}
        </Link>
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-3xl font-bold text-primary mb-4">
          {formatPrice(product.price)}
        </p>
        <p className="text-base-content/70 mb-6">{product.description}</p>

        {qtyInCart > 0 ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQty(product.id, qtyInCart - 1)}
              className="btn btn-outline"
            >
              −
            </button>
            <span>{qtyInCart}</span>
            <button
              onClick={() => addItem(product)}
              className="btn btn-outline"
            >
              +
            </button>
            <button
              onClick={() => removeItem(product.id)}
              className="btn btn-error btn-outline"
            >
              Entfernen
            </button>
          </div>
        ) : (
          <button
            onClick={() => addItem(product)}
            className="btn btn-primary"
          >
            In den Warenkorb
          </button>
        )}
      </div>
    </article>
  );
}
