import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import product9 from "../assets/images/product9.png";
import product10 from "../assets/images/product10.png";

interface DummyJsonProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface GetProductsParams {
  limit: number;
  skip: number;
}

// Custom images for your first 10 products
const customProductImages: Record<number, string> = {
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
  6: product6,
  7: product7,
  8: product8,
  9: product9,
  10: product10,
};

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<
      {
        products: Product[];
        total: number;
      },
      GetProductsParams
    >({
      query: ({ limit, skip }) =>
        `products?limit=${limit}&skip=${skip}`,

      transformResponse: (
        response: DummyJsonProductsResponse
      ) => {
        const products: Product[] = response.products.map(
          (product) => ({
            id: product.id,

            title: product.title,

            department:
              product.category || "English Department",

            originalPrice: product.price,

            discountPrice: Number(
              (
                product.price *
                (1 - product.discountPercentage / 100)
              ).toFixed(2)
            ),

            image:
              customProductImages[product.id] ??
              product.thumbnail,
          })
        );

        return {
          products,
          total: response.total,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = api;