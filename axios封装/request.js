import axios from 'axios'

// 创建axios实例化
const request = axios.create({
    // baseURL:'http://122.112.203.138:5000',
    baseURL:'http://127.0.0.1:5000',
    timeout:5000
})
// 请求拦截
request.interceptors.request.use(config=>{
    return config
},err=>{
    console.log('err')
})
// 响应拦截
request.interceptors.response.use(res=>{
    return res.data
},err=>{
    console.log('err')
})


export default request



// 使用方法
// get请求
request.get("/user?id=123&passwd=456").then(res=>{})
// post请求,其中data需要为json格式
request.post("/",data).then(res=>{}）
