import { Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Category from "@/pages/Category";
import Product from "@/pages/Product";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}
