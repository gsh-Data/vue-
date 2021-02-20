import axios from "axios"
const BASEURL=  process.env.NODE_ENV === "production" ? "" : "/devApi";
const instance = axios.create({
    // baseURL: process.env.BASE_API,  // 该处url会根据开发环境进行变化（开发/发布）
    baseURL: BASEURL,  // 该处url会根据开发环境进行变化（开发/发布）
	timeout: 1000  // 设置请求超时连接时间
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default instance
