/**
 * CurriculumBased
 */

import React from 'react';
import { Row, Col, Carousel, Container } from 'react-bootstrap';
import Button from '../../../components/Button';

import SectionVideo from '../../../components/SectionVideo/SectionVideo';

// Style
import './CurriculumBased.scss';

const listdata = [
  {
    id: 1,
    title: 'Learn with BYJU’S featuring Disney',
    subTitleTop:
      'Concepts are made simple and fun with this innovative program that brings together an app-based learning adventure with interactive workbooks—all personalized to your child’s learning level.',
    action: [
      {
        id: 1,
        content: 'PreK',
        color: '#18bbed',
      },
      {
        id: 2,
        content: 'K',
        color: '#f1564b',
      },
      {
        id: 3,
        content: 'Grade 1',
        color: '#ff9a52',
      },
      {
        id: 4,
        content: 'Grade 2',
        color: '#ffc933',
      },
      {
        id: 5,
        content: 'Grade 3',
        color: '#92c83e',
      },
    ],
    subTitleBottom: 'Help build math, language & reading skills alongside Disney characters.',
    preView: 'https://videos.playosmo.com/homepage/byjus-premium-kit-tralier.mp4',
    linkVideo: 'https://videos.playosmo.com/homepage/byjus-premium-kit-tralier.mp4',
    poster:
      'https://images.playosmo.com/homepage/curriculum-based-learning/homepage-curriculum-byjus-img-3.png?q=70&auto=format&fm=jpg&w=1440',
    isImg: false,
  },
  {
    id: 2,
    title: 'Become a wizard at MATH!',
    subTitleTop:
      'Turn classroom learning into after-school fun with our Math Wizard Series! Fresh, hands-on content keeps your child engaged while they build 1st and 2nd grade math curriculum skills in an expansive and magical world.',
    action: [
      {
        id: 1,
        content: 'Grade 1',
        color: '#18bbed',
      },
      {
        id: 2,
        content: 'Grade 2',
        color: '#f1564b',
      },
    ],
    subTitleBottom: 'Promotes math skills with self-paced independent learning adventures.',
    preView: '',
    linkVideo: '',
    poster:
      'https://images.playosmo.com/homepage/curriculum-based-learning/homepage-curriculum-mw-img.png?auto=format&fm=png&dpr=2&ixlib=react-9.3.0&w=555&q=50',
    isImg: true,
  },
];

const CurriculumBased = () => {
  return (
    <Carousel fade className="CurriculumBased-container" pause="hover">
      {listdata.map((data, index) => {
        return (
          <Carousel.Item key={index}>
            <Container fluid="xl">
              <Row className="CurriculumBased-top">
                <span className="CurriculumBased-top-heading">Curriculum-Based Learning</span>
                <p>
                  Explore our grade-aligned series that builds on what your child is learning in
                  school.
                </p>
              </Row>
              <div className="CurriculumBased-top-detail">
                <SectionVideo
                  rowReverse
                  classNameMask={data.isImg && 'CurriculumBased-mask'}
                  shadowColor="#662b66"
                  xsDetail={5}
                  xsVideo={7}
                  poster={data.poster && data.poster}
                  preView={data.preView}
                  showIconPreView={!data.isImg}
                  showButtoncontrols={!data.isImg}
                  linkVideo={data.linkVideo}
                >
                  <SectionVideo.Title content={data.title}></SectionVideo.Title>
                  <SectionVideo.SubTitle content={data.subTitleTop}>
                    <Row xs={4} className="CurriculumBased-contain-list-button">
                      {data.action.map((datas, index) => {
                        return (
                          <Col key={index}>
                            <Button
                              backgroundColor={datas.color}
                              className="CurriculumBased-button"
                              disable={true}
                            >
                              {datas.content}
                            </Button>
                          </Col>
                        );
                      })}
                    </Row>
                    <p>{data.subTitleTop} </p>
                    <Button>Learn More</Button>
                  </SectionVideo.SubTitle>
                </SectionVideo>
              </div>
            </Container>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CurriculumBased;
