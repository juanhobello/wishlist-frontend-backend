import { Rating, StrikethroughText } from "@/components"
import type { ReactNode } from "react"
import styles from "./ProductCard.module.css"
import { Product } from "@/redux/types"
import { formatPrice } from "@/utils"

interface ProductCardProps {
  product: Product
  floatButton?: ReactNode
}
export default function ProductCard({ product, floatButton }: ProductCardProps) {
  return (
    <div className={styles["product-card"]}>
      {!!floatButton && <span className={styles["float-button"]}>{floatButton}</span>}

      <img src={product.image} className={styles["img"]} alt={product.name} />
     
      <div className={styles["title-product"]}>
        <p>{product.name}</p>
      </div>
     
      <Rating rating={product.rating} />

      <StrikethroughText>{formatPrice(Number(product.fullPriceInCents))}</StrikethroughText>

      <span className={styles["price"]}>
        {formatPrice(Number(product.salePriceInCents))}
      </span>
    </div>
  )
}
