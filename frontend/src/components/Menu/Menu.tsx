import ReactDOM from 'react-dom';
import { useRef } from "react"
import type { ReactNode } from "react"
import { useClickOutside } from '@/hooks';
import useMenuPosition from './useMenuPosition';
import style from './Menu.module.css'

interface MenuProps {
  open: boolean
  archorEl: HTMLElement | null
  children: ReactNode
  onClose: () => void
}

export default function Menu({ archorEl, open, children, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => { if (open) onClose() });
  useMenuPosition(menuRef, archorEl, open)

  if (!open || !archorEl) return;

  return ReactDOM.createPortal(
    <>
      <div
        className={style["menu"]}
        ref={menuRef}
      >
        <ul>
          {children}
        </ul>
      </div>
    </>,
    document.body
  )
}
