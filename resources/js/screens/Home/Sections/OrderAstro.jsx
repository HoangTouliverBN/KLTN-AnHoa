/**
 * OrderAstro
 */

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from '../../../components/Button';

import './OrderAstro.scss';

const OrderAstro = () => {
  return (
    <div className="section9">
      <Container className="container-9">
        <Row className="row-9">
          <Col className="row-9">
            <div className="left"></div>
          </Col>
          <Col className="title">
            <h1>Order Osmo</h1>
            <div className="content">
              <p>
                Osmo is for parents looking to grow more than just their children’s academic
                potential. Help your child build confidence in learning, and life.
              </p>
            </div>

            <Button className="btn-9">Shop Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderAstro;
