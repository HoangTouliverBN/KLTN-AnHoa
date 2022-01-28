/**
 * LearningThroughPlay
 */

import React, { useEffect, useRef, useState } from 'react';
import { Row } from 'react-bootstrap';

// component
import SectionVideo from '../../../components/SectionVideo/SectionVideo';
import Skill from '../../../components/Skill/Skill';

// style
import './LearningThroughPlay.scss';

// example data
const listData = [
  {
    id: 1,
    icon: <img src={require(`../../../assets/img/svg/math.svg`).default}></img>,
    name: 'Math',
    videoPreview: 'https://videos.playosmo.com/games/numbers/numbers-demo-loop-light.webm',
    imgPreView: require('../../../assets/img/numbers@2x.png').default,
  },
  {
    id: 2,
    icon: <img src={require('../../../assets/img/svg/puzzles.svg').default}></img>,
    name: 'Puzzles',
    videoPreview: 'https://videos.playosmo.com/games/tangram/tangram-demo-loop.webm',
    imgPreView: require('../../../assets/img/tangram@2x.png').default,
  },
  {
    id: 3,
    icon: <img src={require('../../../assets/img/svg/coding.svg').default}></img>,
    name: 'Coding',
    videoPreview: 'https://videos.playosmo.com/games/coding/coding-demo-loop-2-light.webm',
    imgPreView: require('../../../assets/img/coding@2x.png').default,
  },
  {
    id: 4,
    icon: <img src={require('../../../assets/img/svg/business.svg').default}></img>,
    name: 'Business',
    videoPreview: 'http://videos.playosmo.com/games/pizza-co/pizza-co-demo-loop-light.webm',
    imgPreView: require('../../../assets/img/pizza-co@2x.png').default,
  },
  {
    id: 5,
    icon: <img src={require('../../../assets/img/svg/spelling.svg').default}></img>,
    name: 'Spelling',
    videoPreview: 'https://videos.playosmo.com/games/words/words-demo-loop.webm',
    imgPreView: require('../../../assets/img/words@2x.png').default,
  },
  {
    id: 6,
    icon: <img src={require('../../../assets/img/svg/drawing.svg').default}></img>,
    name: 'Drawing',
    videoPreview: 'http://videos.playosmo.com/games/masterpiece/masterpiece-demo-loop.webm',
    imgPreView: require('../../../assets/img/masterpiece@2x.png').default,
  },
];

const LearningThroughPlay = () => {
  const [count, setCount] = useState(1);
  const [delay, setDelay] = useState(5);
  const [linkPreview, setLinkPreview] = useState(listData[count - 1].videoPreview);
  const videoPreview = useRef();

  useEffect(() => {
    const vid = document.getElementById('section-myVideo');
    vid.load();
    setLinkPreview(listData[count - 1].videoPreview);
  }, [count]);

  useInterval(() => {
    // Your custom logic here

    setDelay(videoPreview.current.duration.toFixed(0));
    if (count > 0 && count < listData.length) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  }, delay * 1000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  return (
    <div className="home-LearningThroughPlay">
      <SectionVideo
        linkVideo=""
        showIconPreView={false}
        classNameMask="LearningThroughPlay-container"
        shadowColor="white"
        preView={linkPreview}
        idPreview="LearningThroughPlay-video-preview"
        refPreview={videoPreview}
        className="LearningThroughPlay-blackground"
        imgPreview={listData[count - 1].imgPreView}
        buttonControlsBottom
      >
        <SectionVideo.Title
          content="Learning Through Play"
          className="LearningThroughPlay-title"
        ></SectionVideo.Title>
        <SectionVideo.SubTitle content="Develop core learning skills with Osmo — from math, to reading, to creativity!">
          <Row xs={3}>
            {listData.map((data, index) => {
              return (
                <Skill
                  key={index}
                  childrenTop={data.icon}
                  childrenBottom={data.name}
                  isSelected={data.id === count}
                  onClick={() => {
                    setCount(data.id);
                  }}
                ></Skill>
              );
            })}
          </Row>
        </SectionVideo.SubTitle>
      </SectionVideo>
    </div>
  );
};
export default LearningThroughPlay;
