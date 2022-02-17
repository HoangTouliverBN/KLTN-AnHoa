import React, { useState } from 'react';
import './section5.scss';

const Section5 = () => {
  const [open, setOpen] = useState(1);
  const dataSection4 = [
    {
      number: 1,
      icon: 'fa fa-fax',
      title: 'Hỏi hàng',
      content: 'Khách hàng hỏi hàng hoặc gửi yêu cầu báo giá tới ETS - An Hòa',
    },
    {
      number: 2,
      icon: 'fa fa-copy',
      title: 'Báo giá',
      content:
        'ETS- An Hòa gửi báo giá cho khách hàng bằng văn bản dưới dạng giấy truyền thống hoặc bản PDF đã được ký bằng chữ ký số',
    },
    {
      number: 3,
      icon: 'far fa-calendar',
      title: 'Đặt hàng',
      content: 'Khách hàng xác nhận đặt hàng bằng cách gửi đơn hàng chính thức tới ETS - An Hòa',
    },
    {
      number: 4,
      icon: 'far fa-calendar-check',
      title: 'Xác nhận',
      content:
        'ETS - An Hòa gửi thông báo chấp nhận đơn đặt hàng của khách hoặc bản hợp đồng (giấy truyền thống hoặc bản PDF có chữ ký số)',
    },
    {
      number: 5,
      icon: 'fa fa-university',

      title: 'Thanh toán',
      content:
        'Khách hàng thanh toán tiền hàng theo đơn hàng đã đặt hay hợp đồng đã được ký kết giữa hai bên',
    },
    {
      number: 6,
      icon: 'fa fa-truck',
      title: 'Giao hàng',
      content: (
        <span>
          ETS - An Hòa giao hàng và hướng dẫn sử dụng, vận hành cho khách hàng theo đơn hàng hay hợp
          đồng đã được ký kết giữa hai bên. Trong bước này, chúng tôi sử dụng hình thức giao hàng
          như sau: <br></br>
          <br></br>
          &emsp;&emsp;• Miễn phí giao hàng cho khách hàng trong nội thành Hà Nội
          <br></br>
          &emsp;&emsp;• Giao hàng qua các công ty giao nhận Viettel, Hỏa Xa, NASCO và các dịch vụ
          vận tải khác như xe khách, xe tải,<br></br>
          <br></br> &ensp;Chính sách đổi/trả hàng và hoàn tiền: <br></br>
          <br></br> Sau khi nhận hàng và trước khi sử dụng hàng hóa, nếu Quý khách hàng thấy sản
          phẩm bị lỗi hoặc không đúng quy cách như đã đặt hàng, Công ty ETS-ANHOA sẽ có trách nhiệm
          đổi sản phẩm mới theo yêu cầu của đơn hàng hoặc hoàn trả lại 100% tiền hàng nếu không đổi
          mới được sản phẩm
        </span>
      ),
    },
    {
      number: 7,
      icon: 'fa fa-wrench',
      title: 'Bảo hành',
      content:
        'ETS - An Hòa bảo hành cho sản phẩm theo quy định trong đơn hàng hay hợp đồng đã được ký kết giữa hai bên.',
    },
  ];
  return (
    <div className="overley">
      <div className="container">
        <div className="text-center">
          <h1>Quy trình giao dịch thuận tiện</h1>
          <div className="d-flex justify-content-center">
            <p className="content">
              ETS - An Hòa giao hàng và hướng dẫn sử dụng, vận hành cho khách hàng theo đơn hàng hay
              hợp đồng đã được ký kết giữa hai bên. Trong bước này, chúng tôi sử dụng hình thức giao
              hàng như sau: <br></br>• Miễn phí giao hàng cho khách hàng trong nội thành Hà Nội /
              nội thành TP Hồ Chí Minh<br></br> • Giao hàng qua các công ty giao nhận Viettel, Hỏa
              Xa, NASCO và các dịch vụ vận tải khác như xe khách, xe tải. <br></br>
              <span className="fw-bold">Chính sách đổi/trả hàng và hoàn tiền:</span> <br></br>Sau
              khi nhận hàng và trước khi sử dụng hàng hóa, trong thời gian 10 ngày kể từ ngày nhận
              hàng, nếu Quý khách hàng thấy sản phẩm bị lỗi hoặc không đúng quy cách như đã đặt
              hàng, Công ty ETS-ANHOA sẽ có trách nhiệm đổi sản phẩm mới theo yêu cầu của đơn hàng
              hoặc hoàn trả lại 100% tiền hàng nếu không đổi mới được sản phẩm.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="section5-2">
            {dataSection4.map((item, key) => (
              <div key={key} className="parent">
                <div
                  className="title d-flex justify-content-between align-items-center"
                  onClick={() => {
                    setOpen(item.number);
                    if (open === item.number) {
                      setOpen(false);
                    }
                  }}
                >
                  <div className="fw-bold">
                    <i className={item.icon}></i> {item.title}
                  </div>
                  <div className="font-size-icon">
                    {open === item.number ? (
                      <i className="fas fa-chevron-down"></i>
                    ) : (
                      <i className="fas fa-angle-right"></i>
                    )}
                  </div>
                </div>
                <p className={open === item.number ? 'content' : 'd-none'}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
