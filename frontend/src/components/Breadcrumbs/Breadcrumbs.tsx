import type { ReactNode } from 'react';
import style from './Breadcrumbs.module.css'

interface BreadcrumbsProps {
  children: ReactNode;
}

export default function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <ol className={style['breadcrumbs-list']}>
      {children}
    </ol>
  )
}
