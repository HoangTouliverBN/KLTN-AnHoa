/**
 * Skill
 */

import React from 'react';
import PropTypes from 'prop-types';

// component
import { Col } from 'react-bootstrap';

// style
import './Skill.scss';
import { bool } from 'prop-types';

const Skill = ({
  childrenTop,
  childrenBottom,
  onClick,
  isSelected,
  className,
  backgroundImg,
  withContent,
  ...props
}) => {
  // useEffect(() => {
  //   setBackGround();
  // });
  // const setBackGround = () => {
  //   const test = document.getElementById('skill-component-skill');
  //   test.addEventListener('mouseleave', function (event) {
  //     event.target.style.backgroundColor = 'red';
  //   });
  // };
  return (
    <div className={['skill-component position-relative', className].join(' ').trim()} {...props}>
      <Col onClick={onClick} className="skill-component-row">
        <div
          id="skill-component-skill"
          className={[
            'skill-component-skill position-relative',
            isSelected && 'skill-component-skill-slected',
          ]
            .join(' ')
            .trim()}
        >
          <div
            className="skill-component-skill-icon position-absolute"
            style={{ width: withContent }}
          >
            {childrenTop}
          </div>
          <div className="skill-component-skill-name position-absolute d-flex justify-content-center">
            {childrenBottom}
          </div>
          {backgroundImg && (
            <div
              id="skill-component-img"
              className="position-absolute skill-component-img"
              style={{ backgroundImage: `url(${backgroundImg})` }}
            ></div>
          )}
        </div>
      </Col>
      {backgroundImg && (
        <i
          className="bi bi-plus-circle-fill position-absolute skill-component-plus"
          style={{ fontSize: '2rem' }}
        ></i>
      )}
    </div>
  );
};

Skill.propTypes = {
  childrenTop: PropTypes.any,
  childrenBottom: PropTypes.any,
  onClick: PropTypes.func,
  isSelected: bool,
  className: PropTypes.string,
  backgroundImg: PropTypes.string,
  withContent: PropTypes.string,
};

Skill.defaultProps = {
  onClick: () => {},
  isSelected: false,
  childrenBottom: 'Bottom',
  childrenTop: 'top',
  withContent: '42%',
};

export default Skill;
