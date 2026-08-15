import React, { useMemo, useState } from "react";

import { useGetProductsQuery } from "../app/api";
import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

import "../assets/styles/ProductList.css";

interface ProductListProps {
  page: "home" | "shop";
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

export const ProductList: React.FC<ProductListProps> = ({ page }) => {
  const productsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const skip = (currentPage - 1) * productsPerPage;

  const { data, isLoading, isFetching, isError } = useGetProductsQuery({
    limit: productsPerPage,
    skip,
  });

  

  const [lastMergedData, setLastMergedData] = useState<ProductsResponse | undefined>(
    undefined
  );


  
  
  if (data && data !== lastMergedData) {
    setLastMergedData(data);

    setAllProducts((previousProducts) => {
      const existingIds = new Set(previousProducts.map((product) => product.id));
      const newProducts = data.products.filter((product) => !existingIds.has(product.id));
      return newProducts.length > 0 ? [...previousProducts, ...newProducts] : previousProducts;
    });
  }

  const hasMore = useMemo(() => {
    if (!data) {
      return true;
    }
    const loadedProducts = (currentPage - 1) * productsPerPage + data.products.length;
    return loadedProducts < data.total;
  }, [data, currentPage]);

  const handleLoadMore = () => {
    if (isFetching || !hasMore) {
      return;
    }
    setCurrentPage((previousPage) => previousPage + 1);
  };

  if (isLoading && allProducts.length === 0) {
    return (
      <section className="products-section container">
        <div className="section-header">
          <h4 className="subtitle">Featured Products</h4>
          <h2 className="main-title">
            {page === "home" ? "BESTSELLER PRODUCTS" : "ALL PRODUCTS"}
          </h2>
          <p className="description">Loading products...</p>
        </div>
      </section>
    );
  }

  if (isError && allProducts.length === 0) {
    return (
      <section className="products-section container">
        <div className="section-header">
          <h4 className="subtitle">Featured Products</h4>
          <h2 className="main-title">
            {page === "home" ? "BESTSELLER PRODUCTS" : "ALL PRODUCTS"}
          </h2>
          <p className="description">Unable to load products. Please try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="products-section container">
      <div className="section-header">
        <h4 className="subtitle">Featured Products</h4>
        <h2 className="main-title">
          {page === "home" ? "BESTSELLER PRODUCTS" : "ALL PRODUCTS"}
        </h2>
        <p className="description">Problems trying to resolve the conflict between</p>
      </div>

      <div className="products-grid">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </div>

      {page === "home" && hasMore && (
        <div className="btn-wrapper">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleLoadMore}
            disabled={isFetching}
          >
            {isFetching ? "LOADING PRODUCTS..." : "LOAD MORE PRODUCTS"}
          </button>
        </div>
      )}

      {page === "home" && !hasMore && allProducts.length > 0 && (
        <div className="btn-wrapper">
          <p className="all-products-loaded">All products have been loaded.</p>
        </div>
      )}
    </section>
  );
};