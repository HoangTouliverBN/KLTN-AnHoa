import { React } from 'react';

import './DetailProduct.scss';

const DetailProduct = () => {
  const detailProduct = {
    id: 1,
    title: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
    image: 'http://www.equipfair.com/images/San-pham/han-cat-hoi/-_11.png',
    category: 'Hàn cắt hơi',
    descriptions: (
      <>
        Bộ mỏ hàn cắt hơi tiêu chuẩn Model: MSV.L1 gồm có: <br />
        <br /> * Mỏ hàn đã bao gồm 05 bép hàn (0,5 - 2,5mm): Allgas 2003
        <br /> * Mỏ cắt L510 (Cắt max 300mm): PNME: Proficut L / H * 03 Bép cắt (6 – 125mm): PNME
        <br /> * Đồng hồ Oxy: Tonador R/V - O * Đồng hồ Gas: Tonador R/UB - A <br /> * Van chống
        cháy ngược lắp đồng hồ Oxy: SRT 3/8” RH
        <br /> * Van chống cháy ngược lắp đồng hồ gas: SRT 3/8” LH
        <br /> * Thông tắc bép CTC.1 / Kính hàn CG.1 / Đánh lửa TG.1 (China)
        <br /> * Dây hơi đôi 10M (Korea)
        <br /> * Thiết bị tự chọn: Xe đẩy bình khí MGTR-02 / Hộp sắt VSB (VN)
      </>
    ),
    quantity: 'Còn hàng',
    price: 129000,
  };
  return (
    <div className="detail-product">
      <div className="header">
        <div className="container">
          <h3>Dự án</h3>
          <p>
            Bạn đang ở: Trang chủ / Sản phẩm /{' '}
            <span className="active">Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1</span>
          </p>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <h2 className="mb-4">{detailProduct.title}</h2>
          <div className="row">
            <div className="col-4">
              <img src={detailProduct.image} className="image-detail" alt="" />
            </div>
            <div className="col-6">
              <p>Loại: {detailProduct.category}</p>
              <p>{detailProduct.descriptions}</p>
              <p>Số lượng: {detailProduct.quantity}</p>
              <p>Giá tiền: {detailProduct.price}</p>
              <p>
                <div className="btn-submit-div">
                  <a href="" className="btn-submit">
                    Thêm vào giỏ hàng
                  </a>
                </div>{' '}
              </p>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
