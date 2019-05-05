import axios from 'axios';
import { Toast } from 'antd-mobile';

function dealEnvironmentUrl(env) {
    let baseURL = '';
    switch (env) {
        case 'production':
            baseURL = 'production url';
            break;
        case 'test':
            baseURL = 'test url';
            break;
        default:
            baseURL = 'dev url';
            break;
    }
    return baseURL;
}

let service = axios.create({
    baseURL: dealEnvironmentUrl(process.env.NODE_ENV),
    timeout: 5000
});

//添加响应拦截器
service.interceptors.response.use(function (response) {
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
     */
    // response => {
    //   const res = response.data
    //   if (res.code !== 20000) {
    //     })
    //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //       }).then(() => {
    //         })
    //       })
    //     }
    //     return Promise.reject('error')
    //   } else {
    //     return response.data
    //   }
    // },
    return response
}, function (error) {
    console.log('err' + error)
    Toast.info(error.message, 2, null, false);
    return Promise.reject(error)
})