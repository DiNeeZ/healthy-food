import React from 'react';

import { info } from '../../../data';
import styles from './info.module.scss';

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

const InfoItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <>
      <Icon className={styles.icon} />
      {renderElement(item.type, item.label)}
      <small>{item.sub}</small>
    </>
  );
};

const Info = () => {
  return (
    <ul className={styles.info}>
      {info.map((item) => (
        <li key={item.id} className={styles.item}>
          <InfoItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Info;
