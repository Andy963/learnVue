// 添加请求拦截器
// 请求拦截器后添加，先执行
// 请求拦截器必须返回 config,向下传递
axios.interceptors.request.use(
    config => {
        console.log('request  interceptors1 onResolved()');
        return config;
    },
    error => {
        console.log('request interceptors1 onRejected()');
        return config
    }
)

axios.interceptors.request.use(
    config => {
        console.log('request  interceptors2 onResolved()');
        return config;
    },
    error => {
        console.log('request interceptors2 onRejected()');
        return config
    }
)

// 添加响应拦截器
// 响应拦截器先添加先执行
// 响应拦截器必须返回response
axios.interceptors.response.use(
    response => {
        console.log('response interceptors1 onResolved()');
        return response
    },
    function (error) {
        console.log('response interceptors1 onRejected()')
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        console.log('response interceptors2 onResolved()');
        return response
    },
    function (error) {
        console.log('response interceptors2 onRejected()')
        return Promise.reject(error);
    }
)

axios.get('http://localhost:3000/posts')
    .then(res => {
        console.log('data', res.data);
    })
    .catch(err => {
        console.log('err', err.msg);
    })