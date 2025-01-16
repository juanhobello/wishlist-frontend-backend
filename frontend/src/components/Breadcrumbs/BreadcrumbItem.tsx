import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from './Breadcrumbs.module.css'

interface BreadcrumbItemProps {
  path: string;
  children: ReactNode;
}

export default function BreadcrumbItem({ path, children }: BreadcrumbItemProps) {
  return (
    <li>
      <Link to={path} className={style['breadcrumbs-link']}>{children}</Link>
    </li>
  )
}
