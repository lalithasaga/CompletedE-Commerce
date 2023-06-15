import React, { useState } from 'react';
import './Styles/App.css';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import Footer from './components/Footer';

const productsArr = [
  {
    title: 'Album 1',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Album 4',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.title === product.title);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.title !== item.title);
    setCartItems(updatedCartItems);
    setTotal(total - item.price * item.quantity);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div id="EcommerceContainer">
      <Header cartItems={cartItems} toggleCart={toggleCart} />

      <section id="music" className="container">
        <h2>MUSIC</h2>
        <div id="music-content">
          {productsArr.map((product, index) => (
            <Product product={product} addToCart={addToCart} key={index} />
          ))}
        </div>
      </section>

      {isCartOpen && (
        <Cart cartItems={cartItems} total={total} toggleCart={toggleCart} removeFromCart={removeFromCart} />
      )}

      <CartButton toggleCart={toggleCart} />

      <div id="container"></div>

      <Footer />
    </div>
  );
};

export default App;
