import axios from 'axios';

const BASE_URL = 'https://5fc9346b2af77700165ae514.mockapi.io/';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

//axiosInstance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//axiosInstance.defaults.headers['Accept-Encoding'] = 'gzip, deflate, br';

export default axiosInstance;