import axios from './axios';

const auth = {
  login: (data) => axios.post('token/', data),
  register: (data) => axios.post('register/', data),
  getProfile: () => axios.get('profile/')
};

export default auth;