import React, { useState } from "react";

import { useGetProductsQuery } from "../app/api";
import { ProductCard } from "./ProductCard";

import "../assets/styles/ProductList.css";

interface ProductListProps {
  page: "home" | "shop";
}

export const ProductList: React.FC<ProductListProps> = ({
  page,
}) => {
  const productsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Instead of requesting:
   *
   * page 1 = 10
   * page 2 = next 10
   * page 3 = next 10
   *
   * we request:
   *
   * page 1 = 10
   * page 2 = 20
   * page 3 = 30
   *
   * This means we don't need another allProducts state.
   */
  const limit = currentPage * productsPerPage;

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useGetProductsQuery({
    limit,
    skip: 0,
  });

  const products = data?.products ?? [];

  const hasMore = data
    ? products.length < data.total
    : false;

  const handleLoadMore = () => {
    if (isFetching || !hasMore) {
      return;
    }

    setCurrentPage(
      (previousPage) => previousPage + 1
    );
  };

  /*
   * =========================
   * LOADING
   * =========================
   */

  if (isLoading) {
    return (
      <section className="products-section container">
        <div className="section-header">
          <h4 className="subtitle">
            Featured Products
          </h4>

          <h2 className="main-title">
            {page === "home"
              ? "BESTSELLER PRODUCTS"
              : "ALL PRODUCTS"}
          </h2>

          <p className="description">
            Loading products...
          </p>
        </div>
      </section>
    );
  }

  /*
   * =========================
   * ERROR
   * =========================
   */

  if (isError) {
    return (
      <section className="products-section container">
        <div className="section-header">
          <h4 className="subtitle">
            Featured Products
          </h4>

          <h2 className="main-title">
            {page === "home"
              ? "BESTSELLER PRODUCTS"
              : "ALL PRODUCTS"}
          </h2>

          <p className="description">
            Unable to load products.
            Please try again.
          </p>
        </div>
      </section>
    );
  }

  /*
   * =========================
   * PRODUCTS
   * =========================
   */

  return (
    <section className="products-section container">

      <div className="section-header">
        <h4 className="subtitle">
          Featured Products
        </h4>

        <h2 className="main-title">
          {page === "home"
            ? "BESTSELLER PRODUCTS"
            : "ALL PRODUCTS"}
        </h2>

        <p className="description">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="products-grid">

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="no-products">
            No products available.
          </p>
        )}

      </div>

      {/* =========================
          LOAD MORE
          HOME + SHOP
      ========================= */}

      {hasMore && (
        <div className="btn-wrapper">

          <button
            type="button"
            className="btn-secondary"
            onClick={handleLoadMore}
            disabled={isFetching}
          >
            {isFetching
              ? "LOADING PRODUCTS..."
              : "LOAD MORE PRODUCTS"}
          </button>

        </div>
      )}

      {/* =========================
          ALL PRODUCTS LOADED
      ========================= */}

      {!hasMore &&
        products.length > 0 && (
          <div className="btn-wrapper">

            <p className="all-products-loaded">
              All products have been loaded.
            </p>

          </div>
        )}

    </section>
  );
};