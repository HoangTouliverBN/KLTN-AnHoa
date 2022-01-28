import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// style
import './Transforming.scss';

// component
import Skill from '../../../components/Skill';
import Button from '../../../components/Button';

const Transforming = () => {
  return (
    <section className="transforming-container">
      <div className="transforming-detail-container">
        <div className="transforming-detail-top">
          <h2>Transforming how children learn </h2>
          <p>
            Osmo merges tactile exploration with innovative technology, actively engaging children
            in the learning process.
          </p>
        </div>

        <div className="transforming-wellcome">
          <Container>
            <Row className="position-relative justify-content-between transforming-row">
              <Col xs={3}>
                <Skill
                  backgroundImg="https://images.playosmo.com/homepage/2018/welcome/pic-osmo_genius_sk_group.jpg?fit=crop&auto=format&fm=jpg&dpr=2&ixlib=react-9.3.0&w=210&h=210"
                  withContent="80%"
                  childrenTop={
                    <div className="transforming-content-item-detail">
                      <h3>Genius Starter Kit</h3>
                      <p>Experience hands-on STEAM learning</p>
                    </div>
                  }
                  childrenBottom={
                    <div className="transforming-content-item-btn">
                      <Button textColor="#ea3729" type="secondary">
                        Learn More
                      </Button>
                    </div>
                  }
                ></Skill>
              </Col>
              <Col xs={3}>
                <Skill
                  backgroundImg="https://images.playosmo.com/homepage/2018/welcome/pic-osmo_pizzaco_2017.jpg?fit=crop&auto=format&fm=jpg&dpr=2&ixlib=react-9.3.0&w=244&h=244"
                  withContent="80%"
                  childrenTop={
                    <div className="transforming-content-item-detail">
                      <h3>Pizza Co.</h3>
                      <p>Get an extra-large combo of fun and learning</p>
                    </div>
                  }
                  childrenBottom={
                    <div className="transforming-content-item-btn">
                      <Button textColor="#ea3729" type="secondary">
                        Learn More
                      </Button>
                    </div>
                  }
                ></Skill>
              </Col>
            </Row>
            <Row className="position-relative justify-content-between transforming-row ">
              <Col xs={3}>
                <Skill
                  backgroundImg="https://images.playosmo.com/homepage/2018/welcome/pic-osmo_coding_sk_group.jpg?fit=crop&auto=format&fm=jpg&dpr=2&ixlib=react-9.3.0&w=210&h=210"
                  withContent="80%"
                  childrenTop={
                    <div className="transforming-content-item-detail">
                      <h3>Coding Starter Kit</h3>
                      <p>Go on an open world coding adventure!</p>
                    </div>
                  }
                  childrenBottom={
                    <div className="transforming-content-item-btn">
                      <Button textColor="#ea3729" type="secondary">
                        Learn More
                      </Button>
                    </div>
                  }
                ></Skill>
              </Col>
              <Col xs={6} className="position-absolute transforming-img align-self-end d-block">
                <div className="transforming-img-characters-middle"></div>
              </Col>
              <Col xs={3}>
                <Skill
                  backgroundImg="https://images.playosmo.com/homepage/2018/welcome/pic-osmo_little_genius_sk_group.jpg?fit=crop&auto=format&fm=jpg&dpr=2&ixlib=react-9.3.0&w=210&h=210"
                  withContent="80%"
                  childrenTop={
                    <div className="transforming-content-item-detail">
                      <h3>Little Genius Starter Kit</h3>
                      <p>Engage preschoolers in core subjects!</p>
                    </div>
                  }
                  childrenBottom={
                    <div className="transforming-content-item-btn">
                      <Button textColor="#ea3729" type="secondary">
                        Learn More
                      </Button>
                    </div>
                  }
                ></Skill>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};
export default Transforming;
