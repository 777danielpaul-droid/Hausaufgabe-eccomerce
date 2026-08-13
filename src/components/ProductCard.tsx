import { Link } from "react-router-dom";
import type { Product } from "@/types/product";
import { formatPrice, categoryLabel } from "@/utils/api";

export default function ProductCard({ product, onAddToCart, onRemove, onIncrement, onDecrement, inCartQty }: {
  product: Product;
  onAddToCart?: (p: Product) => void;
  onRemove?: (id: number) => void;
  onIncrement?: (id: number) => void;
  onDecrement?: (id: number) => void;
  inCartQty?: number;
}) {
  const inCart = inCartQty !== undefined && inCartQty > 0;

  return (
    <article className="bg-base-100 rounded-xl shadow group transition-shadow hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mx-auto"
        />
        <h2 className="text-sm font-medium text-base-content mt-3 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-lg font-semibold text-primary mt-2">
          {formatPrice(product.price)}
        </p>
      </Link>
      <div className="p-4 pt-0">
        <Link
          to={`/category/${encodeURIComponent(product.category)}`}
          className="text-xs text-base-content/60 hover:text-primary"
        >
          {categoryLabel(product.category)}
        </Link>
        <div className="mt-3 flex items-center gap-2">
          {inCart ? (
            <>
              <button
                onClick={() => onDecrement?.(product.id)}
                className="btn btn-sm btn-ghost"
                type="button"
              >
                −
              </button>
              <span className="text-sm">{inCartQty}</span>
              <button
                onClick={() => onIncrement?.(product.id)}
                className="btn btn-sm btn-ghost"
                type="button"
              >
                +
              </button>
              <button
                onClick={() => onRemove?.(product.id)}
                className="btn btn-sm btn-error btn-outline ml-auto"
                type="button"
              >
                Entfernen
              </button>
            </>
          ) : (
            <button
              onClick={() => onAddToCart?.(product)}
              className="btn btn-sm btn-primary w-full"
              type="button"
            >
              In den Warenkorb
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
