import axios from 'axios'

const requests = axios.create({
    baseURL: "https://mock.apifox.cn/m1/1363590-0-default",
    timeout: 5000
})

// 对外暴露
export default requests;