import type{ ReactNode } from "react"
import style from './StrikethroughText.module.css'

interface StrikethroughTextProps {
  children: string | ReactNode
}

export default function StrikethroughText({ children }: StrikethroughTextProps) {
  return (
    <s className={style["text"]}>{children}</s>
  )
}
