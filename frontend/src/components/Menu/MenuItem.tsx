import type { ReactNode } from "react"
import style from "./Menu.module.css"

interface MenuItemProps {
  onClick?: VoidFunction
  children: ReactNode
}

export default function MenuItem({ onClick, children }: MenuItemProps) {
  return (
    <li onClick={onClick} className={style["menu-item"]} role='menuitem'>{children}</li>
  )
}

