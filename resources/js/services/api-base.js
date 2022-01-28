/**
 * API Base
 */

import axios from 'axios';
import cookie from 'react-cookies'

const baseApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3000/'}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + cookie.load('token')
    
  },
  timeout: 5000,
});



export default  baseApi;
