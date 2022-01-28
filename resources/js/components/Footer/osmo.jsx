import React from 'react';
import PropTypes from 'prop-types';

const osmo = ({ waveColorBot, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 414.9 102.7"
      fill={waveColorBot}
    >
      <g>
        <path d="M7.6 49.1c0-1.5 1.2-2.8 2.8-2.8 1.6 0 2.8 1.2 2.8 2.8V53c2.5-3.7 5.8-7.2 12.2-7.2 6.1 0 10.1 3.3 12.1 7.5 2.7-4.2 6.7-7.5 13.3-7.5 8.7 0 14 5.8 14 15.2v20.9c0 1.6-1.2 2.8-2.8 2.8-1.6 0-2.8-1.2-2.8-2.8V62.3c0-7.3-3.6-11.4-9.8-11.4-5.7 0-10.4 4.2-10.4 11.7v19.3c0 1.6-1.2 2.8-2.8 2.8-1.5 0-2.8-1.2-2.8-2.8V62.2c0-7.1-3.7-11.2-9.7-11.2-6 0-10.5 5-10.5 11.9V82c0 1.6-1.2 2.8-2.8 2.8-1.6 0-2.8-1.2-2.8-2.8V49.1zM75.4 95.2c-.9-.4-1.8-1.1-1.8-2.4 0-1.4 1.2-2.4 2.4-2.4.5 0 .9.1 1.4.3 1.1.4 2.2.7 4.1.7 3.5 0 5.5-2.1 7.6-6.7l.3-.6-15.7-33.5c-.2-.5-.4-1-.4-1.5 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.3.9 2.8 2.2L92 78.1l11.7-29.7c.4-1.2 1.2-2.1 2.7-2.1 1.5 0 2.8 1.2 2.8 2.8 0 .4-.1.9-.3 1.4L94.2 85.6c-3.3 7.8-6.9 10.7-12.6 10.7-2.5 0-4.3-.5-6.2-1.1z"></path>
        <path d="M298.2 27.8c4-2.8 9-4.4 14.3-4.4C326 23.4 337 34 337 47v32.5c0 3.4-2.9 6.2-6.4 6-3.2-.2-5.6-3-5.6-6.2V47c0-6.4-5.6-11.6-12.6-11.6-6.9 0-12.6 5.2-12.6 11.6v32.5c0 3.4-2.9 6.2-6.4 6-3.2-.2-5.6-3-5.6-6.2V47c0-6.4-5.6-11.6-12.6-11.6-6.9 0-12.6 5.2-12.6 11.6v32.5c0 3.4-2.9 6.2-6.4 6-3.2-.2-5.6-3-5.6-6.2V47c0-13 11-23.6 24.6-23.6 5.3 0 10.3 1.6 14.3 4.4 2.7 1.8 6.1 1.8 8.7 0M133.9 47.4c0 14.9 12.1 27 27 27s27-12.1 27-27-12.1-27-27-27-27 12.1-27 27m-12 0c0-21.5 17.5-39 39-39s39 17.5 39 39-17.5 39-39 39c-21.6-.1-39-17.5-39-39m234 7.2c0 10.9 8.8 19.7 19.7 19.7 10.9 0 19.7-8.8 19.7-19.7 0-10.9-8.8-19.7-19.7-19.7-10.9 0-19.7 8.9-19.7 19.7m-12 0c0-17.5 14.2-31.7 31.7-31.7s31.7 14.2 31.7 31.7-14.2 31.7-31.7 31.7-31.7-14.2-31.7-31.7M206 39.4c0 8.7 6.4 15.6 16.4 17.6 7.9 1.6 9.6 5.6 9.6 8.7 0 4.3-3.5 7.8-7.8 7.8h-17.5c-3.3 0-6 2.7-6 6s2.7 6 6 6h17.5c10.9 0 19.8-8.9 19.8-19.8 0-10.4-7.2-18.1-19.2-20.5-2.5-.5-6.7-1.9-6.7-5.8 0-2.7 2.2-4.9 4.9-4.9.6 0 1.2.1 1.8.3 3.1 1.2 6.6-.4 7.8-3.5 1.2-3.1-.4-6.6-3.5-7.8-1.9-.7-4-1.1-6.1-1.1-9.4.1-17 7.7-17 17"></path>
      </g>
    </svg>
  );
};

osmo.propTypes = {
  waveColorBot: PropTypes.string,
  className: PropTypes.string,
};

osmo.defaultProps = {
  waveColorBot: 'rgb(189, 189, 189)',
};

export default osmo;