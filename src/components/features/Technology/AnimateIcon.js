import React, { useEffect, useRef } from 'react';
import styles from './Technology.module.scss';
import gsap from 'gsap';
import { ReactComponent as Icon } from './Icon.svg';
import TrackVisibility from 'react-on-screen';

const AnimateIcon = (props) => {


  const start = () => {


    gsap.set([...<Icon/>], {autoAlpha: 0});
    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    tl.fromTo([...<Icon/>],{scaleY:0, autoAlpha: 0}, {duration: .5, scaleY:1 ,autoAlpha: 1});
    return <Icon/>
  };
  return(
    <TrackVisibility offset={1000}>
      {({ isVisible }) => isVisible ? start() : ''}
    </TrackVisibility>
  );
};

export default AnimateIcon;
