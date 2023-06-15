import React from 'react';
import './Header.css';
const Header = ({ cartItems, toggleCart }) => (
  <header>
    <ul className="header">
      <li>
        <a href="./index.html">HOME</a>
      </li>
      <li>
        <a href="./">STORE</a>
      </li>
      <li>
        <a href="./about.html">ABOUT</a>
      </li>
      <a href="#cart" className="cart-holder" onClick={toggleCart}>
        cart<span className="cart-number">{cartItems.length}</span>
      </a>
    </ul>
    <h1>The Generics</h1>
  </header>
);

export default Header;
