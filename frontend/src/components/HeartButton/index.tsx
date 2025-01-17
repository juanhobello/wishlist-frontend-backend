import { FiHeart } from 'react-icons/fi'
import type { ButtonHTMLAttributes } from 'react'
import style from './HeartButton.module.css'

interface HeartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
}

export default function HeartButton({ isActive, ...rest }: HeartButtonProps) {
  return (
    <button
      {...rest}
      className={`${style["heart-button"]} ${isActive ? style[".selected"] : ''}`}
      style={{ backgroundColor: isActive ? 'var(--heart-color)' : 'var(--gray-500)' }}
    >
      <FiHeart fontSize={20} />
    </button>
  )
}
