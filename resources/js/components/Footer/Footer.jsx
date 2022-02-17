// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState(
    '©2022 Công ty TNHH Thiết bị và Các giải pháp Công nghệ An Hòa - Nhà cung cấp chuyên nghiệp thiết bị công nghiệp được nhập khẩu cũng như được sản xuất - lắp ráp từ các nhà sản xuất uy tín tại Việt nam; Địa chỉ: 501 A6, ngõ 29 phố Lạc Trung, quận Hai Bà Trưng, thành phố Hà Nội Điện thoại: 0919536088, Website: www.ets-anhoa.com, Email: sales.khomay@gmail.com'
  );
  return (
    <div className="footer">
      <div className="container">
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};

export default Footer;
