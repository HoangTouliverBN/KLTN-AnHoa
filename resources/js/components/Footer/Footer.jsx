// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { Container, Navbar, Nav, Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import Flags from '../Header/common/Flags';
import CountryModal from '../Header/common/CountryModal';
import Osmo from './osmo';
import tangible from '../../../../public/images/tangible-play-logo-bw.png';
import './Footer.scss';



const data = [
  {
    title: 'Find in Store',
    link: 'find',
  },
  {
    title: 'Osmo Social Club',
    link: 'osmo',
  },
  {
    title: 'About Us',
    link: 'about',
  },
  {
    title: 'Osmo Cares',
    link: 'care',
  },
  {
    title: 'Blog',
    link: 'blog',
  },
  {
    title: 'Jobs',
    link: 'job',
  },
  {
    title: 'Support',
    link: 'support',
  },
];
const icon = [
  {
    name: 'fb',
    title: 'Join the party on Facebook',
    href: '#',
    icon: (
      <div style={{ height: '40px', width: '40px' }}>
        <div className="facebook"></div>
      </div>
    ),
  },
  {
    name: 'tw',
    title: 'Follow us on Twitter',
    href: '#',
    icon: <div className="twitter"></div>,
  },
  {
    name: 'ins',
    title: 'Follow us on Instagram',
    href: '#',
    icon: <div className="instagram"></div>,
  },
  {
    name: 'pin',
    title: 'Follow us on Pinterest',
    href: '#',
    icon: <div className="pinterest"></div>,
  },
  {
    name: 'yt',
    title: 'Watch our videos on YouTube',
    href: '#',
    icon: <div className="youtube"></div>,
  },
];

const Footer = () => {


  const [yourFlag, setYourFlag] = useState('us');
  const [yourName, setYourName] = useState('United States');
  const [modalShow, setModalShow] = useState(false);

  // const [country, setCountry] = useState(countrys);

  return (
    <div className="footer">
      <Navbar className="top" bg="none" variant="none">
        <Container className="container head" fluid="xxl">
          <Row xxl="auto" className="justify-content-md-center row-top">
            {data.map((item, index) => {
              return (
                <Col key={index} className="nav" md="auto">
                  <a className="link" href={item.link}>
                    {item.title}
                  </a>
                </Col>
              );
            })}
            <Col className="header-logo nav" md="auto">
              <Nav.Link className="header-logo nav">
                <span href="myosmo" className="page-footer-link-myosmo">
                  <Osmo className="iconOsmo"></Osmo>
                </span>
              </Nav.Link>
            </Col>
            <Col
              className="united nav"
              md="auto"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <Flags
                className="header-img"
               
                onClick={() => {
                  setModalShow(true);
                }}
              ></Flags>
         
            </Col>
          </Row>
        </Container>
      </Navbar>
      <br />
      <Container className="middle">
        <Row className="justify-content-md-center">
          <Col className="text" sm={4} md="auto">
            <span>
              Get 30% off your first Osmo purchase + other great offers, giveaways & Osmo news.
            </span>
          </Col>
          <Col md="auto" sm={4} className="form">
            <InputGroup className="mm">
              <FormControl
                className="form"
                placeholder="Your email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className="btn" variant="outline-secondary" id="button-addon2">
                Sign Up
              </Button>
            </InputGroup>
          </Col>
          <Col sm={3}>
            <Nav justify="true">
              {icon.map((item, index) => {
                return (
                  <Nav.Link
                    className="nav-icon"
                    title={item.title}
                    href={item.href}
                    key={index}
                    style={{ padding: '0px' }}
                  >
                    <div className="icon">{item.icon}</div>
                  </Nav.Link>
                );
              })}
            </Nav>
          </Col>
        </Row>
      </Container>
      <Navbar className="top-mid" bg="none" variant="none">
        <Container className="top-mid">
          <Nav className="">
            <Nav.Link href="#Privacy" className="link">
              Privacy Policy
            </Nav.Link>
            <Nav.Link href="#Terms" className="link">
              Terms of Use
            </Nav.Link>
            <Nav.Link href="#return" className="link">
              Return Policy
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="bot top-mid">
        <span>
          Osmo™, Awbie™ and Tangible Play™ are trademarks of Tangible Play, Inc. Mickey Mouse and
          Friends and Disney Princess ©Disney.
        </span>
        <span>Incredibles 2 ©Disney/Pixar.</span>
      </Container>
      <Container className="footer_bot top-mid">
        <div className="tangible">
          <img style={{ width: '145px', height: '16px', verticalAlign: 'middle' }} src={tangible} />
        </div>
        <p>©2022 Tangible Play, Inc. All rights reserved.</p>
      </Container>

      <CountryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dataflag={yourFlag}
        setDataflag={setYourFlag}
        dataName={yourName}
        setDataName={setYourName}
        btnOnClick={() => {
          setModalShow(false);
        }}
      />
    </div>
  );
};

export default Footer;
