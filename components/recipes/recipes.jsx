import { SectionWrapper } from '../ui/section-wrapper';
import styles from './recipes.module.scss';

const Recipes = () => {
  return (
    <SectionWrapper
      title={{
        label: 'Recipes From Our Chefs',
        backgroundText: 'recipes'
      }}>
      <div>recipes</div>
    </SectionWrapper>
  );
};

export default Recipes;
