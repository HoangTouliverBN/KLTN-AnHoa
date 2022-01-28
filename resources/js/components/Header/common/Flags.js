import React from 'react';
import PropTypes from 'prop-types';

const Flags = ({ keys, width, className, ...props }) => {
  return <img className={className} width={width} src={`/images/${keys}.svg`} {...props}></img>;
};

Flags.propTypes = {
  keys: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
};

Flags.defaultProps = {
  keys: 'us',
  width: 24,
};

export default Flags;
