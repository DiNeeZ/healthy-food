import Image from 'next/image';

import { SectionWrapper } from '../ui/section-wrapper';

import { chefs } from '@/data';
import styles from './chefs.module.scss';

const Chefs = () => {
  return (
    <SectionWrapper
      title={{
        label: "This Month's Chefs",
        backgroundText: 'chefs'
      }}>
      <ul className={styles.wrapper}>
        {chefs.map((chef) => {
          return (
            <li key={chef.id} className={styles.container}>
              <div className={styles.chef}>
                <Image
                  src={chef.imgUrl}
                  alt={chef.name}
                  width='0'
                  height='0'
                  sizes='100vw'
                  style={{ width: '4rem', height: '4rem' }}
                  className={styles.chefImage}
                />
                <div>
                  <h3 className={styles.title}>{chef.name}</h3>
                  <p className={styles.position}>{chef.position}</p>
                </div>
              </div>
              <div className={styles.dishes}>
                {chef.dishes.map((dish, idx) => (
                  <Image
                    key={`chef-dish-img-${idx + 1}`}
                    src={dish}
                    alt='chef dish'
                    width='0'
                    height='0'
                    sizes='100vw'
                    style={{ width: '100%', height: '65px' }}
                    className={styles.dishImg}
                  />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Chefs;
