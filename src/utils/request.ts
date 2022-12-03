import config from "@/config";
import type { AxiosRequestConfig } from "axios";
import { message } from "ant-design-vue";

import router from "@/router";
const axiosConfig: AxiosRequestConfig = {
  baseURL: config.baseApi,
  timeout: 3000,
};

// 创建axios实例对象
const service = axios.create(axiosConfig);

service.interceptors.request.use((req) => {
  const headers = req.headers || {};
  if (!headers.Authorization) {
    headers.Authorization = "Bear Sunj";
  }
  return req;
});

service.interceptors.response.use((res) => {
  const { data: responseData, status } = res;
  const { code, data, msg } = responseData;
  if (code == 200) {
    return data;
  } else if (code === 40001) {
    message.error("token 验证出错");
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  } else {
    console.log("err");
    message.error("服务出错");
    return Promise.reject(msg || "网络请求异常请稍后重试");
  }
});

// 对service进行二次封装处理请求参数
function request(options) {
  const { method = "get" } = options;
  if (method.toLowerCase() == "get") {
    options.params = options.data;
  }

  // 不同环境模式切换不同请求地址
  if (config.env == "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return service(options);
}

interface request {
  get: (url: string, data?: ant, options?: any) => Promise<any>;
}

["get", "post", "patch", "delete", "put"].forEach((item) => {
  request[item] = (url: string, data = {}, options = {}) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    });
  };
});

export default request;
