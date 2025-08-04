export const setToken = (KEY: string,VALUE: string)=>{
    // 设置本地存储的token
    localStorage.setItem(KEY, VALUE);
}

export const getToken = (KEY: string)=>{
    // 获取本地存储的token
    return localStorage.getItem(KEY);
}

export const removeToken = (KEY: string)=>{
    // 移除本地存储的token
    localStorage.removeItem(KEY);
}

