import Logo from '../ui/logo/logo';

import { footerInfoItems } from '@/data';
import styles from './footer.module.scss';
import Info from '../ui/info/info';

const renderElement = (type, value) => {
  switch (type) {
    case 'text':
      return <div className={styles.label}>{value}</div>;

    case 'address':
      return <address className={styles.label}>{value}</address>;
    case 'tel':
      const regex = /[()\s]/g;
      return (
        <a href={`tel:${value.replace(regex, '')}`} className={styles.label}>
          {value}
        </a>
      );

    default:
      break;
  }
};

const FooterInfoItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <>
      <Icon />
      {renderElement(item.type, item.label)}
      <small>{item.sub}</small>
    </>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Info />
      </div>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.bottom}>
          <Logo />
          <p className={styles.copy}>© Designed by a Good Man. Maybee All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
