import { IoStar, IoStarOutline, IoStarHalfOutline } from 'react-icons/io5';

import styles from './star-rating.module.scss';

const StarRating = ({ stars }) => {
  return (
    <span className={`${styles.stars}`}>
      {[1, 2, 3, 4, 5].map((value) => {
        const IsHalfStar =
          !Number.isInteger(stars) && Math.ceil(stars) === value
            ? IoStarHalfOutline
            : IoStarOutline;

        if (value <= stars) {
          return <IoStar size={20} key={value} className={styles.star} />;
        }

        if (value > stars) {
          return <IsHalfStar size={20} key={value} className={styles.star} />;
        }
      })}
    </span>
  );
};

export default StarRating;
