/**
 * SchoolAstro
 */

import React from 'react';

import Button from '../../../components/Button';
import SectionVideo from '../../../components/SectionVideo/SectionVideo';

import './SchoolAstro.scss';

const SchoolAstro = () => {
  return (
    <SectionVideo
      className="school-astro"
      linkVideo="https://www.youtube.com/embed/zEsJwwdq4r8"
      rowReverse={true}
      shadowColor={'rgb(190, 24, 30)'}
      // poster={hero}
      preView=""
      showButtoncontrols={false}
      poster={require('../../../../../public/images/schools-hero.jpg').default}
    >
      <SectionVideo.Title className="h1">
        <h1>
          {' '}
          Schools <span className="heart"></span>Osmo{' '}
        </h1>
      </SectionVideo.Title>
      <SectionVideo.SubTitle
        className="p"
        content="Kids learn more when lessons are hands-on. That’s why teachers in more than 50,000 classrooms use Osmo for learning."
      >
        <Button className="btn-5">Get Osmo for Schools</Button>
      </SectionVideo.SubTitle>
    </SectionVideo>
  );
};

export default SchoolAstro;
