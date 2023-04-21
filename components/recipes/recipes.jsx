import Image from 'next/image';
import { AiFillEye } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';

import { SectionWrapper } from '../ui/section-wrapper';
import { ButtonLink } from '../ui/button-link';

import { recipes } from '@/data';
import styles from './recipes.module.scss';

const getDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return date.toLocaleDateString('en-US', options);
};

const Recipes = () => {
  return (
    <SectionWrapper
      title={{
        label: 'Recipes From Our Chefs',
        backgroundText: 'recipes'
      }}>
      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <article key={`${recipe.chef}-${recipe.tag}`} className={styles.card}>
            <ButtonLink
              href='/'
              style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', zIndex: 3 }}
              className={styles.link}
            />
            <Image
              src={recipe.bgImg}
              width={540}
              height={510}
              alt={recipe.tag}
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.top}>
                <div className={styles.badge}>{recipe.tag}</div>
                <div className={styles.date}>{getDate(recipe.date)}</div>
              </div>
              <p className={styles.text}>{recipe.text}</p>
              <div className={styles.bottom}>
                <div className={styles.chef}>{recipe.chef}</div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <AiFillEye size={26} />
                    <span>{recipe.views}</span>
                  </div>
                  <div className={styles.icon}>
                    <FaComments size={26} />
                    <span>{recipe.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Recipes;
