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
import { Home} from '../screens';

const routes = {
  baseRouterPath: '',
  children: [
    { name: 'Home', path: '/', component: Home },
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
