//不同请求不同使用方式：对象/函数
axios.defaults.baseURL = 'http://localhost:3000';


// GET请求
function testGet() {
    axios.get('http://localhost:3000/posts?id=1')
        .then(res => {
            console.log('/posts get', res.data);
        })
    // 函数的方式
    axios({
        url: '/posts',
        params: {
            id: 1
        }
    }).then(res => {
        console.log('/posts get', res.data);
    })
}

// POST请求
// 在axios中如果data为对象类型，axios默认发json格式
function testPost() {
    axios.post('http://localhost:3000/posts', {"name": "zhou"})
        .then(res => {
            console.log('/posts post', res.data);
        })
    // 函数的方式
    axios({
        method: 'POST',
        url: '/posts',
        data: {
            name: "zhou"
        }
    }).then(res => {
        console.log('/posts post', res.data);
    })
}

// PUT请求
// 在axios中如果data为对象类型，axios默认发json格式
function testPut() {
    axios.put('http://localhost:3000/posts/1', {"name": "zhou"})
        .then(res => {
            console.log('/posts put', res.data);
        })
    // 函数的方式
    axios({
        method: 'PUT',
        url: '/posts/1',
        data: {
            name: "zhou"
        }
    }).then(res => {
        console.log('/posts put', res.data);
    })
}

// DELETE请求
// 在axios中如果data为对象类型，axios默认发json格式
function testDelete() {
    axios.put('http://localhost:3000/posts/1')
        .then(res => {
            console.log('/posts delete', res.data);
        })
    // 函数的方式
    axios({
        method: 'DELETE',
        url: '/posts/1',

    }).then(res => {
        console.log('/posts delete', res.data);
    })
}