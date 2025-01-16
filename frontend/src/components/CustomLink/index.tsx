import { ReactNode } from 'react';
import style from './CustomLink.module.css'
import { Link } from "react-router-dom";

interface CustomLinkProps {
  path: string;
  children: ReactNode;
}

export default function CustomLink({ path, children }: CustomLinkProps) {
  return (
    <Link className={style["link"]} to={path}>
      {children}
    </Link>
  )
}
