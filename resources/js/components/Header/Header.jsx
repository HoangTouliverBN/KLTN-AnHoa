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
      link: '/introduce',
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
  const category = [
    {
      id: 1,
      name: 'Thiết bị hàn cắt',
    },
    {
      id: 2,
      name: 'Thiết bị sấy ủ',
    },
    {
      id: 3,
      name: 'Thiết bị nâng hạ',
    },
  ];
  const product = [
    {
      category: 1,
      id: 1,
      name: 'Hàn cắt hơi',
    },
    {
      category: 1,
      id: 2,
      name: 'Hàn cắt điện',
    },
    {
      category: 1,
      id: 3,
      name: 'Vật tư hàn',
    },
    {
      category: 1,
      id: 4,
      name: 'Mỏ cắt Plasma OTC',
    },
    {
      category: 2,
      id: 5,
      name: 'Lò nung',
    },
    {
      category: 2,
      id: 6,
      name: 'Tủ sấy que hàn',
    },
    {
      category: 2,
      id: 7,
      name: 'Tủ sấy thí nghiệm',
    },
    {
      category: 3,
      id: 8,
      name: 'Palang điện',
    },
    {
      category: 3,
      id: 9,
      name: 'Palang kéo tay',
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
          <a className="iconContact" href="/login">
            Đăng nhập
          </a>
        </li>
      </ul>
    </div>
  );
  const ProductDiv = (items, id) => (
    <div>
      {items.map(
        (item) =>
          item.category === id && (
            <div
              key={item}
              className="d-flex justify-content-between align-items-center item-category"
            >
              <div>{item.name}</div>
            </div>
          )
      )}
    </div>
  );
  const categoryDiv = (items) => (
    <div>
      {items.map((item) => (
        <div key={item} className="d-flex justify-content-between align-items-center item-category">
          <div>{item.name}</div>
          <div>
            <i className="fal fa-chevron-right"></i>
          </div>
          <div className="productDiv
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          






            
          l
      }}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]">{ProductDiv(product, item.id)}</div>
        </div>
      ))}
    </div>
  );

  const headerRightBottom = (items) => (
    <div>
      <ul className="d-flex justify-content-end align-items-center pb-2 mt-2">
        {items.map((item) => (
          <li
            key={item.key}
            className={item.key === 'product' ? 'product contentNav' : 'contentNav'}
          >
            <a className="linkNav" href={item.link}>
              {item.content}
              {item.icon}
            </a>
            {item.key === 'product' && <div className="category">{categoryDiv(category)}</div>}
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
        <div>{headerTop}</div>
        <div className="background-header-bottom">{headerBottom}</div>
      </div>
    </div>
  );
};

export default Header;
