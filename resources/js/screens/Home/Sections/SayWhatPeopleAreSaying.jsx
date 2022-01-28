/**
 * OrderAstro
 */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import ventureBeat from '../../../../../public/images/VentureBeat_logo.png';
import bussiness from '../../../../../public/images/Business_Insider.png';
import cnet from '../../../../../public/images/CNET.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SayWhatPeopleAreSaying.scss';
const data = [
  {
    text: '“Osmo is really a magical experience.”',
    title: <img className='image' src={ventureBeat}></img>,
  },
  {
    text: '“A rare blend of fun and education”',
    title: <img className='image' src={bussiness}></img>,
  },
  {
    text: '“Fun, engaging, versatile”',
    title: <img src={cnet}></img>,
  },

  {
    text: '“As a parent and educator I LOVE Osmo. We have every single app and game so far.”',
    title: 'Michelle C., K-5 Teacher, NC',
  },
  {
    text: '“Osmo is awesome because it grows with your child for both math and reading.”',
    title: 'Holly D., Kindergarten Teacher, NC',
  },
  {
    text: '“Osmo is a great way to develop and practice social skills in any setting.”',
    title: 'Diana Buitrago, K-5 Tech Coach, AZ',
  },

  {
    text: '“Osmo keeps my children learning — while still having fun!⁣”',
    title: 'Mom of 3',
  },
  {
    text: '“I love that it has tactile pieces so it creates positive screen time.”',
    title: 'Mom of 3',
  },
  {
    text: '“STEAM is making its way into classrooms, why not bring it into our homes as well!”',
    title: 'Mom of 3',
  },
];
const SayWhatPeopleAreSaying = () => {
  SwiperCore.use([Pagination, Navigation]);
  //   const [count, setCount] = useState();

  // const [group, setGroup] = useState(data[0]);
  // const handleClickArrow = (index) => {
  //   if (group.slide === 2 && index === 1) {
  //     setGroup(data[0]);
  //   } else if (group.slide === 0 && index === -1) {
  //     setGroup(data[2]);
  //   } else {
  //     setGroup(data[group.slide + index]);
  //   }
  // };
  return (
    <div className="SayWhatPeopleAreSaying">
      <Container>
        <Row className="top-what justify-content-md-center title-top">
          <h1 className="title-what">See What People Are Saying</h1>
        </Row>
        <Row className="top-what">
          <div className="container-item">
            <div className="midle">
              <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={30}
                navigation={true}
                loopFillGroupWithBlank={true}
                loop={true}
                className="swiper-slide"
                style={{ zIndex: 0 }}

                breakpoints={{
                  "320":{
                    "slidesPerView": 1,
                    "spaceBetween": 0,
                    "slidesPerGroup":1,
                  },
                  "576": {
                    "slidesPerView": 1,
                    "spaceBetween": 20,
                    "slidesPerGroup":1,
                  },
                  "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 0,
                    "slidesPerGroup":1,
                  },
                  "768":{
                    "slidesPerView": 3,
                    "spaceBetween": 10,
                    "slidesPerGroup":3,
                  },
                  "1024":{
                    "slidesPerView": 3,
                    "spaceBetween": 30,
                    "slidesPerGroup":3,
                  }
                }}
              >
                {data.map((item, index) => {
                  return (
                    <SwiperSlide className="midle slide" key={index} >
                      <Card style={{ width: '100%' }} className="text-center card" key={index}>
                        <Card.Body>
                          <Card.Title>
                            <p className="content">{item.text}</p>
                          </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <Card.Title>{item.title}</Card.Title>
                        </Card.Footer>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SayWhatPeopleAreSaying;
