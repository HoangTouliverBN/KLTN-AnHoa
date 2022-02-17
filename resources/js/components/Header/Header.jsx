// import { useCookies } from 'react-cookie';
import React from 'react';
// Component
// Constants
// import { constants } from '../../constants';
// import apiServices from '../../services/api-services';

// Styles
import './Header.scss';

const Header = () => {
  const social = [
    {
      link: 'https://www.facebook.com/quy.nguyentinh',
      icons: <i className="fab fa-facebook-f"></i>,
    },
    {
      link: 'https://twitter.com/NguyenQuyTinh1',
      icons: <i className="fab fa-twitter"></i>,
    },
    {
      link: '#',
      icons: <i className="fab fa-youtube"></i>,
    },
    {
      link: 'http://www.equipfair.com/skype:#?chat',
      icons: <i className="fab fa-skype"></i>,
    },
  ];
  const contact = [
    {
      link: 'tel:02436367574',
      icons: <i className="fa fa-phone" aria-hidden="true"></i>,
      content: '0243 6367574',
    },
    {
      link: 'tel:0919536088',
      icons: <i className="fa fa-mobile" aria-hidden="true"></i>,
      content: '0919536088',
    },
    {
      link: 'mailto:sales.khomay@gmail.com',
      icons: <i className="fa fa-envelope" aria-hidden="true"></i>,
      content: 'sales.khomay@gmail.com',
    },
  ];
  const navBar = [
    {
      key: 'home',
      link: '/',
      content: 'TRANG CHỦ',
    },
    {
      key: 'introduction',
      link: '#',
      content: 'GIỚI THIỆU',
    },
    {
      key: 'product',
      link: '',
      content: 'SẢN PHẨM ',
      icon: <i className="fas fa-chevron-down"></i>,
    },
    {
      key: 'project',
      link: '#',
      content: 'DỰ ÁN',
    },
    {
      key: 'bu-long-oc-vit',
      link: '#',
      content: 'BULÔNG - ỐC - VÍT',
    },
    {
      key: 'catalogue',
      link: '#',
      content: 'CATALOGUE',
    },
    {
      key: 'contact',
      link: '#',
      content: 'LIÊN HỆ',
    },
  ];
  const headerLeftTop = (items) => (
    <div>
      <ul className="d-flex justify-content-center pb-2 mt-2">
        {items.map((item, key) => (
          <li key={key} className="socialIcon">
            <a href={item.link} className="socialColor">
              {item.icons}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  const headerLeftBottom = (
    <div className="text-center">
      <img src="	http://www.equipfair.com/images/ets-logo.jpg"></img>
    </div>
  );

  const headerRightTop = (items) => (
    <div>
      <ul className="d-flex justify-content-end align-items-center pb-2 mt-2">
        {items.map((item, key) => (
          <li key={key} className="socialIcon socialColor">
            {item.icons}{' '}
            <a className="iconContact" href={item.link}>
              {item.content}
            </a>
          </li>
        ))}

        <li className="socialIcon socialColor loginButton">
          <i className="fas fa-user"></i>{' '}
          <a className="iconContact" href="mailto:sales.khomay@gmail.com">
            Đăng nhập
          </a>
        </li>
      </ul>
    </div>
  );
  const headerRightBottom = (items) => (
    <div>
      <ul className="d-flex justify-content-end align-items-center pb-2 mt-2">
        {items.map((item) => (
          <li key={item.key} className="contentNav">
            <a className="linkNav" href={item.link}>
              {item.content}
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  const headerTop = (
    <div className="container d-flex justify-content-between align-items-center">
      {headerLeftTop(social)}
      {headerRightTop(contact)}
    </div>
  );
  const headerBottom = (
    <div className="container header-bottom d-flex justify-content-between align-items-center">
      {headerLeftBottom}
      {headerRightBottom(navBar)}
    </div>
  );

  return (
    <div className="container-header">
      <div className="">
        <div >{headerTop}</div>
        <div className='background-header-bottom'>{headerBottom}</div>
      </div>
    </div>
  );
};

export default Header;
