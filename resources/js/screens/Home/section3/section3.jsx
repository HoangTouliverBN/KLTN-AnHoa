import React from 'react';
import './section3.scss';

const Section3 = () => {
  const dataSection3 = {
    video: 'https://www.youtube.com/embed/DnOtQ7tqU48?feature=emb_imp_woyt',
    tittle: 'ETS An Hòa',
    content:
      'Chúng tôi chuyên cung cấp Thiết bị Công nghiệp, Vật tư tiêu hao, Phụ tùng thay thế và các Giải pháp Công nghệ cho các nhà máy, cơ xưởng... Các sản phẩm được cung cấp đều có nguồn gốc xuất xứ rõ ràng và được nhập khẩu từ các nước Châu Âu, Mỹ, Nhật Bản, Hàn Quốc, Trung Quốc... hoặc được sản xuất hay lắp ráp tại Việt Nam. Các sản phẩm đều đảm bảo đạt chất lượng theo các tiêu chuẩn khắt khe nhất của nền sản xuất công nghiệp hiện đại và thân thiện môi trường. Hãy liên hệ ngay với Chúng tôi để biết thông tin chi tiết.',
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <iframe className="video-introduction" src={dataSection3.video}></iframe>
        </div>
        <div className="col-6">
          <p className="fs-3 fw-bold">{dataSection3.tittle}</p>
          <p className="content-introduction ">{dataSection3.content}</p>
          <p>
            <a className="btn btn-phone" href="tel:02436367574">
              <i className="fas fa-phone-square-alt"> 024 36367574 </i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
