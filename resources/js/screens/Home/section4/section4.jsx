import React from 'react';
import './section4.scss';

const Section4 = () => {
  const dataSection4 = [
    {
      title: 11,
      content: 'Nhóm ngành hàng mũi nhọn',
    },
    {
      title: 50,
      content: 'Nhóm sản phẩm đặc thù',
    },
    {
      title: 500,
      content: 'Sản phẩm cho nhà xưởng',
    },
  ];
  return (
    <div className="container">
      <div className="text-center">
        <h1>Nguồn cung cấp đầy đủ</h1>
        <div className="d-flex justify-content-center">
          <p className="content">
            {' '}
            Bạn có thể tìm thấy tại đây toàn bộ trang thiết bị nhà xưởng từ máy móc thiết bị công
            nghiệp nặng, các giải pháp tự động hóa, công nghệ tiên tiến cho đến các phụ tùng thay
            thế và vật tư tiêu hao cho các dự án chào thầu của mình.
          </p>
        </div>
      </div>
      <div className="section4-2 d-flex justify-content-between">
        {dataSection4.map((item, key) => (
          <div key={key}>
            <h1 className="text-center">{item.title}</h1>
            <p className="content2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
