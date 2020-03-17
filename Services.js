import React from 'react';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.wrapper}>
        <title><h2>Co moge dla Ciebie zrobić?</h2></title>
        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <img src={''} alt={'ups'} />
          </div>
          <div className={styles.icon}>

          </div>
          <div className={styles.icon}>

          </div>
          <div className={styles.icon}>

          </div>
        </div>
        <div className={styles.description}>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </div>
      </div>
    </div>
  );
}
export default Services;
