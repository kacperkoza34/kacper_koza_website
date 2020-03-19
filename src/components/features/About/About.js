import React from 'react';
import styles from './About.module.scss';
import { aboutConfig } from './AboutContainer.js';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.start}/>
      <div className={styles.wrapper}>
        <h1>{aboutConfig.title}</h1>
        <div className={styles.boxWrapper}>
        { aboutConfig.workers.map( ({subtitle, content, button, workersPhoto}) => (
              <div key={workersPhoto} className={styles.box}>
                <div className={styles.photo}>
                  <img src={workersPhoto} alt={'ups'}/>
                </div>
                <div className={styles.text}>
                  <title>{subtitle}</title>
                  <p>{content}</p>
                  <button>{button}</button>
                </div>
              </div>
          ))
        }
        </div>
      </div>
      <div className={styles.end}/>
    </div>
  );
}
export default About;
