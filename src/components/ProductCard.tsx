import React from 'react';

import type { Product } from "../types";

import "../assets/styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
      <div className="product-info">
        <h5 className="product-title">{product.title}</h5>
        <p className="product-dept">{product.department}</p>
        <div className="product-prices">
          <span className="old-price">${product.originalPrice}</span>
          <span className="new-price">${product.discountPrice}</span>
        </div>
        <button type="button" className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};