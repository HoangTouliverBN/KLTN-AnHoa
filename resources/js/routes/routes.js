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
import { Home, Login, Shop, School, FAQ, Referral } from '../screens';

const routes = {
  baseRouterPath: '',
  children: [
    { name: 'Home', path: '/', component: Home },
    { name: 'Shop', path: '/shop', component: Shop },
    { name: 'Login', path: '/login', component: Login },
    { name: 'School', path: '/schools', component: School },
    { name: 'FAQ', path: '/faq', component: FAQ },
    { name: 'Referral', path: '/referral', component: Referral },
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
