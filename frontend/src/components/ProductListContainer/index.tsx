import type { ReactNode } from "react"
import style from './ProductListContainer.module.css'

interface ProductListContainerProps {
  children: ReactNode
}
export default function ProductListContainer({ children }: ProductListContainerProps) {
  return (
    <div className={style["products-list"]}>{children}</div>
  )
}
