import React, { useEffect, useRef } from 'react';
import styles from './Services.module.scss';
import gsap from 'gsap';

const AnimateDescription = (props) => {
  const animation = useRef(null);
  const { id } = props;
  useEffect(() => {
    const [element] = animation.current.children;

    gsap.set(element, {autoAlpha: 0});
    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    tl.fromTo(element,{scaleY:0, autoAlpha: 0}, {duration: .5, scaleY:1 ,autoAlpha: 1});

  },[id]);
  return(
    <div ref={animation} className={styles.description}>
      <div>{props.active}</div>
    </div>
  );
};

export default AnimateDescription;
