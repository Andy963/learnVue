axios.defaults.baseURL = 'http://localhost:3000';


// 添加请求拦截器
axios.interceptors.request.user((config) => {
    // 在准备发送新的请求前，取消未完成的请求
    if (typeof cancel === 'function') {
        cancel('取消请求')
    }
    // 添加一个cancelToken的配置
    config.cancelToken = new axios.CancelToken((f) => { // f是用于取消当前请求的函数
        // 保存取消函数，用于之后可能需要取消当前请求
        cancel = f;
    })
    return config
})

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        cancel = null; //如果成功了清空函数，无法取消
        return response;
    },
    error => {
        if (axios.isCancel(error)) {
            // 如果是取消请求的错误，不能将cancel置空，否则后续的取消将无法执行
            console.log("请求取消的错误", error.message);
            return new Promise(() => {
            })
        } else {
            console.log(error)
            cancel = null; //如果失败了也清空，无法取消
            // 将错误向下传递
            // 一旦取消请求，request即失败了
            // throw error;
            return Promise.reject(error);

        }
    })

function getProducts1() {
    axios({
        url: '/products1'
    }).then(
        response => {
            console.log('请求1成功', response.data);
        }
    )
}

let cancel = '';// 用于保存取消请求的函数
function getProducts2() {
    axios({
        url: '/products2',
    }).then(
        response => {
            console.log('请求2成功', response.data);
        },
        error => {
            // 只处理请求失败的情况，取消请求的错误不用处理
            console.log(error)
        }
    )
}

function cancelReq() {
    // 执行取消请求的函数
    if (typeof cancel === 'function') {
        cancel('强制取消请求');
    } else {
        console.log('没有可取消的请求');
    }
}