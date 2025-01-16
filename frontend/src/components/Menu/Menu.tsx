import ReactDOM from 'react-dom';
import { useRef, type ReactNode } from "react"
import style from './Menu.module.css'
import { useClickOutside } from '@/hooks';

interface MenuProps {
  open: boolean
  archorEl: HTMLElement | null
  children: ReactNode
  onClose: () => void
}

export default function Menu({ archorEl, open, children, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => { if (open) onClose() });
  if (!open) return;

  const currentTarget = archorEl ? archorEl.getBoundingClientRect() : null;

  if (!currentTarget) return

  const { x, y, width, height } = currentTarget


  return ReactDOM.createPortal(
    <div
      style={{
        left: `${x - width * 2}px`,
        top: `${y + height}px`,
      }}
      className={style["menu"]}
      ref={menuRef}
    >
      <ul>
        {children}
      </ul>
    </div>,
    document.body
  )
}
