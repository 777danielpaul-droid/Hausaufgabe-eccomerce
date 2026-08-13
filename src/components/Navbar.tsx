import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/api";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Shop
        </Link>
        <NavLink
          to="/cart"
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
        >
          Warenkorb ({totalItems})
          {totalPrice > 0 && (
            <span className="text-sm">({formatPrice(totalPrice)})</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
