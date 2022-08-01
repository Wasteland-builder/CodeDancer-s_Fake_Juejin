<template>
    <nav class="top-nav">
        <div class="nav-list">
            <a href="https://juejin.cn/recommended" class="nav-item">
                <div class="box">综合</div>
            </a>
            <a href="https://juejin.cn/following" class="nav-item">
                <div class="box">关注</div>
            </a>
            <a href="https://juejin.cn/backend" class="nav-item">
                <div class="box">后端</div>
            </a>
            <a href="https://juejin.cn/frontend" class="nav-item">
                <div class="box">前端</div>
            </a>
            <a href="https://juejin.cn/android" class="nav-item">
                <div class="box">Android</div>
            </a>
            <a href="https://juejin.cn/ios" class="nav-item">
                <div class="box">iOS</div>
            </a>
            <a href="https://juejin.cn/ai" class="nav-item">
                <div class="box">人工智能</div>
            </a>
            <a href="https://juejin.cn/freebie" class="nav-item">
                <div class="box">开发工具</div>
            </a>
            <a href="https://juejin.cn/career" class="nav-item">
                <div class="box">代码人生</div>
            </a>
            <a href="https://juejin.cn/article" class="nav-item">
                <div class="box">阅读</div>
            </a>
            <a href="https://juejin.cn/subscribe/subscribed" class="nav-list-right nav-item">标签管理</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TypeNav'
}
</script>

<style scoped>
.top-nav {
    left: 0;
    background-color: #fff;
    position: fixed;
    top: 5rem;
    width: 100%;
    height: 3.833rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.2s;
    transform: translateZ(0);
    display: block;
    border-top: #f1f1f1 1px solid;
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
    color: #71777c;
    cursor: pointer;
}
</style>