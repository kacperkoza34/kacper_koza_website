import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.start}/>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.text}>
            <title>
              <h2>O mnie</h2>
            </title>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. re unknown printer to
            </p>
          </div>
          <div className={styles.photo}>
            <img src={'https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt={'ups'}/>
          </div>
        </div>
      </div>
      <div className={styles.end}/>
    </div>
  );
}
export default About;
