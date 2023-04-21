import Link from 'next/link';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { SectionWrapper } from '../ui/section-wrapper';
import { social } from '@/data';

import 'overlayscrollbars/overlayscrollbars.css';
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
                  <div className={styles.iconWrapper}>
                    <Icon size={18} className={styles.icon} />
                  </div>
                  <span className={styles.logoText}>{item.label}</span>
                </Link>
                <Link href={item.href} className={styles.button}>
                  Follow Us
                </Link>
              </div>
              <OverlayScrollbarsComponent
                element='div'
                options={{ scrollbars: { autoHide: 'never', theme: 'os-theme-light' } }}
                className={styles.body}
                defer>
                <span className={styles.date}>{item.date}</span>
                <p className={styles.text}>{item.text}</p>
                <span className={styles.author}>@{item.author}</span>
              </OverlayScrollbarsComponent>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Social;
