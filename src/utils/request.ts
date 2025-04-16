import axios from 'axios';
import router from "@/router";

const request = axios.create({
    baseURL: window.apiURL,
    // timeout: 5000,
});

// 请求拦截
request.interceptors.request.use(
    (config: any) => {
        const token = sessionStorage.getItem('hightoken');
        const user = sessionStorage.getItem('highname');
        if (token && user) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// 响应拦截
request.interceptors.response.use(
    (res) => {
      if (res.data.code == 403) {
        sessionStorage.removeItem("hightoken");
        sessionStorage.removeItem("highname");
        router.push('/login');
      } 
        return res;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default request;
