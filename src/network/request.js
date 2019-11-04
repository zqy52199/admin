import axios from 'axios'
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // 线上 https://vx.eaglesell.com.cn/
    // 线下 http://192.168.1.118:88
    baseURL: 'https://vx.eaglesell.com.cn/index.php',
    timeout: 5000
  })
  // 全局需要的token
  if(config.data) {
    config.data.token = localStorage.getItem('token');
  }

  instance.interceptors.request.use((config) => {
    if(config.method  === 'post'){
      config.data = JSON.stringify(config.data);
    }
    return config;
  },(error) =>{
    return Promise.reject(error);
  });

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
