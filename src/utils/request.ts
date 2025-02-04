import axios from "axios";

const request = axios.create({
    baseURL: '/api',
    timeout: 4000  
})

// 请求拦截器
request.interceptors.request.use((config) => {
    return config;
});

// 响应拦截器
request.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(new Error(error.message));
});
 
export default request;