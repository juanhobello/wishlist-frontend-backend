import { useEffect } from "react";
import type { RefObject } from "react";

export default function useClickOutside(
  elementRef: RefObject<HTMLElement>,
  callback: VoidFunction
) {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elementRef, callback]);
}
