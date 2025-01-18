import { BreadcrumbItem, Breadcrumbs, Divider, HeartButton, ProductCard, ProductListContainer } from "@/components";
import { useWishlist } from "@/hooks";
import { useGetProductsQuery } from "@/redux/services";

export default function Home() {
  const { data } = useGetProductsQuery()
  const { isItemInWishlist, toggleWishlistItem } = useWishlist()

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
