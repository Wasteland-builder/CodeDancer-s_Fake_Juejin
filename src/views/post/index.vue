<template>
  <div class="container">
    <post-body :acticleMessage="acticleMessage"></post-body>
  </div>
</template>

<script setup>
import { ref } from "vue";
const msg = ref("hello world");
// 获取文章详细信息
import { useRoute } from "vue-router";
const route = useRoute();
let id = route.params.id;
import postBody from "../../components/post/postBody.vue";
let acticleMessage = ref({
  content: "content",
  title: "title",
  authorName: "qianyan",
  authorImg: "imgpath",
  authorId: "1",
  relesaeTime: "2022/8/9/22:33",
  view: 10086
});
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1140px;
  position: relative;
  margin: 0 auto;
  /* background: #fff; */
  height: 600px;
}
</style>  