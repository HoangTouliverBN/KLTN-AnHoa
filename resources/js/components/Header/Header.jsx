// import { useCookies } from 'react-cookie';
import React, { useState } from 'react';

// Component
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Image,
  Popover,
  Card,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import Flags from './common/Flags';
import CountryModal from './common/CountryModal';
import LanguageMenu from './common/LanguageMenu';
import StoreNavbar from './common/StoreNavbar';

// Constants
import { constants } from '../../constants';
import apiServices from '../../services/api-services';

// Styles
import './Header.scss';

const Header = () => {
  const [yourFlag, setYourFlag] = useState('us');
  const [yourName, setYourName] = useState('United States');
  const [isShowLanguageMenu, setIsShowLanguageMenu] = useState(false);
  const [isShowStore, setIsShowStore] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isShowPopover, setIsShowPopover] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [nameUser, setNameUser] = useState('');

  const user = apiServices.getUser();
  user.then(function (result) {
    console.log('header', result.data.userName);
    setNameUser(result.data.userName);
  });

  const logout = () => {
    apiServices.logout();
    window.location.reload();
    setNameUser('');
  };
  // eslint-disable-next-line no-unused-vars
  const popover = (
    <Popover
      id="popover-basic"
      onMouseOver={() => {
        setIsShowPopover(true);
      }}
      onMouseOut={() => {
        setIsShowPopover(false);
      }}
    >
      <Popover.Body>
        {constants.MENU.CONTENT[0].body.map((data, index) => {
          return (
            <Card key={index} style={{ width: '23rem' }} className="item-cursor">
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title> {data.title} </Card.Title>
                <Card.Text>{data.subTitle}</Card.Text>
              </Card.Body>
              <Image className="subImg-popover" rounded src={data.subImg}></Image>
            </Card>
          );
        })}
      </Popover.Body>
    </Popover>
  );

  const MyNavbar = () => {
    return (
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
      >
        <Offcanvas.Header
          closeButton
          onClick={() => {
            setIsShowLanguageMenu(false);
            setIsShowStore(false);
          }}
        >
          {isShowLanguageMenu ? (
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold item-cursor">
              <i className="bi bi-chevron-left"></i>
              <span>Region</span>
            </Offcanvas.Title>
          ) : isShowStore ? (
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold item-cursor">
              <i className="bi bi-chevron-left"></i>
              <span>Store</span>
            </Offcanvas.Title>
          ) : (
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold">
              Wellcome!
            </Offcanvas.Title>
          )}
        </Offcanvas.Header>
        <div className="header-divider"></div>
        {isShowLanguageMenu ? (
          <LanguageMenu
            dataflag={yourFlag}
            setDataflag={setYourFlag}
            dataName={yourName}
            setDataName={setYourName}
            btnOnClick={() => {
              setIsShowLanguageMenu(false);
            }}
          ></LanguageMenu>
        ) : isShowStore ? (
          <StoreNavbar></StoreNavbar>
        ) : (
          <Offcanvas.Body>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold h6">
              Home
            </Offcanvas.Title>
            {constants.MENU.CONTENT.map((data, index) => {
              return (
                <Nav
                  key={index}
                  className="justify-content-end flex-grow-1 pe-3"
                  onClick={() => {
                    data.id === 1 && setIsShowStore(true);
                  }}
                >
                  <Nav.Link
                    href="#action1"
                    className="h6 container-item-menu-icon justify-content-between"
                  >
                    {data.value}
                    {data.id === 1 && <i className="bi bi-chevron-right"></i>}
                  </Nav.Link>
                </Nav>
              );
            })}
            <div className="header-divider divider-mobile"></div>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <div
                className="d-flex align-items-center container-language-menu justify-content-between item-cursor"
                onClick={() => {
                  setIsShowLanguageMenu(true);
                }}
              >
                <div className="d-flex align-items-center ">
                  <Nav.Link href="#action1">
                    <Flags className="header-img"></Flags>
                  </Nav.Link>
                  <Nav.Link href="#action1" className="h6 header-text text-uppercase">
                    {/* {yourFlag} */}
                  </Nav.Link>
                </div>

                <i className="bi bi-chevron-right"></i>
              </div>
            </Nav>

            <div className="header-divider divider-mobile"></div>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="h6">
                {nameUser ? 'Hello, ' + nameUser : 'Sign In'}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        )}
      </Navbar.Offcanvas>
    );
  };

  return (
    <div className="container-header d-flex align-items-center justify-content-center">
      <Navbar bg="light" expand={false}>
        {/* header-desktop */}
        <Container fluid className="flex-nowrap header-desktop">
          <Nav>
            <Nav.Link href="/" className="header-logo"></Nav.Link>
          </Nav>
          <div className="container-item-action"></div>
          <div className="item-cursor">
            <Flags
              className="header-img"
              onClick={() => {
                setModalShow(true);
              }}
            ></Flags>
          </div>
          <Navbar.Brand
            className="header-item-right header-text text-uppercase"
            href="#"
            onClick={() => {
              setModalShow(true);
            }}
          >
            {/* {yourFlag} */}
          </Navbar.Brand>

          {nameUser ? (
            <Navbar.Brand className="header-item-right ">
              <DropdownButton
                className="btn-drop"
                id="input-group-dropdown"
                align={{ lg: 'start' }}
                as="div"
                size="lg"
                title={
                  <div
                    className="d-flex align-items-center"
                    style={{ height: '40px', color: 'white' }}
                  >
                    <h5 className="user">{'Hello, ' + nameUser}</h5>
                  </div>
                }
              >
                <Dropdown.Item eventKey="1">My Account</Dropdown.Item>
                <Dropdown.Item eventKey="2">Wish List</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  eventKey="3"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand href="/login" className="header-item-right ">
              <span>Sign In</span>
            </Navbar.Brand>
          )}

          {/* navbar */}
          <MyNavbar></MyNavbar>
        </Container>

        {/* header-mobile */}
        <Container fluid className="flex-nowrap header-mobile justify-content-center d-none">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="position-absolute action-mobile"
            color="white"
          />
          <Nav>
            <Nav.Link href="#action1" className="header-logo"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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

export default Header;
