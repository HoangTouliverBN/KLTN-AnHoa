import React from 'react';
import './section2.scss';

const Section2 = () => {
  const dataSection2 = [
    {
      img: 'http://www.equipfair.com/images/2019/09/13/san-pham.png',
      tittle: 'Sản phẩm đa dạng',
      content:
        'Cung cấp đầy đủ các thiết bị công nghiệp, phụ tùng thay thế, vật tư tiêu hao cho gia công cơ khí',
    },
    {
      img: 'http://www.equipfair.com/images/2019/09/13/xuat-xu.png',
      tittle: 'Sản phẩm đa dạng',
      content:
        'Cung cấp đầy đủ các thiết bị công nghiệp, phụ tùng thay thế, vật tư tiêu hao cho gia công cơ khí',
    },
    {
      img: 'http://www.equipfair.com/images/2019/09/13/giao-dich.png',
      tittle: 'Sản phẩm đa dạng',
      content:
        'Cung cấp đầy đủ các thiết bị công nghiệp, phụ tùng thay thế, vật tư tiêu hao cho gia công cơ khí',
    },
    {
      img: 'http://www.equipfair.com/images/2019/09/13/hau-mai.png',
      tittle: 'Sản phẩm đa dạng',
      content:
        'Cung cấp đầy đủ các thiết bị công nghiệp, phụ tùng thay thế, vật tư tiêu hao cho gia công cơ khí',
    },
  ];
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        {dataSection2.map((item, key) => (
          <div key={key} className="section-2-data text-center">
            <p>
              <img src={item.img} alt="" />
            </p>
            <p className="fs-3 fw-bold">{item.tittle}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
