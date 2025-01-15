import type { ReactNode } from 'react';
import style from './main.module.css'

interface MainProps {
  children: ReactNode;
}
export default function Main({ children }: MainProps) {
  return (
    <div className={style["main"]}>{children}</div>
  )
}
