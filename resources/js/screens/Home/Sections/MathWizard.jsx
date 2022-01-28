/**
 * MathWizard
 */

import React from 'react';

import SectionVideo from '../../../components/SectionVideo/SectionVideo';

// Style
import './MathWizard.scss';

const MathWizard = () => {
  return (
    <SectionVideo>
      <SectionVideo.Title content="Turn math into your kid’s new favorite subject! "></SectionVideo.Title>
      <SectionVideo.SubTitle>
        <p>
          Our award-winning Math Wizard game series create an interactive, story-based learning
          experience coupled with hands-on play and curriculum-based learning
          <br></br>
          <br></br>
          <strong>99% of parents </strong>
          report that their child finds Math Wizard fun.
        </p>
      </SectionVideo.SubTitle>
    </SectionVideo>
  );
};

export default MathWizard;
