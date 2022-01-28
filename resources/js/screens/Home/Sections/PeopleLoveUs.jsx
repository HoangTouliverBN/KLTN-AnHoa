/**
 * PeopleLoveUs
 */

import React from 'react';
import './PeopleLoveUs.scss';
import { Container, Col, Row } from 'react-bootstrap';
const start = [1, 2, 3, 4, 5];
const PeopleLoveUs = () => {
  return (
    <div className="home-people">
      <Container className="home-container">
        <div className="home-stripe2019-awards-img-water-line" data-line="surface">
          <div className="home-stripe2019-awards-boat-holder"></div>
        </div>
        <Row className="home-row">
          <Col>
            <h1>People Love us</h1>
            <span className='osmo-is'>Osmo is an award-winning platform, thanks to parents and teachers.</span>
            <div className="picture"></div>
          </Col>
        </Row>
      </Container>
      <div className="wave-container">
        <div className="wave"></div>
        <Container className="home-footer">
          <Row className="home-row">
            <Col className="home-col-2">
              <h1 className="title-amazon">
                Over 20,000 reviews on<span className="home-amazon"></span>
              </h1>
              <div className="group-start">
                {start.map((index) => {
                  return (
                    <div
                      key={index}
                      className="start"
                      style={{ left: (100 * (index - 1)) / start.length + '%' }}
                    ></div>
                  );
                })}
              </div>
              <span className='we-have'> We have a 4.7/5 star rating across our products.</span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PeopleLoveUs;
