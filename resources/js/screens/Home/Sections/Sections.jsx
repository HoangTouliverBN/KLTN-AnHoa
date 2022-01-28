import React from 'react';
import { useEffect, useState } from 'react';
import ShopNow_US from './ShopNow_US';
import OrderAstro from './OrderAstro';
import PeopleLoveUs from './PeopleLoveUs';
import NewToAstro from './NewToAstro';
import SchoolAstro from './SchoolAstro';
import MathWizard from './MathWizard';
import LearningThroughPlay from './LearningThroughPlay';
import HowAstroWork from './HowAstroWork';
import SayWhatPeopleAreSaying from './SayWhatPeopleAreSaying';
import CurriculumBased from './CurriculumBased';
import AlsoAvailableAt from './AlsoAvailableAt';

import './Sections.scss';
import RealPlay from './RealPlay';
import Transforming from './Transforming';
// import FeaturedGames from './FeaturedGames';



const Sections = () => {





  const sectionsAnother = [
    { name: 'ShopNow_US', component: ShopNow_US },
    { name: 'MathWizard', component: MathWizard },
  ];

  const sections = [
    { name: 'HowAstroWork', component: HowAstroWork },
    { name: 'LearningThroughPlay', component: LearningThroughPlay },
    { name: 'SchoolAstro', component: SchoolAstro },
    { name: 'SayWhatPeopleAreSaying', component: SayWhatPeopleAreSaying },
    { name: 'CurriculumBased', component: CurriculumBased },
    { name: 'NewToAstro', component: NewToAstro },
    { name: 'AlsoAvailableAt', component: AlsoAvailableAt },
    { name: 'PeopleLoveUs', component: PeopleLoveUs },
    { name: 'OrderAstro', component: OrderAstro },
  ];
  const yourSection =  sectionsAnother;
  return (
    <div className="home-section">
      {yourSection.map((section, idx) => {
        const Component = section.component;
        return <Component key={idx} />;
      })}
      {sections.map((section, idx) => {
        const Component = section.component;
        return <Component key={idx} />;
      })}
    </div>
  );
};

export default Sections;
