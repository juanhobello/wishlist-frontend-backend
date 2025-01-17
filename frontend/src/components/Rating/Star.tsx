interface StarProps {
  percentage: number;
}

export default function Star({ percentage }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id={`grad-${percentage}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${percentage}%`} style={{ stopColor: 'var(--star-color)', stopOpacity: 1 }} />
          <stop offset={`${percentage}%`} style={{ stopColor: 'var(--gray-300)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path fill={`url(#grad-${percentage})`} d="M12 .288l2.833 8.718h9.167l-7.417 5.391 2.833 8.719-7.416-5.391-7.417 5.391 2.833-8.719-7.417-5.391h9.167z" />
    </svg>
  )
}
