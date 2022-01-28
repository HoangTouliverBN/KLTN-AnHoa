import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Cards';
import './Shop.scss';

import { constants } from '../../constants';

const Shop = () => {
  return (
    <Container className="shop-container">
      {constants.SHOP.map((data, index) => {
        return (
          <Row key={index}>
            <Col
              xs={12}
              className="shop-container-title d-flex flex-column align-items-center text-center"
            >
              <h2> {data.title} </h2>
              <div>{data.subTitle}</div>
            </Col>
            {data.content.map((datas, index) => {
              return (
                <Col xs={datas.xs} key={index}>
                  <Cards
                    widthCard="100%"
                    imageLink={datas.imageLink}
                    cardName={datas.cardName}
                    cardContent={datas.cardContent}
                    waveColor={datas.waveColor}
                    imageMode={datas.imageMode}
                    contentAlign={datas.contentAlign}
                    textColor={datas.textColor}
                  ></Cards>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default Shop;
