import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import { Container, Modal, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Flags from './Flags';
import Button from '../../Button';
import { constants } from '../../../constants';

import '../Header.scss';
function CountryModal({ btnOnClick, dataflag, setDataflag, dataName, setDataName, ...props }) {
  const [yourLanguage, setYourLanguage] = useState('English (US)');
  const [flag, setFlag] = useState(dataflag);
  const [name, setName] = useState(dataName);
  const [isSelected, setIsSelected] = useState(false);
  const [listCountrys, setListCountrys] = useState(constants.MENU.COUNTRY);
  const [listLanguages, setListLanguages] = useState(constants.MENU.LANGUAGE);

 

  useEffect(() => {

    setFlag(dataflag);
    setName(dataName);
  }, [dataflag]);

  //handle click item in DropdownButton
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
          <h5>{isSelected}</h5>
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
          <h5>{name}</h5>
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
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <h2>Select country and language</h2>
            </Col>
          </Row>
          <Row>
            <Col className="align-items-center">
              <Row>
                <Col className="d-flex justify-content-center">
                  <h5>Select shipping country</h5>
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
            <Col>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h5>Select language</h5>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <DropdownButton
                    variant="outline-secondary"
                    title={
                      <Dropdown.Item>
                        <div
                          className="d-flex align-items-center"
                          style={{ height: '40px', padding: '5px 0' }}
                        >
                          <h5>{yourLanguage}</h5>
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
                            <h5>{data.language}</h5>
                          </div>
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center modal-btn">
              <Button {...props} onClick={handleOnClick}>
                Done
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

CountryModal.propTypes = {
  btnOnClick: PropTypes.func,
  dataflag: PropTypes.string,
  setDataflag: PropTypes.func,
  dataName: PropTypes.string,
  setDataName: PropTypes.func,
};

CountryModal.defaultProps = {};

export default CountryModal;
