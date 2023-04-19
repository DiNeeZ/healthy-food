import { SectionWrapper } from '../ui/section-wrapper';
import styles from './dishes.module.scss';

const Dishes = () => {
  return (
    <SectionWrapper
      title={{
        label: 'Dish Of The Day',
        backgroundText: 'dishes'
      }}>
      <div>dishes</div>
    </SectionWrapper>
  );
};

export default Dishes;
