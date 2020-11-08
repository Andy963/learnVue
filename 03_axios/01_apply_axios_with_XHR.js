/*
1.函数返回值为promise，成功的结果为:response 异常的结果为 error
2. 能处理多种类型的请求： GET/POST/PUT/DELETE
3.函数的参数为一个配置对象
{
    url:'', // 请求地址
    method:'', //请求方式Get/post/put/delete
    params:{}, // GET/DELETE 请求的query参数
    data:{}, // POST,DELETE 请求的请求体参数
}
4.响应json数据自动解析为js

 */

function axios({
                   url,
                   method = 'GET',
                   params = {},
                   data = {},

               }) {
    // 返回一个promise对象
    return new Promise((resolve, reject) => {
        // 处理method
        method = method.toUpperCase();
        // 执行异步ajax请求
        // 创建 xhr对象
        const request = new XMLHttpRequest();

        // 处理query 参数 拼接到url上 id=1&name=zhou
        /*
        {
          id:1,
          name:'zhou'
         }
         */
        let queryString = '';
        Object.keys(params).forEach(key => {
            queryString += `${key}=${params[key]}&`;
        })
        if (queryString) {
            // 去掉最后面的&
            queryString = queryString.substring(0, queryString.length - 1);
            // 接到url上
            url += "?" + queryString;
        }
        // 打开连接（初始化对象，没有请求)
        request.open(method, url, true)
        // 发送请求
        if (method === 'GET' || method === 'DELETE') {
            request.send();
        } else if (method === 'POST' || method === 'PUT') {
            request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            request.send(JSON.stringify({data})); // json 格式， 一旦发json格式数据要加请求头
        }
        request.onreadystatechange = function () {
            // 如果请求没有完成，直接结束
            if (request.readyState !== 4) {
                return
            }
            // 如果响应状态码在[200,300)之间代表成功，否则失败
            const {status, statusText} = request
            //2.1 如果成功了，调用resolve()
            if (status >= 200 && status <= 299) {
                // 准备结果数据对象response
                const response = {
                    data: JSON.parse(request.response),
                    status,
                    statusText
                }
                resolve(response)
            } else {
                // 2.2如果请求失败了，调用reject()
                reject(new Error('request error status is' + status));
            }
        }

    })

}

axios({
    url: '/xxxx',
})