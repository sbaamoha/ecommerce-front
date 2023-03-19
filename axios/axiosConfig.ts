import axios from "axios";
import { getCookie } from "cookies-next";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
axiosClient.interceptors.request.use((config) => {
  const token = getCookie("token");
  //   if (config.headers) {
  config.headers.Authorization = token;
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
