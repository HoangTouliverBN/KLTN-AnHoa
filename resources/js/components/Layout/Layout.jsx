import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children, ...props }) => {
  console.log("testttt")
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
