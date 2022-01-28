/**
 * API Services
 */
import baseApi from './api-base';




export const ENDPOINTS = {
  LOGIN: '/fe-api/login',
  REGISTER: '/fe-api/register',
  AUTHENTICATE: '/fe-api/authenticate',
  USER:'/fe-api/user',
  LOGOUT:'/fe-api/logout',
};

class ApiService {
  
  async login(data) {
    const results = await baseApi.post(ENDPOINTS.LOGIN, data);
    return results;
  }

  async register(data) {
    const results = await baseApi.post(ENDPOINTS.REGISTER, data);
    return results;
  }

  async authenticate(data) {
    const results = await baseApi.post(ENDPOINTS.AUTHENTICATE, data);
    return results;
  }

  async getUser(){
    const results= await baseApi.get(ENDPOINTS.USER);
    return results;
  }
  async logout(){
    const results= await baseApi.get(ENDPOINTS.LOGOUT);
    return results;
  }
}

export default new ApiService();
