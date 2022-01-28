import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
//import { CookiesProvider } from 'react-cookie';

if (document.getElementById('appRoot')) {
  ReactDOM.render(<App />, document.getElementById('appRoot'));
}
