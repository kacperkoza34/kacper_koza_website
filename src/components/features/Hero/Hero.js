import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.scss';
import { ReactComponent as Icon } from './Icon.svg';
import gsap from 'gsap';

function Hero() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const message1 = elements.querySelectorAll('.message1');
    const message2 = elements.querySelectorAll('.message2');
    const message3 = elements.querySelectorAll('.message3');

    const textM1 = elements.querySelectorAll('.text1');
    const textM2 = elements.querySelectorAll('.text2');
    const textM3 = elements.querySelectorAll('.text3');

    gsap.set([message1, message2, message3, textM1, textM2, textM3], {autoAlpha: 0});

    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});

    tl.fromTo(message1, { scaleX: 0},{duration: 1 ,scaleX: 1, autoAlpha:1})
      .fromTo(textM1, { scaleX: 0},{duration: 0.5 ,scaleX: 1, autoAlpha:1})
      .fromTo(message2, { scaleX: 0,   transformOrigin: '100% 50%'},{duration: 1 ,scaleX: 1, autoAlpha:1})
      .fromTo(textM2, { scaleX: 0},{duration: 0.5 ,scaleX: 1, autoAlpha:1})
      .fromTo(message3, { scaleX: 0},{duration: 1 ,scaleX: 1, autoAlpha:1})
      .fromTo(textM3, { scaleX: 0},{duration: 0.5 ,scaleX: 1, autoAlpha:1});
  });

  return (
    <div className={styles.hero}>
      <div ref={wrapper} className={styles.wrapper}>
        <Icon/>
      </div>
    </div>
  );
}

export default Hero;
