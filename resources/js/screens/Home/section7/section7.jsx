import React from 'react';
import './section7.scss';

const Section7 = () => {
  const dataSection7 = {
    video: 'https://www.youtube.com/embed/SczeNLuyrJ4?feature=emb_imp_woyt',
    tittle: 'Đáp ứng yêu cầu của mọi nhà thầu',
    content:
      'Qua hơn 20 năm hoạt động ETS - An Hòa đã từng bước khẳng định vị thế và vai trò của một đơn vị cung cấp có uy tín các trang thiết bị nhà xưởng, thiết bị công nghệ, vật tư tiêu hao và phụ tùng thay thế tiêu chuẩn. Bên cạnh các dòng sản phẩm được nhập khẩu từ các nước Châu Âu, Mỹ, Nhật bản, Hàn quốc, Trung quốc, chúng tôi còn chú trọng thương mại hóa các sản phẩm được sản xuất và lắp ráp tại Việt Nam với chất lượng từ tương đương tới vượt trội với mức giá rất cạnh tranh và chính sách thương mại linh hoạt. Chính vì vậy ETS - An Hòa đã trở thành đối tác tin cậy của các nhà thầu thiết bị, vật tư trong và ngoài nước, họ luôn hài lòng về chất lượng sản phẩm và dịch vụ của chúng tôi.',
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <p className="fs-3 fw-bold">{dataSection7.tittle}</p>
          <p className="content-introduction ">{dataSection7.content}</p>
        </div>
        <div className="col-6">
          <iframe className="video-introduction" src={dataSection7.video}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Section7;
