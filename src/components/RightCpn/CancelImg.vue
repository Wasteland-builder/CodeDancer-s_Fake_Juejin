<template>
    <div class="content">
        <img src="./image.webp" alt="" class="image">
        <a class="exit">×</a>
        <a class="advertise" @mouseenter="changeText" @mouseleave="changeTextBack">广告</a>
    </div>
</template>

<script setup>
const changeText = (event) => {
    event.target.innerText = "投放广告"
}
const changeTextBack = (event) => {
    event.target.innerText = "广告"
}
</script>

<style scoped lang="less">
.content {
    margin: 20px 0;
    cursor: pointer;
    position: relative;

    .image {

        width: 240px;
        height: 200px;
    }

    .exit {
        position: absolute;
        right: 5px;
        top: 3px;
        font-size: 20px;
        color: #909090;
        opacity: 0;
    }

    .exit:hover {
        opacity: 1;
        transform: scale(1.5);
        // color: white;
    }

    .advertise {
        position: absolute;
        right: 10px;
        bottom: 10px;
        line-height: 36px;
        height: 36px;
        font-size: 20px;
        z-index: 1;
        transform: scale(.5);
        -webkit-transform: scale(.5);
        transform-origin: right bottom;
        -webkit-transform-origin: right bottom;
        color: #fff;
        background-color: rgba(0, 0, 0, .2);
        border: 1px solid #fff;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: 300;
    }

}
</style>