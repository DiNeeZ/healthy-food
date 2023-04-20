import { SectionWrapper } from '../ui/section-wrapper';

import { workflow } from '@/data';
import styles from './work.module.scss';

const Work = () => {
  return (
    <SectionWrapper
      title={{
        label: 'How It Works',
        backgroundText: 'work'
      }}>
      <ul className={styles.work}>
        {workflow.map((cardItem) => {
          return (
            <li key={cardItem.id} className={styles.item}>
              <h3 className={styles.title}>{cardItem.label}</h3>
              <p className={styles.text}>{cardItem.text}</p>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Work;
