import requests from "./request";

// 获取文章列表
export const getArticalList = () => requests({url: '/31925473', method: 'get'})
