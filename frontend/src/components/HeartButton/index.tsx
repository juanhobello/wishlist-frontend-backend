import { FiHeart } from 'react-icons/fi'
import { useEffect, useRef, type ButtonHTMLAttributes } from 'react'
import style from './HeartButton.module.css'

interface HeartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
}

export default function HeartButton({ isActive, ...rest }: HeartButtonProps) {
  const heartBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!heartBtnRef.current) return

    heartBtnRef.current.addEventListener('click', () => {
      heartBtnRef.current?.classList.add(style['liked']);

      setTimeout(() => {
        heartBtnRef.current?.classList.remove(style['liked']);
      }, 200);
    });

  }, [isActive])

  return (
    <button
      ref={heartBtnRef}
      {...rest}
      className={`${style["heart-button"]}`}
      style={{ backgroundColor: isActive ? 'var(--heart-color)' : 'var(--gray-500)' }}
    >
      <FiHeart fontSize={20} />
    </button>
  )
}
