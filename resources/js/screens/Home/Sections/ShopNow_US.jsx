import React from 'react';

import { Col, Row } from 'react-bootstrap';
import Button from '../../../components/Button';
import './ShopNow_US.scss';

const ShopNow_US = () => {
  return (
    <div className="home-shop-now">
      <div className="background-math">
        <Row className="math-wizard">
          <Col sm={6}></Col>
          <Col
            xs={12}
            sm={6}
            className="shop-now d-flex flex-column justify-content-center align-items-center text-center"
          >
            <img
              src="https://images.playosmo.com/homepage/MW_campaign/hero-MW-logo.png?auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=100%25"
              alt=""
              height="200px"
              width="555px"
            />
            <h1 className="fw-bold m-3 px-3">
              My parents had math lessons. I have math adventures.{' '}
            </h1>
            <a href="/Shop">
              <Button className="button fw-bold m-3"> Shop Now</Button>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ShopNow_US;
