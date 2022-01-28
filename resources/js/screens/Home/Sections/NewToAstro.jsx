import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import Button from '../../../components/Button';
import osmoKits from '../../../../../public/images/osmo-kits.png';
import homeKits from '../../../../../public/images/homepage-games.jpg';

import './NewToAstro.scss';

const data = [
  {
    h1: 'New to Osmo?',
    p: 'Get a starter kit! Starting from HK$598.',
    image: osmoKits,
    button: 'Shop Starter Kits',
  },
  {
    h1: 'Already own Osmo?',
    p: 'Expand your collection! Starting from HK$238.',
    image: homeKits,
    button: 'Shop Games',
  },
];

const NewToAstro = () => {
  return (
    <div className="new-to-astro">
      <Container>
        <Row className="justify-content-md-center">
          {data.map((item, index) => {
            return (
              <Col className="new-to-astro" key={index}>
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
                <div className="kits" style={{ backgroundImage: `url(${item.image})` }}></div>
                <Button className="btn-new">{item.button}</Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default NewToAstro;
