import React from 'react';
import PropTypes from 'prop-types';

import Wave from './Wave';
import './Cards.scss';

const Cards = ({
  waveColor,
  cardName,
  cardContent,
  widthCard,
  imageLink,
  className,
  imageMode,
  contentAlign,
  textColor,
}) => {
  return (
    <div className={['cards', className].join(' ').trim()} style={{ width: widthCard }}>
      <div className="card-image">
        <div
          className={'overview-image ' + (imageLink === '' && 'without-image')}
          style={{ backgroundColor: waveColor + '33' }}
        >
          {(imageLink !== null || imageLink !== '') && <img className="image" src={imageLink} />}
        </div>
        {!imageMode && <Wave className="wave-image" waveColorBot={waveColor}></Wave>}
        <div
          className={['card-content-image', contentAlign && 'card-content-image-contentAlign']
            .join(' ')
            .trim()}
          style={{ color: textColor }}
          hidden={!imageMode}
        >
          <div className="card-name">{cardName}</div>
          <div className="card-content">{cardContent}</div>
        </div>
      </div>
      <div
        className="card-body"
        style={{ backgroundColor: waveColor, color: textColor }}
        hidden={imageMode}
      >
        <div className="card-name">{cardName}</div>
        <div className="card-content">{cardContent}</div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  waveColor: PropTypes.string,
  cardName: PropTypes.string,
  cardContent: PropTypes.string,
  widthCard: PropTypes.string,
  imageLink: PropTypes.string,
  className: PropTypes.string,
  imageMode: PropTypes.bool,
  contentAlign: PropTypes.bool,
  textColor: PropTypes.string,
};

Cards.defaultProps = {
  widthCard: '555px',
  imageMode: false,
  imageLink: '',
  contentAlign: false,
  textColor: 'white',
};

export default Cards;
