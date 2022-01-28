import React from 'react';
import Sections from './Sections';
import cookie from 'react-cookies'

const Home = () => {
  console.log("home",cookie.load('token'))
  return (
    <div className="home">
      <Sections />
    </div>
  );
};

export default Home;
