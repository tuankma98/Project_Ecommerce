import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
});

axiosClient.defaults.headers.common['Content-Type'] =
  'application/json;charset=utf-8';

export default axiosClient;
