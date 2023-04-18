import { Roboto } from 'next/font/google'

import Button from '../ui/button/button';
import styles from './hero.module.scss';
import Info from '../ui/info/info';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300']
})

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1 className={styles.title}>
              <span className={roboto.className}>Your</span> favourite food <span className={roboto.className}>Delivered</span> hot & fresh
            </h1>
            <p className={styles.subtitle}>
              HEALTHY SWITCHER chefs do all the prep work, like peeling,
              chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.
            </p>
          </div>
          <Button href='/'>Order Now</Button>
        </div>
        <div className={styles.info}>
          <Info />
        </div>
      </div>
    </section>
  );
};

export default Hero;
