import axios from 'axios'
import qs from 'qs'
var hosturl = '';   //接口地址

axios.interceptors.request.use(function (d) {    // 在发送请求之前做些什么 
    return d;
}, function (error) {    // 对请求错误做些什么    
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {    // 对响应数据做点什么（请求响应后）
    return response;
}, function (error) {    // 对响应错误做点什么 
    return Promise.reject(error);
});

export const axiosget = function (url: string, data: any) {//axios get请求
    var header = {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    //请求的配置的对象参数
    var axiosObj:any = {
        method: 'get',
        url: hosturl + url,
        timeout: 30000,
        headers: header,
        params: data
    }

    return axios(axiosObj)
}
export const axiospost = function (url: string, data: any) {//post请求
    var header = {
        'Content-Type': 'application/json;charset=UTF-8',
    }
    //请求的配置的对象参数
    var axiosObj:any = {
        method: 'post',
        url: hosturl + url,
        timeout: 30000,
        headers: header,
        data: data
    }
    return axios(axiosObj)
}
export const axiosformpost = (url: string, data:any) => {//post key value
    var header = {
        'Content-Type': 'multipart/form-data'
    }
    //请求的配置的对象参数
    var axiosObj:any= {
        method: 'post',
        url: hosturl + url,
        timeout: 30000,
        headers: header,
        data: data
    }
    return axios(axiosObj)
}