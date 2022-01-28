/**
 * RealPlay
 */

import React from 'react';
import Button from '../../../components/Button';

// component
import SectionVideo from '../../../components/SectionVideo';

// style
import './RealPlay.scss';

const RealPlay = () => {
  return (
    <section className="realplay-container">
      <div className="realplay-container-detail">
        <SectionVideo
          xsVideo={7}
          xsDetail={5}
          preView="https://videos.playosmo.com/homepage/2020/home-2020-hero-loop-desktop-light-2.mp4"
          shadowColor="#be181e"
        >
          <SectionVideo.Title>
            <h1>
              Real Play,
              <br />
              Real Learning
            </h1>
          </SectionVideo.Title>
          <SectionVideo.SubTitle content="Use tangible pieces to create a unique, hands-on learning experience.">
            <Button type="secondary" textColor="#ea3729">
              Shop Now
            </Button>
          </SectionVideo.SubTitle>
        </SectionVideo>
      </div>
      <div
        className="realplay-img-bottom"
        style={{
          backgroundImage:
            'url(https://images.playosmo.com/homepage/2019/hero/dt-hero-landscape@2x.png?fit=clip&auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=1075&h=173)',
        }}
      ></div>
      <div
        className="realplay-img-planet"
        style={{
          backgroundImage:
            'url(https://images.playosmo.com/homepage/2019/hero/planet-sized.png?fit=clip&auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=100&h=1019)',
        }}
      ></div>
      <div
        className="realplay-img-planet-rings"
        style={{
          backgroundImage:
            'url(https://images.playosmo.com/homepage/2019/hero/planet-rings-sized.png?fit=clip&auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=100&h=668)',
        }}
      ></div>
    </section>
  );
};

export default RealPlay;
