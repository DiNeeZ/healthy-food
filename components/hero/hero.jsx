import Image from 'next/image';

import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* <Image
        src='/images/hero-bg.jpg'
        width={1440}
        height={1080}
        alt='background'
        aria-hidden={true}
        className={styles.background}
      /> */}
    </section>
  );
};

export default Hero;
