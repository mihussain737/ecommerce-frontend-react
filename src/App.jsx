import "./App.css";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";
import React from "react";
import Cart from "./components/cart/Cart.jsx";
import Login from "./components/auth/Login.jsx";
import PrivateRoute from "./components/shared/PrivateRoute.jsx";
import Register from "./components/auth/Register.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
         
          <Route path="/" element={<PrivateRoute publicPage/>}>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="bottom-center" />
    </React.Fragment>
  );
}

export default App;
