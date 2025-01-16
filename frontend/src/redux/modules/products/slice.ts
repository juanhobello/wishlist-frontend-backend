import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProdictsState = {
  products: unknown[];
};

const initialState: ProdictsState = { products: [] };

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      { payload }: PayloadAction<ProdictsState>
    ) => {
      return (state = payload);
    },
  },
});

export const { setProducts } = slice.actions;

export default slice.reducer;
export { initialState as productInitialState };
