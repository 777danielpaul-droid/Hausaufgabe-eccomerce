import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/api";

export default function Cart() {
  const { cart, addItem, removeItem, updateQty, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-base-content/60">Ihr Warenkorb ist leer.</p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ihr Warenkorb</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Produkt</th>
              <th className="text-right">Menge</th>
              <th className="text-right">Stückpreis</th>
              <th className="text-right">Summe</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map(item => {
              const lineTotal = item.price * item.qty;
              return (
                <tr key={item.id}>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="btn btn-sm btn-ghost"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => addItem({ ...item })}
                        className="btn btn-sm btn-ghost"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-right">{formatPrice(item.price)}</td>
                  <td className="py-4 text-right">{formatPrice(lineTotal)}</td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-sm btn-error btn-outline"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>Gesamt</th>
              <th className="text-right">{formatPrice(total)}</th>
              <th />
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="btn btn-outline btn-error"
        >
          Warenkorb leeren
        </button>
        <button className="btn btn-primary">Zur Kasse</button>
      </div>
    </div>
  );
}
