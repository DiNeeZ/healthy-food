import { SectionWrapper } from '../ui/section-wrapper';
import styles from './chefs.module.scss';

const Chefs = () => {
  return (
    <SectionWrapper
      title={{
        label: "This Month's Chefs",
        backgroundText: 'chefs'
      }}>
      <div>chefs</div>
    </SectionWrapper>
  );
};

export default Chefs;
