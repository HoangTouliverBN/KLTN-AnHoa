import { React } from 'react';

import './Project.scss';

const Project = () => {
  const dataProject = [
    {
      id: 1,
      title: 'Thiết bị dậy nghề hàn - PA2',
      author: 'Viết bởi KHO MÁY VIỆT',
      views: 0,
    },
    {
      id: 2,
      title: 'Thiết bị dậy nghề hàn - PA1',
      author: 'Viết bởi KHO MÁY VIỆT',
      views: 0,
    },
  ];
  return (
    <div className="project">
      <div className="header">
        <div className="container">
          <h3>Dự án</h3>
          <p>
            Bạn đang ở: Trang chủ / <span className="active">Dự án</span>
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <table className="table">
          <tr>
            <th className="title fw-bold">Tiêu đề</th>
            <th className="title fw-bold">Tác giả</th>
            <th className="title fw-bold">Lượt xem</th>
          </tr>
          {dataProject.map((item, key) => (
            <tr className={item.id % 2 !== 0 ? 'item-odd item' : 'item'} key={key}>
              <td className="child child-title">{item.title}</td>
              <td className="child">{item.author}</td>
              <td className="child fw-bold">
                <span className="child-views ">Lượt xem: {item.views}</span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Project;
