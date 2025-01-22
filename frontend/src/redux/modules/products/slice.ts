import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./types";

type ProductsState = Product[];

const initialState: ProductsState = [];

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (_, { payload }: PayloadAction<ProductsState>) => {
      return payload;
    },
  },
});

export const { setProducts } = slice.actions;

export default slice.reducer;
export { initialState as productInitialState };
