import { BreadcrumbItem, Breadcrumbs, Divider, HeartButton, ProductCard } from "@/components";
import { useWishlist } from "@/hooks";
import { useGetProductsQuery } from "@/redux/services";
import style from './Home.module.css'

export default function Home() {
  const { data } = useGetProductsQuery()
  const { isItemInWishlist, toggleWishlistItem } = useWishlist()

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem path="/">Home</BreadcrumbItem>
      </Breadcrumbs>
      <Divider />
      <div className={style['products-list']}>
        {data?.map(product =>
          <ProductCard
            product={product}
            key={product.code}
            floatButton={
              <HeartButton onClick={() => toggleWishlistItem(product)} isActive={isItemInWishlist(product.code)} aria-label={`like-button-${product.code}`} />}
          />
      )}
      </div>
    </>
  )
}
