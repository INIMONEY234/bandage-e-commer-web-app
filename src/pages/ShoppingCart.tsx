import { useState } from "react";

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../app/cartSlice";

import "../assets/styles/ShoppingCart.css";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const [paymentSuccessful, setPaymentSuccessful] =
    useState(false);

  const [isProcessing, setIsProcessing] =
    useState(false);

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total +
      item.product.discountPrice *
        item.quantity,
    0
  );

  const formattedCartTotal =
    cartTotal.toFixed(2);

  /*
   * =========================
   * CHECKOUT
   * =========================
   */

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    setIsProcessing(true);

    /*
     * Simulate payment processing.
     */
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccessful(true);

      /*
       * Clear cart after successful payment.
       */
      dispatch(clearCart());
    }, 1500);
  };

  /*
   * =========================
   * EMPTY CART
   * =========================
   */

  if (cartItems.length === 0) {
  return (
    <section className="shopping-cart empty-cart">

      <div className="empty-cart-content">

        <h1>
          {paymentSuccessful
            ? "Payment Successful!"
            : "Your Cart Is Empty"}
        </h1>

        <p>
          {paymentSuccessful
            ? "Thank you for your purchase. Your order has been successfully processed."
            : "You haven't added any products to your cart yet."}
        </p>

        <Link
          to="/shop"
          className="continue-shopping-btn"
        >
          Continue Shopping
        </Link>

      </div>

    </section>
  );
}

  /*
   * =========================
   * CART
   * =========================
   */

  return (
    <section className="shopping-cart">

      <div className="cart-header">

        <h1>
          Shopping Cart
        </h1>

        <p>
          {totalItems}{" "}
          {totalItems === 1
            ? "item"
            : "items"}{" "}
          in your cart
        </p>

      </div>

      <div className="cart-layout">

        {/* =========================
            CART ITEMS
        ========================= */}

        <div className="cart-items">

          {cartItems.map((item) => {

            const itemSubtotal =
              item.product.discountPrice *
              item.quantity;

            return (
              <article
                className="cart-item"
                key={item.product.id}
              >

                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="cart-item-image"
                />

                <div className="cart-item-details">

                  <h2>
                    {item.product.title}
                  </h2>

                  <p>
                    {item.product.department}
                  </p>

                  <strong>
                    $
                    {item.product.discountPrice.toFixed(
                      2
                    )}
                  </strong>

                </div>

                {/* =========================
                    QUANTITY
                ========================= */}

                <div className="cart-item-controls">
  <button
    type="button"
    className="quantity-btn quantity-decrease"
    aria-label={`Decrease quantity of ${item.product.title}`}
    disabled={item.quantity <= 1}
    onClick={() =>
      dispatch(
        decrementQuantity(item.product.id)
      )
    }
  >
    −
  </button>

  <span className="quantity-value">
    {item.quantity}
  </span>

  <button
    type="button"
    className="quantity-btn quantity-increase"
    aria-label={`Increase quantity of ${item.product.title}`}
    onClick={() =>
      dispatch(
        incrementQuantity(item.product.id)
      )
    }
  >
    +
  </button>
</div>

                {/* =========================
                    SUBTOTAL
                ========================= */}

                <div className="cart-item-subtotal">

                  <strong>
                    $
                    {itemSubtotal.toFixed(
                      2
                    )}
                  </strong>

                </div>

                {/* =========================
                    REMOVE
                ========================= */}

                <button
                  type="button"
                  className="remove-cart-item"
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        item.product.id
                      )
                    )
                  }
                >
                  Remove
                </button>

              </article>
            );
          })}

        </div>

        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <aside className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">
            <span>
              Items
            </span>

            <span>
              {totalItems}
            </span>
          </div>

          <div className="summary-row">
            <span>
              Subtotal
            </span>

            <span>
              ${formattedCartTotal}
            </span>
          </div>

          <div className="summary-row">
            <span>
              Shipping
            </span>

            <span>
              Free
            </span>
          </div>

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ${formattedCartTotal}
            </strong>

          </div>

          {/* =========================
              CHECKOUT
          ========================= */}

          <button
            type="button"
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={isProcessing}
          >
            {isProcessing
              ? "PROCESSING PAYMENT..."
              : "PROCEED TO CHECKOUT"}
          </button>

          {/* =========================
              CLEAR CART
          ========================= */}

          <button
            type="button"
            className="clear-cart-btn"
            onClick={() =>
              dispatch(clearCart())
            }
          >
            Clear Cart
          </button>

        </aside>

      </div>

    </section>
  );
}