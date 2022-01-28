/**
 * Button Component
 */
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Button.scss';

/**
 * Button
 *
 * @param {*} object
 * @returns element
 */
const Button = ({
  children,
  onClick,
  className,
  type,
  textColor,
  disable,
  backgroundColor,
  ...props
}) => {
  const textStyle = {
    color: textColor && textColor,
    backgroundColor: backgroundColor && backgroundColor,
  };
  return (
    <button
      className={['astro-button', `astro-button__${type}`, className].join(' ').trim()}
      onClick={!disable && onClick}
      {...props}
    >
      <span
        className={['text fw-bold', disable && 'text__disable'].join(' ').trim()}
        style={textStyle}
      >
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  textColor: PropTypes.string,
  disable: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  disable: false,
  children: 'Button',
  type: 'primary', //secondary,
};

export default Button;
