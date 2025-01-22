import {
  BaseQueryFn,
  createApi,
} from "@reduxjs/toolkit/query/react";
import axios, { AxiosRequestConfig, Method } from "axios";

interface AxiosBaseQueryArgs {
  url: string;
  method: Method;
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
}

interface AxiosBaseQueryError {
  data?: unknown;
  status?: number;
}

const axiosBaseQuery =
  (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
  async ({ url, method, data, params }, api) => {
    const serverUrl = `http://${process.env.VITE_SERVE_URL}/${url}`;

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

      return { data: result.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          error: { data: error.response?.data, status: error.response?.status },
        };
      }
      
      if (error instanceof Error) {
        return { error: { data: error.message, status: undefined } };
      }
      return { error: { data: "Unknown error", status: undefined } };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
