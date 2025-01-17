import { api } from "@/redux/api";
import { Product } from "./types";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
