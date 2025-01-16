import { api } from "@/redux/api";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<unknown[], unknown>({
      query: () => ({
        url: 'products',
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
