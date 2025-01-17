import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from '@/redux/types';

type WishlistState = Product[];

const initialState: WishlistState = [];

const slice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductWishlist: (state, { payload }: PayloadAction<Product>) => {
      return [...state, payload];
    },
    removeProductWishlist: (state, { payload: code }: PayloadAction<string>) => {
      return state.filter((product) => product.code !== code);
    }
  },
});

export const { addProductWishlist, removeProductWishlist } = slice.actions;

export default slice.reducer;
export { initialState as wishlistInitialState };
