<template>
    <a class="download" href="https://juejin.cn/app?utm_source=jj_nav" target="_blank">
        <div class="left">
            <img src="../../assets/download.jpg" alt="" class="image">
        </div>
        <div class="right">
            <h3>下载稀土掘金App</h3>
            <p>一个帮助开发者成长的社区</p>
        </div>
    </a>
</template>

<script setup>

</script>

<style scoped lang="less">
.download {
    box-sizing: border-box;
    display: flex;
    padding: 1rem;
    width: 240px;
    height: 75px;
    cursor: pointer;
    background-color: white;

    .image {
        margin-right: 1rem;
    }

    .right {
        h3 {
            color: black;
            font-size: 14px;
        }

        p {
            margin-top: 15px;
            color: #71777c;
        }
    }
}
</style>