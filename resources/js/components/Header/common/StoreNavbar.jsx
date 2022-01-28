import React from 'react';
import { Offcanvas, Image, Card } from 'react-bootstrap';
import { constants } from '../../../constants';

import '../Header.scss';

const StoreNavbar = () => {
  return (
    <Offcanvas.Body>
      {constants.MENU.CONTENT[0].body.map((data, index) => {
        return (
          <Card key={index} style={{ width: '22rem' }} className="item-cursor">
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title> {data.title} </Card.Title>
              <Card.Text> {data.subTitle} </Card.Text>
            </Card.Body>
            <Image
              className="subImg-popover subImg-popover-mobile"
              rounded
              src={data.subImg}
            ></Image>
          </Card>
        );
      })}
    </Offcanvas.Body>
  );
};

export default StoreNavbar;
