import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      <Image src='/logo.svg' width={25} height={24} alt='logo' className={styles.icon} />
      <Image
        src='/logo-text.svg'
        width={173}
        height={10}
        alt='healthy switcher'
        className={styles.text}
      />
    </Link>
  );
};

export default Logo;
