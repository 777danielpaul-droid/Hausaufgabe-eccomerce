import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import App from "@/App";
import "@/style.css";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
