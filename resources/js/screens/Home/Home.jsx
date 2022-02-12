import React from 'react';
import './Home.scss';

const Home = () => {
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
  const dataSection3 = {
    video: 'https://www.youtube.com/embed/DnOtQ7tqU48?feature=emb_imp_woyt',
    tittle: 'ETS An Hòa',
    content:
      'Chúng tôi chuyên cung cấp Thiết bị Công nghiệp, Vật tư tiêu hao, Phụ tùng thay thế và các Giải pháp Công nghệ cho các nhà máy, cơ xưởng... Các sản phẩm được cung cấp đều có nguồn gốc xuất xứ rõ ràng và được nhập khẩu từ các nước Châu Âu, Mỹ, Nhật Bản, Hàn Quốc, Trung Quốc... hoặc được sản xuất hay lắp ráp tại Việt Nam. Các sản phẩm đều đảm bảo đạt chất lượng theo các tiêu chuẩn khắt khe nhất của nền sản xuất công nghiệp hiện đại và thân thiện môi trường. Hãy liên hệ ngay với Chúng tôi để biết thông tin chi tiết.',
  };
  // Section1
  const section1 = (items) => (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, key) => (
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
  // Section2
  const section2 = (items) => (
    <div className="container">
      <div className="d-flex justify-content-between">
        {items.map((item, key) => (
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
  const section3 = (item) => (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <iframe className="video-introduction" src={item.video}></iframe>
        </div>
        <div className="col-6">
          <p className="fs-3 fw-bold">{item.tittle}</p>
          <p className="content-introduction ">{item.content}</p>
          <p>
            <a className="btn btn-phone" href="tel:02436367574">
              <i className="fas fa-phone-square-alt"> 024 36367574 </i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="container-home">
      <div className="SlideShow1">{section1(dataSection1)}</div>
      <div className="SlideShow2">{section2(dataSection2)}</div>
      <div className="SlideShow3">{section3(dataSection3)}</div>
    </div>
  );
};

export default Home;
