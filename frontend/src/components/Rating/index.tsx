import styles from './Rating.module.css';
import Star from './Star';

interface RatingProps {
  rating: number
}

export default function Rating({ rating }: RatingProps) {

  const stars = Array.from({ length: 5 }, (_, i) => {
    const percentage = Math.min(Math.max(rating - i, 0), 1) * 100;
    return <Star key={i} percentage={percentage} />;
  });

  return (
    <div className={styles.rating}>
      {stars}
      <p>{rating.toFixed(1)}</p>
    </div>
  )
}

