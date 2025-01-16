import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosRequestConfig, Method } from "axios";

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: Method;
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }, api) => {
    const serverUrl = `http://${import.meta.env.VITE_SERVE_URL}/${url}`;

    console.log(serverUrl)

    try {
      const result = await axios({
        url: serverUrl,
        method,
        data,
        params,
        timeout: 30000,
        cancelToken: new axios.CancelToken((executor) => {
          api.signal.addEventListener("abort", () => executor());
        }),
      });

      return result;
    } catch (error) {

      console.error(error);
      if (axios.isAxiosError(error)) {
        return {
          error: { data: error.response?.data, status: error.response?.status },
        };
      }
      return { error };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
