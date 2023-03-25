import axios from "axios";
import Cookies from "js-cookie";
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
axiosClient.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  //   if (config.headers) {
  config.headers.Authorization = `Bearer ${token}`;
  //   }
  return config;
});

// axiosClient.interceptors.response.use((response) => {
//     return response
// }, (error) => {
//     const {response} = error
//     if(response.status === 404){

//     }
// } )

export default axiosClient;
