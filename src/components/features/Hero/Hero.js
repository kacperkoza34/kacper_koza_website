import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.scss';
import { ReactComponent as Animation } from './Animation.svg';
import gsap from 'gsap';

function Hero() {
  const animation = useRef(null);
  const title = useRef(null);
  const laser = useRef(null);

  useEffect(() => {
    const [elements] = animation.current.children;
    const titleAnimation = title.current.children;

    const sticks = elements.querySelectorAll('.stick');
    const startSticks = elements.querySelectorAll('.stickStart');
    const bulbs = elements.querySelectorAll('.bulb');
    const background = elements.querySelectorAll('.background');
    const clouds = elements.querySelectorAll('.cloud');

    gsap.set([sticks, startSticks, titleAnimation], { autoAlpha: 0});
    gsap.set([background], { fill: '#222f3e' ,autoAlpha: 0});
    gsap.set(bulbs, { fill: 'green', autoAlpha: 0});
    gsap.set(clouds, { fill: 'grey'});

    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    const tl_2 = gsap.timeline();

    tl.fromTo(startSticks, { scaleY: 0,   transformOrigin: '100% 0%'},{duration: 1 ,scaleY: 1, autoAlpha:1})
      .fromTo(sticks, { scaleY: 0,   transformOrigin: '100% 0%'},{duration: 1 ,scaleY: 1, autoAlpha:1}, '-=0.5')
      .to([bulbs, background], {duration: .3, autoAlpha: 1})
      .to([bulbs, background], {duration: .2, autoAlpha: 0})
      .to([bulbs, background], {duration: .1, autoAlpha: 1})
      .to([bulbs, background], {duration: .2, autoAlpha: 0})
      .to([bulbs, background], {duration: .1, autoAlpha: 1})
      .to([bulbs, background], {duration: .2, autoAlpha: 0})
      .to([bulbs, background], {duration: .4, autoAlpha: 1})
      .to([bulbs, background], {duration: .8, autoAlpha: 1})
      .fromTo(titleAnimation, { }, {duration: .8, autoAlpha: 1}, '-=1.2')

  },[]);

  return (
    <div className={styles.hero}>
      <title ref={title} className={styles.title}>
        <h1>PEKSON - WEB DEVELOPER COŚ TAM COŚ TAM</h1>
        <button>SKONTAKTUJ SIĘ</button>
      </title>
      <div ref={animation} className={styles.animation}>
        <Animation/>
      </div>
    </div>
  );
}

export default Hero;
