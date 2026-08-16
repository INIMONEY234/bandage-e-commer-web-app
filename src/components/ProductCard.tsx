import React, { useEffect, useRef, useState } from "react";

import type { Product } from "../types";

import { useAppDispatch } from "../app/hooks";

import { addToCart } from "../app/cartSlice";

import "../assets/styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  const dispatch = useAppDispatch();

  const [showCartSuccess, setShowCartSuccess] =
    useState(false);

  const cartTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =========================
     CLEAN UP TIMEOUT
  ========================= */

  useEffect(() => {
    return () => {
      if (cartTimeoutRef.current) {
        clearTimeout(cartTimeoutRef.current);
      }
    };
  }, []);

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    setShowCartSuccess(true);

    if (cartTimeoutRef.current) {
      clearTimeout(cartTimeoutRef.current);
    }

    cartTimeoutRef.current = setTimeout(() => {
      setShowCartSuccess(false);
    }, 2500);
  };

  return (
    <div className="product-card">

      {/* =========================
          PRODUCT IMAGE
      ========================= */}

      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.title}
          className="product-img"
        />

      </div>

      {/* =========================
          PRODUCT INFORMATION
      ========================= */}

      <div className="product-info">

        <h5 className="product-title">
          {product.title}
        </h5>

        <p className="product-dept">
          {product.department}
        </p>

        <div className="product-prices">

          <span className="old-price">
            ${product.originalPrice.toFixed(2)}
          </span>

          <span className="new-price">
            ${product.discountPrice.toFixed(2)}
          </span>

        </div>

        {/* =========================
            ADD TO CART
        ========================= */}

        <button
          type="button"
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

      </div>

      {/* =========================
          CART SUCCESS POPUP
      ========================= */}

      {showCartSuccess && (
        <div className="cart-success-popup">

          <span className="cart-success-icon">
            ✓
          </span>

          <div>

            <strong>
              Added to cart
            </strong>

            <p>
              {product.title}
            </p>

          </div>

        </div>
      )}

    </div>
  );
};