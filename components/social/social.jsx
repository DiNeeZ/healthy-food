import Link from 'next/link';
import { Scrollbars } from 'react-custom-scrollbars';

import { SectionWrapper } from '../ui/section-wrapper';
import { social } from '@/data';

import styles from './social.module.scss';

const Social = () => {
  return (
    <SectionWrapper
      title={{
        label: 'We in Social',
        backgroundText: 'social'
      }}>
      <ul className={styles.socials}>
        {social.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className={styles.social}>
              <div className={styles.header}>
                <Link href={item.href} className={styles.logo}>
                  <Icon className={styles.icon} />
                  <span className={styles.logoText}>{item.label}</span>
                </Link>
                <Link href={item.href} className={styles.button}>
                  Follow Us
                </Link>
              </div>
              <Scrollbars style={{ width: '100%', height: '240px' }}>
                <div className={styles.body}>
                  <span className={styles.date}>{item.date}</span>
                  <p className={styles.text}>{item.text}</p>
                  <span className={styles.author}>@{item.author}</span>
                </div>
              </Scrollbars>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Social;
