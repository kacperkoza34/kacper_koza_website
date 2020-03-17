import React from 'react';
import Hero from '../../features/Hero/Hero';
import About from '../../features/About/About';
import Technology from '../../features/Technology/Technology';

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Technology/>
    </div>
  );
}

export default Home;
