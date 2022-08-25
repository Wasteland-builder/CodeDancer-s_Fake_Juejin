import requests from "./request";

// 获取文章列表
export const getArticalList = () => requests({url: '/31925473', method: 'get'})
export const login = () => requests({url: '/user/login', method: 'post'})
export const register = () => requests({url: '/user/register', method: 'post'})