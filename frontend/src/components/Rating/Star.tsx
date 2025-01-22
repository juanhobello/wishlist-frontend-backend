interface StarProps {
  percentage: number;
}

export default function Star({ percentage }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      role='img'
      aria-label='Star'
    >
      <defs>
        <linearGradient id={`grad-${percentage}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset={`${percentage}%`}
            style={{ stopColor: 'var(--star-color)', stopOpacity: 1 }}
          />
          <stop
            offset={`${percentage}%`}
            style={{ stopColor: 'var(--gray-300)', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad-${percentage})`}
        d="M8 .192l1.889 5.812h6.111l-4.944 3.594 1.889 5.813-4.944-3.594-4.944 3.594 1.889-5.813-4.944-3.594h6.111z"
      />
    </svg>
  )
}
