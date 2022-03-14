/**
 * Routers
 */

import React from 'react';

// Library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { CookiesProvider } from 'react-cookie';
// Component
import { Layout } from '../components';

// Screen
import { Home, Login, Introduce, Project, Product, DetailProduct, ShoppingCart } from '../screens';

const routes = {
  baseRouterPath: '',
  children: [
    { name: 'Home', path: '/ets/', component: Home },
    { name: 'Login', path: '/ets/login', component: Login },
    { name: 'Introduce', path: '/ets/introduce', component: Introduce },
    { name: 'Project', path: '/ets/project', component: Project },
    { name: 'Product', path: '/ets/product', component: Product },
    { name: 'DetailProduct', path: '/ets/product/detail', component: DetailProduct },
    { name: 'ShoppingCart', path: '/ets/shopping-cart', component: ShoppingCart },
  ],
};

const Routers = ({ ...otherProps }) => {
  return (
    // <CookiesProvider>
    <Router>
      <Switch>
        {routes.children.map((item, key) => (
          <Route
            exact
            path={`${routes.baseRouterPath}${item.path}`}
            key={key}
            render={() => {
              const Component = item.component;
              return (
                <Layout>
                  <Component baseRouterPath={routes.baseRouterPath} />
                </Layout>
              );
            }}
            {...otherProps}
          />
        ))}
      </Switch>
    </Router>

    // </CookiesProvider>
  );
};

export { routes };
export default Routers;
