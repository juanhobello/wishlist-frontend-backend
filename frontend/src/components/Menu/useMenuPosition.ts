import { useEffect } from "react";
import type { RefObject } from "react";

export default function useMenuPosition(
  menuRef: RefObject<HTMLDivElement> | null,
  triggerEl: HTMLElement | null,
  open: boolean
) {
  useEffect(() => {
    if (menuRef?.current && triggerEl && open) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const triggerRect = triggerEl.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      const left = Math.min(
        triggerRect.right - menuRect.width,
        windowWidth - menuRect.width
      );

      const top = triggerRect.y + triggerRect.height + 15;

      menuRef.current.style.left = `${left}px`;
      menuRef.current.style.top = `${top}px`;
    }
  }, [menuRef, triggerEl, open]);
}
