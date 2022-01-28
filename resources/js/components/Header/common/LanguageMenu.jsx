import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Offcanvas, Nav, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Flags from './Flags';
import Button from '../../Button';
import { constants } from '../../../constants';


import '../Header.scss';

const LanguageMenu = ({ btnOnClick, dataflag, setDataflag, dataName, setDataName, ...props }) => {
  const [yourLanguage, setYourLanguage] = useState('English (US)');
  const [flag, setFlag] = useState(dataflag);
  const [name, setName] = useState(dataName);
  const [isSelected, setIsSelected] = useState(false);
  const [listCountrys, setListCountrys] = useState(constants.MENU.COUNTRY);
  const [listLanguages, setListLanguages] = useState(constants.MENU.LANGUAGE);







  const handleClickItemCoutry = (id) => {
    setIsSelected(true);
    listCountrys.map((data, index) => {
      if (data.id === id) {
        listCountrys[index].isSelect = true;
      } else {
        listCountrys[index].isSelect = false;
      }
    });
    setListCountrys([...listCountrys]);
  };

  const handleClickItemLanguage = (id) => {
    listLanguages.map((data, index) => {
      if (data.id === id) {
        listLanguages[index].isSelect = true;
      } else {
        listLanguages[index].isSelect = false;
      }
    });
    setListLanguages([...listLanguages]);
  };

  //default item select
  const defaultDropdownItem = () => {
    return (
      <Dropdown.Item>
        <div className="d-flex align-items-center" style={{ height: '40px', padding: '5px 0' }}>
          <Flags
            className="header-img"
            keys={isSelected }
            size={26}
          ></Flags>
          <h6>{isSelected }</h6>
        </div>
      </Dropdown.Item>
    );
  };

  //reder item in DropdownButton
  const DropdownItem = (flag, name, key, isSelect, id) => {
    return (
      <Dropdown.Item
        key={key}
        onClick={() => {
          handleClickItemCoutry(id);
          setFlag(flag);
          setName(name);
        }}
        className={isSelect && 'item-select'}
      >
        <div className="d-flex align-items-center" style={{ height: '40px', padding: '5px 0' }}>
          <Flags className="header-img" keys={flag} size={26}></Flags>
          <h6>{name}</h6>
        </div>
      </Dropdown.Item>
    );
  };
  const handleOnClick = () => {
    btnOnClick();
    setIsSelected(false);
    setDataflag(flag);
    setDataName(name);
  };
  return (
    <Offcanvas.Body {...props}>
      <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bold h6">
        Select country and language
      </Offcanvas.Title>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link className="h6 item-menu">
          <Row>
            <Col>
              <Row>
                <Col>
                  <h6>Select shipping country</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <DropdownButton
                    variant="outline-secondary"
                    title={defaultDropdownItem()}
                    id="input-group-dropdown-2"
                    align="start"
                    as="div"
                    size="lg"
                  >
                    {listCountrys.map((data, index) => {
                      return DropdownItem(data.keys, data.name, index, data.isSelect, data.id);
                    })}
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link className="h6 item-menu">
          <Row>
            <Col>
              <Row>
                <Col>
                  <h6>Select language</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <DropdownButton
                    variant="outline-secondary"
                    title={
                      <Dropdown.Item>
                        <div
                          className="d-flex align-items-center"
                          style={{ height: '40px', padding: '5px 0' }}
                        >
                          <h6>{yourLanguage}</h6>
                        </div>
                      </Dropdown.Item>
                    }
                    id="input-group-dropdown-2"
                    align="start"
                    as="div"
                    size="lg"
                  >
                    {listLanguages.map((data, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => {
                            setYourLanguage(data.language);
                            handleClickItemLanguage(data.id);
                          }}
                          className={data.isSelect && 'item-select'}
                        >
                          <div
                            className="d-flex align-items-center"
                            style={{ height: '40px', padding: '5px 0' }}
                          >
                            <h6>{data.language}</h6>
                          </div>
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Nav.Link>
        <Nav.Link className="item-menu">
          <Button {...props} onClick={handleOnClick}>
            Done
          </Button>
        </Nav.Link>
      </Nav>
    </Offcanvas.Body>
  );
};
LanguageMenu.propTypes = {
  btnOnClick: PropTypes.func,
  dataflag: PropTypes.string,
  setDataflag: PropTypes.func,
  dataName: PropTypes.string,
  setDataName: PropTypes.func,
};

LanguageMenu.defaultProps = {};

export default LanguageMenu;
