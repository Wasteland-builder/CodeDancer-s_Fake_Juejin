<template>
  <!-- 文章主体部分 -->
  <div class="container">
    <post-body :acticleMessage="acticleMessage"></post-body>
  </div>
  <!-- 右侧工具栏部分 -->
  <div class="acticleList">
    <acticle-cata></acticle-cata>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
const msg = ref("hello world");
// 获取文章详细信息
import { useRoute } from "vue-router";
const route = useRoute();
let id = route.params.id;
import postBody from "../../components/post/postBody.vue";
let acticleMessage = ref({
  content: `
  # 标题 
  内容
  ## 标题2
  内容2
  # 标题3 
  内容3
  ## 标题4
  内容4
  # 标题5 
  内容5
  ## 标题6
  内容6
  # 标题 7
  内容7
  ## 标题8
  内容8
  # 标题9 
  内容9
  ## 标题10
  内容10
  # 标题11
  内容11
  ## 标题12
  内容12
  # 标题13
  内容13
  ## 标题14
  内容14`,
  title: "title",
  authorName: "qianyan",
  authorImg: "imgpath",
  authorId: "1",
  relesaeTime: "2022/8/9/22:33",
  view: 10086,
});

import acticleCata from "../../components/post/acticleCata.vue";
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1140px;
  position: relative;
  margin: 0 auto;
  /* background: #fff; */
  height: 0px;
}
.acticleList {
  width: 200px;
  position: fixed; /*设置固定在屏幕上*/
  right: 180px; /*固定的位置*/
  top: 80px;
  background: white;
  /* height: 400px; */
}
</style>  