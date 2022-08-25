import axios from 'axios'

const requests = axios.create({
    baseURL: "http://81.68.212.237",
    timeout: 5000
})

// 对外暴露
export default requests;