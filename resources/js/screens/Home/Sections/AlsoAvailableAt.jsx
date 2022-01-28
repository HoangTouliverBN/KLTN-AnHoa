/**
 * OrderAstro
 */

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Container, Col, Row } from 'react-bootstrap';
//  import Button from '../../../components/Button';

import './AlsoAvailableAt.scss';

const AlsoAvailableAt = () => {
  return (
    <div className="AlsoAvailableAt">
      <Container className="container-AlsoAvailableAt">
        <Row className='row-also'>

            <span>Also available at</span>
            <div className='content'>
              <div className="heli"></div>
              <div className="line"></div>
              <div className="mall"><img width="100%" src="https://images.playosmo.com/retail/storeicons/HKTVmall.png?auto=format&amp;fm=png&amp;dpr=2&amp;ixlib=react-9.3.0&amp;w=100%25" /></div>
              <div className="line"></div>
              <div className="mall"><img width="100%" src="https://images.playosmo.com/retail/storeicons/TRU.png?auto=format&amp;fm=png&amp;dpr=2&amp;ixlib=react-9.3.0&amp;w=100%25" /></div>
            </div>
          
        </Row>
      </Container>
    </div>
  );
};

export default AlsoAvailableAt;
