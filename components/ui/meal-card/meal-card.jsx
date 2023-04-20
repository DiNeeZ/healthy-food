import Image from 'next/image';
import { Button } from '../button';
import { StarRating } from '../star-rating';

import styles from './meal-card.module.scss';

const MealCard = ({ meal }) => {
  return (
    <article className={styles.card}>
      <Image src={meal.imgUrl} width={350} height={260} alt={meal.label} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{meal.label}</h3>
        <p className={styles.subtitle}>{meal.details}</p>
        <p className={styles.descr}>{meal.choice}</p>
        <div className={styles.footer}>
          <StarRating stars={meal.rating} />
          <Button href='/'>Order</Button>
        </div>
      </div>
    </article>
  );
};

export default MealCard;
