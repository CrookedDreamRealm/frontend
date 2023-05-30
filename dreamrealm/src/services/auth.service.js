import axios from 'axios';
import authHeader from './servicesHeader.js';

//local
const API_URL = 'http://dreamrealm.com/api/auth/';

class AuthService {
  async login(user) {
    return await axios
      .post(API_URL + 'signin', {
        username: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

  getChangePassword(user){
    return axios.get(API_URL + 'changePassword/' + user.token, { headers: authHeader() });
  }

  changePassword(user){
    return axios.post(API_URL + 'changePassword', {
      password: user.password,
      token: user.token,
    });
  }

  changePasswordProfile(user){
    console.log(user);
    return axios.post(API_URL + 'changePasswordProfile/' + user.userId, {
      password: user.password,
    });
  }

  forgotPassword(user){
    return axios.post(API_URL + 'forgotPassword', {
      email: user.email,
    });
  }
}

export default new AuthService();
