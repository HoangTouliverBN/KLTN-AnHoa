import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from 'react';
import './HowAstroWork.scss';
// import SectionVideo from '../../../components/SectionVideo/SectionVideo';
import Button from '../../../components/Button';
import ipad from '../../../../../public/images/ipad-logo.svg';
import fire from '../../../../../public/images/fire-logo.svg';

const preView = 'https://videos.playosmo.com/homepage/homepageMWLaunch.webm';
const data = [
  {
    id: 1,
    title: 'Place your tablet in the Osmo Base.',
  },
  {
    id: 2,
    title: 'Secure the reflector over the camera.',
  },
  {
    id: 3,
    title: 'Use physical game pieces to play digital games — draw, code, spell, and more!',
  },
];

const HowAstroWork = () => {
  const [count, setCount] = useState(1);
  useInterval(() => {
    // Your custom logic here

    if (count > 0 && count < data.length) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  }, 5000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  return (
    <div className="how-astro-work">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="align-items-center" xl="4">
            <div className="mask">
              <div className="mask-behind">
                <video
                  preload="auto"
                  loop
                  width="auto"
                  height="436px"
                  playsInline
                  autoPlay={true}
                  id="section-myVideo"
                >
                  <source src={preView} type="video/mp4"></source>
                </video>
              </div>
              <div className='mask-shadow'></div>
            </div>
          </Col>

          <Col className="align-items-center col-left" xl="6">
            <h1 className="title">How Osmo works</h1>
            {data.map((item, index) => {
              return (
                <Container key={index} className="in-container">
                  <Row className="align-items-center">
                    <Col xs="auto" md="auto">
                      <p
                        className={[item.id === count ? 'disable' : '', 'text-as'].join(' ').trim()}
                      >
                        {item.id}
                      </p>
                    </Col>

                    <Col xs="11" md="11">
                      <span
                        className={[item.id === count ? 'disable' : '', 'span'].join(' ').trim()}
                      >
                        {' '}
                        {item.title}
                      </span>
                    </Col>
                  </Row>
                </Container>
              );
            })}
          </Col>
        </Row>
        <Row className="justify-content-md-center ">
          <Col className="align-items-center content">
            <h3>Compatible with:</h3>
            <div className="mid">
              <a src="#ipad">
                <img src={ipad}></img>
              </a>
              <a src="#fire">
                <img src={fire}></img>
              </a>
            </div>
            <Button className="btn-view">View Compatible Models</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowAstroWork;
