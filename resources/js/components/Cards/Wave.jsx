import React from 'react';
import PropTypes from 'prop-types';

const Wave = ({ waveColorBot, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 110"
      style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
    >
      <path
        width="100%"
        fill={waveColorBot}
        fillOpacity="1"
        d="M-5.98,100.16 C193.23,-21.21 398.64,143.58 501.35,86.34 L500.00,150.00 L0.00,150.00 Z"
      ></path>
    </svg>
  );
};

Wave.propTypes = {
  waveColorBot: PropTypes.string,
  className: PropTypes.string,
};

Wave.defaultProps = {
  waveColorBot: '#00adf6',
};

export default Wave;
