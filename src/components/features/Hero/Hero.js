import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.scss';
import { ReactComponent as Animation } from './NewAnimation.svg';
import gsap from 'gsap';

function Hero() {
  const animation = useRef(null);

  useEffect(() => {
    const [elements] = animation.current.children;
    const greenTils = elements.querySelectorAll('.tile');
    const greenTilOnce = elements.querySelectorAll('.tileGroup1');
    const greenTilSecond = elements.querySelectorAll('.tileGroup2');
    const whiteTiles = elements.querySelectorAll('.white');
    const allTilesArr = Array.from(whiteTiles);
    console.log(allTilesArr);
    const animateTiles = () =>  {
      for( let i in  allTilesArr ){
        //console.log(greenTilsHover[i]);
        allTilesArr[i].addEventListener('mouseenter', function(e){
            // console.log(e.target.getBoundingClientRect());
            // console.log(e.target.getBoundingClientRect().right - e.target.getBoundingClientRect().x);

            const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
            gsap.set(this,{ transformStyle:"preserve-3d", transformOrigin:'center center', zIndex:1000});
            tl.to(this, { duration: .2 , fill: '#353b48', y:-8 })
          }
        );

        allTilesArr[i].addEventListener('mouseleave', function(){
            gsap.set(this,{ perspective: 800, transformOrigin:'center center'});
            tl.to(this, { duration: .3, fill: 'white', y:0})
          }
        );
      }
    }
    gsap.set([greenTils, greenTilOnce, greenTilSecond], {zIndex:-22});

    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});

    tl.to(greenTils, { duration: 1, y:-8, fill: 'green', autoAlpha:1, stagger: .5 })
      .to(greenTilOnce, { duration: 1, y:-8, fill: 'green', autoAlpha:1}, '-=2')
      .to(greenTilSecond, { duration: 1, y:-8, fill: 'green', autoAlpha:1}, '-=3');
      //console.log(tl);
      animateTiles();
  },[]);

  return (
    <div className={styles.hero}>
      <title className={styles.title}>
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
