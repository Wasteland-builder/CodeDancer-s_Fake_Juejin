<template>
  <div class="container">
    <div class="top">
      <div>{{author}}</div>
      <div>{{publishTime}}</div>
      <div v-for="(label, index) in labels" :key="'label-'+index">{{label}}</div>
    </div>
    <div class="center">
      <div class="left">
        <h3>{{title}}</h3>
        <p>{{article}}</p>
      </div>
      <div class="right">
        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d40d10a576004074b6dbde5c5ec0b1b3~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?" alt="">
      </div>
    </div>
    <div class="bottom">
      
    </div>
  </div>
</template>

<script setup>
const author = "嗨慢走"
const publishTime = "2天前"
const labels = ['前端', '性能优化']
const title = "Web性能优化常见技巧"
const article = "Web性能优化常见技巧 javascript在浏览器中运行的性能，可以认为是开发者所面临的最严重的可用性问题。"
const views = "457"
const likes = "4"
const commentsNum = 1
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
  }
  .center {
    display: flex;
  }
}
</style>