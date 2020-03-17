import React, { useEffect, useRef } from 'react';
import styles from './Services.module.scss';
import gsap from 'gsap';

const AnimateDescription = (props) => {
    const animation = useRef(null);

    useEffect(() => {
      console.log(props.active);
      const [element] = animation.current.children;
      gsap.set(element, {x:'0', autoAlpha: 0});
      const time = props.id == 'default'? 4 : 1;

      const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});


      tl.fromTo(element,{scaleY:0}, {duration: time, scaleY:1 ,autoAlpha: 1});

    },[props]);

  return(
    <div ref={animation} className={styles.description}>
      <div>{props.active}</div>
    </div>
  );
};

export default AnimateDescription;
