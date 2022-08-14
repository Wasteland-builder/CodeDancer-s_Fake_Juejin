<template>
    <nav class="top-nav">
        <ul class="nav-list">
            <li v-for="(item, index) in navList" class="nav-item">
                <!-- <div class="box">{{item.text}}</div> -->
                <router-link :to="item.to">{{item.text}}</router-link>
            </li>
            <a href="https://juejin.cn/subscribe/subscribed" class="nav-list-right nav-item">标签管理</a>
        </ul>
    </nav>
      <router-view></router-view>
</template>

<script>
export default {
    name: 'TypeNav',
    setup() {
        const navList = [
            { text: '综合', to: '/recommended' },
            { text: '关注', to: '/following' },
            { text: '后端', to: '/backend' },
            { text: '前端', to: '/frontend' },
            { text: 'Android', to: '/android' },
            { text: 'iOS', to: '/ios' },
            { text: '人工智能', to: '/ai' },
            { text: '开发工具', to: '/freebie' },
            { text: '代码人生', to: '/career' },
            { text: '阅读', to: '/article' },
        ]

        return {
            navList
        }
    }
}
</script>

<style scoped>
.top-nav {
    left: 0;
    background-color: #fff;
    position: fixed;
    width: 100%;
    height: 3.833rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.2s;
    transform: translateZ(0);
    display: block;
    border-top: #f1f1f1 1px solid;
    color: #71777c;
}

.top-nav .nav-list {
    position: relative;
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
}

.top-nav .nav-list .nav-item {
    height: 100%;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    font-size: 1.16rem;
    position: relative;
    cursor: pointer;
    padding: 0 1rem;
}

.top-nav .nav-list .nav-item:hover {
    color: #007fff;
}

.top-nav .nav-list .nav-item .box {
    display: block;
}

.top-nav .nav-list .nav-item:first-child {
    padding: 0 1rem 0 0;
}

.top-nav .nav-list .nav-list-right {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 0 0 1rem;
    height: 100%;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    font-size: 1.16rem;
    cursor: pointer;
}
</style>