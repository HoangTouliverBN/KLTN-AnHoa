import React from 'react';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import Section6 from './section6/section6';
import Section7 from './section7/section7';
import Section8 from './section8/section8';
import Section9 from './section9/section9';

const Home = () => {
  // Section2

  return (
    <div className="container-home">
      <div className="SlideShow1">{Section1()}</div>
      <div className="SlideShow2">{Section2()}</div>
      <div className="SlideShow3">{Section3()}</div>
      <div className="SlideShow4">{Section4()}</div>
      <div className="SlideShow5">{Section5()}</div>
      <div className="SlideShow6">{Section6()}</div>
      <div className="SlideShow7">{Section7()}</div>
      <div className="SlideShow8">{Section8()}</div>
      <div className="SlideShow9">{Section9()}</div>
    </div>
  );
};

export default Home;
