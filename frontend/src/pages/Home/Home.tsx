import { BreadcrumbItem, Breadcrumbs, Divider, HeartButton, ProductCard, ProductListContainer } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux";
import { useGetProductsQuery } from "@/redux/services";
import { addProductWishlist, removeProductWishlist } from "@/redux/slices";
import { Product } from "@/redux/types";

export default function Home() {
  const { data } = useGetProductsQuery()
  const dispatch = useAppDispatch()
  const wishlist = useAppSelector(state => state.wishlist);
  const wishlistCodes = wishlist.map(product => product.code);

  const isItemInWishlist = (code: string) => wishlistCodes.includes(code);

  const toggleWishlistItem = (product: Product) => {
    if (isItemInWishlist(product.code)) {
      return dispatch(removeProductWishlist(product.code))
    }

    return dispatch(addProductWishlist(product))
  }


  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem path="/">Home</BreadcrumbItem>
      </Breadcrumbs>
      <Divider />
      <ProductListContainer>
        {data?.map(product =>
          <ProductCard
            product={product}
            key={product.code}
            floatButton={
              <HeartButton onClick={() => toggleWishlistItem(product)} isActive={isItemInWishlist(product.code)} />}
          />
      )}
      </ProductListContainer>
    </>
  )
}
