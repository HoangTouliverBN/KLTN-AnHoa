import React from 'react';
import './section9.scss';

const Section9 = () => {
  const dataSection9a = {
    title: 'ETS An Hoa',
    content:
      'Công ty TNHH Thiết bị và các Giải pháp Công nghệ An Hòa là nhà cung cấp chuyên nghiệp thiết bị công nghiệp được nhập khẩu cũng như được sản xuất - lắp ráp từ các nhà sản xuất uy tín tại Việt nam',
  };
  const dataSection9b = {
    title: 'Thông tin',
    content: [
      {
        contentChild: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L1',
        link: '#',
        date: '30 Tháng 8 2021',
      },
      {
        contentChild: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.L2',
        link: '#',
        date: '30 Tháng 8 2021',
      },
      {
        contentChild: 'Bộ mỏ hàn cắt hơi Messer (Đức) model MSV.H',
        link: '#',
        date: '30 Tháng 8 2021',
      },
    ],
  };
  const dataSection9c = {
    title: 'Đối tác',
    content: [
      {
        contentChild: ' vmccgroup',
        link: '#',
      },
      {
        contentChild: ' ITD',
        link: '#',
      },
      {
        contentChild: ' Equip Store',
        link: '#',
      },
      {
        contentChild: ' Tem',
        link: '#',
      },
    ],
  };
  return (
    <div className="container">
      <div className="row justify-content-between p-5">
        <div className="col-3">
          <h3>{dataSection9a.title}</h3>
          <p>{dataSection9a.content}</p>
        </div>
        <div className="col-3">
          <h3>{dataSection9b.title}</h3>
          {dataSection9b.content.map((child, key) => (
            <div key={key}>
              <a className="link" href={child.link}>
                {child.contentChild}
              </a>
              <p>{child.date}</p>
            </div>
          ))}
        </div>
        <div className="col-3">
          <h3>{dataSection9c.title}</h3>
          {dataSection9c.content.map((item, key) => (
            <div key={key}>
              <p>
                <a href={item.link} className="link">
                  <i className="fal fa-chevron-right"></i>
                  {item.contentChild}
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="col-3">
          <h3>Bản đồ</h3>
          <iframe
            tabIndex="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.6561840019!2d105.79103472194704!3d21.023540792193607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac062dadeea5%3A0xb3a6f890a89f50ff!2zQ8O0bmcgVHkgVG5oaCBUaGnhur90IELhu4sgJiBDw6FjIEdp4bqjaSBQaMOhcCBDw7RuZyBOZ2jhu4cgQW4gSMOyYQ!5e0!3m2!1svi!2s!4v1602650911517!5m2!1svi!2s"
            width="250"
            height="250"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Section9;
