import axios from "axios";
import useUserStore from "@/store/user";

const request = axios.create({
    baseURL: '/api',
    timeout: 4000  
})

// 请求拦截器
request.interceptors.request.use((config) => {

    if(useUserStore().userInfo.token){
        config.headers.token = useUserStore().userInfo.token; // 将token添加到请求头中
    }
    return config;
});

// 响应拦截器
request.interceptors.response.use((res: any) => {
    if (res.data.code !== 200) {
        return Promise.reject(new Error('请求失败'));
    }
    return res.data;
}, (error) => {
    return Promise.reject(new Error(error.message));
});
 
export default request;