/**
 * Notification Component
 */
import React, { useEffect, useState } from 'react';
import { Alert, CloseButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Styles
import './Notification.scss';

const Notification = ({
  title,
  children,
  type,
  position,
  isShow,
  autoHideTimeout,
  className,
  ...props
}) => {
  const [showNotification, setShowNotification] = useState(isShow);

  useEffect(() => setShowNotification(isShow), [isShow]);
  if (autoHideTimeout !== 0) {
    setTimeout(() => {
      setShowNotification(false);
    }, autoHideTimeout);
  }
  return showNotification ? (
    <div className={`notificaton-container ${position} ${className}`} {...props}>
      <Alert className={`notificaton-alert ${position}`} show={isShow} variant={type}>
        <div className="d-flex justify-content-between">
          <Alert.Heading>{title}</Alert.Heading>
          <CloseButton
            onClick={() => {
              setShowNotification(!showNotification);
            }}
          />
        </div>
        <p>{children}</p>
      </Alert>
    </div>
  ) : null;
};
Notification.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark',
  ]),
  position: PropTypes.oneOf(['top', 'left', 'right']),
  isShow: PropTypes.bool,
  autoHideTimeout: PropTypes.number,
  className: PropTypes.string,
};
Notification.defaultProps = {
  isShow: true,
  type: 'success',
  position: 'top',
  autoHideTimeout: 0,
};
export default Notification;
