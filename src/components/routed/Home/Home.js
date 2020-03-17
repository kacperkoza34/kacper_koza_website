import React from 'react';
import Hero from '../../features/Hero/Hero';
import About from '../../features/About/About';
import Services from '../../features/Services/Services';
import Technology from '../../features/Technology/Technology';

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Technology/>
    </div>
  );
}

export default Home;
