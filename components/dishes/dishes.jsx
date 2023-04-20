import { SectionWrapper } from '../ui/section-wrapper';

import { MealCard } from '../ui/meal-card';

import { dishes } from '@/data';
import styles from './dishes.module.scss';

const Dishes = () => {
  return (
    <SectionWrapper
      title={{
        label: 'Dish Of The Day',
        backgroundText: 'dishes'
      }}>
      <div className={styles.dishes}>
        {dishes.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Dishes;
