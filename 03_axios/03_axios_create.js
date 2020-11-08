/*
axios.create(config)
1. 根据指定配置创建一个axios
2.新axios没有取消请求和批量发送请求的方法，其它所有语法都一样
3.设计是为了部分接口有不同配置考虑
 */

axios.defaults.baseURL = 'http://localhost:3000'
//使用axios发请求
axios({
    url: '/posts', //默认的3000端口
})
// 如果有另一个请求需要请求4000端口

const instance = axios.create({
    baseURL: 'http://localhost:4000'
})

// instance({
//     url: '/comments/1'
// })
instance.get('/comments/1') // 从端口4000获取请求

/*
为了区分不同配置，而不用每个请求都指定配置
上面的axios 可以指定一些通用的配置
而instance 又指定另一套配置
 */