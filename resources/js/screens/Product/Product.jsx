import { React } from 'react';

import './Product.scss';

const Product = () => {
  const dataProduct = [
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Đồng hồ Oxy (Messer - Đức)',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/oxygen-regulator-400.jpg',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L2',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/mo-han-messer-200x200.jpg',
      name: 'Mỏ hàn hơi Messer - Đức',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.H',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_21.png',
      name: 'Đồng hồ Ni tơ đầu ra 16 bar (Messer - Đức)',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
    },
    {
      image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
      name: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
    },
  ];
  return (
    <div className="product">
      <div className="header">
        <div className="container">
          <h3>Sản phẩm</h3>
          <p>
            Bạn đang ở: Trang chủ / <span className="active">Sản phẩm</span>
          </p>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <h3 className="mb-4">Sản phẩm</h3>
          <div className="row">
            {dataProduct.map((item, key) => (
              <div key={key} className="col-3">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
