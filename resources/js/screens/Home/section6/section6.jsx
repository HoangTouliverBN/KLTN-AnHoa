import React, { useState } from 'react';
import './section6.scss';

const Section6 = () => {
  const [open, setOpen] = useState(1);
  const dataSection4 = [
    {
      number: 1,
      title: 'Chính sách bảo mật thông tin',
      content: (
        <span>
          Để thuận tiện tối đa và đỡ mất thời gian cho khách hàng, trang web{' '}
          <a href="http://www.ets-anhoa" className="linkNav">
            http://www.ets-anhoa
          </a>{' '}
          không yêu cầu khách hàng đăng ký tài khoản. Tuy nhiên, tất cả các thông tin liên hệ của
          Quý khách hàng mà chúng tôi có được thông qua các giao dịch như email, điện thoại hay gặp
          gỡ trực tiếp sẽ được sử dụng theo quy định về bảo mật thông tin tại điều 68 đến Điều 73
          Nghị định 52/2013/NĐ-CP.<br></br>
          <br></br> ETS-ANHOA không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng như
          đã nói ở trên cho một bên thứ ba nào khác.<br></br> <br></br> Thông tin cá nhân thu thập
          được sẽ chỉ được sử dụng trong nội bộ công ty tất cả các nhân sự của chúng tôi đều phải ký
          những cam kết bảo mật tương tự.<br></br> <br></br> Chúng tôi rất quan tâm đến quyền riêng
          tư của quý khách khi quý khách sử dụng những dịch vụ của chúng tôi.Chúng tôi cũng hiểu
          rằng quý khách sẽ rất quan tâm đến việc những thông tin mà quý khách cũng cấp cho chúng
          tôi có được bảo mật an toàn hay không. Và chúng tôi luôn muốn quý khách sẽ thật yên tâm và
          tin tưởng khi tham gia các dịch vụ của chúng tôi. Vì vậy chúng tôi cam kết sẽ khiến quý
          khách có những trải nghiệm tuyệt vời nhất khi mua sắm hàng của chúng tôi với sự tin tưởng
          hoàn toàn.<br></br> <br></br> Chúng tôi tạo ra chính sách bảo mật này để chứng minh cho
          cam kết về sự an toàn bảo mật với quý khách hàng. Qua Chính sách bảo mật thông tin này,
          chúng tôi muốn quý khách hiểu được về việc chúng tôi thu thập thông tin khách hàng, việc
          sử dụng và chia sẻ thông tin cũng như việc bảo mật thông tin khách hàng của chúng tôi.
        </span>
      ),
    },
    {
      number: 2,
      title: 'Thông tin chúng tôi thu thập',
      content: (
        <span>
          Địa chỉ Email; Tên; Số điện thoại; Địa chỉ giao hàng<br></br> <br></br> Những thông tin
          trên sẽ được sử dụng cho một hoặc tất cả các mục đích sau đây: <br></br> <br></br>Giao
          hàng quý khách đã mua hàng tại ETS-ANHOA <br></br> <br></br>Thông báo về việc giao hàng và
          hỗ trợ khách hàng <br></br> <br></br>Cung cấp thông tin liên quan đến sản phẩm <br></br>{' '}
          <br></br>Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin của chúng tôi theo yêu cầu
          của quý<br></br> <br></br> khách Ngoài ra, chúng tôi sẽ sử dụng thông tin quý khách cung
          cấp để hỗ trợ quản lý tài khoản khách hàng; xác nhận và thực hiện các giao dịch tài chính
          liên quan đến các khoản thanh toán trực tuyến của quý khách.<br></br> <br></br> Chi tiết
          đơn hàng của quý khách sẽ được chúng tôi lưu trữ nhưng vì lý do bảo mật, quý khách không
          thể yêu cầu thông tin đó từ chúng tôi
        </span>
      ),
    },
    {
      number: 3,
      title: 'Phạm vi sử dụng thông tin',
      content: (
        <span>
          Chúng tôi có thể chia sẻ tên, số điện thoại và địa chỉ của quý khách cho dịch vụ chuyển
          phát nhanh để có thể giao hàng cho quý khách
        </span>
      ),
    },
    {
      number: 4,
      title: 'Thời gian lưu trữ thông ting',
      content: (
        <span>
          Công ty TNHH ETS-ANHOA sẽ lưu trữ các Thông tin cá nhân do khách hàng cung cấp trên các hệ
          thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho khách hàng hoặc cho đến
          khi hoàn thành mục đích thu thập hoặc khi Khách hàng có yêu cầu hủy các thông tin đã cung
          cấp
        </span>
      ),
    },
    {
      number: 5,
      title: 'Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân',
      content: (
        <span>
          P501 –A6 – Ngõ 29 Lạc Trung, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội ặc khi
          Khách hàng có yêu cầu hủy các thông tin đã cung cấp
        </span>
      ),
    },
    {
      number: 6,
      title: 'Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình',
      content: (
        <span>
          Trang web{' '}
          <a href="http://www.ets-anhoa" className="linkNav">
            http://www.ets-anhoa
          </a>{' '}
          không áp dụng chức năng mở - đăng ký tài khoản khách hàng nên nếu Quý Khách hàng muốn
          thông báo các thông tin cá nhân của mình tới ETS-ANHOA bằng cách gửi thông báo qua email,
          tel, thư tín, …
        </span>
      ),
    },
  ];
  return (
    <div className="overley">
      <div className="container">
        <div className="text-center">
          <h1>Cam kết của chúng tôi</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="section6-2">
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

export default Section6;
