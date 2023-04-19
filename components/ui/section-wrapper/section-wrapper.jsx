import styles from './section-wrapper.module.scss';

const SectionWrapper = ({ children, title, topover }) => (
  <section className={topover && styles.topover}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title.label}</h2>
        <p className={styles.subtitle}>{title.backgroundText}</p>
      </div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
