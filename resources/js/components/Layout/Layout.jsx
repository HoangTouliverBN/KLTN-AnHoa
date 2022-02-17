import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss';

const Layout = ({ children, ...props }) => {
  return (
    <div className="container-layout" {...props}>
      <Header />
      <div className="main-content"> {children} </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {};

export default Layout;
