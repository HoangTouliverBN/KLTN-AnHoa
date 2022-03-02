import { React } from 'react';

import './introduce.scss';

const Introduce = () => {
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
  const tableData = [
    {
      number: 1,
      title: 'Tủ sấy que hàn, tủ sấy thuốc hàn',
    },
    {
      number: 2,
      title: 'Tủ sấy phòng thí nghiệm, thiết bị phòng LAB',
    },
    {
      number: 3,
      title: 'Máy mài',
    },
    {
      number: 4,
      title: 'Tủ hút khói hàn và các thiết bị liên quan',
    },
    {
      number: 5,
      title: 'Xe đẩy, bàn thao tác, …',
    },
    {
      number: 6,
      title: 'Máy hàn, máy cắt CNC',
    },
    {
      number: 7,
      title: 'Các chi tiết kim loại từ gia công tấm',
    },
    {
      number: 8,
      title: 'Mỏ cắt plasma và chi tiết tiêu hao',
    },
    {
      number: 9,
      title: 'Mỏ hàn hồ quang và các chi tiết tiêu hao',
    },
    {
      number: 10,
      title: 'Thiết bị hàn cắt hơi',
    },
    {
      number: 11,
      title: 'Thiết bị bảo hộ lao động',
    },
    {
      number: 12,
      title: 'Thiết bị khí nén và phụ tùng',
    },
    {
      number: 13,
      title: 'Thiết bị đo, thiết bị điều khiển',
    },
    {
      number: 14,
      title: 'Các thiết bị công nghiệp khác',
    },
  ];
  const headerLeftTop = (items) => (
    <div>
      <ul className="d-flex justify-content-end pb-2 mt-2">
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
  return (
    <div className="introduce">
      <div className="header">
        <div className="container">
          <h3>Giới thiệu</h3>
          <p>
            Bạn đang ở: Trang chủ / <span className="active">Giới thiệu</span>
          </p>
        </div>
      </div>
      <div className="container">
        <h1 className="page-header">Giới thiệu</h1>
        <div>
          <span className="fw-bold">Kính gửi Quý Khách Hàng,</span> <br /> <br /> Xin trân trọng
          giới thiệu chúng tôi là công ty Chế tạo - Thương mại - Tư vấn trong lĩnh vực thiết bị nhà
          xưởng, phòng thí nghiệm và dạy nghề kỹ thuật, … <br /> <br /> Các sản phẩm của chúng tôi
          được sản xuất ở Việt Nam và nhâp khẩu từ EU, USA. Japan. Korea, Singapore, China, … <br />{' '}
          <br /> <span className="fw-bold">Thành quả:</span>
          <br /> <br /> - Nghiên cứu, chế tạo thành công một số thiết bị như tủ sấy, máy mài, máy
          hàn, máy cắt CNC, …<br /> <br /> - Có đội ngũ chuyên gia chuyên nghiệp, giàu kinh nghiệm
          cho tư vấn, chuyển giao, kiểm soát chất lượng,
          <br /> <br /> - Có hệ thống nhà cung cấp và nhà thầu phụ uy tín trong nước nhằm đáp ứng
          các yêu cầu về chế tạo.
          <br /> <br /> - Có hệ thống các nhà cung cấp thiết bị uy tín trên toàn cầu.
          <br /> <br /> <span className="fw-bold">Kinh nghiệm:</span>
          <br /> <br /> - Các sản phẩm và dịch vụ kỹ thuật của chúng tôi đã được nhiều khách hàng
          tin dùng và sử dụng. <br /> <br /> - Các thiết bị do chúng tôi nghiên cứu chế tạo, phát
          triển được sử dụng trong các lĩnh vực gia công kim loại và chế tạo máy, lắp máy, xây dựng,
          dạy nghề kỹ thuật và sử dụng trong phòng thí nghiệm. Các thiết bị của chúng tôi đã được sử
          dụng cho nhiều dự án lớn của đất nước như dự án xây dựng nhà máy Samsung, nhà máy thủy
          điện Lai Châu, tổ hợp lọc dầu Nghi Sơn, tổ hợp thép Formasa, các dự án của dầu khí Việt
          Xô, …<br /> <br />
          <span className="fw-bold">Các sản phẩm chính: </span>
          <div className="custome-table">
            <tr className="row custome-tr">
              <th className="text-center custome-td col-1">STT</th>
              <th className="text-center col-11">CÁC SẢN PHẨM CHÍNH</th>
            </tr>
            {tableData.map((item, key) => (
              <tr key={key} className="row custome-tr">
                <td className="text-center col-1 custome-td">{item.number}</td>
                <td className="col-11">{item.title}</td>
              </tr>
            ))}
          </div>
          <div className="pt-5 pb-5">
            <span className="fw-bold">Dịch vụ Tư Vấn:</span> <br /> <br /> Trọng tâm của nghiên cứu
            và chuyển giao của chúng tôi là các lĩnh vực hàn cắt kim loại, sấy điện, hút <br /> và
            xử lý khói hàn, điều khiển và tự động hóa, thiết bị dạy nghề kỹ thuật,… <br /> <br />{' '}
            Hãy liên hệ với chúng tôi theo email:{' '}
            <a href="mailto:sales.khomay@gmail.com" className="iconContact">
              sales.khomay@gmail.com
            </a>{' '}
            để có thêm thông tin chi tiết. <br /> <br />
            Mong được công tác với Quý Khách Hàng trong thời gian sớm! <br /> <br /> Trân trọng,
            <br />
            <br />
            Tổng Giám đốc <br />
            <span className="fw-bold">Nguyễn Quý Tính</span>
          </div>
          <div>
            <div>{headerLeftTop(social)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
