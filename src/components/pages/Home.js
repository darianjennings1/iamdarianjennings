import React from 'react';
import '../../App.css';
import HeroSection from '../heroSection';
import Cards from '../Cards';
import Scroll2Top from '../scroll';


export default function Home() {
  window.location.reload(true);
  return (
    <>
      <Scroll2Top></Scroll2Top>
      <HeroSection/>
      <Cards/>
    </>
  );
}
