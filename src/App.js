import React from 'react'
import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';
import SliderWrap from '../src/components/Slider/SliderWrap';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      {/* <Cloud /> */}
      <SliderWrap/>
      <Footer />
    </>
  );
}

export default App;
