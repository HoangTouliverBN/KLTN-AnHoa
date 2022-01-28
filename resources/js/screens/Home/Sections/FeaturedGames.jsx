/**
 * OrderAstro
 */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Container, Col, Row, Card } from 'react-bootstrap';
import Button from '../../../components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './FeaturedGames.scss';

const FeaturedGames = () => {
  SwiperCore.use([Pagination, Navigation]);

  const Detective = () => {
    return (
      <div className="feature-main">
        <div className="feature-grid"></div>
        <Row className="feature-middle align-items-center">
          <Col xs={6}>
            <div className="feature-product-detective"></div>
          </Col>
          <Col xs={6}>
            <div className="feature-title">
              <div className="feature-lazyload-wraper">
                <img
                  width="400px"
                  height="100%"
                  src="https://images.playosmo.com/homepage/2019/featured/detective/logo-detective-agency@2x.png?auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=400&h=162&q=50"
                ></img>
              </div>
            </div>
            <div className="feature-container-action">
              <p>Solve mysteries around the world!</p>
              <div>
                <Button type="secondary" textColor="#ab699d" className="feature-button">
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const SuperStudio = () => {
    return (
      <div className="feature-main">
        <div className="feature-grid"></div>
        <Row className="feature-middle align-items-center">
          <Col xs={6}>
            <div className="feature-product-superStudio"></div>
          </Col>
          <Col xs={6}>
            <div className="feature-title">
              <div className="feature-lazyload-wraper">
                <img
                  width="400px"
                  height="100%"
                  src="https://images.playosmo.com/homepage/2019/featured/superstudio/super-studio-logo-white@2x.png?auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=400&h=66&q=50"
                ></img>
              </div>
            </div>
            <div className="feature-container-action">
              <p>Learn to draw your favorite Disney characters and watch them animate!</p>
              <div>
                <Button type="secondary" textColor="#30589f" className="feature-button">
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const PizzaCo = () => {
    return (
      <div className="feature-main">
        <div className="feature-grid"></div>
        <Row className="feature-middle align-items-center">
          <Col xs={6}>
            <div className="feature-product-pizzaCo"></div>
          </Col>
          <Col xs={6}>
            <div className="feature-title">
              <div className="feature-lazyload-wraper">
                <img
                  width="400px"
                  height="100%"
                  src="https://images.playosmo.com/homepage/2019/featured/pizza-co/pizza-co@2x.png?auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=400&h=125&q=50"
                ></img>
              </div>
            </div>
            <div className="feature-container-action">
              <p>Get an extra-large combo of fun and learning.</p>
              <div>
                <Button type="secondary" textColor="#ea3729" className="feature-button">
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  const listComponent = [
    {
      id: 1,
      name: 'detective',
      colorTitle: 'white',
      component: Detective,
    },
    {
      id: 2,
      name: 'superStudio',
      colorTitle: 'white',
      component: SuperStudio,
    },
    {
      id: 3,
      name: 'pizzaCo',
      colorTitle: '#d7282f',
      component: PizzaCo,
    },
  ];
  const [slideBg, setSlideBg] = useState({
    background: listComponent[0].name,
    colorTitle: 'white',
    colorSubTitle: 'white',
  });

  const handleChangeSlide = (index) => {
    console.log(index);
    const el = document.getElementById('animated');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
    let temp = 0;
    if (index.activeIndex <= listComponent.length) {
      temp = index.activeIndex;
    } else {
      temp = 1;
    }
    setSlideBg({
      background: listComponent[temp - 1].name,
      colorTitle: listComponent[temp - 1].colorTitle,
      colorSubTitle: listComponent[temp - 1].colorSubTitle,
    });
  };
  return (
    <section className="feature-container">
      <div className="feature-carousel">
        <div className="feature-carousel-item">
          <div className={`feature-game feature-game-${slideBg.background}`}>
            <Container className="feature-container-data">
              <div className="feature-container-inner">
                <div className="feature-character-holder" id="animated">
                  <div className={`feature-img feature-img-${slideBg.background}`}></div>
                </div>
                <div className="feature-title-holder">
                  <div style={{ color: slideBg.colorTitle, fontSize: '44px', fontWeight: 'bold' }}>
                    Featured Games
                  </div>
                </div>

                <Swiper
                  effect="fade"
                  pagination
                  navigation
                  loopFillGroupWithBlank={true}
                  loop={true}
                  className="swiper-slide"
                  onSlideChange={(index) => {
                    handleChangeSlide(index);
                  }}
                >
                  {listComponent.map((component, index) => {
                    return <SwiperSlide key={index}>{component.component}</SwiperSlide>;
                  })}
                  );
                </Swiper>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
