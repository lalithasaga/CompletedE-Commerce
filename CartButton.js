import React from 'react';
import './CartButton.css';

const CartButton = ({ toggleCart }) => (
  <button className="cart-btn-bottom">
    <a href="#cart" className="cart-bottom" onClick={toggleCart}>
      See the cart
    </a>
  </button>
);

export default CartButton;
