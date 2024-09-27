import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/404";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import LoginRegister from "./pages/LoginRegister";
import { useSelector } from "react-redux";
import Like from "./pages/Like";


export default function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-details/:id/:name" element={<ProductDetails />} />
        <Route path="/cart" element={token ? <Cart /> : <LoginRegister />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/like" element={<Like/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
