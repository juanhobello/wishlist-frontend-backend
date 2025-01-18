import { BreadcrumbItem, Breadcrumbs, Divider, ProductCard, ProductListContainer } from "@/components";
import { FiHeart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useWishlist } from "@/hooks";
import styles from './Wishlist.module.css'

export default function Wishlist() {
  const { wishlist, hasWishlistItems, removeItemWishlist } = useWishlist()

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem path="/">Home</BreadcrumbItem>
        <BreadcrumbItem path="/wishlist">Wishlist</BreadcrumbItem>
      </Breadcrumbs>
      <Divider />

      {!hasWishlistItems &&
        <div className={styles["empty-wishlist-container"]}>
          <FiHeart fontSize={30} />
          <p className={styles["empty-wishlist"]}>Você ainda não possui itens salvos na sua Lista de Desejos.</p>
        </div>
      }

      {hasWishlistItems &&
        <ProductListContainer>
          {wishlist?.map(product =>
            <ProductCard
              key={product.code}
              product={product}
              floatButton={<span style={{ cursor: 'pointer' }} onClick={() => removeItemWishlist(product.code)}><IoMdClose /></span>}
            />
          )}
        </ProductListContainer>
      }
    </>
  )
}
