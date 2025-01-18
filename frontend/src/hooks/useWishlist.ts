import { useAppDispatch, useAppSelector } from "@/redux";
import { addProductWishlist, removeProductWishlist } from "@/redux/slices";
import { Product } from "@/redux/types";
import { useMemo } from "react";

export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);
  const hasWishlistItems = wishlist.length > 0;

  const wishlistCodes = useMemo(
    () => new Set(wishlist.map((product) => product.code)),
    [wishlist]
  );

  const isItemInWishlist = (code: string) => wishlistCodes.has(code);

  const addItemWishlist = (product: Product) => {
    dispatch(addProductWishlist(product));
  };

  const removeItemWishlist = (code: string) => {
    dispatch(removeProductWishlist(code));
  };

  const toggleWishlistItem = (product: Product) => {
    if (isItemInWishlist(product.code)) {
      removeItemWishlist(product.code);
    } else {
      addItemWishlist(product);
    }
  };

  return {
    wishlist,
    isItemInWishlist,
    hasWishlistItems,
    toggleWishlistItem,
    removeItemWishlist,
  };
};
