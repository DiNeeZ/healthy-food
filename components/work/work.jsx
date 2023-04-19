import { SectionWrapper } from '../ui/section-wrapper';
import styles from './work.module.scss';

const Work = () => {
  return (
    <SectionWrapper
      title={{
        label: 'How It Works',
        backgroundText: 'work'
      }}>
      <div>Work</div>
    </SectionWrapper>
  );
};

export default Work;
