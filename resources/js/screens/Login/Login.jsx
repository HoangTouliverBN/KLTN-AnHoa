import { React, useState } from 'react';
// import { Col, Form, Row } from 'react-bootstrap';
// import ApiService from '../../services';
// import cookie from 'react-cookies';

import './Login.scss';

const Login = () => {
  const [side, setSide] = useState(false);
  const sideForm = [
    {
      side: 0,
      header: 'Đăng nhập',
      content: 'Nhập địa chỉ email của bạn để nhận mã xắc minh đăng nhập',
      slide: 'Bạn chưa có tài khoản?',
      slideButton: 'Đăng ký',
    },
    {
      side: 1,
      header: 'Đăng ký',
      content: 'Nhập địa chỉ email của bạn để nhận mã xắc minh đăng nhập',
      slide: 'Bạn đã có tài khoản?',
      slideButton: 'Đăng nhập',
    },
  ];
  return (
    <div className="login-container">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="box">
            {sideForm.map((item, key) => (
              <div
                key={key}
                className={
                  (side && item.side === 0 && 'd-none') || (!side && item.side === 1 && 'd-none')
                }
              >
                <div className="login-nav d-flex justify-content-center align-items-center">
                  <h4 className="header-login">{item.header}</h4>
                </div>
                <p className="content-login text-center">{item.content}</p>
                <div className="text-center">
                  <input
                    className="input-email"
                    type="email"
                    placeholder="Nhập đỉa chị email"
                  ></input>
                </div>
                <div className="btn-submit-div text-center">
                  <button className="btn-submit">{item.header}</button>
                </div>
                <div className="footer-login d-flex justify-content-center align-items-end">
                  <p>
                    {item.slide}{' '}
                    <span
                      className="sign-up"
                      onClick={() => {
                        setSide(!side);
                      }}
                    >
                      {item.slideButton}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
