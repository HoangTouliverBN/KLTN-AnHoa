import React from 'react';
import './section1.scss';

const Section1 = () => {
  const dataSection1 = [
    {
      active: 'active',
      imgName: 'http://www.equipfair.com/images/2019/10/12/6_24.jpg',
    },
    {
      imgName: 'http://www.equipfair.com/images/2019/10/10/5_24.jpg',
    },
    {
      imgName: 'http://www.equipfair.com/images/2019/09/24/2_24.jpg',
    },
    {
      imgName: 'http://www.equipfair.com/images/2019/09/24/3_24.jpg',
    },
    {
      imgName: 'http://www.equipfair.com/images/2019/10/15/image-2.jpg',
    },
  ];
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {dataSection1.map((item, key) => (
          <div key={key} className={'carousel-item ' + item.active}>
            <img src={item.imgName} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Section1;
