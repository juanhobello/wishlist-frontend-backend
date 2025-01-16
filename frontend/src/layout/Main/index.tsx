import type { ReactNode } from 'react';
import style from './main.module.css'

interface MainProps {
  children: ReactNode;
}
export default function Main({ children }: MainProps) {
  return (
    <main className={style["main"]}>
      <div className={style["main-content"]}>{children}</div>
    </main>
  )
}
