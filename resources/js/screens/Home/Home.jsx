import React from 'react';
import cookie from 'react-cookies'

const Home = () => {
  console.log("home",cookie.load('token'))
  return (
    <div className="home">
      hello
    </div>
  );
};

export default Home;
