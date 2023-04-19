import { SectionWrapper } from '../ui/section-wrapper';
import { Slider } from '../ui/slider';
import { slider } from '@/data';

import styles from './about.module.scss';

const About = () => {
  return (
    <SectionWrapper
      title={{
        label: 'The Basics Of Healthy Food',
        backgroundText: 'about'
      }}
      topover>
      <div className={styles.about}>
        <p className={styles.descr}>
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip
          consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse
          aliquip.
        </p>
        <div className={styles.slider}>
          <Slider slides={slider} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
