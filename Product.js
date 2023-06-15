import React from 'react';
import './Product.css';
const Product = ({ product, addToCart }) => (
  <div id={`album${product.index + 1}`}>
    <h3>{product.title}</h3>
    <div className="image-container">
      <img className="prod-images" src={product.imageUrl} alt="" />
    </div>
    <div className="prod-details">
      <span>${product.price.toFixed(2)}</span>
      <button className="shop-item-button" type="button" onClick={() => addToCart(product)}>
        ADD TO CART
      </button>
    </div>
  </div>
);

export default Product;
