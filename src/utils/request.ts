import config from "@/config";
import type { AxiosRequestConfig } from "axios";
const axiosConfig: AxiosRequestConfig = {
  baseURL: config.mockApi,
};

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
  if (status == 200) {
    return responseData;
  } else {
    console.log("err");
    throw new Error("服务出错");
    return responseData;
  }
});

export default service;
