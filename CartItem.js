import React from 'react';
import './CartItem.css';
const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-row">
    <span className="cart-item cart-column">
      <img className="cart-img" src={item.imageUrl} alt="" />
      <span>{item.title}</span>
    </span>
    <span className="cart-price cart-column">${item.price.toFixed(2)}</span>
    <span className="cart-quantity cart-column">
      <input type="text" value={item.quantity} readOnly />
      <button onClick={() => removeFromCart(item)}>REMOVE</button>
    </span>
  </div>
);

export default CartItem;
