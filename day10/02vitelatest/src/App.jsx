import React, { useState, useRef, lazy, Suspense } from 'react';
import Header from './Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';  
//import About from './About';
//import Contact from './Contact';

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));


const ProductCard = ({ product, addToCart, removeFromCart, getCartCount }) => {
  const count = getCartCount(product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">Rs.{product.price}</p>

      {count === 0 ? (
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      ) : (
        <div className="quantity">
          <button onClick={() => removeFromCart(product.id)}>-</button>
          <span>{count}</span>
          <button onClick={() => addToCart(product.id)}>+</button>
        </div>
      )}
    </div>
  );
};

function App() {
  const [cart, setCart] = useState({});
  const scrollRef = useRef(null);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 7999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
    { id: 2, name: "Smart Watch", price: 999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" },
    { id: 3, name: "Laptop Stand", price: 199, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop" },
    { id: 4, name: "USB-C Hub", price: 299, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop" },
    { id: 5, name: "Mechanical Keyboard", price: 599, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop" },
    { id: 6, name: "Wireless Mouse", price: 399, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop" },
    { id: 7, name: "Phone Case", price: 99, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop" },
    { id: 8, name: "Portable Charger", price: 999, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop" },
    { id: 9, name: "Bluetooth Speaker", price: 1999, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop" },
    { id: 10, name: "Webcam HD", price: 499, image: "https://images.unsplash.com/photo-1589739900243-841ce1bc07c8?w=300&h=300&fit=crop" }
  ];

  const addToCart = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id]--;
      else delete updated[id];
      return updated;
    });
  };

  const getCartCount = (id) => cart[id] || 0;

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  const totalPrice = Object.keys(cart).reduce((total, id) => {
    const product = products.find(p => p.id === parseInt(id));
    return total + (product ? cart[id] * product.price : 0);
  }, 0);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({ left: direction * 400, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <h1>Welcome to MyShop</h1>

            {totalItems > 0 && (
              <div className="cart-info">
                Cart: {totalItems} item - Total: Rs.{totalPrice}
              </div>
            )}

            <div className="products-container">
              <button className="arrow" onClick={() => scroll(-1)}>‹</button>

              <div className="products" ref={scrollRef}>
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    getCartCount={getCartCount}
                  />
                ))}
              </div>

              <button className="arrow" onClick={() => scroll(1)}>›</button>
            </div>
          </main>
        } />
        <Route path="/about" element={<Suspense fallback={<h1>Loading...</h1>}>
        <About />
        </Suspense>} />
        <Route path="/contact" element={<Suspense fallback ={<h1>Loading...</h1>}><Contact /></Suspense>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>

      <footer>
        <p>&copy; 2026 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;